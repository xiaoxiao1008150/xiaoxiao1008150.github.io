---
layout: post
title:  "nginx相关"
date:   2017-09-16 14:39:51 +0800
categories: jekyll update
---

1. rpm -ql nginx :列出所有的nginx的相关文件路径
2. ngnix -V :列出所有需要编译的代码
3. x_forwarded_for:http头信息的一个属性，如果客户端到服务端中间有代理 服务器的时候，
x_forwarded_for的形式为 http_x_forwarded_for=client IP, Proxy(1)IP, Proxy(2)IP....

###进阶学习
1. 静态资源web服务
  * CDN:将资源进行多个地点的分布
  * 压缩: gzip 减少中间文件传输的大小
  * 浏览器缓存: 
```
cache control:查看浏览器端的缓存情况，服务器端设置了缓存之后，在响应给客户端的头信息里会有Cache-Control 和 
expires两项
Etag: （是一串字符串）
可以精确到秒，所以当浏览器端缓存已经失效的，会优先查看Etag，如果内容改变，重新返回内容，状态码200，没有改变
则返回 304，告知浏览器去缓存中拿数据
last_modified: (世界时间)精确到分
```
  * 跨域访问:浏览器本质是禁止的，会造成crsf攻击。Access-Control-Allow-Origin配置，nginx配置 add_headers
  * 防盗链: refer信息头，会记录本次请求的上一次请求的网址，如果发现是非同域的网址，就禁止返回403，资源不可用

2. 代理服务
  * 正向代理代理的对象是客户端，反向代理代理的对象是服务端，不需要关心服务端是那一台服务器
3. 负载均衡调度器SLB
4. 动态缓存

curl -I  只获取头信息
安装了 express genarator 之后
直接 express + 文件夹名称 
### node js qidong调试方式
1. 通过node启动
2. pm2

DEBUG=serve:* npm start

