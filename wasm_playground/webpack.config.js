const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  module: {
    rules: [
      { test: /\.ts$/, use: "awesome-typescript-loader" }
    ],
  },
  resolve: {
    extensions: [".js", ".ts"],
    fallback: {
      "path": require.resolve("path-browserify"), // needed for WASM generated js file
      "fs": false, // needed for WASM generated js file
    }
  },
  plugins: [
    new CopyWebpackPlugin({
      patterns: [
        { from: "../build/bin/main.wasm", to: "" }
      ]
    }),
    new HtmlWebpackPlugin({
      template: "./index.template.html"
    })
  ]
};