---
layout: post
title:  "jQuery"
date:   2017-06-20 14:39:51 +0800
categories: jekyll update
---
html('')
empty()
remove() //删除节点,返回删除的元素
detach() //保留删除元素之前元素的行为
$('div').text() //获取所有集合的节点

###事件扩展
hover() //调用的是mouseenter mouseleave
focusin //支持光标聚焦的冒泡
one //事件只触发一次 也可以取消事件 $('#div1')off()

事件操作的event,并不是原生的event,event.originalEvent 

###自定义事件
trigger triggerhandler
前者会触发事件的默认行为，例如触发input的foucus事件的时候，光标默认会
切换到input上，但是后者不会.类似于触发自定义事件一样

###要测试鼠标的键值，必须用mousedown/mouseup(ev.which)

###html属性和dom属性

参考网址：[http://joji.me/en-us/blog/html-attribute-vs-dom-property](http://joji.me/en-us/blog/html-attribute-vs-dom-property)
1.document.getElementById('test').attributes //获取html属性
2. getAttribute,setAttribute 设置，获取htm属性
3. document.getElementById('test').foo = 1/document.getElementById('test').foo //设置获取dom属性
4.不是自制的属性，大部分情况下，dom属性和html属性会并行修改，但是有一些列外，比如有默认value的属性
```
<input id="search" value="foo" />
var input = document.getElementById('search');
input.value = 'foo2';
input.getAttribute('value'); // return string: "foo"
```

5. 自制的属性，通过dom属性方式是不能获取到的，只能通过html属性设置更改

### 支持json格式
1.css()
2.on()
3.attr()
### 支持回调形式
1.addClass()
  -addClass('arg')
  -addClass(function(i,b){
    console.log(i)//当前选择的元素的索引
    console.log(b) //oldClass
  })
2. html() - $i oldHtml
3. val() - i oldValue

### 一些方法
1. $map - 类似于 Array.map
2. $grep - Array filter
3. $unique - 去重（只是针对dom节点，对数组没有作用）
4. $inArray - 类似于indexOf(针对数组)
5. $makeArray - 转数组
6. $trim - 去掉前后空格

### ajax扩展
1. 辅助方法
 * serialize - 格式化form表单 a=1&b=2&c=3(只能是name和value)
 * serializeArray - 数组，内容为对象
 [{name:'a',value:'1'},{name:'b',value:'2'},{name:'c',value:'3'}]
 ```
 <form>
 <input  name='a' value='1'/>
 <input  name='b' value='2'/>
 <input  name='c' value='3'/>
 </form>
 ```
 ### 防止冲突
 var J =$.noConflict()
 用J代替$

$.each() - 可以遍历数组和对象
```
$.each(obj,function(i,val){
    console.log(i); //数组是索引，对象是key值
    console.log(val);
})
```
### jquery函数队列
### 插件编写
1. $.fn.extend() //实例方法 $().css()
2. $.extend() //工具方法 $.trim()

```
$.extend({
  trim:function(){}, //this == $
  type:function(){}
})
相当于
$.trim = function(){}
$.type = function(){}
```
```
$.prototyoe.trim = function(){}
$.prototyoe.type = function(){}
相当于
$.fn.extend({
  trim:function(){},// this = 调用元素
  type:function(){}
})
```
### 尺寸
* width() -- 宽度，设置的
* innerWidth() -- wdith + padding
* outerWidth() -- width + padding + border
* outerWidth(true) -- width + padding + border + margin
三者其实内部调用的是css('width')
* width(200) -- width = 200 设置
* innerWidth(200) -- width = 200 - padding 
* outerWidth(200) -- width = 200 - padding - border
* outerWidth(200,true) -- width = 200 - padding - border -margin 

### 隐藏元素
```
<!-- html -->
<div id="div1" style='display:none;width:200px'></div>

<!-- script -->
var a = $('#div1').get(0).offsetWidth // 0 
var b = $('#div1').width() // 200
```

### 运动(107开始)



























