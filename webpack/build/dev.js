/**
 * Author: xuning
 * Date: 2017-11-21.
 */
const WebpackDevServer = require('webpack-dev-server')
const webpack = require('webpack')

const config = require('./webpack.dev.conf')
const {port} = require('../config').dev
const options = {
  contentBase: '../dist',
  hot: true,
  host: 'localhost'
}

WebpackDevServer.addDevServerEntrypoints(config, options)
const compiler = webpack(config)
const server = new WebpackDevServer(compiler, options)

server.listen(port, 'localhost', () => {
  console.log('dev server listening on port 5000')
})
