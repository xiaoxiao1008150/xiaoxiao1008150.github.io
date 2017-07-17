---
layout: post
title:  "jquery fn"
date:   2017-05-29 14:39:51 +0800
categories: jekyll update
---

### $.extnd $.fn.extend

* 扩展工具方法

```
$.extend({
    a:function(){
        alert(1);
    }
})

$.a();
```

* 扩展实例方法

```
$.fn.extend({
    a:function(){
        alert(2);
    }
})

$().a();
```

* $.extend 浅拷贝--修改a或者b彼此不会影响

```
var a = {};
var b = {name:'hh'};

$.extend(a,b);

```
> 当b为{name:{age:20}}，浅拷贝就不行了，要加true

```
var a = {};
var b = {name:{age:20}};

$.extend(true,a,b);
```

* Array.isArray -- 判断是不是数组

* isNumeric -- 判断是否是数字类型（typeof NaN）也是返回number


### 角度转弧度

```
Math.PI/180 * 角度

```

### 随机数

```
Math.round(Math.random()) -- [0,1]
Math.round(Math.random()*10) -- [0,10]

Math.round(Math.random()*5 + 5) -- [5,10]

```

* 随机数公式 x到y之间

```
function sj(x,y){
   Math.round(Math.random()*(y-x) + x) 
}


```

* 0-x

```
Math.round(Math.random()*x)

```

* 1-x

```
Math.ceil(Math.random()*x)

```
###jquery取值赋值

> jquery一般的val(),html()取值是只取第一个的值，
赋值是给所有的都赋，但是有一个特例，text(),取值赋值都是所有的选取元素

###remove() detach()

* 两个都是删除节点，但是remove不会保存事件，detach删除之后，再重新添加到文档
中的时候，会保持删除之前的事件

###加载

* window.onload 是文档中所有的内容都加载完成，$(function(){}),jquery
加载完，意思是不用等img,flash等加载完，只要dom加载完即可

### 火狐

* 火狐下获取可视区域的宽高用window.innerHeight和window.innerWidth

###DOMContentLoaded

* dom加载完毕即可，IE6,7,8不支持

```
addEvent(document,'DOMContentLoaded',function(){
    

})

```














