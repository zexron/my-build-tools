/**
 * Author: xuning
 * Date: 2017-10-27.
 */
const path = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { outputPath, build } = require('../config')
const { sites, globals } = build

exports.getSites = function (minify) {
  return sites.map(({ filename, template, chunks }) => {
    return new HtmlWebpackPlugin({
      title: 'test',
      filename: path.join(outputPath, filename),
      template: path.join(__dirname, '../src', template),
      chunks: ['vendor', 'manifest', ...chunks],
      inject: true,
      minify: {
        removeComments: minify,
        collapseWhitespace: minify,
        removeAttributeQuotes: minify
        // more options:
        // https://github.com/kangax/html-minifier#options-quick-reference
      },
      // necessary to consistently work with multiple chunks via CommonsChunkPlugin
      chunksSortMode: 'dependency'
    })
  })
}

exports.moduleExportLoaders = function () {
  return globals.map(({ module, name }) => {
    return {
      test: require.resolve(module),
      use: [
        {
          loader: 'exports-loader',
          options: {
            ['window.' + name]: true
          }
        },
        {
          loader: 'script-loader'
        }
      ]
    }
  })
}

exports.cssLoaders = function (options) {
  options = options || {}

  const cssLoader = {
    loader: 'css-loader',
    options: {
      minimize: process.env.NODE_ENV === 'production',
      sourceMap: options.sourceMap
    }
  }

  // generate loader string to be used with extract text plugin
  function generateLoaders (loader, loaderOptions) {
    const loaders = [cssLoader]
    if (loader) {
      loaders.push({
        loader: loader + '-loader',
        options: Object.assign({}, loaderOptions, {
          sourceMap: options.sourceMap
        })
      })
    }

    // Extract CSS when that option is specified
    // (which is the case during production build)
    if (options.extract) {
      return ExtractTextPlugin.extract({
        use: loaders,
        fallback: 'style-loader'
      })
    } else {
      return ['style-loader'].concat(loaders)
    }
  }

  // https://vue-loader.vuejs.org/en/configurations/extract-css.html
  return {
    css: generateLoaders(),
    postcss: generateLoaders(),
    less: generateLoaders('less'),
    sass: generateLoaders('sass', { indentedSyntax: true }),
    scss: generateLoaders('sass'),
    stylus: generateLoaders('stylus'),
    styl: generateLoaders('stylus')
  }
}

// Generate loaders for standalone style files (outside of .vue)
exports.styleLoaders = function (options) {
  const output = []
  const loaders = exports.cssLoaders(options)
  for (const extension in loaders) {
    const loader = loaders[extension]
    output.push({
      test: new RegExp('\\.' + extension + '$'),
      use: loader
    })
  }
  return output
}
