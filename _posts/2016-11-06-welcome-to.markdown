---
layout: post
title:  "data structure"
date:   2016-11-24 14:39:51 +0800
categories: jekyll update
---

### collections
#### list:no fixed length ,add

1. arrays
insertion delete big  O(n)
储存的  value

2. linked lists
insertion delete __constant time
增加或删除元素的时候，会改变指引
储存的 value  reference(to the nexr element)

3. stack
last in ,first out__LIFO

4. queue
一般的 first in, frist out，但是还有其他的实现形式
priority queue

### map
1. set 
no order,但是值不能重复



2. map 
key ,value，key不能重复


### hash


> Hash，一般翻译做“散列”，也有直接音译为“哈希”的，就是把任意长度的输入（又叫做预映射， pre-image），通过散列算法，变换成固定长度的输出，该输出就是散列值。这种转换是一种压缩映射，也就是，散列值的空间通常远小于输入的空间，不同的输入可能会散列成相同的输出，所以不可能从散列值来唯一的确定输入值。简单的说就是一种将任意长度的消息压缩到某一固定长度的消息摘要的函数。


注意：hash之后的值有可能是一样的，两种策略，一种改变输入值，一种改变hash function


### tree
1. an normal order  -----O(n)
2. insert 

3. 找node最多的一条线，假设拿二叉树来说，需要找的次数是此条线的高度
假设节点数是 n,那么高度就是log(n)

4. 一个tree,所有的node必须链接，不能有cycle

5. 二叉树的分支————二叉查找树

二叉查找树有一定的规则，左边的值小于右边的值

    * select，insert 效率是树的高度，O(log(n)),delete情况不一定
    * 不平衡的二叉查找树，最坏的情况是只有一个分支，这时候的情况相当于list，
    * select,insert ,delete 都是（log（n））

6. heap

> 任意节点小于（或大于）它的所有后裔，最小元（或最大元）在堆的根上（堆序性）。
堆总是一棵完全树。即除了最底层，其他层的节点都被元素填满，且最底层尽可能地从左到右填入。


