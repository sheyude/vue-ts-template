'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  NODE_EVENT: `"${process.env.NODE_EVENT}"`,
  NODE_LANG:`"${process.env.NODE_LANG}"`,
})
