---
layout: post
title:  "Angular2 material install"
date:   2017-03-11 14:39:51 +0800
categories: jekyll update
---

### step

* 1.install angular2/material，hammerjs
* 2.app.module.ts 配置
* 3.因为安装了hammerjs,所以在tsconfig.json文件也需要相应的设置
* 4.在文件最后，加上 “types":["hammerjs"]


### theam-customize

* 1.在style.css同目录下，新增文件，customize.scss
* 2.angular-cli.json 将新增的文件加入到style中

`注意：查找颜色在[https://material.io/guidelines/style/color.html#](https://material.io/guidelines/style/color.html#)`

