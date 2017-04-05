1.coursea __并发课程
2.数据库设计及优化相关，资料再找
3.缓存相关————资料再找
4.消息队列需要在学习

HTTP:

http protocal:对于交流一系列的规则

TCP:connection Based Protocal__track stuff__三次握手

UDP:connectionless Protocal__not track stuff

DNS：Domain Name Service（UDP）
    __resloves names to IP address
    __www.yahoo.com >> 69.147.76.15


FTP:File Transfer Protocal(TCP)

IP Address
Port Number :0~65535
Socket

Wireshark/Ether eal:Packet Sniffer
##工具：netcat telnet

python 有一个 global interpreter lock__
不能使用多个cpu core

threads sloving the problem of blocking
can not concurrency is because of  block

def countdown(n):
    while n >0:
        yield n 
        n -=1

c = countdown(4)
c 的值是  <generator object countdown at 0x10dbb3fa0>
next(c)__4
next(c)__3

生成器本质是阻止函数运行，知道你调用next

###斐波那契函数


def fib(n):
    if n <=2:
        return 1
    else:
        return fib(n-1) + fib(n-2)