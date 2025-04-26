// @ts-ignore
import { SolidityMetricsContainer } from "solidity-code-metrics";
import fs from 'fs';
import path from 'path';

export default async function generateMetrics(contractsPath: string) {
  let options = {
    basePath: "",
    inputFileGlobExclusions: undefined,
    inputFileGlob: undefined,
    inputFileGlobLimit: undefined,
    debug: false,
    repoInfo: {
      branch: undefined,
      commit: undefined,
      remote: undefined,
    },
  };

  let metrics = new SolidityMetricsContainer("metricsContainerName", options);

  // Check if contractsPath is a directory
  const stats = fs.statSync(contractsPath);
  if (stats.isDirectory()) {
    // Get all .sol files in the directory
    const files = fs.readdirSync(contractsPath)
      .filter(file => file.endsWith('.sol'))
      .map(file => path.join(contractsPath, file));

    // Analyze each Solidity file
    for (const file of files) {
      metrics.analyze(file);
    }
  } else {
    // Single file analysis
    metrics.analyze(contractsPath);
  }

  // Generate report
  console.log(metrics.totals());
  let text = await metrics.generateReportMarkdown();
  console.log(text);
  return text;
}
