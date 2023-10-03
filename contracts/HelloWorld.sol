// SPDX-License-Identifier: GPL-3.0
import "@openzeppelin/contracts/access/Ownable.sol";
pragma solidity >=0.8.2 <0.9.0;

contract HelloWorld is Ownable {
    bytes32 text;

    modifier onlyOwnerCan() {
        require(msg.sender == owner(), "Caller is not the owner");
        _;
    }

    function helloWorld() public pure returns (bytes32) {
        return "Hello World!";
    }

    function store(bytes32 txt) public {
        text = txt;
    }

    function customTransferOwnership(address newOwner) public onlyOwnerCan {
        transferOwnership(newOwner);
    }
}
