const path = require('path'); //node.js path module
const HtmlWebapckPlugin = require('html-webpack-plugin');
module.exports = {
  entry: {
    index: './src/index.js',
  },
  output: {
    filename: '[name].[contenthash].js',
    path: path.resolve(__dirname,'dist'),
    clean: true,
    // publicPath: '/',
  },
  devtool: 'inline-source-map',
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    port: 9000,
    hot: true,
    watchContentBase: true
  },
  plugins: [
    new HtmlWebapckPlugin({
      title: 'caching'
    }),
  ],
  mode: 'development',
  module: { 
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource' // webpack5内置的Assets modules webpack4中使用file-loader
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'assets/resource' // 同上
      }
    ],
  },
  optimization: {
    runtimeChunk: 'single',
  }
};