---
layout: post
title:  "移动端开发"
date:   2017-05-14 14:39:51 +0800
categories: jekyll update
---

### js复制节点

cloneNode

XAMPP

* 手机端的viewport可视区是可以设置的，，pc端是不可以设置的，
一般设置为手机的尺寸

<meta name="viewport" content="width=device-width"
user-scalable="no">

* user-scalable -> 缩放ios10无效
  initial-scale -> 初始缩放比例
  minimum-scale -> 最小缩放比例
  maximum-scale -> 最大缩放比例

<!-- X5浏览器内核下，强制竖屏 （QQ,微信浏览器）-->
<meta name="x5-orientation" content="portrait" />

<!-- X5全屏显示 -->
<meta name="x5-fullscreen" content="true" />

<!-- UC浏览器 强制竖屏 -->
<meta name="screen-orientation" content="portrait">

<!-- UC全屏显示 -->
<meta name="full-screen" content="yes">

<!-- 禁止识别电话号码和邮箱 -->
<meta name="format-detection" content="telephone=no,email=no" />

> 注意：全局禁止了电话号码和邮箱的识别，当在某一处单独需要的时候,设置如下：
这样就能出现拨打电话的功能

```
<a href="tel:100000000">100000000</a>
<a href="mailto:xiaoxiao1008150@gmail.com">xiaoxiao1008150@gmail.com</a>
```
<!-- a,input,button点击会有黑色阴影 -->
去除方法：
a,input,button{
  -webkit-tap-highlight-color:rgba(0,0,0,0);
}

//颜色也可以设置为red等

<!-- ios下默认按钮是圆角的 -->
button{
  -webkit-appearance:none;
  border-radius:0
}

<!-- 每个移动设备都有的字体,但是只是针对于英文 -->
body{font-family:Helvetica;}

<!-- body *{-webkit-text-size-adjust:100% 移动端可以调节字体大小，设置之后，调节不起作用 -->
  
-webkit-user-select:none 
<!-- /移动端长按住文字会选中文字，取消设置->ios下可以，android下不行 -->

}

<!-- 一段文字在没有设置高度的时候，可能会出现文字被浏览器放大的现象，(font bootsing) 

解决办法：设置高度
        设置最大高度
-->

<!-- 固定定位 ，移动端支持的不是很好-->

> 注意：IOS，横向还是可以拖动的，可以在其他标签上设置
body {
overflow:hidden
}

###适配方法

* 百分比
* viewport适配
* rem适配
* 弹性盒


###响应式
<!-- 排除掉tv后企业所有的媒体类型 -->

* @media not tv{
  
}
<!-- 竖屏 -->

* @media(orientation:portrait){
  
}

<!-- 横屏 -->
* @media(orientation:landscape){
  
}


<!-- 内联写法 -->
```
  
<link rel="stylesheet" href="01.css" media="all and (min-width:400px)" /> 
<link rel="stylesheet" href="02.css" media="all and (min-width:800px)" /> 

```
### 移动端事件
* ontouchstart
* ontouchmove
* ontouchend

> 在移动开始时，浏览器的模拟器时好时坏，一般不用on的绑定方式，
  用addEventListener来绑定事件


```
<!-- 可能不会执行 -->
div.ontouchstart = function(){
  console.log(1);
}

div.addEventListener('touchstart',start)

function start(){
  console.log(1);
}

```
> pc端的事件也可以用，但是回比移动端的事件慢300ms左右

> 移动端的点透：
  当上层元素发生点击的时候，下层元素也有点击（焦点）特性，
  在300ms之后，如果上层元素消失或者隐藏，目标点就会
  “漂移”到下层元素之上，就会触发点击行为(此处的点击指的是浏览器的事件，比如click等)

```
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width"
user-scalable="no">
  <title>test</title>
<style>
  #div1{position:absolute;height:100px;width:100px;top:0;
    left:0;background:rgba(0,0,0,0.1);}
</style>
</head>
<body>
  <a href="http://www.baidu.com">百度</a>
  <div id="div1"></div>
  <script>
  window.onload = function(){

    var a = document.getElementById('div1');

    a.addEventListener('touchend',end)

    function end(){
      console.log('touchend');
      this.style.display = 'none';
    }

  }


  </script>
</body>
</html>
```

###事件对象

* touches 当前位于屏幕上的所有手指的列表
* targetTouches 当前dom元素上手指的列表
* changedTouches 涉及当前事件的手指的列表

> 移动端事件与浏览器端区别 再找资料看
transform：scale(.5) translateX(100px)
先执行translate,再执行scale

* transform-style:perserved-3d (是否保留子元素的3d效果)
* 背面：跟父元素角度相反的一面
* backface-visibility:hidden 隐藏背面

> innterHTML的形式添加，在IE下会有些问题，对于table元素，因此采用直接创建各级标签的方法 



### 移动端设置背景图片大小

* 移动端记着要设置背景图片的大小background-size







