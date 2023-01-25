//SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.17;

import "hardhat/console.sol";

contract sigmaPortal {
    uint256 totalSigmas;

    event NewSigma(address indexed from, uint256 timestamp, string message);

    /*
     * I created a struct here named Sigma.
     * A struct is basically a custom datatype where we can customize what we want to hold inside it.
     */
    struct Sigma {
        address waver; // The address of the user who waved.
        string message; // The message the user sent.
        uint256 timestamp; // The timestamp when the user waved.
    }

    /*
     * I declare a variable sigmas that lets me store an array of structs.
     * This is what lets me hold all the sigmas anyone ever sends to me!
     */
    Sigma[] sigmas;

    constructor() {
        console.log("yo yo, I'm a contract and I'm smart");
    }

    function sigma(string memory _message)public{
        totalSigmas += 1;
        console.log("%s is a SIGMA w/ message %s",msg.sender, _message);

        /*
         * This is where I actually store the wave data in the array.
         */
        sigmas.push(Sigma(msg.sender, _message, block.timestamp));

        emit NewSigma(msg.sender, block.timestamp, _message);
    }

    /*
     * I added a function getAllWaves which will return the struct array, waves, to us.
     * This will make it easy to retrieve the waves from our website!
     */
    function getAllSigmas() public view returns (Sigma[] memory) {
        return sigmas;
    }

    function getTotalSigmas() public view returns (uint256){
        console.log("We have %d Sigmas",totalSigmas);
        return totalSigmas;
    }
}