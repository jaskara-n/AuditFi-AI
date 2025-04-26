[2025-04-26 11:29:06] INFO: Executing handler for action: SECRET_CODE
{
totals: Metric {
ast: {
SourceUnit: 3,
PragmaDirective: 3,
'Pragma:solidity:^0.8.24': 3,
ImportDirective: 12,
'ImportDirective:Path:@openzeppelin/contracts/token/ERC20/IERC20.sol': 1,
StringLiteral: 23,
'ImportDirective:Path:@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol': 1,
'ImportDirective:Path:@openzeppelin/contracts/token/ERC721/IERC721.sol': 1,
'ImportDirective:Path:@openzeppelin/contracts/token/ERC1155/IERC1155.sol': 1,
'ImportDirective:Path:@openzeppelin/contracts/access/AccessControl.sol': 2,
Identifier: 898,
ContractDefinition: 3,
'ContractDefinition:Contract': 3,
'ContractDefinition:BaseContracts': 2,
'ContractDefinition:LogicContractNames': [Array],
'ContractDefinition:BaseContractNames': [Array],
InheritanceSpecifier: 2,
UserDefinedTypeName: 33,
'UserDefinedTypeName:AccessControl': 2,
UsingForDeclaration: 2,
'UserDefinedTypeName:IERC20': 1,
StateVariableDeclaration: 32,
VariableDeclaration: 171,
'StateVariableDeclaration:Public': 31,
ArrayTypeName: 18,
'UserDefinedTypeName:CookieJarLib.NFTGate': 7,
'UserDefinedTypeName:CookieJarLib.WithdrawalData': 4,
'StateVariableDeclaration:Private': 1,
Mapping: 5,
ElementaryTypeName: 151,
'UserDefinedTypeName:CookieJarLib.AccessType': 4,
'UserDefinedTypeName:CookieJarLib.WithdrawalTypeOptions': 4,
FunctionDefinition: 34,
'FunctionDefinition:Internal': 27,
'FunctionDefinition:Default': 3,
'VariableDeclaration:Memory': 13,
Block: 100,
IfStatement: 89,
BinaryOperation: 139,
FunctionCall: 235,
'FunctionCall:Type:Regular': 65,
'FunctionCall:Name:address': 34,
NumberLiteral: 46,
RevertStatement: 74,
'FunctionCall:Type:MemberAccess': 104,
'FunctionCall:Name:AdminCannotBeZeroAddress': 2,
MemberAccess: 257,
'FunctionCall:Name:FeeCollectorAddressCannotBeZeroAddress': 3,
ExpressionStatement: 86,
'FunctionCall:Name:NoNFTAddressesProvided': 1,
'FunctionCall:Name:NFTArrayLengthMismatch': 1,
'FunctionCall:Name:MaxNFTGatesReached': 2,
ForStatement: 8,
VariableDeclarationStatement: 30,
UnaryOperation: 19,
IndexAccess: 31,
'FunctionCall:Name:InvalidNFTType': 2,
'FunctionCall:Name:InvalidNFTGate': 4,
'FunctionCall:Name:DuplicateNFTGate': 2,
'FunctionCall:Name:NFTGate': 2,
'FunctionCall:Name:NFTType': 2,
'FunctionCall:Name:\_setRoleAdmin': 4,
'FunctionCall:Name:\_grantRole': 9,
ModifierDefinition: 7,
'FunctionCall:Name:hasRole': 7,
'FunctionCall:Name:NotAdmin': 1,
'FunctionCall:Name:InvalidTokenAddress': 1,
'FunctionCall:Name:Blacklisted': 1,
'FunctionCall:Name:NotAuthorized': 3,
'FunctionDefinition:External': 26,
'VariableDeclaration:Calldata': 11,
'FunctionCall:Name:InvalidAccessType': 6,
EmitStatement: 26,
'FunctionCall:Name:WhitelistUpdated': 2,
BooleanLiteral: 16,
ModifierInvocation: 21,
'FunctionCall:Name:\_revokeRole': 6,
'FunctionCall:Name:BlacklistUpdated': 2,
'FunctionCall:Name:NotFeeCollector': 1,
'FunctionCall:Name:FeeCollectorUpdated': 1,
'FunctionCall:Name:NFTGateAdded': 1,
'FunctionCall:Name:type': 2,
BreakStatement: 1,
'FunctionCall:Name:NFTGateNotFound': 1,
'FunctionCall:Name:NFTGateRemoved': 1,
'FunctionCall:Name:AdminUpdated': 1,
'FunctionDefinition:Payable': 3,
'FunctionDefinition:Public': 3,
'FunctionCall:Name:LessThanMinimumDeposit': 2,
'FunctionCall:Name:\_calculateAndTransferFeeToCollector': 2,
'FunctionCall:Name:Deposit': 2,
'FunctionCall:Type:ContractTypecast': 12,
'FunctionCall:Name:allowance': 1,
'FunctionCall:Name:CookieJar**CurrencyNotApproved': 1,
'FunctionCall:Name:safeTransferFrom': 1,
TupleExpression: 1,
NameValueExpression: 5,
'FunctionCall:Name:payable': 1,
NameValueList: 5,
'FunctionCall:Name:FeeTransferFailed': 4,
'FunctionCall:Name:transfer': 1,
'FunctionDefinition:View': 6,
'FunctionCall:Name:ownerOf': 1,
'FunctionCall:Name:balanceOf': 3,
'FunctionCall:Name:ZeroWithdrawal': 4,
'FunctionCall:Name:InvalidPurpose': 2,
'FunctionCall:Name:CookieJar**WithdrawalAlreadyDone': 2,
'FunctionCall:Name:WithdrawalTooSoon': 2,
'FunctionCall:Name:WithdrawalAmountNotAllowed': 4,
'FunctionCall:Name:InsufficientBalance': 10,
'FunctionCall:Name:Withdrawal': 4,
'FunctionCall:Name:safeTransfer': 4,
'FunctionCall:Name:WithdrawalData': 2,
'FunctionCall:Name:\_checkAccessNFT': 1,
'FunctionCall:Type:BuiltIn': 7,
'FunctionCall:Name:keccak256': 7,
'FunctionCall:Name:encodePacked': 1,
'FunctionCall:Name:EmergencyWithdrawalDisabled': 2,
'FunctionCall:Name:EmergencyWithdrawal': 4,
ReturnStatement: 6,
'ImportDirective:Path:@openzeppelin/contracts/token/ERC20/ERC20.sol': 1,
'StateVariableDeclaration:Const': 3,
'UserDefinedTypeName:CookieJarRegistry': 1,
CustomErrorDefinition: 14,
EventDefinition: 8,
'VariableDeclaration:Indexed': 7,
'FunctionCall:Name:decimals': 1,
'UserDefinedTypeName:CookieJar': 4,
'NewContract:CookieJar': 1,
NewExpression: 1,
'FunctionCall:Name:registerAndStoreCookieJar': 1,
'UserDefinedTypeName:CookieJarFactory': 1,
StructDefinition: 1,
'UserDefinedTypeName:CookieJarInfo': 5,
'FunctionCall:Name:OWNER': 1,
'FunctionCall:Name:currency': 1,
'FunctionCall:Name:jarOwner': 2,
'FunctionCall:Name:accessType': 1,
'FunctionCall:Name:getNFTGatesArray': 1,
'FunctionCall:Name:withdrawalOption': 1,
'FunctionCall:Name:fixedAmount': 1,
'FunctionCall:Name:maxWithdrawal': 1,
'FunctionCall:Name:withdrawalInterval': 1,
'FunctionCall:Name:strictPurpose': 1,
'FunctionCall:Name:emergencyWithdrawalEnabled': 1,
'FunctionCall:Name:oneTimeWithdrawal': 1
},
sloc: {
total: 1019,
source: 708,
comment: 219,
single: 64,
block: 155,
mixed: 3,
empty: 95,
todo: 0,
blockEmpty: 0,
commentToSourceRatio: 0.3093220338983051
},
nsloc: {
total: 945,
source: 634,
comment: 219,
single: 64,
block: 155,
mixed: 3,
empty: 95,
todo: 0,
blockEmpty: 0,
commentToSourceRatio: 0.34542586750788645
},
complexity: { cyclomatic: undefined, perceivedNaiveScore: 501 },
summary: {
perceivedComplexity: 5,
size: 2,
numLogicContracts: 1,
numFiles: 1,
inheritance: undefined,
callgraph: undefined,
cyclomatic: undefined,
interfaceRisk: 4,
inlineDocumentation: 1,
compilerFeatures: 2,
compilerVersion: 1
},
num: {
astStatements: 3139,
contractDefinitions: 3,
contracts: 3,
libraries: 0,
interfaces: 0,
abstract: 0,
imports: 12,
functionsPublic: 29,
functionsPayable: 3,
assemblyBlocks: 0,
stateVars: 32,
stateVarsPublic: 31
},
capabilities: {
solidityVersions: [Array],
assembly: false,
experimental: [],
canReceiveFunds: true,
destroyable: false,
explicitValueTransfer: 1,
lowLevelCall: false,
hashFuncs: true,
ecrecover: false,
deploysContract: true,
uncheckedBlocks: false,
tryCatchBlocks: false,
delegateCall: false
},
other: { doppelganger: [Array] }
},
avg: Metric {
ast: {
SourceUnit: 1,
PragmaDirective: 1,
'Pragma:solidity:^0.8.24': 1,
ImportDirective: 4,
'ImportDirective:Path:@openzeppelin/contracts/token/ERC20/IERC20.sol': 0.3333333333333333,
StringLiteral: 7.666666666666667,
'ImportDirective:Path:@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol': 0.3333333333333333,
'ImportDirective:Path:@openzeppelin/contracts/token/ERC721/IERC721.sol': 0.3333333333333333,
'ImportDirective:Path:@openzeppelin/contracts/token/ERC1155/IERC1155.sol': 0.3333333333333333,
'ImportDirective:Path:@openzeppelin/contracts/access/AccessControl.sol': 0.6666666666666666,
Identifier: 299.3333333333333,
ContractDefinition: 1,
'ContractDefinition:Contract': 1,
'ContractDefinition:BaseContracts': 0.6666666666666666,
InheritanceSpecifier: 0.6666666666666666,
UserDefinedTypeName: 11,
'UserDefinedTypeName:AccessControl': 0.6666666666666666,
UsingForDeclaration: 0.6666666666666666,
'UserDefinedTypeName:IERC20': 0.3333333333333333,
StateVariableDeclaration: 10.666666666666666,
VariableDeclaration: 57,
'StateVariableDeclaration:Public': 10.333333333333334,
ArrayTypeName: 6,
'UserDefinedTypeName:CookieJarLib.NFTGate': 2.3333333333333335,
'UserDefinedTypeName:CookieJarLib.WithdrawalData': 1.3333333333333333,
'StateVariableDeclaration:Private': 0.3333333333333333,
Mapping: 1.6666666666666667,
ElementaryTypeName: 50.333333333333336,
'UserDefinedTypeName:CookieJarLib.AccessType': 1.3333333333333333,
'UserDefinedTypeName:CookieJarLib.WithdrawalTypeOptions': 1.3333333333333333,
FunctionDefinition: 11.333333333333334,
'FunctionDefinition:Internal': 9,
'FunctionDefinition:Default': 1,
'VariableDeclaration:Memory': 4.333333333333333,
Block: 33.333333333333336,
IfStatement: 29.666666666666668,
BinaryOperation: 46.333333333333336,
FunctionCall: 78.33333333333333,
'FunctionCall:Type:Regular': 21.666666666666668,
'FunctionCall:Name:address': 11.333333333333334,
NumberLiteral: 15.333333333333334,
RevertStatement: 24.666666666666668,
'FunctionCall:Type:MemberAccess': 34.666666666666664,
'FunctionCall:Name:AdminCannotBeZeroAddress': 0.6666666666666666,
MemberAccess: 85.66666666666667,
'FunctionCall:Name:FeeCollectorAddressCannotBeZeroAddress': 1,
ExpressionStatement: 28.666666666666668,
'FunctionCall:Name:NoNFTAddressesProvided': 0.3333333333333333,
'FunctionCall:Name:NFTArrayLengthMismatch': 0.3333333333333333,
'FunctionCall:Name:MaxNFTGatesReached': 0.6666666666666666,
ForStatement: 2.6666666666666665,
VariableDeclarationStatement: 10,
UnaryOperation: 6.333333333333333,
IndexAccess: 10.333333333333334,
'FunctionCall:Name:InvalidNFTType': 0.6666666666666666,
'FunctionCall:Name:InvalidNFTGate': 1.3333333333333333,
'FunctionCall:Name:DuplicateNFTGate': 0.6666666666666666,
'FunctionCall:Name:NFTGate': 0.6666666666666666,
'FunctionCall:Name:NFTType': 0.6666666666666666,
'FunctionCall:Name:\_setRoleAdmin': 1.3333333333333333,
'FunctionCall:Name:\_grantRole': 3,
ModifierDefinition: 2.3333333333333335,
'FunctionCall:Name:hasRole': 2.3333333333333335,
'FunctionCall:Name:NotAdmin': 0.3333333333333333,
'FunctionCall:Name:InvalidTokenAddress': 0.3333333333333333,
'FunctionCall:Name:Blacklisted': 0.3333333333333333,
'FunctionCall:Name:NotAuthorized': 1,
'FunctionDefinition:External': 8.666666666666666,
'VariableDeclaration:Calldata': 3.6666666666666665,
'FunctionCall:Name:InvalidAccessType': 2,
EmitStatement: 8.666666666666666,
'FunctionCall:Name:WhitelistUpdated': 0.6666666666666666,
BooleanLiteral: 5.333333333333333,
ModifierInvocation: 7,
'FunctionCall:Name:\_revokeRole': 2,
'FunctionCall:Name:BlacklistUpdated': 0.6666666666666666,
'FunctionCall:Name:NotFeeCollector': 0.3333333333333333,
'FunctionCall:Name:FeeCollectorUpdated': 0.3333333333333333,
'FunctionCall:Name:NFTGateAdded': 0.3333333333333333,
'FunctionCall:Name:type': 0.6666666666666666,
BreakStatement: 0.3333333333333333,
'FunctionCall:Name:NFTGateNotFound': 0.3333333333333333,
'FunctionCall:Name:NFTGateRemoved': 0.3333333333333333,
'FunctionCall:Name:AdminUpdated': 0.3333333333333333,
'FunctionDefinition:Payable': 1,
'FunctionDefinition:Public': 1,
'FunctionCall:Name:LessThanMinimumDeposit': 0.6666666666666666,
'FunctionCall:Name:\_calculateAndTransferFeeToCollector': 0.6666666666666666,
'FunctionCall:Name:Deposit': 0.6666666666666666,
'FunctionCall:Type:ContractTypecast': 4,
'FunctionCall:Name:allowance': 0.3333333333333333,
'FunctionCall:Name:CookieJar**CurrencyNotApproved': 0.3333333333333333,
'FunctionCall:Name:safeTransferFrom': 0.3333333333333333,
TupleExpression: 0.3333333333333333,
NameValueExpression: 1.6666666666666667,
'FunctionCall:Name:payable': 0.3333333333333333,
NameValueList: 1.6666666666666667,
'FunctionCall:Name:FeeTransferFailed': 1.3333333333333333,
'FunctionCall:Name:transfer': 0.3333333333333333,
'FunctionDefinition:View': 2,
'FunctionCall:Name:ownerOf': 0.3333333333333333,
'FunctionCall:Name:balanceOf': 1,
'FunctionCall:Name:ZeroWithdrawal': 1.3333333333333333,
'FunctionCall:Name:InvalidPurpose': 0.6666666666666666,
'FunctionCall:Name:CookieJar**WithdrawalAlreadyDone': 0.6666666666666666,
'FunctionCall:Name:WithdrawalTooSoon': 0.6666666666666666,
'FunctionCall:Name:WithdrawalAmountNotAllowed': 1.3333333333333333,
'FunctionCall:Name:InsufficientBalance': 3.3333333333333335,
'FunctionCall:Name:Withdrawal': 1.3333333333333333,
'FunctionCall:Name:safeTransfer': 1.3333333333333333,
'FunctionCall:Name:WithdrawalData': 0.6666666666666666,
'FunctionCall:Name:\_checkAccessNFT': 0.3333333333333333,
'FunctionCall:Type:BuiltIn': 2.3333333333333335,
'FunctionCall:Name:keccak256': 2.3333333333333335,
'FunctionCall:Name:encodePacked': 0.3333333333333333,
'FunctionCall:Name:EmergencyWithdrawalDisabled': 0.6666666666666666,
'FunctionCall:Name:EmergencyWithdrawal': 1.3333333333333333,
ReturnStatement: 2,
'ImportDirective:Path:@openzeppelin/contracts/token/ERC20/ERC20.sol': 0.3333333333333333,
'StateVariableDeclaration:Const': 1,
'UserDefinedTypeName:CookieJarRegistry': 0.3333333333333333,
CustomErrorDefinition: 4.666666666666667,
EventDefinition: 2.6666666666666665,
'VariableDeclaration:Indexed': 2.3333333333333335,
'FunctionCall:Name:decimals': 0.3333333333333333,
'UserDefinedTypeName:CookieJar': 1.3333333333333333,
'NewContract:CookieJar': 0.3333333333333333,
NewExpression: 0.3333333333333333,
'FunctionCall:Name:registerAndStoreCookieJar': 0.3333333333333333,
'UserDefinedTypeName:CookieJarFactory': 0.3333333333333333,
StructDefinition: 0.3333333333333333,
'UserDefinedTypeName:CookieJarInfo': 1.6666666666666667,
'FunctionCall:Name:OWNER': 0.3333333333333333,
'FunctionCall:Name:currency': 0.3333333333333333,
'FunctionCall:Name:jarOwner': 0.6666666666666666,
'FunctionCall:Name:accessType': 0.3333333333333333,
'FunctionCall:Name:getNFTGatesArray': 0.3333333333333333,
'FunctionCall:Name:withdrawalOption': 0.3333333333333333,
'FunctionCall:Name:fixedAmount': 0.3333333333333333,
'FunctionCall:Name:maxWithdrawal': 0.3333333333333333,
'FunctionCall:Name:withdrawalInterval': 0.3333333333333333,
'FunctionCall:Name:strictPurpose': 0.3333333333333333,
'FunctionCall:Name:emergencyWithdrawalEnabled': 0.3333333333333333,
'FunctionCall:Name:oneTimeWithdrawal': 0.3333333333333333
},
sloc: {
total: 339.6666666666667,
source: 236,
comment: 73,
single: 21.333333333333332,
block: 51.666666666666664,
mixed: 1,
empty: 31.666666666666668,
todo: 0,
blockEmpty: 0,
commentToSourceRatio: 0.3486735534273007
},
nsloc: {
total: 315,
source: 211.33333333333334,
comment: 73,
single: 21.333333333333332,
block: 51.666666666666664,
mixed: 1,
empty: 31.666666666666668,
todo: 0,
blockEmpty: 0,
commentToSourceRatio: 0.38555557814278746
},
complexity: { perceivedNaiveScore: 167.00000000000003 },
summary: {
perceivedComplexity: 3,
size: 2,
numLogicContracts: 1,
numFiles: 0.3333333333333333,
interfaceRisk: 2,
inlineDocumentation: 4,
compilerFeatures: 1,
compilerVersion: 1
},
num: {
astStatements: 1046.3333333333333,
contractDefinitions: 1,
contracts: 1,
libraries: 0,
interfaces: 0,
abstract: 0,
imports: 4,
functionsPublic: 9.666666666666666,
functionsPayable: 1,
assemblyBlocks: 0,
stateVars: 10.666666666666666,
stateVarsPublic: 10.333333333333334
},
capabilities: {
explicitValueTransfer: 0.3333333333333333,
assembly: false,
canReceiveFunds: true,
destroyable: false,
lowLevelCall: false,
delegateCall: false,
hashFuncs: true,
ecrecover: false,
deploysContract: true,
tryCatchBlocks: false,
uncheckedBlocks: false
},
other: {}
},
num: { sourceUnits: 3, metrics: 3, duplicates: 0, errors: 0 },
other: {
deployableContracts: [ 'CookieJar', 'CookieJarFactory', 'CookieJarRegistry' ]
}
}

