"use strict";

const debug = process.env.NODE_ENV !== "production";

const webpack = require('webpack');
const path = require('path');

module.exports = {
  devtool: debug ? 'inline-sourcemap' : false,
  entry: path.join(__dirname, 'src', 'client.js'),
  devServer: {
    inline: true,
    port: 3333,
    contentBase: "src/static/",
    historyApiFallback: {
      index: '/index-static.html'
    }
  },
  output: {
    path: path.join(__dirname, 'src', 'static', 'js'),
    publicPath: "/js/",
    filename: 'bundle.js'
  },
  module: {
    rules: [ {
      test: path.join(__dirname, 'src'),
      exclude: /node_modules/,
      use: [ {
        loader: 'react-hot-loader',
      },
        {
          loader: 'babel-loader',
          options: {
            presets: debug ? [ 'react', 'es2015', 'react-hmre' ] : [ 'react', 'es2015' ]
          }
        } ]
    }
    ]
  },
  plugins: debug ? [] : [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
    }),
    //"transform-class-properties",
    //new webpack.optimize.DedupePlugin(),
    // new webpack.optimize.OccurrenceOrderPlugin(),
    // new webpack.optimize.UglifyJsPlugin({
    //     compress: { warnings: false },
    //     mangle: true,
    //     sourcemap: false,
    //     beautify: false,
    //     dead_code: true
    // }),
  ]
};
