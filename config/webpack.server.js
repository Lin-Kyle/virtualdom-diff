const path = require('path'),
  webpack = require('webpack'),
  merge = require('webpack-merge'),
  common = require('./webpack.common.js'),
  BundleAnalyzerPlugin = require('webpack-bundle-analyzer')
  .BundleAnalyzerPlugin;

module.exports = merge(common, {
  mode: "development",
  // 原始源代码（仅限行）
  devtool: "cheap-module-eval-source-map",
  devServer: {
    // 打开模式, Iframe mode和Inline mode最后达到的效果都是一样的，都是监听文件的变化，然后再将编译后的文件推送到前端，完成页面的reload的
    inline: true,
    // 指定了服务器资源的根目录
    contentBase: path.join(__dirname, '../dist'),
    // 是否开启gzip压缩
    compress: false,
    port: 9000,
    host: 'localhost',
    // 是否开启热替换功能
    // hot: true,
    // 是否自动打开页面,可以传入指定浏览器名字打开
    open: false,
    // 是否开启部分热替换功能
    hotOnly: true,
    /* proxy: {
      '/api': {
        // 代理地址
        target: 'http://alpha.xiaohuxi.cn',
        changeOrigin: true,
        // 默认情况下，不接受运行在 HTTPS 上，且使用了无效证书的后端服务器。如果你想要接受
        secure: true,
        // 重写路径
        pathRewrite: {
          '^/api': ''
        },
      }
    } */
  },
  plugins: [
    // 热替换模块
    new webpack.HotModuleReplacementPlugin(),
    // 性能可视化
    // new BundleAnalyzerPlugin()
  ]
});