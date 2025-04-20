# Smart Contract Vulnerabilities Dataset

## Reentrancy Attack

**Description:** Occurs when external contract calls are allowed to make new calls to the calling contract before the first execution is complete.

**Example:**

```solidity
function withdraw(uint _amount) public {
    require(balances[msg.sender] >= _amount);
    (bool sent, ) = msg.sender.call{value: _amount}("");
    require(sent, "Failed to send Ether");
    balances[msg.sender] -= _amount;
}
```

**Solution:**

1. Use the checks-effects-interactions pattern
2. Implement reentrancy guards (mutex)
3. Use the ReentrancyGuard library from OpenZeppelin

**Corrected Example:**

```solidity
// With checks-effects-interactions pattern
function withdraw(uint _amount) public {
    require(balances[msg.sender] >= _amount);
    balances[msg.sender] -= _amount; // Effect first
    (bool sent, ) = msg.sender.call{value: _amount}(""); // Interaction last
    require(sent, "Failed to send Ether");
}

// With mutex
bool private locked;
modifier noReentrant() {
    require(!locked, "No reentrancy");
    locked = true;
    _;
    locked = false;
}
```

## Integer Overflow/Underflow

**Description:** Occurs when arithmetic operations reach the maximum or minimum size of the integer type.

**Example:**

```solidity
function transfer(address _to, uint256 _value) public {
    require(balances[msg.sender] >= _value);
    balances[msg.sender] -= _value; // Could underflow
    balances[_to] += _value; // Could overflow
}
```

**Solution:**

1. Use SafeMath library for Solidity < 0.8.0
2. Use Solidity 0.8.0+ which has built-in overflow checking
3. Implement proper boundary checks

**Corrected Example:**

```solidity
// Using SafeMath (Solidity < 0.8.0)
using SafeMath for uint256;
function transfer(address _to, uint256 _value) public {
    require(balances[msg.sender] >= _value);
    balances[msg.sender] = balances[msg.sender].sub(_value);
    balances[_to] = balances[_to].add(_value);
}

// In Solidity 0.8.0+ (built-in checks)
function transfer(address _to, uint256 _value) public {
    require(balances[msg.sender] >= _value);
    balances[msg.sender] -= _value;
    balances[_to] += _value;
}
```

## Access Control Vulnerabilities

**Description:** Improper authorization checks allowing unauthorized users to execute sensitive functions.

**Example:**

```solidity
function withdrawFunds() public {
    payable(msg.sender).transfer(address(this).balance);
}
```

**Solution:**

1. Implement proper access control modifiers
2. Use OpenZeppelin's AccessControl or Ownable
3. Follow principle of least privilege

**Corrected Example:**

```solidity
address private owner;

constructor() {
    owner = msg.sender;
}

modifier onlyOwner() {
    require(msg.sender == owner, "Not authorized");
    _;
}

function withdrawFunds() public onlyOwner {
    payable(msg.sender).transfer(address(this).balance);
}
```

## Unchecked External Calls

**Description:** Failure to check return values from external calls can lead to unexpected behavior.

**Example:**

```solidity
function transferTokens(address _token, address _to, uint256 _amount) public {
    IERC20(_token).transfer(_to, _amount);
}
```

**Solution:**

1. Always check return values from external calls
2. Use SafeERC20 for token transfers
3. Implement proper error handling

**Corrected Example:**

```solidity
function transferTokens(address _token, address _to, uint256 _amount) public {
    bool success = IERC20(_token).transfer(_to, _amount);
    require(success, "Token transfer failed");
}

// Or using SafeERC20
using SafeERC20 for IERC20;
function transferTokens(address _token, address _to, uint256 _amount) public {
    IERC20(_token).safeTransfer(_to, _amount);
}
```

## Timestamp Dependence

**Description:** Relying on block.timestamp for critical decision logic can be manipulated by miners.

**Example:**

