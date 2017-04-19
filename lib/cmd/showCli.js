'use strict'
const db = require('../../db/cli.json')
const co = require('co')
const _ = require('lodash')
const chalk = require('chalk')

const clis = db.data

module.exports = () => {
    console.log(chalk.yellow(`show all clis`))
    _.forEach(clis, (value, key) => {
        console.log(chalk.magenta(`${value.name}=================>${value.cli}`))
    })
}
