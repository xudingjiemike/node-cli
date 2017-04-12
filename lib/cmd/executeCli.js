'use strict'
const db = require('../../db/cli.json')
const co = require('co')
const prompt = require('co-prompt')
const _ = require('lodash')

const clis = db.data

module.exports = () => (
    co(function*(){
         const cliName = yield prompt('delet cliName: ')
         const cliObj = _.find(clis, {'name': cliName})
         if(cliObj){
             const cliList = cliObj.cli.split(",")
             _.forEach(cliList, (value) => {
                 console.log(value)
             })
         }
    })
)
