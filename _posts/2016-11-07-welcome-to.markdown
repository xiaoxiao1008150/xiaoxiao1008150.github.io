---
layout: post
title:  "data structure(2)"
date:   2016-11-07 14:39:51 +0800
categories: jekyll update
---





### ER model = entity relationship model

#### keys
1. uniquess:

    * key可以是独一的，也可以不是独一的
    * 如果key是独一的，所有的实体中的数据都是不能重复的

2. composite 

    * 一个组合key包含两个及两个以上的属性

### index 

1. 索引是一种数据结构，提升数据检索操作的速度

注：索引是有代价的，不能为了索引而索引

### Explain

1. explain 展示了query的执行计划

2. using 'Explain' during QA is better than in production

3. Mysql 5.6以下 ,explain 只能用于 SELECT queries,Mysql 5.6以上，全部可以

注意：

> Explain 不会执行你的query,但是会执行一部分
————nested subqueries are executed



### 数据库范式
```
第一范式：每个格子必须只有一个值 | 每列的值类型必须相同 | 行必须是独一的，不能出现两个相同的行
        比如说名字是一样的，那么必须增加unique id或者另外的列使名字成为unique,数据库能够区分
第二范式：所有的属性依赖于主键
    --第三范式比第二范式多了一个条件
第三范式：所有的列只能被主键列决定，不能被其他列决定
    --意思就是一个表中不能有两个以上的实体，插入，删除的时候会产生冗余和删除另外一个实体的信息
第四范式：不能有多值依赖
  --比如京东，一个人有多张银行账户，customer id,customer name,
customer bankaccount

```



### mongodb
1. 启动mongodb服务器 __mongod
2. 链接mongodb shell __mongo






















