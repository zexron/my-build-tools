/**
 * Author: xuning
 * Date: 2017-11-21.
 */
const path = require('path')

module.exports = {
  // 输出文件夹位置
  outputPath: path.resolve(__dirname, '../dist'),

  dev: {
    // 开发环境热更新本地服务器端口
    port: 5000
  },

  build: {
    // 入口js文件
    entry: {
      index: './src/index.js',
      test: './src/testTs.ts'
    },

    // 页面template文件
    sites: [
      {
        filename: 'index.html',
        template: './index.html',

        // 上面entry定义的入口名
        chunks: ['index', 'test']
      }
    ],

    // 无法正常webpack的全局变量包
    globals: [
      {
        module: 'zepto',
        name: 'Zepto'
      }
    ],

    // 输出后的资源文件夹绝对路径（项目为准）
    assetsPublicPath: '/weixin/dist/'
  }
}
