/**
 * Author: xuning
 * Date: 2017-10-27.
 */
const path = require('path')
const utils = require('./utils')
const projectConfig = require('../config').build
const outputPath = require('../config').outputPath

function resolve (dir) {
  return path.join(__dirname, '..', dir)
}

module.exports = {
  entry: projectConfig.entry,
  output: {
    path: outputPath,
    filename: 'static/js/[name].js',
    // publicPath: projectConfig.assetsPublicPath
  },
  resolve: {
    extensions: ['.ts', '.js', '.json']
  },
  // devtool: 'source-map',
  module: {
    rules: [
      ...utils.moduleExportLoaders(),
      {
        test: /\.tsx?$/,
        use: [
          // {
            // loader: 'babel-loader'
          // },
          {
            loader: 'awesome-typescript-loader',
          },
        ],
        include: [resolve('src')]
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: [resolve('src')]
      },
      {
        test: /\.html$/,
        loader: 'html-loader',
        include: [resolve('src')]
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: 'static/img/[name].[hash:7].[ext]'
        }
      },
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: 'static/media/[name].[hash:7].[ext]'
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: 'static/fonts/[name].[hash:7].[ext]'
        }
      }
    ]
  }
}
