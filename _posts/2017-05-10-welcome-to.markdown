---
layout: post
title:  "js code"
date:   2017-05-10 14:39:51 +0800
categories: jekyll update
---



### BOM（Broswer Object Model）

* window.open
* window.close
* window.location

### 窗口尺寸

* 可视区域：

```
document.documentElement.clientWidth
document.documentElement.clientHeight

```

* 滚动条滚动高度

```
document.documentElement.scrollTop

<!-- chrome -->
document.body.scrollTop 

```

* 内容高度

> 除边框外内部内容的高度

```
document.body.scrollHeight
```

* 获取文档高度的时候

> document.documentElement.offsetHeight 会出现兼容问题
  可使用 document.body.offsetHeight


### event 绑定

1. 给一个对象绑定事件函数的第一种形式

```
obj.onclick = fn1;
obj.onclick = fn2;
```
> 此种形式相当于是给对象事件赋值，因此fn2会覆盖fn1，因此
  只会执行fn2

2. 第二种形式

```
<!-- ie -->
obj.attachEvent('onclick',fn1);
obj.attachEvent('onclick',fn2);

<!-- 标准 -->
obj.addEventListener('click',fn1);
obj.addEventListener('click',fn2);

```

> 此种形式fn1 fn2 都会执行

3. 两种方法的兼容


```
<!-- ie下调用的时候（attachEvent）this指向的不是调用的obj
而是window,兼容的时候要考虑到改变 -->

function bind(obj,evname,fn){
  if(obj.addEventListener){
    obj.addEventListener(evname,fn,false);
  }else{
    obj.attachEvent('on'+evname,function(){
      fn.call(obj);
    })
  }
}

bind(obj,evname,fn1);
bind(obj,evname,fn2);

```
### cookie

* cookie 存储数据到用户的电脑上

```
1. 不同的浏览器存放cookie的位置不一样，也是不同通用的
2. cookie的存储是以域名形式区分的
3. cookie是以键值对存储数据的
4. 一个域名下存放的cookie个数是有限的，不同的浏览器存放的个数不一样
5. 每个cookie存放的内容大小也是有限制的，不同的浏览器存放大小不一样
6. cookie默认是临时存储的，关闭浏览器（不是窗口）的时候，会被清掉

注意：通过document.cookie获取当前网站下的cookie的时候，得到的字符串形式的值，
包含当前网站所有的cookie,所有的cookie依次通过“；+ 空格”连接起来
```
> document.cookie会获取当前域名下所有的cookie,但只是名字的连接

* 当有特殊字符，比如中文的时候，需要编码存放，解码输出

```
document.cookie = 'username=' + encodeURI('leo\n你好') + ';expires=' + oDate.toGMTString();

<!-- 读取 -->
decodeURI(document.cookie)

```

* set and get cookie

```
function getCookie(key){
  
  var arr1 = document.cookie.split('; ');
  for(var i=0;i<arr1.length;i++){
    var arr2 = arr1[i].split('=');
    if(arr2[0]==key){
      return decodeURI(arr2[1]);
    }
  }
}

getCookie('username')


function setCookie(key,value,time){
  var oDate = new Date();
  oDate.setDate(oDate.getDate() + time);

  document.cookie = key + '=' + value + ';expires=' + oDate.toGMTString();
}

setCookie('age','20',5)



<!-- delete Cookie -->
function removeCookie(key){
  setCookie(key,'',-1)
}
```








