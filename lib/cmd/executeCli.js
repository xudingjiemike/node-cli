'use strict'
const db = require('../../db/cli.json')
const co = require('co')
const prompt = require('co-prompt')
const _ = require('lodash')
const spawn = require('co-child-process')
const foreach = require('generator-foreach')
// const cp = require('child_process')
    // const result = ""

const clis = db.data

module.exports = () => (
    co(function*() {
        try{
            const cliName = yield prompt('excute cliName: ')
            const cliList = _.find(clis, {"name":cliName}).cli.split(",")
            console.log(cliList)
            yield *foreach(cliList, doCli)

            function *doCli(item){
                const cli = item.split(" ")
                const stdout1 = yield spawn(cli[0], _.tail(cli))
                console.dir(stdout1);
            }
        }catch(e){
            console.log(e)
        }


    })
)
