'use strict'
 const http = require("http")
 const querystring = require("querystring")
 const url = "http://dip.alibaba-inc.com/api/v2/services/schema/mock/57548"
 http.get(url, function(response) {
     const body = []
     console.log(response.statusCode)
     console.log(response.headers)
     console.log(response)
     response.on('data', function (chunk) {
        body.push(chunk)
     })

     response.on('end', function () {
        body = Buffer.concat(body)
        console.log(body.toString())
    })
 })
