const HtmlWebpackPlugin = require('html-webpack-plugin');
const Path = require('path');
const Webpack = require('webpack');

module.exports = {
  entry: ["./app/index.jsx"],
  mode: process.env.NODE_ENV === 'production' ? 'production' : 'development',
  output: {
    path: Path.resolve(__dirname, 'build'),
    filename: 'bundle.js',
    publicPath: '/'
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  devtool: process.env.NODE_ENV === 'production' ? 'source-map' : 'inline-source-map',
  devServer: {
    historyApiFallback: true,
    host: '0.0.0.0',
    port: 8364,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
    ],
  },
  plugins: [
    new Webpack.ProvidePlugin({
      React: 'react'
    }),
    new HtmlWebpackPlugin({
      template: './app/index.html',
      filename: 'index.html',
      inject: 'body'
    })
  ]
};
