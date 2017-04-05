---
layout: post
title:  "celery"
date:   2016-11-03 14:39:51 +0800
categories: jekyll update
---

### celery

1. 启动rabbit

2. rabbitmq-server

3. 文件 test.py


```
from celery import Celery

app = Celery('tasks', broker='amqp://guest@localhost//')

@app.task
def add(x, y):
    return x + y    
```

4. 启动celery任务:celery -A test worker --loglevel=info

> 注意：其中的test 是文件的名字

5. 配置backend 参照官网


6. 可以单独写配置文件 config.py

```
CELERY_RESULT_BACKEND = "database"
CELERY_RESULT_DBURL = "sqlite:///temp.db"
```


7. 在test.py文件中引入

```
from celery import Celery
app = Celery()
app.config_from_object('config')
@app.task
def.....
```





