---
layout: post
title:  "Javascript Asynchronous  "
date:   2017-04-13 14:39:51 +0800
categories: jekyll update
---


### ajax

```
  
var url = 'http://58ca17561155bc12004f359d.mockapi.io/order/restaurant'



var http = new XMLHttpRequest();

http.onreadystatechange = function(){
  
  if(http.readyState ==4 && http.status == 200){
    console.log(JSON.parse(http.response))
  }
}


http.open('GET',url,false)

http.send();


console.log('test')

```



### javascript callback

> callback：A reference to executable code, or a piece of executable code, that is passed as an argument to other code.

> callback 本身只是一个函数，没有同步异步的说法。


#### 看forEach 和 setTimeout 两个方法，他们自己背后的机制forEach是同步的，

setTimeout是异步的，会分配到另外一个线程去工作，完了之后会，setTimeout的回调函数会被触发，回到主线程继续工作


而 forEach 是同步的，本身会再主线程工作，完成之后触发回调函数，还是在主线程

```

//回调函数，是同步的

var arr = [1,2,3]

arr.forEach(function(item){
  console.log(item)
})

console.log('test')



// 回调函数 异步



setTimeout(function(){
  console.log('1s later')
},0)

console.log('test')

```