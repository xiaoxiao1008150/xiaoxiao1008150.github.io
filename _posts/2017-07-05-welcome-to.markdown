---
layout: post
title:  "webpack relative  code "
date:   2017-07-05 14:39:51 +0800
categories: jekyll update
---

### webpack validator
 用于验证webpack信息

### webpack Dev server 
1. webpack dev server 会实时的解析打包文件，整个过程的文件储存是在内存中完成别的
正常情况下的webpack 打包文件是储存在电脑的disk上的，因此当运行webpack dev server
的时候，是看不到bundle之后的文件的
2. webpack默认的publicPath是根目录 ‘/’, 所有的打包文件在内存中也会储存在根目录下，因为在
webpack Dev server 打开的时候，webpack第一次存储的打包文件是从文件系统加载的，之后的打包文件会
在内存中的publicPath下实时改变，确保html文件的link引入正确的文件路径，会无刷新改变值（不用加hot moudle）。

### webpack 
1. webpack -p : 缩写的production,插件，loader的表现会以生产环境的为准，会有一些变化对比开发环境
```
"scripts": {
    "build": "webpack -p"
  },
```

### devtool
1. 开发环境的souceMap的配置，可以链接到原文件，app.js，否则就是bundle.js。
```
<!-- dev -->
  devtool:'eval',

<!-- prop -->
  devtool:'eval',

```
### env 变量
1. env.dev 和 env.prod是webpack的一个变量
```
<!-- package.json -->
 "scripts": {
    "start": "webpack-dev-server --env.dev",
    "build": "webpack -p --env.prod",
    "build:dev" :"webpack --env.dev"
  },

<!-- webpack.config.js -->
devtool: env.prod ? 'source-map' : 'eval',

```
### pathinfo
* 比如说两个文件，app.js,helper.js,app.js依赖helper.js ，此时，设置 了
pathinfo，在chrome开发工具面板里面可以看到明确的依赖文件名字，否则就是webpack默认的
形式。

### tree shaking
* 不需要代码的清除，在生产环境的时候会自行调用ugligy插件进行清除，目前不能用于jquery,lodash
等库的清除
DOMContentLoaded













