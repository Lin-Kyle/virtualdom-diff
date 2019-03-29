const path = require("path"),
  HtmlWebpackPlugin = require("html-webpack-plugin"),
  CleanWebpackPlugin = require("clean-webpack-plugin"),
  MiniCssExtractPlugin = require("mini-css-extract-plugin"),
  alias = require("./alias"),
  rules = require("./rules");

module.exports = {
  // 入口
  entry: "./src/index.js",
  // 输出
  output: {
    // 打包文件名
    filename: "[name].bundle.js",
    // 输出路径
    path: path.resolve(__dirname, "../dist"),
    // 资源请求路径
    publicPath: ""
  },
  module: {
    rules
  },
  plugins: [
    // 清除文件
    new CleanWebpackPlugin({
      dangerouslyAllowCleanPatternsOutsideProject: true,
      cleanOnceBeforeBuildPatterns: ["../dist/**"],
      dry: false
    }),
    // 提取样式文件
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename:
        process.env.NODE_ENV !== "PROD"
          ? "[name].css"
          : "style/[name].[contenthash].css",
      chunkFilename:
        process.env.NODE_ENV !== "PROD"
          ? "[id].css"
          : "style/[id].[contenthash].css"
    }),
    new HtmlWebpackPlugin({
      // title
      title: "test",
      // 模板
      template: "index.html"
    })
  ],
  resolve: {
    // 创建 import 或 require 的别名，来确保模块引入变得更简单
    alias
  }
};
