---
layout: post
title:  "database optimize"
date:   2016-12-21 14:39:51 +0800
categories: jekyll update
---

### Inter process Communication

* IPC - OS support mechanisms for interction among process
(coordination & commnication)
* -message passing
eg:sockets pipes messages quenes
* -memory_based 
eg: shared memory,
* -sychronization
* -higher_level semantics
eg:files RPC


### 数据库优化
* 定位执行效率低的SQL 
    -慢查询日志  show status
    -show  processlist  (mysql后台处理的线程)
* 分析SQL执行计划
    -explain
    -desc
* show profile 分析SQL
    -select @@have_profiling;
    select profiling;
    返回时0，进行开启设置
    set profiling = 1；
    select count(*) from tb1;
    show profiles
    show profile for query 2













