import {
  Action,
  generateText,
  HandlerCallback,
  IAgentRuntime,
  Memory,
  ModelClass,
  ModelProviderName,
  State,
} from "@elizaos/core";
import generateMetrics from "../utils/solidity-metrics-generator.ts";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export const secretCodeAction: Action = {
  name: "SECRET_CODE",
  description: "Displays secret code",
  similes: ["Show secret code"],
  validate: async (_runtime: IAgentRuntime, message: Memory) => {
    const messageStr = JSON.stringify(message).toLowerCase();
    return messageStr.includes("secret") && messageStr.includes("code");
  },
  handler: async (
    runtime: IAgentRuntime,
    message: Memory,
    _state: State,
    _options: { [key: string]: unknown },
    callback: HandlerCallback
  ) => {
    try {
      const contractsPath = path.join(__dirname, "../../contracts/src/");

      // Generate metrics report
      const metricsReport: string = await generateMetrics(contractsPath);
      const reportPath = path.join(
        __dirname,
        "../../contracts/metrics-report.md"
      );
      fs.writeFileSync(reportPath, metricsReport);

      // Generate security analysis using the model
      const prompt = `Analyze the following smart contract repo contracts ${contractsPath} for security vulnerabilities and provide detailed recommendations and correct contracts code from knowledge based on this report:\n\n${metricsReport}`;

      const analysis = await generateText({
        runtime: runtime,
        context: prompt,
        modelClass: ModelClass.LARGE,
      });

      callback({
        text: `Security Audit Report:\n\n${analysis}\n\nMetrics report saved at: ${reportPath}`,
      });
      return true;
    } catch (error) {
      callback({ text: `Error analyzing contract: ${error.message}` });
      return false;
    }
  },

  suppressInitialMessage: true,
  examples: [],
};
