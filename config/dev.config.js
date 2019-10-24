const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: path.resolve(__dirname, "../src/index.js"),
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
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: "babel-loader",
        exclude: "/node_modules/"
      },
      { test: /\.ts$/, use: "ts-loader" },
      {
        test: /\.(less|css)?$/,
        loader: ["style-loader", "css-loader", "less-loader", "postcss-loader"]
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "../public/index.html")
    })
  ]
};
