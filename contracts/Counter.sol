// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

contract Counter {
    uint public number;
    address public own;
    
    constructor(){
        number = 100;
        own = msg.sender;
    }
    function increment(uint _number) public onlyOwner(_number){
        number += _number;
    }

    function decrement(uint _number) public onlyOwner(_number){
        number -= _number;
    }

    modifier onlyOwner(uint _number) {
        if(_number > 5){
           require(own == msg.sender,"You are not owner"); 
        }
        _;

    }

}