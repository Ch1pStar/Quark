const path      = require('path');
const fs        = require('fs');
const pkg       = require('./package.json');


const config = { pkg };

module.exports = {
  entry: __dirname+'/src/index.js',
  devtool: 'inline-source-map',
  output: {
    path: __dirname + '/dist',
    libraryTarget: 'umd',
    umdNamedDefine: true,
    filename: "quark.js"
  },
  mode: 'development',
  module: {
    rules: [
        {
          test: /\.js$/,
          exclude: /(node_modules|bower_components)/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['env']
            }
          }
        },
        {
            test: /\.(glsl|frag|vert)$/,
            exclude: /node_modules/,
            loaders: ['raw', 'glslify'],
        },
    ]
  }
};