```solidity
function isGameOver() public view returns (bool) {
    return block.timestamp >= gameEndTime;
}
```

**Solution:**

1. Don't use block.timestamp for precision requirements under 30 seconds
2. Consider using block numbers instead for certain use cases
3. Build in tolerance for slight timestamp manipulation

**Corrected Example:**

```solidity
// Using block number for timing
uint256 public gameEndBlock;

constructor(uint256 durationInBlocks) {
    gameEndBlock = block.number + durationInBlocks;
}

function isGameOver() public view returns (bool) {
    return block.number >= gameEndBlock;
}
```

## Front-Running

**Description:** Attackers can observe pending transactions and insert their own transactions with higher gas fees.

**Example:**

```solidity
function claimReward(uint256 solution) public {
    if (solution == correctSolution) {
        payable(msg.sender).transfer(reward);
    }
}
```

**Solution:**

1. Implement a commit-reveal scheme
2. Use private mempools for critical transactions
3. Design mechanisms resistant to front-running

**Corrected Example:**

```solidity
// Commit-reveal pattern
mapping(address => bytes32) public commitments;
mapping(address => bool) public hasRevealed;

function commit(bytes32 commitment) public {
    commitments[msg.sender] = commitment;
}

function reveal(uint256 solution, bytes32 salt) public {
    require(commitments[msg.sender] == keccak256(abi.encodePacked(solution, salt)), "Invalid solution");
    require(!hasRevealed[msg.sender], "Already revealed");

    hasRevealed[msg.sender] = true;
    if (solution == correctSolution) {
        payable(msg.sender).transfer(reward);
    }
}
```

## Denial of Service (DoS)

**Description:** Attackers prevent contract functionality by exploiting resource limitations or logic flaws.

**Example:**

```solidity
function distributeRewards() public {
    for(uint i = 0; i < recipients.length; i++) {
        payable(recipients[i]).transfer(rewards[i]);
    }
}
```

**Solution:**

1. Use pull over push payment patterns
2. Avoid loops with unbounded iterations
3. Set appropriate gas limits for operations

**Corrected Example:**

```solidity
// Pull payment pattern
mapping(address => uint256) public pendingRewards;

function allocateRewards() public {
    for(uint i = 0; i < recipients.length; i++) {
        pendingRewards[recipients[i]] += rewards[i];
    }
}

function withdrawReward() public {
    uint256 amount = pendingRewards[msg.sender];
    require(amount > 0, "No rewards to withdraw");

    pendingRewards[msg.sender] = 0;
    payable(msg.sender).transfer(amount);
}
```

## Force-Sending Ether

**Description:** Contracts that depend on their Ether balance can be manipulated by forcibly sending Ether.

**Example:**

```solidity
function isGameComplete() public view returns (bool) {
    return address(this).balance == 0;
}
```

**Solution:**

1. Don't rely on contract balance for logic
2. Use separate accounting variables
3. Be aware that contracts can receive Ether via selfdestruct or coinbase transactions

**Corrected Example:**

```solidity
uint256 private gamePool;

function deposit() public payable {
    gamePool += msg.value;
}

function withdraw(uint256 amount) public {
    require(amount <= gamePool, "Insufficient funds");
    gamePool -= amount;
    payable(msg.sender).transfer(amount);
}

function isGameComplete() public view returns (bool) {
    return gamePool == 0;
}
```

## Signature Replay Attacks

**Description:** Reusing a signature that was meant for one-time use across multiple transactions.

**Example:**

```solidity
function claimPayment(uint256 amount, bytes memory signature) public {
    address signer = recoverSigner(keccak256(abi.encodePacked(amount)), signature);
    require(signer == owner, "Invalid signature");
    payable(msg.sender).transfer(amount);
}
```

**Solution:**

1. Include nonces in signed messages
2. Add expiration timestamps
3. Track used signatures

**Corrected Example:**

