'use strict'
const db = require('../../db/cli.json')
const co = require('co')
const prompt = require('co-prompt')
const _ = require('lodash')
const spawn = require('co-child-process')
const cp = require('child_process')
    // const result = ""

const clis = db.data

module.exports = () => (
    co(function*() {
        // const cliName = yield prompt('excute cliName: ')
        const cliList = ['pwd','ls']
        const { error, stdout, stderr } = yield cp.execSync("ls")
        // console.log(`error${error}`);
        console.dir(stdout);
        // console.log(`stderr${stderr}`);
    })
)
