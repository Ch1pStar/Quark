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
  module: {
    loaders: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          loaders: [
              'babel-loader?cacheDirectory=true&presets[]=es2015&plugins[]=transform-class-properties',
              `preprocess?${JSON.stringify(config)}`,
          ],
        },
        {
            test: /\.(glsl|frag|vert)$/,
            exclude: /node_modules/,
            loaders: ['raw', 'glslify'],
        },
    ]
  }
};
