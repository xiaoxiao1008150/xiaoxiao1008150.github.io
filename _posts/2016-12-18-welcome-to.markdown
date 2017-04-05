---
layout: post
title:  "数据库范式"
date:   2016-12-18 14:39:51 +0800
categories: jekyll update
---

### python接口程序 Python DB API:Python 

##### 访问数据库的统一接口规范
  1. 在mysql平台，可以下载mysql-connection
  2. pip install Pymysql，这个是python的mysql接口，可以直接操作数据库
  3. PyMySQL 是在 Python3.x 版本中用于连接 MySQL 服务器的一个库，Python2中则使用mysqldb。

### pip install Pymysql

```
import pymsql 
conn = pymsql.connect(
            host ='127.0.0.1',
            port =3306,
            user ='root',
            db ='test',
            charset ='utf8'
    )
cursor = conn.cursor()

sql = "select * from tb1"
sql_insert = "insert into tb1(username,age,salary) values('cuixiao',23,4545)"
sql_update = "update tb1 set username='wu' where username='Tom' 
sql_delete = "delete from tb1 where userid <3"
try:
    cursor.execute(sql)
    print cursor.rowcount
    cursor.execute(sql_insert)
    print cursor.rowcount
    cursor.execute(sql_update)
    print cursor.rowcount
    cursor.execute(sql_delete)
    print cursor.rowcount
except Exception as e:
    print e
    conn.rollback()

conn.commit()

cursor.close()
conn.close()

```


### 数据库优化
1. 优化目的——避免出现页面访问错误
    * 由于数据库连接timeout产生页面5xx错误
    * 由于慢查询造成页面无法加载
    * 由于阻塞造成数据无法提交

2. 数据优化方面
     + SQL及索引
    + 数据库结构
    + 系统配置fr
    + 硬件
3. 如何通过慢查日志发现有问题的查询
    +查询次数多并且每次查询的占用时间较长
    +IO大的SQL
    +未命中索引的SQL
4. 分析工具与方法
    + explain - 查询SQL的执行计划
    + max()查询 - 简历索引
    + 子查询 -用join
    
> select t.id from t join t1 on t.id = t1.tid
      select * from t where t.id in(select t1.tid from t1)
注意：使用join的时候可能会存在一对多的关系，会查询到一条以上的row,distinct去重复
    select distinct t.id from t join t1 on t.id = t1.tid
    +  group by -
  + limit - 使用索引的列或主键进行order by 操作

5. 表优化
    + 表的范式化 - 关联表单多，影响查询
    + 垂直拆分 - 解决表的宽度过宽问题































