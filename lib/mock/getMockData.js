'use strict'
//  const http = require("http")
//  const querystring = require("querystring")
//  let str = '';
//  const  options = {
//        host: 'dip.taobao.net',
//        path: '/api/v2/services/schema/mock/57548'
//  };
//  const callback = function(response) {
//
//   response.on('data', function (chunk) {
//     str += chunk;
//   });
//
//   response.on('end', function () {
//     console.log(req.data);
//     console.log(str);
//   });
// }
//
// const req = http.request(options, callback).end();

const dip = require( '@ali/dip-sdk' )
const path = require('path');
console.log(process.env.PATH);
