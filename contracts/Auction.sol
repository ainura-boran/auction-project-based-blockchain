pragma solidity ^0.8.28;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

contract Auction {
    IERC20 public immutable token;
    address public immutable seller;

    string public itemName;
    uint256 public endTime;
    bool public ended;
    address public highestBidder;
    uint256 public highestBid;

    mapping(address => uint256) public pendingTokenReturns;

    
}