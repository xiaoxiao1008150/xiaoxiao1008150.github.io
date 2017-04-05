---
layout: post
title:  "Python crawler"
date:   2016-11-16 14:39:51 +0800
categories: jekyll update
---


### 基本库
1. urllib
2. request
3. html解析:BeautifulSoup

### 网络连接
1. socket

2. telnet工具
eg.
* telnet www.baidu.com 80(连接到一个网站)
* GET http://www.gss/html HTTP/1.0,必须请求一个URL资源

3. 用socket模拟一个客户端

```
import  socket

mysock = socket.socket(socket.AF_INEF,socket.SOCK_STREAM)
mysock.connect(('www.jd.com/',80))
mysock.send('GET http://www.' HTTP/1.0\n\n)
while True:
    data = mysock.recv(512)
    if(len(data)<1)
        break
    print data;
mysocket.close()
```

### wire format

##### wire format is used for applications to exchange data

1. xml
2. json













