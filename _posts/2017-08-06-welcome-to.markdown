---
layout: post
title:  "网站性能优化方法"
date:   2017-08-06 14:39:51 +0800
categories: jekyll update
---
### 方法
参考网址: [https://webdesign.tutsplus.com/articles/best-practices-for-increasing-website-performance--webdesign-9109](https://webdesign.tutsplus.com/articles/best-practices-for-increasing-website-performance--webdesign-9109)
1. 减少http请求的次数;
2. 压缩文件(css/html/javascript等);
3. 优化图片(css方法，sprites,在线工具优化);
4. Data URLs;
5. 延迟解析Javascript(脚本放在最后);
6. 避免错误的请求(一些网址已经不再使用,应该及时处理);
7. CDN(内容分发网络);
8. 缓存:服务器和浏览器都有缓存机制
9. 避免css表达式：对css的求值频繁
10. 减少DNS查找(减少域名)
11. 避免重定向
12. 使用AJax缓存(压缩/避免重定向/Etag):结合其他一些规则
13. 并行下载：增加主机(HTTP1.0建议每个主机并行下载4个组件，HTTP1.1是2个)


//高性能JavaScript、高性能网站进阶指南、Web性能实践日志、Web性能权威指南等


### 相关代码
1. Expires Header:未来的一个固定的日期,绝对日期
2. Cache-Control: Cache-Control：max-age=’秒数‘,相对日期
3. 以上两者可以同时设置，Cache-Control具有优先权
4. 缓存包括图片，css,js,flash静态不易发生变化的文件，html文件一般是动态的，因此不宜设置缓存
5. Accept-Encoding:客户端和服务器端都要设置，服务器会根据客户端设置的压缩格式对文件进行压缩
6. Vary:Accept-Encoding,代理缓存，代理会根据Accept-Encoding的不同而储存压缩和未压缩的版本发送给相关的客户端
7. 并行下载:每个主机名可以同时下载2个组件(数字不一定),但是不是主机越多也好，要考虑到带宽和cpu的速度
8. 确定是否缓存是否过期有两种形式：
    -最新修改日期(Last_modefied Date)，缓存之后，浏览器会使用If-Modified-Since将最新的修改日期传回到原始服务器比较，如果两者匹配，返回304(Not Modefined)
    -实体标签(Entity Tags),缓存之后，浏览器会使用If-None-Match将最新的修改日期传回到原始服务器比较，如果两者匹配，返回304(Not Modefined)
    - 两个都设置的话，实体标签的优先级高







