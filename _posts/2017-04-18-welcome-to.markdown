---
layout: post
title:  "responsive image"
date:   2017-04-18 14:39:51 +0800
categories: jekyll update
---

### max-width:100%

* 比如说是一张360px,640px的图片，响应式设为  max-width=100%


### calc

> 注意： + 和 - 运算符两侧必须有一个空格。 （* 和 / 两旁不需要空格，因为这是关于否定（negation）歧义的问题）。例如， calc(100px - 10%) 有效， calc(100px-10%) 则无效。*


* 列子：三张图片平均分配，margin-right:10px

```
img{
  float:left;
  margin-right:10px;
  width: calc((100% - 20px)/3)

img:last-of-type{
  margin-right:0
}
}
```

> 网络使用图片的时候,顺序 svg-png-jpeg


### unicode 字符集

* 网站 ：[https://unicode-table.com](https://unicode-table.com)

### icon fonts

1. [https://css-tricks.com/examples/IconFont/](https://css-tricks.com/examples/IconFont/)


### inline svg and data url

> 减少http 请求