import BFX from 'bitfinex-api-node'

let apiKey = '1';
let apiSecretKey = '2';

const bfxRest = new BFX(apiKey, apiSecretKey, {version: 1}).rest;

console.log(bfxRest);
// console.log("Vilkas pilkas");
// // const BFX = require('bitfinex-api-node');
//
// // https://api.bitfinex.com/v1/pubticker/symbol
//
// const BFX = require('bitfinex-api-node');
// const bfxRest = new BFX(apiKey, apiSecretKey, {version: 1}).rest;
// bfxRest.ticker('BTCUSD', (err, res) => {
//     if (err) {
//         console.log(err);
//     }
//     console.log(res);
// });