---
layout: post
title:  "npm workflow"
date:   2017-06-25 14:39:51 +0800
categories: jekyll update
---

1. "prestart": "",会再start之前先运行次命令
2.  "scss-con": "node-sass --watch process/scss --output-style expanded --source-map true process/scss/main.scss --output builds/development/css"
      --watch 实时监控
      --output-style expanded 输出的样式，有四种
      --source-map true 是否输出main.css.map问价，这样的话，在html文件中，chrome中链接的就是scss文件
3. "js-transform": "babel process/js/**/*.js --watch  
      --out-file builds/development/js/script.js --source-maps"
      -- watch 监控文件
      -- source-maps js map文件
      -- 安装了 babel-core babel-presets-2015
      "start" : "npm-run-all --parallel scss-con js-transform live-serverr",
      -- 所有的script可以一起执行 npm install npm-run-all

4. 多个任务执行也可以以这样的方式
```
  "scripts": {
    "start" : "npm-run-all --parallel dev:*",
    "dev:server": "live-server",
    "dev:scss-con": "node-sass --watch process/scss --output-style expanded --source-map true process/scss/main.scss --output builds/development/css",
    "dev:js-transform": "babel process/js/**/*.js --watch --out-file builds/development/js/script.js --source-maps"
  },

   "scripts": {
    "start": "npm-run-all --parallel scss-con js-transform server",
    "sass-dev": "node-sass --watch process/scss --output-style expanded --source-map true process/scss/main.scss --output builds/development/css",
    "js-transform": "babel process/js/**/*.js --watch --out-file builds/development/js/script.js --source-maps",
    "server": "live-server builds/development",
```
