// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract TemplateToken is ERC20 {

    constructor(
        string memory name_, 
        string memory symbol_,
        address minter,
        uint256 initNum
    ) ERC20(name_, symbol_) {
        _mint(minter, initNum*10**18);
    }
}
