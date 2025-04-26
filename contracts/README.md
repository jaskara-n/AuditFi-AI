# Cookie Jar Smart Contracts

A decentralized protocol for controlled fund withdrawals with support for both whitelist and NFT-gated access modes. The protocol enables users to create "cookie jars" - smart contracts that manage deposits and withdrawals with configurable rules and fee mechanisms.

## Core Features

- **Flexible Access Control**: Support for both whitelist and NFT-gated access modes
- **Configurable Withdrawals**: Fixed or variable withdrawal amounts with customizable intervals
- **Multi-Token Support**: Handle both ETH and ERC20 tokens
- **Fee Mechanism**: 1% fee on deposits for protocol sustainability
- **Emergency Controls**: Optional emergency withdrawal functionality for the admins
- **Purpose Tracking**: Optional requirement for withdrawal purpose documentation
- **One-Time Withdrawal**: Optional restriction allowing users to withdraw only once instead of interval withdrawals

## Deployments

- CookieJarRegistry deployed at: https://base-sepolia.blockscout.com/address/0xE9c62c210E6d56EbB0718f79DCE2883b8e38B356
- CookieJarFactory deployed at: https://base-sepolia.blockscout.com/address/0x010CE87d0E7F8E818805a27C95E09cb4961C8c6f

## Smart Contract Architecture

### Core Contracts

1. **CookieJarFactory**

   - Handles protocol access control
   - Manages jar deployments
   - Controls minimum deposit requirements
   - Maintains protocol-level blacklist
   - Configures default fee settings

2. **CookieJar**

   - Manages individual jar logic
   - Handles deposits and withdrawals
   - Implements access control rules
   - Processes withdrawal requests
   - Manages NFT gates for NFT-gated jars

3. **CookieJarRegistry**

   - Stores all deployed jar data
   - Maintains jar metadata
   - Provides jar lookup functionality
   - Tracks jar creators and configurations

4. **CookieJarLib**
   - Contains shared data structures
   - Defines common types and events
   - Implements reusable functions
   - Defines error messages

## Detailed System Architecture

### Access Control System

The Cookie Jar protocol implements a robust access control system using OpenZeppelin's AccessControl pattern:

#### Protocol-Level Access Control (CookieJarFactory)

- **OWNER**: Has complete control over the protocol, can transfer ownership and manage protocol admins
- **PROTOCOL_ADMIN**: Can manage blacklisted jar creators and other protocol settings
- **BLACKLISTED_JAR_CREATORS**: Users who are restricted from creating new jars

#### Jar-Level Access Control (CookieJar)

- **JAR_OWNER**: Has complete control over an individual jar, can manage whitelist/blacklist and jar settings
- **JAR_WHITELISTED**: Users who are allowed to withdraw from whitelist-mode jars
- **JAR_BLACKLISTED**: Users who are restricted from withdrawing from a specific jar

### Jar Creation Flow

1. User calls `createCookieJar()` on the CookieJarFactory with desired parameters
2. Factory validates parameters and creates a new CookieJar instance
3. Factory registers the new jar with the CookieJarRegistry
4. Registry stores comprehensive jar data for future reference

### Access Modes

#### Whitelist Mode

- Jar owner explicitly grants JAR_WHITELISTED role to addresses
- Only whitelisted addresses can withdraw funds
- Whitelist management through `grantJarWhitelistRole()` and `revokeJarWhitelistRole()`

#### NFT-Gated Mode

- Access is granted to holders of specific NFTs
- Supports ERC721, ERC1155, and Soulbound tokens
- NFT gates can be added/removed by jar owner
- Maximum of 5 NFT gates per jar

### Withdrawal Options

#### Fixed Withdrawals

- Each withdrawal must be exactly the fixed amount
- Configured at jar creation with `fixedAmount` parameter

#### Variable Withdrawals

- Withdrawals can be any amount up to the maximum
- Configured at jar creation with `maxWithdrawal` parameter

### Withdrawal Restrictions

- **Time-based**: Enforced minimum time between withdrawals via `withdrawalInterval`
- **Purpose Documentation**: Optional requirement for detailed withdrawal purpose
- **One-Time Withdrawal**: Optional restriction allowing users to withdraw only once

### Fee Mechanism

- 1% fee on all deposits (configurable at protocol level)
- Fees are sent to the designated fee collector
- Fee collector can be updated by the current fee collector

### Emergency Withdrawal

Two emergency withdrawal functions are available to jar owners when enabled:

1. `emergencyWithdrawWithoutState()`: Withdraws any token without updating internal accounting
2. `emergencyWithdrawCurrencyWithState()`: Withdraws jar currency and updates internal accounting

Without State: This is done such that if any user sends funds to this contract directly, and that funds will not be registerd/ accounted for in the jar, hence, dormant funds.
Also, the jar currency may be different than the mistakenly diposited funds, hence no accounting, dormant funds.

With State: This is used to withdraw funds from the accounting state in contracts, this may be needed for mistaken deposits, in that case depositor has to request the admin to emergency withdraw.

## User Flows

### Creating a Cookie Jar

```
User -> CookieJarFactory.createCookieJar() -> New CookieJar deployed -> CookieJarRegistry updated
```

Parameters:

- Jar owner address
- Supported currency (ETH or ERC20 token)
- Access type (Whitelist or NFTGated)
- NFT addresses and types (for NFT-gated mode)
- Withdrawal option (Fixed or Variable)
- Fixed amount or maximum withdrawal amount
- Withdrawal interval
- Purpose requirement flag
- Emergency withdrawal flag
- One-time withdrawal flag
- Optional metadata

### Depositing Funds

#### ETH Deposits

