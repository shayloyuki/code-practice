/*
 * @Date: 2023-09-16 14:05:37
 * @LastEditors: shayloyuki shayluo123@outlook.com
 * @LastEditTime: 2023-09-16 14:36:46
 * @FilePath: \webpack-react\config\webpack.dev.js
 */
const { merge } = require("webpack-merge")
const common = require("./webpack.common")

module.exports = merge(common, {
  mode: "development",
  devServer: {
    host: "localhost",
    port: "8888"
  }
})