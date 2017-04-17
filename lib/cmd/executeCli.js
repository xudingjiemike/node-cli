'use strict'
const db = require('../../db/cli.json')
const co = require('co')
const prompt = require('co-prompt')
const _ = require('lodash')
const spawn = require('co-child-process')
const cp = require('child_process')
    // const result = ""

const clis = db.data

const cliExec = (command) => {
    // const output = yield spawn(command)
    // console.log(output);

    cp.exec(command, {}, (err, stdout ,stedrr) => {
        console.log(`stdout${stdout}`)
        console.log(`stedrr${stedrr}`)
    })
}

module.exports = () => (
    co(function*() {
        // const cliName = yield prompt('excute cliName: ')
        const cliList = ['pwd','ls']

        _.forEach(cliList, function(value) {
            console.log(value);
            cp.exec(value , (error, stdout, stderr) => {
                if (error) {
                    console.error(`exec error: ${error}`);
                    return;
                }
                console.log(`stdout: ${stdout}`);
                console.log(`stderr: ${stderr}`);
                process.exit()
            //cliExec(value)
            })
        })


    })
)
