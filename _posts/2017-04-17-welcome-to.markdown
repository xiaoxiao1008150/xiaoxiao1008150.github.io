---
layout: post
title:  "跨域"
date:   2017-04-17 14:39:51 +0800
categories: jekyll update
---

### 跨域概念

* 概念：只要协议、域名、端口有任何一个不同，都被当作是不同的域。

### 解决办法

#### 1.跨域资源共享 （CORS）

* 定义在访问跨域资源时候，浏览器与服务器如何沟通
* 服务器对于CORS的支持，主要是通过设置 Access-Control-Allow-Origin
  来进行的。如果浏览器检测到相应的设置，就可以允许Ajax跨域访问
* 对Ie的支持有限，IE10以上，IE8部分支持，查看“can i use”


#### 2.jsonp


### CORS JSONP对比

```
    1.JSONP只能实现GET请求，而CORS支持所有类型的HTTP请求。

    2.使用CORS，开发者可以使用普通的XMLHttpRequest发起请求和获得数据，比起JSONP有更好的错误处理。

    3.JSONP主要被老的浏览器支持，它们往往不支持CORS，而绝大多数现代浏览器都已经支持了CORS）。
```

#### 3.iframe

> 使用iframe 要用到降域的设置，因此此方法有个限制，就是需要发起请求的url和请求的url两者必须有
  共同的父域。

```
a.jrg.com //降域：jrg.com
b.jrg.com //降域：jrg.com
jrg.com //

```

#### 4.postMessage

> 此方法不受同父域的限制


### IE6对ajax支持不是很好

> IE7和IE8下要实现跨域的话，不支持服务器的header设置
，推荐使用微软出的XDOMainRequest对象


