---
layout: post
title:  "js系统时间对象"
date:   2017-05-28 14:39:51 +0800
categories: jekyll update
---

###公式

```
var oTime = new Date();

var oYear = oTime.getFullYear();
var oMonth = oTime.getMonth() + 1;
var oDate = oTime.getDate();
var oWeek = oTime.getDay(); //星期是数字
var oHours = oTime.getHours();
var oMin = oTime.getMinutes();
var oSec = oTime.getSeconds();

```
### 倒计时

```
<!-- 现在的时间变化 -->
var iNow = new Date();

<!-- 未来的时间不变,两种方式，数字和字符串 -->
var iNew = new Date(2017,5,30,10,50,0);
var iNew = new Date(‘May 28,2017 12:3:56’);

<!-- 毫秒转为秒 -->
var t = Math.floor(iNew - iNow)/1000;

var str = Math.floor(t/86400)+'天'+ Math.floor(t%86400/3600)+‘时’+Math.floor(t%86400%3600/60)+‘分’+t%60+‘秒’;

alert(str);

<hr>
<!-- 天 -->
Math.floor(t/86400);
<!-- 时 -->
Math.floor(t%86400/3600);
<!-- 分 -->
Math.floor(t%86400%3600/60);
<!-- 秒 -->
t%60
```

###组件化开发方式

* 自定义属性
* 自定义标签

###移动端焦点事件

* 当touchstart一个元素不放手的时候，事件焦点就一直在这个元素上，
    即使滑动到其他的元素上时候，也不会触发相关的事件


