const path = require('path');
const fs = require('fs');
const pkg = require('./package.json');
const config = { pkg };

module.exports = {
  entry: './src/index.js',
  devtool: 'inline-source-map',
  output: {
    path: __dirname + '/dist',
    libraryTarget: 'umd',
    library: 'Quark',
    umdNamedDefine: true,
    filename: 'quark.js'
  },
  mode: 'development',
  module: {
    rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env']
            }
          }
        },
    ]
  }
};
