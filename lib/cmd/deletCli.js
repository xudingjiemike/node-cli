'use strict'
const co = require('co')
const prompt = require('co-prompt')
const db = require('../../db/cli.json')
const fs = require('fs')
const chalk = require('chalk')
const _ = require('lodash')

const dbCli = db.data

module.exports = () => (
    co(function *() {
        const cliName = yield prompt('delete cliName: ')
        const deletCLi = _.find(dbCli,{"name":clis})
        if(deletCLi){
            _.pull(dbCli, deletCLi)
            console.log(chalk.blue(JSON.stringify(dbCli)))
            fs.writeFile(__dirname + '/../../db/cli.json', JSON.stringify(dbCli) , 'utf-8' , (err) => {
                if(err){
                    console.log(chalk.red(err));
                }
                process.exit()
            })

        }else{
            console.log(chalk.red("this cli have't exist"))
            process.exit()
        }

    })
)
