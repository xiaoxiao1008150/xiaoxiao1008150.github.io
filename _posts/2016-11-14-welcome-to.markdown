---
layout: post
title:  "Python socket code"
date:   2016-11-14 14:39:51 +0800
categories: jekyll update
---
### socket
1. import socket

2. 

```
s = socket.socket(socket.AF_INET,socket.SOCK_STREAM)

server = 'www.baidu.com'

port = 80

request = "GET / HTTP/1.1\nHost: " +server+ "\n\n"

s.connect((server,port))
s.send(request.encode())
result = s.recv(1024)
```