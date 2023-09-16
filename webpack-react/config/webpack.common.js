const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")

module.exports = {
  entry: {
    index: path.join(__dirname, "../src/index.js")
  },
  output: {
    filename: "[name].[hash:4].js",
    path: path.join(__dirname, "../dist"),
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "../template.html"),
      filename: "index.html",
    })
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)/,
        // loader: "babel-loader"
        use: "babel-loader" // 配置项改变，参考官方文档 https://webpack.js.org/concepts/#loaders
      }
    ]
  }
}