'use strict'
const co = require('co')
const prompt = require('co-prompt')
const fs = require('fs')
const db = require('../../db/cli.json')
const chalk = require('chalk')
const _ = require('lodash')


const dbCli = db.data

module.exports = () => (
    co(function *() {
        const cliName = yield prompt('cliName: ')
        const clis = yield prompt('clis: ')

        if(!_.find(dbCli,{"name":clis})){
            const newCli = {}
            newCli.name = cliName
            newCli.cli = clis
            dbCli.push(newCli)

            fs.writeFile(__dirname + '/../../db/cli.json', JSON.stringify(db), 'utf-8', (err) => {
                if(err){
                  console.error(err)
                }else{
                  console.log(chalk.green("save !!!"))
                }
                console.log(chalk.blue(JSON.stringify(db)))
                process.exit()
            })

        }else{
            console.log(chalk.red("this cli have exist"))
            process.exit()
        }

    })
)
