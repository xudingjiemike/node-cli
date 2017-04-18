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
        // const cliName = yield prompt('excute cliName: ')
        const cliList = ['pwd','ls']
        yield *foreach(cliList, doCli)

        function *doCli(item){
            const stdout1 = yield spawn(item)
            console.dir(stdout1);
        }

    })
)