```solidity
mapping(bytes32 => bool) public usedSignatures;

function claimPayment(uint256 amount, uint256 nonce, bytes memory signature) public {
    bytes32 message = keccak256(abi.encodePacked(msg.sender, amount, nonce));
    require(!usedSignatures[message], "Signature already used");

    address signer = recoverSigner(message, signature);
    require(signer == owner, "Invalid signature");

    usedSignatures[message] = true;
    payable(msg.sender).transfer(amount);
}
```

## Uninitialized Storage Variables

**Description:** Storage variables that are not properly initialized can lead to unexpected contract behavior.

**Example:**

```solidity
contract Vulnerable {
    address owner;

    function initialize() public {
        owner = msg.sender;
    }

    function withdraw() public {
        require(msg.sender == owner);
        payable(msg.sender).transfer(address(this).balance);
    }
}
```

**Solution:**

1. Initialize all storage variables
2. Use constructors for initialization instead of separate functions
3. For proxy contracts, use initializer modifiers from libraries like OpenZeppelin

**Corrected Example:**

```solidity
contract Fixed {
    address public owner;

    constructor() {
        owner = msg.sender;
    }

    function withdraw() public {
        require(msg.sender == owner, "Not authorized");
        payable(msg.sender).transfer(address(this).balance);
    }
}
```

## Default Visibility

**Description:** Functions without explicit visibility default to "public" in older Solidity versions.

**Example:**

```solidity
// Solidity < 0.5.0
function updateRate(uint256 newRate) { // Defaults to public
    rate = newRate;
}
```

**Solution:**

1. Always specify function visibility
2. Use the most restrictive visibility possible
3. Use newer Solidity versions that require explicit visibility

**Corrected Example:**

```solidity
function updateRate(uint256 newRate) private onlyOwner {
    rate = newRate;
}
```

## Tx.Origin Authentication

**Description:** Using tx.origin for authentication allows phishing attacks via malicious contracts.

**Example:**

```solidity
function transferFunds(address _to, uint256 _amount) public {
    require(tx.origin == owner);
    payable(_to).transfer(_amount);
}
```

**Solution:**

1. Use msg.sender instead of tx.origin for authentication
2. Implement multi-factor authentication for critical functions
3. Avoid tx.origin except in very specific use cases

**Corrected Example:**

```solidity
function transferFunds(address _to, uint256 _amount) public {
    require(msg.sender == owner, "Not authorized");
    payable(_to).transfer(_amount);
}
```

## Blockhash Manipulation

**Description:** Relying on block.blockhash for randomness is manipulable by miners.

**Example:**

```solidity
function generateRandomNumber() public view returns (uint256) {
    return uint256(keccak256(abi.encodePacked(block.blockhash(block.number - 1), msg.sender)));
}
```

**Solution:**

1. Use oracles like Chainlink VRF for secure randomness
2. Implement commit-reveal schemes for use cases where appropriate
3. Consider multi-block or multi-actor entropy for non-critical applications

**Corrected Example:**

```solidity
// Using Chainlink VRF
import "@chainlink/contracts/src/v0.8/VRFConsumerBase.sol";

contract SecureRandom is VRFConsumerBase {
    bytes32 internal keyHash;
    uint256 internal fee;
    uint256 public randomResult;

    constructor(address _vrfCoordinator, address _link, bytes32 _keyHash, uint256 _fee)
        VRFConsumerBase(_vrfCoordinator, _link) {
        keyHash = _keyHash;
        fee = _fee;
    }

    function getRandomNumber() public returns (bytes32 requestId) {
        require(LINK.balanceOf(address(this)) >= fee, "Not enough LINK");
        return requestRandomness(keyHash, fee);
    }

    function fulfillRandomness(bytes32 requestId, uint256 randomness) internal override {
        randomResult = randomness;
    }
}
```

## Delegate Call Vulnerabilities

**Description:** Using delegatecall improperly can lead to storage collisions and takeover of the calling contract.

