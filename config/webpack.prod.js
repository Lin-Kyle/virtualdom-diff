const merge = require("webpack-merge"),
  common = require("./webpack.common.js"),
  OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin");

module.exports = merge(common, {
  mode: "production",
  // 原始源代码
  devtool: "source-map",
  plugins: [new OptimizeCssAssetsPlugin()]
});
