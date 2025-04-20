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

export const securityAuditContractAction: Action = {
  name: "AUDIT_CONTRACT",
  description:
    "Analyzes smart contract code for security vulnerabilities and provides recommendations",
  similes: [
    "Audit this contract",
    "Check contract security",
    "Review smart contract",
  ],
  validate: async (_runtime: IAgentRuntime, message: Memory) => {
    const messageStr = JSON.stringify(message).toLowerCase();
    return (
      messageStr.includes("audit") ||
      messageStr.includes("check") ||
      messageStr.includes("review")
    );
  },
  handler: async (
    runtime: IAgentRuntime,
    message: Memory,
    _state: State,
    _options: { [key: string]: unknown },
    callback: HandlerCallback
  ) => {
    try {
      const messageStr = JSON.stringify(message);

      // Extract contract code from the message
      const codeMatch = messageStr.match(/```[\s\S]*?(contract[\s\S]*?)```/i);
      if (!codeMatch) {
        callback({
          text: "Please provide the smart contract code enclosed in code blocks (```).",
        });
        return false;
      }

      const contractCode = codeMatch[1];

      // Generate security analysis using the model
      const prompt = `Analyze the following smart contract code for security vulnerabilities and provide detailed recommendations and correct contract code from knowledge:

${contractCode}
`;

      const analysis = await generateText({
        runtime: runtime,
        context: prompt,
        modelClass: ModelClass.LARGE,
      });

      callback({
        text: `Security Audit Report:\n\n${analysis}\n\n`,
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
