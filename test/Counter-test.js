const {expect} = require("chai");
const { ethers } = require("hardhat");

const hre = require("hardhat");

describe('Controller', () => {
    let Counter,counter;
    let owner,address1;
    beforeEach(async function(){
        [owner,address1] = await ethers.getSigners();
        Counter = await hre.ethers.getContractFactory("Counter");
        counter = await Counter.deploy();   
        await counter.deployed();
    });
    
    it('Should control increase or not.',async() => {
        let adding = 4;
        let total = parseInt(await counter.number())+parseInt(adding);
        await counter.connect(owner).increment(adding);
        
        console.log(`Total number should be ${total} for increment`);
        
        expect(await counter.number()).to.be.equal(total);
    });
    
    it('Should control decrease or not',async () => {
        let subs = 15;
        let total = parseInt(await counter.number())-parseInt(subs);
        await counter.connect(owner).decrement(subs);
        
        console.log(`Total number should be ${total} for decrement`);
        expect(await counter.number()).to.be.equal(total);
    });
    
    it('Should control that deployer and owner is same or not.',async () => {
        expect(await counter.own()).to.be.equal(address1.address);
    });
    
});
