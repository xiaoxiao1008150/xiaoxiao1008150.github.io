---
layout: post
title:  "React webpack"
date:   2016-11-24 14:39:51 +0800
categories: jekyll update
---



### react webpack 
1. 创建react package create-react-app react-app

2. 启动本地服务器 npm strat




### webpack
1. npm init
2. npm install --save react react-dom
3. npm install --save-dev html-webpack-plugin webpack webpack-dev-server babel-{core,loader}
babel-preset-react
4. 配置APP folder，包括最基本的index.js（入口文件） index.html
5. 配置package.json 文件


主要是运行脚本

```
  "scripts": {
    "production":"webpack -p",
    "strat":"webpack-dev-server"
  }
```

6. 配置webapck.config.js文件 ，.babelrc  loader的文件要单独新建文件，写
7. 运行 npm run production 
会产生 dist 文件夹

8. npm run strat 新建本地server 

