'use strict'
const dip = require('@ali/dip-sdk')

const getSchemaContent = function(schemaId) {
    return new Promise((reslove, reject) => {
        dip.schema.getContent(schemaId, (err, content) => {
            reslove(content)
        })
    })
}

module.exports = {
    getSchemaContent: getSchemaContent,
}
