import  Block  from "./block.js";
import  Blockchain  from "./blockchain.js";

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