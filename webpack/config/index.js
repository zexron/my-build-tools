/**
 * Author: xuning
 * Date: 2017-11-21.
 */
const path = require('path')

module.exports = {
  // Output Folder
  outputPath: path.resolve(__dirname, '../dist'),

  dev: {
    // port for dev mode
    port: 5000
  },

  build: {
    // entries
    entry: {
      index: './src/index.ts'
    },

    // template html files
    sites: [
      {
        filename: 'pug.html',
        template: './pug/index.pug',

        // 上面entry定义的入口名
        chunks: ['index']
      },
      {
        filename: 'index.html',
        template: './index.html',

        // 上面entry定义的入口名
        chunks: ['index']
      }
    ],

    // For those not module-like packages
    // Will be run over in window environment
    globals: [
      // {
      //   module: 'zepto',
      //   name: 'Zepto'
      // }
    ],

    // For those modules under node_modules folder
    // which can't uglify since it's in es6 style
    resolves: [
      // '/node_modules/swiper/',
      // '/node_modules/dom7/'
    ],

    // Your absolute project path on the server
    assetsPublicPath: '/'
  }
}
