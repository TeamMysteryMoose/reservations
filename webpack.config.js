var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'client/public');
var APP_DIR = path.resolve(__dirname, 'client/app');

var config = {
  entry: APP_DIR + '/app.jsx',
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js'
  },
  module: {
    rules: [
      { test: /\.jsx$/,  include : APP_DIR,
      loader : 'babel-loader'
    },
    {
      test: /\.css$/, include: APP_DIR,
      use: [ 'style-loader', 'css-loader' ]
    }
    ]
  }
};

module.exports = config;