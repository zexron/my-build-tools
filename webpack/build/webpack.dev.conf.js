/**
 * Author: xuning
 * Date: 2017-12-25.
 */
const path = require('path')
const webpack = require('webpack')
const merge = require('webpack-merge')
const utils = require('./utils')
const baseWebpackConfig = require('./webpack.base.conf')
const projectConfig = require('../config').build
const outputPath = require('../config').outputPath

module.exports = merge(baseWebpackConfig, {
  entry: projectConfig.entry,
  output: {
    path: outputPath,
    filename: '[name].js',
    chunkFilename: '[id].js',
    publicPath: '/'
  },
  devtool: 'cheap-module-eval-source-map',
  module: {
    rules: utils.styleLoaders({
      sourceMap: false,
      extract: false
    })
  },
  plugins: [
    // http://vuejs.github.io/vue-loader/en/workflow/production.html
    new webpack.DefinePlugin({
      'process.env': 'development'
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    // generate dist index.html with correct asset hash for caching.
    // you can customize output by editing /index.html
    // see https://github.com/ampedandwired/html-webpack-plugin
    ...utils.getSites(false),
    // keep module.id stable when vender modules does not change
    new webpack.HashedModuleIdsPlugin(),
  ]
})
