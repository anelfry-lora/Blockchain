const SHA256 = require('crypto-js/sha256');

class Block {
    constructor(index, timestamp, data, previousHash = '') {
        this.index = index;
        this.timestamp = timestamp;
        this.data = data;
        this.previousHash = previousHash;
        this.hash = this.calculateHash();
    }

    calculateHash() {
        return SHA256(this.index + this.previousHash + this.timestamp + JSON.stringify(this.data)).toString();
    }
}

class Blockchain {
    constructor() {
        this.chain = [this.createGenesisBlock()];
    }

    createGenesisBlock() {
        return new Block(0, '08/03/2023', "Genessis block 😁", '0');
    }

    getLastetBlok() {
        return this.chain[this.chain.length - 1];
    }

    addBlock(newBlock) {
        newBlock.previousHash = this.getLastetBlok().hash;
        newBlock.hash = newBlock.calculateHash();
        this.chain.push(newBlock);
    }

    isChainValid() {
        for (let i = 1; i < this.chain.length; i++) {
            const currentBlock = this.chain[i];
            const previousBlock = this.chain[i - 1];

            if (currentBlock.hash !== currentBlock.calculateHash()) {
                return false;
            }

            if (currentBlock.previousHash !== previousBlock.hash) {
                return false;
            }
        }
        return true;
    }
}

let katanaCoin = new Blockchain();

//valid chain
katanaCoin.addBlock(new Block(1, "08/03/2023", { amount: 4 }));
katanaCoin.addBlock(new Block(2, "08/03/2023", { amount: 16 }));

console.log('Is blockchain valid?' + katanaCoin.isChainValid());

//Add invalid chain 
katanaCoin.chain[1].data = { amount: 100 };
katanaCoin.chain[1].hash = katanaCoin.chain[1].calculateHash();

console.log('Is blockchain valid?' + katanaCoin.isChainValid());

//console.log(JSON.stringify(katanaCoin, null, 4));