---
layout: post
title:  "webpack"
date:   2017-06-10 14:39:51 +0800
categories: jekyll update
---

```
{
  "name": "webpack-learning",
  "version": "1.0.0",
  "description": "",
  "main": "main.js",
  "scripts": {
    "dev": "webpack",
    "production": "NODE_ENV=production webpack",
    "watch": "webpack --watch"
  },
  "keywords": [],
  "author": "DawnyWu <superbatironmans5@gmail.com>",
  "license": "ISC",
  "devDependencies": {
    "babel-core": "^6.25.0",
    "babel-loader": "^7.0.0",
    "babel-preset-es2015": "^6.24.1",
    "css-loader": "^0.28.4",//webpack可以打包css文件
    "node-sass": "^4.5.3",
    "sass-loader": "^6.0.6",//把sass文件转化为css文件
    "style-loader": "^0.18.2",//将打包后的css样式添加给相应的dom
    "webpack": "^2.6.1"
  }
}
```

### sublime 命令

1. command + ,: 进入user设置模式
2. command + k + b :切换侧边栏模式
3. colopicker: command + shift + c
