
[<img width="200" alt="get in touch with Consensys Diligence" src="https://user-images.githubusercontent.com/2865694/56826101-91dcf380-685b-11e9-937c-af49c2510aa0.png">](https://consensys.io/diligence)<br/>
<sup>
[[  🌐  ](https://consensys.io/diligence)  [  📩  ](mailto:diligence@consensys.net)  [  🔥  ](https://consensys.io/diligence/tools/)]
</sup><br/><br/>



# Solidity Metrics for metricsContainerName

## Table of contents

- [Scope](#t-scope)
    - [Source Units in Scope](#t-source-Units-in-Scope)
        - [Deployable Logic Contracts](#t-deployable-contracts)
    - [Out of Scope](#t-out-of-scope)
        - [Excluded Source Units](#t-out-of-scope-excluded-source-units)
        - [Duplicate Source Units](#t-out-of-scope-duplicate-source-units)
        - [Doppelganger Contracts](#t-out-of-scope-doppelganger-contracts)
- [Report Overview](#t-report)
    - [Risk Summary](#t-risk)
    - [Source Lines](#t-source-lines)
    - [Inline Documentation](#t-inline-documentation)
    - [Components](#t-components)
    - [Exposed Functions](#t-exposed-functions)
    - [StateVariables](#t-statevariables)
    - [Capabilities](#t-capabilities)
    - [Dependencies](#t-package-imports)
    - [Totals](#t-totals)

## <span id=t-scope>Scope</span>

This section lists files that are in scope for the metrics report. 

- **Project:** `metricsContainerName`
- **Included Files:** 
    - ``
- **Excluded Paths:** 
    - ``
- **File Limit:** `undefined`
    - **Exclude File list Limit:** `undefined`

- **Workspace Repository:** `unknown` (`undefined`@`undefined`)

### <span id=t-source-Units-in-Scope>Source Units in Scope</span>

Source Units Analyzed: **`3`**<br>
Source Units in Scope: **`3`** (**100%**)

| Type | File   | Logic Contracts | Interfaces | Lines | nLines | nSLOC | Comment Lines | Complex. Score | Capabilities |
| ---- | ------ | --------------- | ---------- | ----- | ------ | ----- | ------------- | -------------- | ------------ | 
| 📝 | /Users/jaskaransingh/projects/AuditFi-AI/contracts/src/CookieJar.sol | 1 | **** | 647 | 596 | 416 | 123 | 355 | **<abbr title='Payable Functions'>💰</abbr><abbr title='Initiates ETH Value Transfer'>📤</abbr><abbr title='Uses Hash-Functions'>🧮</abbr>** |
| 📝 | /Users/jaskaransingh/projects/AuditFi-AI/contracts/src/CookieJarFactory.sol | 1 | **** | 232 | 214 | 132 | 63 | 98 | **<abbr title='Uses Hash-Functions'>🧮</abbr><abbr title='create/create2'>🌀</abbr>** |
| 📝 | /Users/jaskaransingh/projects/AuditFi-AI/contracts/src/CookieJarRegistry.sol | 1 | **** | 140 | 135 | 86 | 33 | 48 | **** |
| 📝 | **Totals** | **3** | **** | **1019**  | **945** | **634** | **219** | **501** | **<abbr title='Payable Functions'>💰</abbr><abbr title='Initiates ETH Value Transfer'>📤</abbr><abbr title='Uses Hash-Functions'>🧮</abbr><abbr title='create/create2'>🌀</abbr>** |

<sub>
Legend: <a onclick="toggleVisibility('table-legend', this)">[➕]</a>
<div id="table-legend" style="display:none">

<ul>
<li> <b>Lines</b>: total lines of the source unit </li>
<li> <b>nLines</b>: normalized lines of the source unit (e.g. normalizes functions spanning multiple lines) </li>
<li> <b>nSLOC</b>: normalized source lines of code (only source-code lines; no comments, no blank lines) </li>
<li> <b>Comment Lines</b>: lines containing single or block comments </li>
<li> <b>Complexity Score</b>: a custom complexity score derived from code statements that are known to introduce code complexity (branches, loops, calls, external interfaces, ...) </li>
</ul>

</div>
</sub>


##### <span id=t-deployable-contracts>Deployable Logic Contracts</span>
Total: 3
* 📝 `CookieJar`
* 📝 `CookieJarFactory`
* 📝 `CookieJarRegistry`



#### <span id=t-out-of-scope>Out of Scope</span>

##### <span id=t-out-of-scope-excluded-source-units>Excluded Source Units</span>

Source Units Excluded: **`0`**

<a onclick="toggleVisibility('excluded-files', this)">[➕]</a>
<div id="excluded-files" style="display:none">
| File   |
| ------ |
| None |

</div>


##### <span id=t-out-of-scope-duplicate-source-units>Duplicate Source Units</span>

Duplicate Source Units Excluded: **`0`** 

<a onclick="toggleVisibility('duplicate-files', this)">[➕]</a>
<div id="duplicate-files" style="display:none">
| File   |
| ------ |
| None |

</div>

##### <span id=t-out-of-scope-doppelganger-contracts>Doppelganger Contracts</span>

Doppelganger Contracts: **`0`** 

<a onclick="toggleVisibility('doppelganger-contracts', this)">[➕]</a>
<div id="doppelganger-contracts" style="display:none">
| File   | Contract | Doppelganger | 
| ------ | -------- | ------------ |


</div>


## <span id=t-report>Report</span>

### Overview

The analysis finished with **`0`** errors and **`0`** duplicate files.





#### <span id=t-risk>Risk</span>

<div class="wrapper" style="max-width: 512px; margin: auto">
			<canvas id="chart-risk-summary"></canvas>
</div>

#### <span id=t-source-lines>Source Lines (sloc vs. nsloc)</span>

<div class="wrapper" style="max-width: 512px; margin: auto">
    <canvas id="chart-nsloc-total"></canvas>
</div>

#### <span id=t-inline-documentation>Inline Documentation</span>

- **Comment-to-Source Ratio:** On average there are`3.23` code lines per comment (lower=better).
- **ToDo's:** `0` 

#### <span id=t-components>Components</span>

| 📝Contracts   | 📚Libraries | 🔍Interfaces | 🎨Abstract |
| ------------- | ----------- | ------------ | ---------- |
| 3 | 0  | 0  | 0 |

#### <span id=t-exposed-functions>Exposed Functions</span>

This section lists functions that are explicitly declared public or payable. Please note that getter methods for public stateVars are not included.  

| 🌐Public   | 💰Payable |
| ---------- | --------- |
| 29 | 3  | 

| External   | Internal | Private | Pure | View |
| ---------- | -------- | ------- | ---- | ---- |
| 26 | 27  | 0 | 0 | 6 |

#### <span id=t-statevariables>StateVariables</span>

| Total      | 🌐Public  |
| ---------- | --------- |
| 32  | 31 |

#### <span id=t-capabilities>Capabilities</span>

| Solidity Versions observed | 🧪 Experimental Features | 💰 Can Receive Funds | 🖥 Uses Assembly | 💣 Has Destroyable Contracts | 
| -------------------------- | ------------------------ | -------------------- | ---------------- | ---------------------------- |
| `^0.8.24` |  | `yes` | **** | **** | 

| 📤 Transfers ETH | ⚡ Low-Level Calls | 👥 DelegateCall | 🧮 Uses Hash Functions | 🔖 ECRecover | 🌀 New/Create/Create2 |
| ---------------- | ----------------- | --------------- | ---------------------- | ------------ | --------------------- |
| `yes` | **** | **** | `yes` | **** | `yes`<br>→ `NewContract:CookieJar` | 

| ♻️ TryCatch | Σ Unchecked |
| ---------- | ----------- |
| **** | **** |

#### <span id=t-package-imports>Dependencies / External Imports</span>

| Dependency / Import Path | Count  | 
| ------------------------ | ------ |
| @openzeppelin/contracts/access/AccessControl.sol | 2 |
| @openzeppelin/contracts/token/ERC1155/IERC1155.sol | 1 |
| @openzeppelin/contracts/token/ERC20/ERC20.sol | 1 |
| @openzeppelin/contracts/token/ERC20/IERC20.sol | 1 |
| @openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol | 1 |
| @openzeppelin/contracts/token/ERC721/IERC721.sol | 1 |

#### <span id=t-totals>Totals</span>

##### Summary

<div class="wrapper" style="max-width: 90%; margin: auto">
    <canvas id="chart-num-bar"></canvas>
</div>

##### AST Node Statistics

###### Function Calls

<div class="wrapper" style="max-width: 90%; margin: auto">
    <canvas id="chart-num-bar-ast-funccalls"></canvas>
</div>

###### Assembly Calls

<div class="wrapper" style="max-width: 90%; margin: auto">
    <canvas id="chart-num-bar-ast-asmcalls"></canvas>
</div>

###### AST Total

<div class="wrapper" style="max-width: 90%; margin: auto">
    <canvas id="chart-num-bar-ast"></canvas>
</div>

##### Inheritance Graph

<a onclick="toggleVisibility('surya-inherit', this)">[➕]</a>
<div id="surya-inherit" style="display:none">
<div class="wrapper" style="max-width: 512px; margin: auto">
    <div id="surya-inheritance" style="text-align: center;"></div> 
</div>
</div>

##### CallGraph

<a onclick="toggleVisibility('surya-call', this)">[➕]</a>
<div id="surya-call" style="display:none">
<div class="wrapper" style="max-width: 512px; margin: auto">
    <div id="surya-callgraph" style="text-align: center;"></div>
</div>
</div>

###### Contract Summary

<a onclick="toggleVisibility('surya-mdreport', this)">[➕]</a>
<div id="surya-mdreport" style="display:none">
 

 Files Description Table


|  File Name  |  SHA-1 Hash  |
|-------------|--------------|
| /Users/jaskaransingh/projects/AuditFi-AI/contracts/src/CookieJar.sol | 40f273399fbf4a55e1d4b927e50bf8d4687f2785 |
| /Users/jaskaransingh/projects/AuditFi-AI/contracts/src/CookieJarFactory.sol | b0dccca348d6c910be14a00dbf3a53c878273f14 |
| /Users/jaskaransingh/projects/AuditFi-AI/contracts/src/CookieJarRegistry.sol | 84e3f8c268a6a4dd280b5abcb9328105376abc07 |


 Contracts Description Table


|  Contract  |         Type        |       Bases      |                  |                 |
|:----------:|:-------------------:|:----------------:|:----------------:|:---------------:|
|     └      |  **Function Name**  |  **Visibility**  |  **Mutability**  |  **Modifiers**  |
||||||
| **CookieJar** | Implementation | AccessControl |||
| └ | <Constructor> | Public ❗️ | 🛑  |NO❗️ |
| └ | grantJarWhitelistRole | External ❗️ | 🛑  | onlyJarOwner |
| └ | revokeJarWhitelistRole | External ❗️ | 🛑  | onlyJarOwner |
| └ | grantJarBlacklistRole | External ❗️ | 🛑  | onlyJarOwner |
| └ | revokeJarBlacklistRole | External ❗️ | 🛑  | onlyJarOwner |
| └ | updateFeeCollector | External ❗️ | 🛑  |NO❗️ |
| └ | addNFTGate | External ❗️ | 🛑  | onlyJarOwner |
| └ | removeNFTGate | External ❗️ | 🛑  | onlyJarOwner |
| └ | transferJarOwnership | External ❗️ | 🛑  | onlyJarOwner |
| └ | depositETH | Public ❗️ |  💵 | onlySupportedCurrency |
| └ | depositCurrency | Public ❗️ | 🛑  |NO❗️ |
| └ | _calculateAndTransferFeeToCollector | Internal 🔒 | 🛑  | |
| └ | _checkAccessNFT | Internal 🔒 |   | onlyNotJarBlacklisted |
| └ | withdrawWhitelistMode | External ❗️ | 🛑  | onlyNotJarBlacklisted onlyJarWhiteListed |
| └ | withdrawNFTMode | External ❗️ | 🛑  | onlyNotJarBlacklisted |
| └ | emergencyWithdrawWithoutState | External ❗️ | 🛑  | onlyJarOwner |
| └ | emergencyWithdrawCurrencyWithState | External ❗️ | 🛑  | onlyJarOwner |
| └ | getNFTGatesArray | External ❗️ |   |NO❗️ |
| └ | getWithdrawalDataArray | External ❗️ |   |NO❗️ |
| └ | <Fallback> | External ❗️ |  💵 |NO❗️ |
| └ | <Receive Ether> | External ❗️ |  💵 |NO❗️ |
||||||
| **CookieJarFactory** | Implementation | AccessControl |||
| └ | <Constructor> | Public ❗️ | 🛑  |NO❗️ |
| └ | grantBlacklistedJarCreatorsRole | External ❗️ | 🛑  | onlyRole |
| └ | revokeBlacklistedJarCreatorsRole | External ❗️ | 🛑  | onlyRole |
| └ | grantProtocolAdminRole | External ❗️ | 🛑  | onlyRole |
| └ | revokeProtocolAdminRole | External ❗️ | 🛑  | onlyRole |
| └ | transferOwnership | Public ❗️ | 🛑  | onlyRole |
| └ | createCookieJar | External ❗️ | 🛑  | onlyNotBlacklisted |
||||||
| **CookieJarRegistry** | Implementation |  |||
| └ | <Constructor> | Public ❗️ | 🛑  |NO❗️ |
| └ | setCookieJarFactory | External ❗️ | 🛑  |NO❗️ |
| └ | registerAndStoreCookieJar | External ❗️ | 🛑  | onlyCookieJarFactory |
| └ | getRegisteredCookieJarsCount | External ❗️ |   |NO❗️ |
| └ | getAllJars | External ❗️ |   |NO❗️ |
| └ | getJarByCreatorAddress | External ❗️ |   |NO❗️ |


 Legend

|  Symbol  |  Meaning  |
|:--------:|-----------|
|    🛑    | Function can modify state |
|    💵    | Function is payable |
 

</div>
____
<sub>
Thinking about smart contract security? We can provide training, ongoing advice, and smart contract auditing. [Contact us](https://consensys.io/diligence/contact/).
</sub>

