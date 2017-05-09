---
layout: post
title:  "test"
date:   2017-04-27 14:39:51 +0800
categories: jekyll update
---

### 面试问题

1. jsonp iframe 内部原理
2. 一个业务系统的cookie如何实现多个业务系统的共享（比如单点登录）
3. property attribute区别 ：参考网址[http://www.cnblogs.com/elcarim5efil/p/4698980.html](http://www.cnblogs.com/elcarim5efil/p/4698980.html)

``` 
property是DOM中的属性，是JavaScript里的对象；
attribute是HTML标签上的特性，它的值只能够是字符串；

```

```
attribute 改变，property改变
property改变，attribute不改变

```

4. position float

```
relative:没有脱离普通文档流，偏离元素的默认位置
> relative 不会改变元素的display属性

absolute:脱离文档流

> 元素的display 变为block

> 设置了relative,absolute，margin依然有效

fixed:会让元素脱离普通流

> 会改变行内元素的呈现模式，使display之变更为block。

float:

> * 脱离普通流，其容器（父）元素将得不到脱离普通流的子元素高
  * display：block
  * 浮动元素的后一个元素会围绕着浮动元素（典型运用是文字围绕图片），与应用了position的元素相比浮动元素并不会遮盖后一个元素；
  浮动元素的前一个元素不会受到任何影响（如果你想让两个块状元素并排显示，必须让两个块状元素都应用float）
```

5.兼容性问题

```
(1)元素同时应用了position: relative、float、（top / left / bottom / right）属性后，则元素先浮动到相应的位置，然后再根据（top / left / bottom / right）所设置的距离来发生偏移。

(2)元素同时应用了position: absolute及float属性，则float失效。
```
案例网址：[http://www.jianshu.com/p/549aaa5fabaa](http://www.jianshu.com/p/549aaa5fabaa)









