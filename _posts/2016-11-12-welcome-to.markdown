---
layout: post
title:  "process and thread"
date:   2016-11-12 14:39:51 +0800
categories: jekyll update
---

### 进程和线程区别
1. 定义

> Processes are the abstraction of running programs
Threads are the unit of execution in a process 

2. 区别

 * 地址空间和资源：子进程和父进程有不同的代码和数据空间，而多个线程则共享数据空间和资源
 * 调度和切换：线程上下文切换比进程上下文切换要快得多，因为进程要复制资源，等待操作系统分配空间
 * 通信：线程可以直接和其他线程通信，进程间通信要使用inter-processinter-pro
 * 创建：线程创建很简单，进程复制资源，并且要申请空间
 * 数量：进程有overhead,线程可以说是没有overhead的


3. 多线程的好处

* Parallelism,并发，每个线程有自己独立的虚拟化处理器，自己是一个 独立的可以调度的实体，同时可以运行多个处理器

* Blocking I/O————I/O阻塞：没有线程的话，I/O阻塞会暂停程序运行，
但是 对于线程来说，这个线程获取阻塞了，其他的线程还是可以继续运行

* 节省内存空间：线程是共享空间的

4. 多线程的问题

* 增加程序的复杂性，用到互斥和条件变量

* 线程有 program counter,异步阻塞中的每个线程的state,program counter会帮你完成




### what is async?(可以参照餐厅点餐的例子)

* single-threaded
* I/O concurrency
* non-blocking sockets


* epoll/kqueue

* event loop

> 异步通过callbakc 去实现，一些异步的框架
会通过操作系统来完成事件通知，通过使用一些平台的特殊
设施  比如 epoll ,kqueue，但是自己不用写，框架会帮你完成
当网络事件完场的时候，event loop回去执行这些callback
一直循环


### Async Frameworks
* Twisted
* Tornado
* asyncio

### 是否应该使用异步

#### 可以 异步可以处理很多的链接一次性，节省空间和资源
1. many connections
有很多的数据库操作的时候，充分利用cpu
2. slow backend

#### 不可以
1. 当你有足够的cpu时候，异步代码的复杂性不值得
2. no async driver,没有异步驱动的时候
eg:
mysql 是阻塞驱动 blocking driver
tornado框架，两者结合是不合理的

```
import asyncio

def test(loop):
    print('Hello Wprld')
    loop.call_later(2,test,loop)

loop = asyncio.get_event_loop()
test(loop)
loop.run_forever
```

### python GIL

```
import time
from threading import Thread
def countdown(n):
    while n > 0:
        n -=1

Count = 5000000

start = time.time()

t1 = Thread(target=countdown,args=(Count//2,))
t2 = Thread(target=countdown,args=(Count//2,))

end = time.time()
print(end-start)
```
<!-- countdown(Count) -->
























