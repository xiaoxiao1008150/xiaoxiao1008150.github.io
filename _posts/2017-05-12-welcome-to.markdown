---
layout: post
title:  "js event code"
date:   2017-05-12 14:39:51 +0800
categories: jekyll update
---

### 事件取消 -- 取消事件绑定函数

* 第一种绑定形式

```
function fn1(){
  console.log(1);
}

obj.onclick = fn1;
obj.onclick = null;

```

* addEventListener || attachEvent

```
obj.attachEvent('onclick',fn1);
obj.detachEvent('onclick',fn1); //取消

obj.addEventListener('click',fn1,false) //false表示是否捕获
obj.removeListener('click',fn1,false) //false表示是否捕获

```

### 阻止事件默认行为

* return false