**Example:**

```solidity
function delegateTransfer(address _logic, address _to, uint256 _amount) public {
    (bool success,) = _logic.delegatecall(
        abi.encodeWithSignature("transfer(address,uint256)", _to, _amount)
    );
    require(success, "Delegate call failed");
}
```

**Solution:**

1. Use well-audited libraries for delegatecall
2. Ensure storage layout is compatible
3. Never delegatecall to untrusted contracts
4. Use proxy patterns from established libraries like OpenZeppelin

**Corrected Example:**

```solidity
// Using OpenZeppelin's Proxy pattern
import "@openzeppelin/contracts/proxy/Proxy.sol";

contract SafeProxy is Proxy {
    address private immutable _implementation;

    constructor(address implementation) {
        _implementation = implementation;
    }

    function _implementation() internal view override returns (address) {
        return _implementation;
    }
}
```

## Flash Loan Attacks

**Description:** Exploiting contract vulnerabilities using large amounts of borrowed assets in a single transaction.

**Example:** Price oracle manipulation by taking a flash loan, manipulating market price, and exploiting systems dependent on that price.

**Solution:**

1. Use time-weighted average prices (TWAP)
2. Implement decentralized oracles
3. Add circuit breakers for extreme price movements
4. Use multiple price sources

**Example Implementation:**

```solidity
contract TWAPOracle {
    struct Observation {
        uint timestamp;
        uint price;
    }

    Observation[] public observations;
    uint public period = 1 hours;

    function update(uint price) external {
        observations.push(Observation({
            timestamp: block.timestamp,
            price: price
        }));
    }

    function consult() external view returns (uint) {
        uint length = observations.length;
        require(length > 0, "No observations");

        // Find observations within TWAP period
        uint timeWeightedPrice = 0;
        uint timeWeightedDivisor = 0;

        for (uint i = length - 1; i > 0; i--) {
            Observation memory current = observations[i];
            Observation memory previous = observations[i-1];

            if (previous.timestamp < block.timestamp - period) break;

            uint timeWeight = current.timestamp - previous.timestamp;
            timeWeightedPrice += current.price * timeWeight;
            timeWeightedDivisor += timeWeight;
        }

        return timeWeightedDivisor > 0 ? timeWeightedPrice / timeWeightedDivisor : 0;
    }
}
```

## Short Address Attack

**Description:** Exploits EVM padding when contract parameters don't validate input length.

**Example:** Sending a shortened address in a transaction which causes other parameters to be shifted.

**Solution:**

1. Validate input data length
2. Use correctly implemented libraries for external calls
3. Properly encode parameters using abi.encode

**Corrected Example:**

```solidity
function transfer(address _to, uint256 _value) public {
    // Validate address is correct length
    require(_to != address(0), "Invalid address");
    require(msg.data.length >= 68, "Invalid data length"); // 4 bytes function signature + 32 bytes address + 32 bytes value

    // Proceed with transfer
    balances[msg.sender] -= _value;
    balances[_to] += _value;
}
```

## Griefing Attacks

**Description:** Actions that don't benefit attackers but harm contract functionality for others.

**Example:** Spamming a contract with dust transactions to waste gas for other users.

**Solution:**

1. Implement minimum transaction amounts
2. Add rate limiting mechanisms
3. Design incentive-compatible mechanisms

**Example Implementation:**

```solidity
contract RateLimited {
    mapping(address => uint256) public lastActionTime;
    uint256 public actionTimeout = 1 hours;
    uint256 public minActionValue = 0.01 ether;

    modifier rateLimited() {
        require(msg.value >= minActionValue, "Value too small");
        require(block.timestamp >= lastActionTime[msg.sender] + actionTimeout, "Action rate limited");
        lastActionTime[msg.sender] = block.timestamp;
        _;
    }

    function performAction() external payable rateLimited {
        // Function logic here
    }
}
```
