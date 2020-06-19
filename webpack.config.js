const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  devServer:{
    open: true,
    contentBase:"dist",
  },
  entry: "./src/index.js",
  output:{
    filename: "main.js",
    path: path.resolve(__dirname, "dist")
  },
  plugins:[
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      filename: "index.html"
    })
  ],
  module:{
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader',
        ],
      },
    ],
  }
}