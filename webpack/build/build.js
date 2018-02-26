/**
 * Author: xuning
 * Date: 2017-10-27.
 */
const path = require('path')
const fs = require('fs')
const rm = require('rimraf')
const webpack = require('webpack')
const webpackConfig = require('./webpack.prod.conf')
const outputPath = require('../config').outputPath

rm(`${outputPath}/**`, err => {
  if (err) throw err

  fs.mkdirSync(outputPath)

  webpack(webpackConfig, function (err, stats) {
    if (err) throw err
    process.stdout.write(stats.toString({
      colors: true,
      modules: false,
      children: false,
      chunks: false,
      chunkModules: false
    }) + '\n\n')

    if (stats.hasErrors()) {
      console.log('  Build failed with errors.\n')
      process.exit(1)
    }

    console.log(('  Build complete.\n'))
    console.log((
      '  Tip: built files are meant to be served over an HTTP server.\n' +
      '  Opening index.html over file:// won\'t work.\n'
    ))
  })
})