[<img width="200" alt="get in touch with Consensys Diligence" src="https://user-images.githubusercontent.com/2865694/56826101-91dcf380-685b-11e9-937c-af49c2510aa0.png">](https://consensys.io/diligence)<br/>
<sup>
[[ 🌐 ](https://consensys.io/diligence) [ 📩 ](mailto:diligence@consensys.net) [ 🔥 ](https://consensys.io/diligence/tools/)]
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

| Type | File                                                                         | Logic Contracts | Interfaces | Lines    | nLines  | nSLOC   | Comment Lines | Complex. Score | Capabilities                                                                                                                                                                       |
| ---- | ---------------------------------------------------------------------------- | --------------- | ---------- | -------- | ------- | ------- | ------------- | -------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 📝   | /Users/jaskaransingh/projects/AuditFi-AI/contracts/src/CookieJar.sol         | 1               | \*\*\*\*   | 647      | 596     | 416     | 123           | 355            | **<abbr title='Payable Functions'>💰</abbr><abbr title='Initiates ETH Value Transfer'>📤</abbr><abbr title='Uses Hash-Functions'>🧮</abbr>**                                       |
| 📝   | /Users/jaskaransingh/projects/AuditFi-AI/contracts/src/CookieJarFactory.sol  | 1               | \*\*\*\*   | 232      | 214     | 132     | 63            | 98             | **<abbr title='Uses Hash-Functions'>🧮</abbr><abbr title='create/create2'>🌀</abbr>**                                                                                              |
| 📝   | /Users/jaskaransingh/projects/AuditFi-AI/contracts/src/CookieJarRegistry.sol | 1               | \*\*\*\*   | 140      | 135     | 86      | 33            | 48             | \*\*\*\*                                                                                                                                                                           |
| 📝   | **Totals**                                                                   | **3**           | \*\*\*\*   | **1019** | **945** | **634** | **219**       | **501**        | **<abbr title='Payable Functions'>💰</abbr><abbr title='Initiates ETH Value Transfer'>📤</abbr><abbr title='Uses Hash-Functions'>🧮</abbr><abbr title='create/create2'>🌀</abbr>** |

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

- 📝 `CookieJar`
- 📝 `CookieJarFactory`
- 📝 `CookieJarRegistry`

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

| 📝Contracts | 📚Libraries | 🔍Interfaces | 🎨Abstract |
| ----------- | ----------- | ------------ | ---------- |
| 3           | 0           | 0            | 0          |

#### <span id=t-exposed-functions>Exposed Functions</span>

This section lists functions that are explicitly declared public or payable. Please note that getter methods for public stateVars are not included.

| 🌐Public | 💰Payable |
| -------- | --------- |
| 29       | 3         |

| External | Internal | Private | Pure | View |
| -------- | -------- | ------- | ---- | ---- |
| 26       | 27       | 0       | 0    | 6    |

#### <span id=t-statevariables>StateVariables</span>

| Total | 🌐Public |
| ----- | -------- |
| 32    | 31       |

#### <span id=t-capabilities>Capabilities</span>

| Solidity Versions observed | 🧪 Experimental Features | 💰 Can Receive Funds | 🖥 Uses Assembly | 💣 Has Destroyable Contracts |
| -------------------------- | ------------------------ | -------------------- | --------------- | ---------------------------- |
| `^0.8.24`                  |                          | `yes`                | \*\*\*\*        | \*\*\*\*                     |

| 📤 Transfers ETH | ⚡ Low-Level Calls | 👥 DelegateCall | 🧮 Uses Hash Functions | 🔖 ECRecover | 🌀 New/Create/Create2              |
| ---------------- | ------------------ | --------------- | ---------------------- | ------------ | ---------------------------------- |
| `yes`            | \*\*\*\*           | \*\*\*\*        | `yes`                  | \*\*\*\*     | `yes`<br>→ `NewContract:CookieJar` |

| ♻️ TryCatch | Σ Unchecked |
| ----------- | ----------- |
| \*\*\*\*    | \*\*\*\*    |

#### <span id=t-package-imports>Dependencies / External Imports</span>

| Dependency / Import Path                                | Count |
| ------------------------------------------------------- | ----- |
| @openzeppelin/contracts/access/AccessControl.sol        | 2     |
| @openzeppelin/contracts/token/ERC1155/IERC1155.sol      | 1     |
| @openzeppelin/contracts/token/ERC20/ERC20.sol           | 1     |
| @openzeppelin/contracts/token/ERC20/IERC20.sol          | 1     |
| @openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol | 1     |
| @openzeppelin/contracts/token/ERC721/IERC721.sol        | 1     |

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

| File Name                                                                    | SHA-1 Hash                               |
| ---------------------------------------------------------------------------- | ---------------------------------------- |
| /Users/jaskaransingh/projects/AuditFi-AI/contracts/src/CookieJar.sol         | 40f273399fbf4a55e1d4b927e50bf8d4687f2785 |
| /Users/jaskaransingh/projects/AuditFi-AI/contracts/src/CookieJarFactory.sol  | b0dccca348d6c910be14a00dbf3a53c878273f14 |
| /Users/jaskaransingh/projects/AuditFi-AI/contracts/src/CookieJarRegistry.sol | 84e3f8c268a6a4dd280b5abcb9328105376abc07 |

Contracts Description Table

|       Contract        |                 Type                 |     Bases      |                |                                          |
| :-------------------: | :----------------------------------: | :------------: | :------------: | :--------------------------------------: |
|           └           |          **Function Name**           | **Visibility** | **Mutability** |              **Modifiers**               |
|                       |                                      |                |                |                                          |
|     **CookieJar**     |            Implementation            | AccessControl  |                |                                          |
|           └           |            <Constructor>             |   Public ❗️   |       🛑       |                  NO❗️                   |
|           └           |        grantJarWhitelistRole         |  External ❗️  |       🛑       |               onlyJarOwner               |
|           └           |        revokeJarWhitelistRole        |  External ❗️  |       🛑       |               onlyJarOwner               |
|           └           |        grantJarBlacklistRole         |  External ❗️  |       🛑       |               onlyJarOwner               |
|           └           |        revokeJarBlacklistRole        |  External ❗️  |       🛑       |               onlyJarOwner               |
|           └           |          updateFeeCollector          |  External ❗️  |       🛑       |                  NO❗️                   |
|           └           |              addNFTGate              |  External ❗️  |       🛑       |               onlyJarOwner               |
|           └           |            removeNFTGate             |  External ❗️  |       🛑       |               onlyJarOwner               |
|           └           |         transferJarOwnership         |  External ❗️  |       🛑       |               onlyJarOwner               |
|           └           |              depositETH              |   Public ❗️   |       💵       |          onlySupportedCurrency           |
|           └           |           depositCurrency            |   Public ❗️   |       🛑       |                  NO❗️                   |
|           └           | \_calculateAndTransferFeeToCollector |  Internal 🔒   |       🛑       |                                          |
|           └           |           \_checkAccessNFT           |  Internal 🔒   |                |          onlyNotJarBlacklisted           |
|           └           |        withdrawWhitelistMode         |  External ❗️  |       🛑       | onlyNotJarBlacklisted onlyJarWhiteListed |
|           └           |           withdrawNFTMode            |  External ❗️  |       🛑       |          onlyNotJarBlacklisted           |
|           └           |    emergencyWithdrawWithoutState     |  External ❗️  |       🛑       |               onlyJarOwner               |
|           └           |  emergencyWithdrawCurrencyWithState  |  External ❗️  |       🛑       |               onlyJarOwner               |
|           └           |           getNFTGatesArray           |  External ❗️  |                |                  NO❗️                   |
|           └           |        getWithdrawalDataArray        |  External ❗️  |                |                  NO❗️                   |
|           └           |              <Fallback>              |  External ❗️  |       💵       |                  NO❗️                   |
|           └           |           <Receive Ether>            |  External ❗️  |       💵       |                  NO❗️                   |
|                       |                                      |                |                |                                          |
| **CookieJarFactory**  |            Implementation            | AccessControl  |                |                                          |
|           └           |            <Constructor>             |   Public ❗️   |       🛑       |                  NO❗️                   |
|           └           |   grantBlacklistedJarCreatorsRole    |  External ❗️  |       🛑       |                 onlyRole                 |
|           └           |   revokeBlacklistedJarCreatorsRole   |  External ❗️  |       🛑       |                 onlyRole                 |
|           └           |        grantProtocolAdminRole        |  External ❗️  |       🛑       |                 onlyRole                 |
|           └           |       revokeProtocolAdminRole        |  External ❗️  |       🛑       |                 onlyRole                 |
|           └           |          transferOwnership           |   Public ❗️   |       🛑       |                 onlyRole                 |
|           └           |           createCookieJar            |  External ❗️  |       🛑       |            onlyNotBlacklisted            |
|                       |                                      |                |                |                                          |
| **CookieJarRegistry** |            Implementation            |                |                |                                          |
|           └           |            <Constructor>             |   Public ❗️   |       🛑       |                  NO❗️                   |
|           └           |         setCookieJarFactory          |  External ❗️  |       🛑       |                  NO❗️                   |
|           └           |      registerAndStoreCookieJar       |  External ❗️  |       🛑       |           onlyCookieJarFactory           |
|           └           |     getRegisteredCookieJarsCount     |  External ❗️  |                |                  NO❗️                   |
|           └           |              getAllJars              |  External ❗️  |                |                  NO❗️                   |
|           └           |        getJarByCreatorAddress        |  External ❗️  |                |                  NO❗️                   |

Legend

| Symbol | Meaning                   |
| :----: | ------------------------- |
|   🛑   | Function can modify state |
|   💵   | Function is payable       |

</div>
____
<sub>
Thinking about smart contract security? We can provide training, ongoing advice, and smart contract auditing. [Contact us](https://consensys.io/diligence/contact/).
</sub>

[2025-04-26 11:29:06] INFO: Generating text with options:
modelProvider: "google"
model: "large"
verifiableInference: false
[2025-04-26 11:29:06] INFO: Selected model: gemini-2.0-flash-exp
Agent: Security Audit Report:

Okay, I've reviewed the provided smart contract metrics report. Based on the information, I can offer some analysis and recommendations. However, the report is primarily a metrics overview and doesn't directly highlight specific vulnerabilities. Therefore, I'll focus on potential areas of concern based on common smart contract pitfalls and the capabilities identified in the report, alongside general best practices.

**Overall Impressions**

- The project consists of three contracts: `CookieJar`, `CookieJarFactory`, and `CookieJarRegistry`.
- The contracts use OpenZeppelin's `AccessControl` for managing permissions, which is a good practice.
- The `CookieJar` contract has payable functions (`depositETH`, fallback, and receive), indicating it handles ETH deposits.
- The contracts use hash functions and the `create2` opcode (in `CookieJarFactory`), suggesting potential complexity in deployment and address derivation.
- The report doesn't show any immediate critical errors, but a deeper manual audit is still necessary.

**Potential Vulnerabilities and Recommendations**

**1. Access Control and Privilege Escalation:**

- **Risk:** Incorrectly configured or managed roles can lead to unauthorized access and control of the contracts. For example, if the `onlyJarOwner` modifier in `CookieJar` is not carefully managed, an attacker could potentially become the owner and drain the contract.
- **Recommendation:**
  - **Double-check role assignments:** Carefully review who is granted the `DEFAULT_ADMIN_ROLE`, `JAR_WHITELIST_ROLE`, `JAR_BLACKLIST_ROLE`, `BLACKLISTED_JAR_CREATORS_ROLE` and `PROTOCOL_ADMIN_ROLE` and ensure they are the intended parties.
  - **Consider a timelock:** For critical administrative functions (like ownership transfer or significant parameter changes), implement a timelock mechanism to provide a delay before the changes take effect, allowing users to react to potentially malicious proposals.
  - **Review `onlyRole` usage:** In `CookieJarFactory`, ensure the `onlyRole` modifier is used correctly to protect sensitive functions like `grantBlacklistedJarCreatorsRole`, `revokeBlacklistedJarCreatorsRole`, `grantProtocolAdminRole`, `revokeProtocolAdminRole`, and `transferOwnership`.
  - **Consider immutability:** If some roles or parameters should never change after deployment, make them immutable.

**2. ETH Handling and Reentrancy:**

- **Risk:** The `depositETH` function and the payable fallback/receive functions in `CookieJar` are potential entry points for reentrancy attacks. If the contract makes external calls after receiving ETH but _before_ updating its internal state, an attacker could recursively call the `depositETH` or fallback function to drain the contract.
- **Recommendation:**
  - **Use the Checks-Effects-Interactions pattern:** Ensure that state updates (e.g., updating user balances) happen _before_ any external calls.
  - **Consider a reentrancy guard:** Employ OpenZeppelin's `ReentrancyGuard` modifier to prevent reentrancy attacks. Wrap the `depositETH` and `withdrawWhitelistMode`, `withdrawNFTMode` functions with this guard.
  - **Limit ETH received in fallback:** The fallback function should ideally only be used for logging or rejecting ETH transfers. Avoid complex logic in the fallback function.
  - **Careful with `_calculateAndTransferFeeToCollector`:** Ensure this internal function, called during deposit/withdraw, is also protected against reentrancy, especially if it makes external calls to transfer fees.

**3. ERC20/ERC721/ERC1155 Interactions:**

- **Risk:** Improper handling of ERC20 tokens, ERC721 tokens, and ERC1155 tokens can lead to loss of funds, stuck tokens, or unexpected behavior.
- **Recommendation:**
  - **Use `SafeERC20`:** The report indicates the use of `SafeERC20`. This is good, but double-check that _all_ ERC20 interactions (especially `transfer` and `transferFrom`) use the `safeTransfer` and `safeTransferFrom` wrappers provided by `SafeERC20`.
  - **Handle token approvals carefully:** Be aware of potential front-running vulnerabilities when setting token approvals. Consider using `increaseAllowance` and `decreaseAllowance` instead of `approve` to mitigate this.
  - **NFT ownership checks:** In `_checkAccessNFT`, ensure that the contract correctly verifies ownership of the NFT. Use `IERC721.ownerOf` or `IERC1155.balanceOf` as appropriate. Handle the case where the NFT might not exist or the user doesn't own it.
  - **NFT Gates array**: Be aware of the potential DOS vulnerability if the NFTGates array grows too large, which can cause out of gas errors.

**4. CookieJarFactory and CREATE2:**

- **Risk:** While `CREATE2` allows for predictable contract addresses, it also introduces complexity. If the salt or initialization code used with `CREATE2` is predictable, an attacker could potentially deploy a contract at the same address.
- **Recommendation:**
  - **Use a strong, unpredictable salt:** Ensure the salt used in `CREATE2` is sufficiently random and unpredictable. Consider incorporating user-provided data into the salt.
  - **Carefully review initialization logic:** The initialization logic of the deployed `CookieJar` contract should be carefully audited to prevent vulnerabilities that could be exploited by an attacker who can predict the contract address.

**5. Emergency Withdrawals:**

- **Risk:** The `emergencyWithdrawWithoutState` and `emergencyWithdrawCurrencyWithState` functions are powerful tools but can be misused if not properly controlled.
- **Recommendation:**
  - **Document the intended use:** Clearly document the specific scenarios in which these emergency withdrawal functions should be used.
  - **Consider multi-sig:** Require multiple signatures (e.g., using a multi-signature wallet) to execute these functions to prevent a single compromised owner from draining the contract.

**6. General Security Best Practices:**

- **Regular Audits:** This metrics report is a good starting point, but a comprehensive manual audit by experienced security professionals is crucial.
- **Formal Verification:** Consider using formal verification tools to mathematically prove the correctness of critical contract logic.
- **Fuzzing:** Use fuzzing tools to automatically generate and execute a large number of test cases to uncover unexpected behavior.
- **Gas Optimization:** Optimize the contract code to reduce gas costs, especially for frequently used functions.
- **Upgradability:** If the contract logic needs to be updated in the future, consider using an upgradeable contract pattern (e.g., proxy contracts). However, be aware that upgradability introduces additional complexity and risks.
- **Testing:** Thoroughly test all functions with a variety of inputs, including edge cases and boundary conditions. Use unit tests, integration tests, and property-based tests.

**Code Corrections/Improvements (Illustrative Examples)**

I can't provide a complete, corrected code base without a deeper understanding of the specific contract logic and requirements. However, here are some examples of how to address potential vulnerabilities:

**Example 1: Adding Reentrancy Guard to `depositETH`**

```solidity
// Assuming you've imported OpenZeppelin's ReentrancyGuard:
// import "@openzeppelin/contracts/security/ReentrancyGuard.sol";

contract CookieJar is AccessControl, ReentrancyGuard {
    // ... existing code ...

    function depositETH() public payable nonReentrant onlySupportedCurrency {
        // Update state BEFORE external calls
        balances[msg.sender] += msg.value;

        // ... rest of the deposit logic, including fee calculation and transfer ...
        _calculateAndTransferFeeToCollector(msg.value); // Ensure this is also reentrancy safe
    }

    // ... other functions ...
}
```

**Example 2: Using `safeTransfer` in `_calculateAndTransferFeeToCollector`**

```solidity
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol";

contract CookieJar is AccessControl {
    using SafeERC20 for IERC20;

    // ... existing code ...

    function _calculateAndTransferFeeToCollector(uint256 amount) internal {
        uint256 fee = (amount * feePercentage) / 100;
        IERC20(currency).safeTransfer(feeCollector, fee); // Use safeTransfer
    }

    // ... other functions ...
}
```

**Example 3: Strengthening CREATE2 Salt (Conceptual)**

```solidity
contract CookieJarFactory is AccessControl {
    // ... existing code ...

    function createCookieJar(bytes32 _salt) external onlyNotBlacklisted {
        // Combine user-provided salt with a contract-specific secret
        bytes32 combinedSalt = keccak256(abi.encode(_salt, address(this), block.chainid));

        address jarAddress = create2(..., combinedSalt, ...);
        // ... deploy with CREATE2 using combinedSalt ...
    }

    // ... other functions ...
}
```

**Important Considerations:**

- The recommendations above are general and might need to be adapted based on the specific implementation details of the contracts.
- A thorough manual audit is essential to identify and address all potential vulnerabilities.
- Security is an ongoing process, and contracts should be regularly reviewed and updated to address new threats.

I hope this detailed analysis and the recommendations are helpful. Let me know if you have any more questions or if you'd like me to elaborate on any specific area.

Metrics report saved at: /Users/jaskaransingh/projects/AuditFi-AI/contracts/metrics-report.md
