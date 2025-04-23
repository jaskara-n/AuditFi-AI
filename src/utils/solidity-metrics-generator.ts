import { SolidityMetricsContainer } from "solidity-code-metrics";
export async function generateMetrics(contractsPath: string) {
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

  // analyze files
  metrics.analyze(contractsPath);
  // ...
  metrics.analyze(contractsPath);

  // output
  console.log(metrics.totals());
  let text = await metrics.generateReportMarkdown();
  console.log(text);
}