```
User -> CookieJar.depositETH() -> 1% fee to fee collector -> Remaining amount stored in jar
```

#### ERC20 Deposits

```
User approves CookieJar to spend tokens -> User -> CookieJar.depositCurrency() -> 1% fee to fee collector -> Remaining amount stored in jar
```

### Withdrawing Funds (Whitelist Mode)

```
Whitelisted User -> CookieJar.withdrawWhitelistMode() -> Validation checks -> Funds transferred to user
```

Validation checks:

- User must be whitelisted
- User must not be blacklisted
- Withdrawal amount must match rules (fixed or within maximum)
- Sufficient time must have passed since last withdrawal
- Purpose must meet length requirement if strictPurpose is enabled
- User must not have withdrawn before if oneTimeWithdrawal is enabled

### Withdrawing Funds (NFT-Gated Mode)

```
NFT Holder -> CookieJar.withdrawNFTMode() -> Validation checks -> Funds transferred to user
```

Validation checks:

- User must own the specified NFT
- User must not be blacklisted
- Withdrawal amount must match rules (fixed or within maximum)
- Sufficient time must have passed since last withdrawal for this NFT
- Purpose must meet length requirement if strictPurpose is enabled
- User must not have withdrawn before if oneTimeWithdrawal is enabled

### Emergency Withdrawal

```
Jar Owner -> CookieJar.emergencyWithdrawCurrencyWithState() or emergencyWithdrawWithoutState() -> Funds transferred to jar owner
```

## Callable Functions

### CookieJarFactory Functions

#### Admin Functions

- `grantBlacklistedJarCreatorsRole(address[] _users)`: Blacklists users from creating jars
- `revokeBlacklistedJarCreatorsRole(address[] _users)`: Removes users from blacklist
- `grantProtocolAdminRole(address _admin)`: Grants protocol admin role
- `revokeProtocolAdminRole(address _admin)`: Revokes protocol admin role
- `transferOwnership(address _newOwner)`: Transfers protocol ownership

#### Public Functions

- `createCookieJar(...)`: Creates a new cookie jar with specified parameters

### CookieJar Functions

#### Admin Functions

- `grantJarWhitelistRole(address[] _users)`: Adds users to jar whitelist
- `revokeJarWhitelistRole(address[] _users)`: Removes users from jar whitelist
- `grantJarBlacklistRole(address[] _users)`: Adds users to jar blacklist
- `revokeJarBlacklistRole(address[] _users)`: Removes users from jar blacklist
- `updateFeeCollector(address _newFeeCollector)`: Updates fee collector address
- `addNFTGate(address _nftAddress, uint8 _nftType)`: Adds NFT gate for NFT-gated jars
- `removeNFTGate(address _nftAddress)`: Removes NFT gate
- `transferJarOwnership(address _newAdmin)`: Transfers jar ownership
- `emergencyWithdrawWithoutState(address token, uint256 amount)`: Emergency withdrawal without state update
- `emergencyWithdrawCurrencyWithState(uint256 amount)`: Emergency withdrawal with state update

#### Deposit Functions

- `depositETH()`: Deposits ETH into the jar
- `depositCurrency(uint256 amount)`: Deposits ERC20 tokens into the jar

#### Withdrawal Functions

- `withdrawWhitelistMode(uint256 amount, string calldata purpose)`: Withdraws funds in whitelist mode
- `withdrawNFTMode(uint256 amount, string calldata purpose, address gateAddress, uint256 tokenId)`: Withdraws funds in NFT-gated mode

#### View Functions

- `getNFTGatesArray()`: Returns array of NFT gates
- `getWithdrawalDataArray()`: Returns array of withdrawal data

### CookieJarRegistry Functions

- `setCookieJarFactory(address _factory)`: Sets the authorized factory address
- `registerAndStoreCookieJar(CookieJar _jarInstance, string memory _metadata)`: Registers a new jar
- `getRegisteredCookieJarsCount()`: Returns count of registered jars
- `getAllJars()`: Returns array of all registered jars
- `getJarByCreatorAddress(address _jarCreator)`: Returns jar info for a creator

## Setup and Development

### Prerequisites

- [Foundry](https://book.getfoundry.sh/)
- Ethereum wallet with test ETH (for deployment)

### Installation

```shell
# Clone the repository
git clone <repository-url>
cd cookie-jar-v2/contracts

# Install dependencies
forge install
```

### Build

```shell
forge build
```

### Test

```shell
forge test
```

### Format

```shell
forge fmt
```

### Deployment

1. Set up your environment variables:

```shell
PRIVATE_KEY=
SEPOLIA_URL=
SEPOLIA_ETHERSCAN_KEY=
```

2. Deploy and verify:

```shell
source .env
forge script script/Deploy.s.sol:Deploy \
 --via-ir \
 --rpc-url $SEPOLIA_URL \
 --broadcast \
 --account One \
 --verify \
 --etherscan-api-key $SEPOLIA_ETHERSCAN_KEY \
 --verifier-url https://api-sepolia.basescan.org/api \
 -vvvv
```

## Security Considerations

- Do not send funds directly to the factory contract, they will not be updated in the state, in that case you will have to ask the jar admin to emergency withdraw
- Always use the provided deposit functions
- Review withdrawal rules and access controls before jar deployment
- Emergency withdrawal functions should be used with caution (jar owner must have a little understanding of state updation need or not)
- The protocol takes a 1% fee on all ETH and ERC20 deposits
- Jar owners have significant control over jar funds

## Known Issues

- Emergency withdrawal functionality needs to be fixed to properly update state
- Ensure proper handling of decimal precision with different ERC20 tokens
