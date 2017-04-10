---
layout: post
title:  "Javascript prototype true"
date:   2017-04-08 14:39:51 +0800
categories: jekyll update
---


### 对象继承

##### rose 委托blue 对象 提供方法和属性

```
var blue = {a:1,b:2}

var rose = Object.create(blue);

console.log(rose.a);

````


### Car.prototype 没有什么特别，就是用来存储数据的

```
var Car = function(loc){
    
  var obj = Object.create(Car.prototype);
  
  obj.loc = loc;
  
  return obj;
  
}

 Car.prototype.move = function(){
   this.loc++;
 }
 
   var test = Car(20);
    
  for(var prop in test){
    
    console.log('prop ' + test[prop])
  }
   console.log(test.__proto__);
   console.log(test.constructor);
   console.log(Car.prototype.constructor);
 


function Test(){
  var obj = Object.create(Test.prototype)
  obj.name = 1
  return obj
}

var hh = Test();

console.log(hh.constructor)

```
### p:empty 

-- p标签为空的   这些p标签

### :not 

eg: p:not   不是p标签的元素

    p:not(:empty) 不是空的p标签的元素


p:first-of-type 第一个p标签
p:last-of-type 最后一个p标签

p:nth-of-type(odd) 所有的奇index
p:nth-of-type(3)  第三段p 从1开始
p:nth-of-type(3n)  第三段p 从1开始


### calc

### 视口宽高度

```
width:50vw;
height:50vh;
```

> 很有用的方法



### unset

> 假设设置所有的p{color:red},此时 class bar 
  下面的p元素 不想要设置为默认的红色，就可以这样写 .bar p{color:unset} .bar{color:green}
  此时 .bar下面的p元素颜色就会为green

```
//css

.foo {
  color: blue;
}
.bar {
  color: green;
}

p {
  color: red;
}
.bar p {
  color: unset;
}


//html

<p>This text is red</p>
<div class="foo">
  <p>This text is also red</p>
</div>
<div class="bar">
  <p>This text is green (default inherited value)</p>
</div>
```

### img

* object-fit :保证填满container,不能保证图片的纵横比，可能会失真
* object-contain :保证图片的纵横比，但是不会填满container 
* object-cover:保证图片的纵横比，会在填满container的基础上



### D3

* +string 把字符串转化为数字，不知道为什么，等同于parseInt parsefloat
  




























