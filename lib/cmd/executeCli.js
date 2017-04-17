'use strict'
const db = require('../../db/cli.json')
const co = require('co')
const prompt = require('co-prompt')
const _ = require('lodash')
const spawn = require('co-child-process')
    // const result = ""

const clis = db.data

module.exports = () => (
    co(function*() {
        const cliName = yield prompt('excute cliName: ')
        const output = yield spawn('pwd,ls')
        console.log(`output ${output}`)


        const cliObj = _.find(clis, {
            'name': cliName
        })
        console.log(`cliObj ${cliObj}`);
        if (cliObj) {

            // const output = yield spawn(cliObj.cli)
            // console.log(`output ${output}`)
            // const cliList = cliObj.cli.split(",")
            // _.forEach(cliList, (value) => {
            //     const output = yield spawn(value)
            //     console.log(output)
            // })

        }

            process.exit()
    })
)
