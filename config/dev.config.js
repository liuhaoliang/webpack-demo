const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "../dist")
    // publicPath: "/"
  },
  devServer: {
    contentBase: path.resolve(__dirname, "../dist"),
    compress: true,
    port: 9000
  },
  // optimization: {
  //   minimizer: [new UglifyJsPlugin()]
  // },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: "babel-loader",
        exclude: "/node_modules/"
      }
    ]
  },
  plugins: [
    new UglifyJsPlugin(),
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "../public/index.html")
    })
  ]
};