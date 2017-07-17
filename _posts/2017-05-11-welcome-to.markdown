---
layout: post
title:  "js OOP"
date:   2017-05-11 14:39:51 +0800
categories: jekyll update
---

### OOP(面向对象编程)

1. 特点 -- 抽象（方法分门别类），封装（只能通过对象访问方法）
          继承（复用代码），多态（复用的一种形式，js中表现不是很强）

2. 封装函数 

* 工厂方式


```
function create(name){
  var obj = {};
  obj.name = name;
  obj.showName = function(){
    console.log(this.name)
  };

  return obj;
}


var p1 = create('json');
var p2 = create('hh');

```

* 构造函数

```

function Create(name){
  this.name = name;
  this.showName = function(){
    console.log(this.name)
  };

}


var p1 = new Create('json');
var p2 = new Create('hh');

```

> 注意：在事件 和 setInterval使用的情况下，要修改this的指向


###包装对象

* 每个基本类型都有自己的包装对象 String Number Boolean

```
var str ='hello'; //基本字符串类型

str.charAt(1); // 基本类型会找到对应的包装对象类型，包装对象把所有的属性和方法给了基本类型，然后消失

```


### 原型链

* 实例与原型之间的链接叫做原型链
* hasOwnProperty('num') 

```
var arr = [];
arr.num = 10;
Array.prototype.num2 = 20;

arr.hasOwnProperty('num') // true
arr.hasOwnProperty('num2') // false，num2不是arr自己的

```

* constructor :查看对象的构造函数

```
function A1(){};

var a = new A1();

a.constructor // A1,系统会自动的加上  A1.prototype.constructor = A1;

```

###判断传入的参数是数组还是对象

* 通过constructor或者instanceof 都可以，但是还有一个更严谨的方法

```
var arr1 = []; 

Object.prototype.toString.call(arr1) == '[object Array]'

var arr2 = {}
Object.prototype.toString.call(arr2) //'[object Object ]'

var arr3 = null;
Object.prototype.toString.call(arr3) //'[object Null]'

```

### 继承 -- 拷贝继承

* 子类不影响父类，子类继承父类（代码复用）；
* 属性继承：调用父类的构造函数 call;
* 方法继承： for in 拷贝继承（Jquery库也是这种方式）

```
<!-- 父类 -->
function Person(name,sex){
  
  this.name = name;
  this.sex = sex;
}

Person.prototype.showName = function(){
  console.log(this.name);
}

<!-- 子类 -->

function Child(name,sex,job){
  
  Person.call(this,name,sex)

  this.job = job
}

extend(Child.prototype,Person.prototype);

var child = new Child('bob','男'，'singer');
child.showName();
<!-- Child.prototype = Person.prototype 
  此种方法可以实现继承，但是是对象赋值，因此如果增加
  Child.prototype.add = function(){}
  那么Person.prototype 也会加上add 这个方法，违背了
  子类不改变父类的继承原则，因此用for in 的方法实现
-->

function extend(obj1,obj2){
  
  for(attr in obj2){
    
    obj1[attr] = obj2[attr];
  }

}

<!-- extend方法可以实现对象的拷贝，这个是假设key对应的value是基本类型的情况 -->


```

### 继承 -- 类式继承

```

function Person(){
  this.name = '小妹'

}

Person.prototype.showName = function(){
  console.log('name',this.name);
}


  
 
  
function Child(name,sex){
  
  Person.call(this);

}

<!-- 一句话继承，Child.prototype 
  会继承 new Parent()实例的所有属性和他的原型链上的方法
  但是假如有两个Child的实例，child1和child2，他们两个会共同使用一个name属性，
  如果一个改变了name的属性（加上name不是字符串，是一个数组或对象），那么另外一个也会受到影响
  ,违背了实例之间互相不影响的原则
-->
var F = function(){};
F.prototype = Parent.prototype;
Child.prototype = new F();

<!-- 加上这三行，Child.prototype 只会继承方法，不会继承属性-->
Child.prototype.constructor = Child;



```

### 继承 -- 原型继承









