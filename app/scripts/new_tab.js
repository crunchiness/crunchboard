// import BFX from 'bitfinex-api-node'

// let apiKey = '1';
// let apiSecretKey = '2';
//
// const bfxRest = new BFX(apiKey, apiSecretKey, {version: 1}).rest;
//
// console.log(bfxRest);
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

// All examples assume the following:
// 1. You already have the request object available
// 2. You have the url variable
// 3. Will use BTCUSD as the default symbol

import request from 'request';
const url = "https://api.bitfinex.com/v2/";

// request
request.get(`${url}/ticker/tBTCUSD`,
    (error, response, body) => {
        console.log(body)
    });
