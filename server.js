const express = require('express');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');

const app = express();
const config = require('./webpack.config.js'); // 获取配置文件
const compiler = webpack(config);

// 告知 express 使用webpack-dev-middleware,
// 以及将webpack.config.js 配置文件作为基础配置
app.use(
  webpackDevMiddleware(compiler, {
    publicPath: config.output.publicPath,
  })
)

app.listen(3000, function() {
  console.log('Example app listening on port  3000!\n');
})