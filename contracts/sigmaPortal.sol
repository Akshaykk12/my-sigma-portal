//SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.17;

import "hardhat/console.sol";

contract sigmaPortal {
    uint256 totalSigmas;

    constructor() {
        console.log("yo yo, I'm a contract and I'm smart");
    }

    function sigma()public{
        totalSigmas += 1;
        console.log("%s is a SIGMA",msg.sender);
    }

    function getTotalSigmas() public view returns (uint256){
        console.log("We have %d Sigmas",totalSigmas);
        return totalSigmas;
    }
}