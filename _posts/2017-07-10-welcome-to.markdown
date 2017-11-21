---
layout: post
title:  "javascript 设计模式"
date:   2017-07-10 14:39:51 +0800
categories: jekyll update
---
### 构造函数模式
### module 模式 - The Module Pattern
1. The Module pattern
  * 对象模式的模块
  * 立即执行函数，返回一个对象,返回的公有方法的时候，一般是直接写{init:function(){}}
  * Revealing Module:公有私有方法写在一起：返回的时候是{init:publicMethod}
  * Singleton:返回的对象赋值为instance变量，返回instance,只返回一次，第二次返回的是第一次instance的引用(instance是对象)，挂载在instance的对象可以是正常的对象，也可以是一个构造函数对象
2. Object literal notation:属性方法全放到一个对象中
3. AMD modules
4. CommonJS modules
5. ECMAScript Harmony modules

### 设计模式
1. 混合模式(Mixin Pattern)
  * sub-class:子类继承父类，并且可以进行覆盖，扩展属性和方法
  * mixins
  ```
  var myMixins = {
  moveUp: function(){
    console.log( "move up" );
  },
  moveDown: function(){
    console.log( "move down" );
  },
  stop: function(){
    console.log( "stop! in the name of love!" );
  }
};

extend( CarAnimator.prototype, myMixins );

  ```
  * mixins 只接受希望接受的部分

  ```
  // Define a simple Car constructor
var Car = function ( settings ) {
    this.model = settings.model || "no model provided";
    this.color = settings.color || "no colour provided";
};
var Mixin = function () {};
Mixin.prototype = {
    driveForward: function () {
        console.log( "drive forward" );
    },
        console.log( "drive backward" );
    },
    driveSideways: function () {
        console.log( "drive sideways" );
    }
};
// Extend an existing object with a method from another
function augment( receivingClass, givingClass ) {
    // only provide certain methods
    if ( arguments[2] ) {
        for ( var i = 2, len = arguments.length; i < len; i++ ) {
            receivingClass.prototype[arguments[i]] = givingClass.prototype[arguments[i]];
        }
    }
    // provide all methods
    else {
        for ( var methodName in givingClass.prototype ) {
            // check to make sure the receiving class doesn't
            // have a method of the same name as the one currently
            // being processed
            if ( !Object.hasOwnProperty.call(receivingClass.prototype, methodName) ) {
                receivingClass.prototype[methodName] = givingClass.prototype[methodName];
            }
            // Alternatively (check prototype chain as well):
            // if ( !receivingClass.prototype[methodName] ) {
            // receivingClass.prototype[methodName] = givingClass.prototype[methodName];
            // }
        }
    }
}
// Augment the Car constructor to include "driveForward" and "driveBackward"
augment( Car, Mixin, "driveForward", "driveBackward" );
// Create a new Car
var myCar = new Car({
    model: "Ford Escort",
    color: "blue"
});
myCar.driveForward();
myCar.driveBackward();
// Outputs:
// drive forward
// drive backward
// We can also augment Car to include all functions from our mixin
// by not explicitly listing a selection of them
augment( Car, Mixin );
var mySportsCar = new Car({
    model: "Porsche",
    color: "red"
});
mySportsCar.driveSideways();
// Outputs:
// drive sideways
  ```
2 . 装饰器模式(The Decorator Pattern)
  * 向实例化的对象添加属性和方法:类似于mixin模式的子类继承，然后添加事件和方法，但是当有大量的子类继承时候，会变的不是很清晰，采用直接实例化对象并且在对象上添加自己的特有属性和方法，可以使代码更加精简

  ```
  function Person(){}
  var kelly = newPerson();

  keylly.property = xxx;
  kelly.method = function(){}
  ```
3 .享元模式(Flyweight)
  * 处理共享数据
  * DOM操作，子元素委托事件到父元素

### 设计原则
1. 
2.
3. 多用类组合，少用继承
4. 为了交互对象之间的松耦合设计而 努力。
5. 类应该对扩展开放,对修改关闭。

### 设计模式
1. 策略模式:定义了算法族(鸭子飞行和叫的就是两种算法族),分别封装起来,让它 们之间可以互相替换,此模式让算法的变化独立于使用 算法的客户。
2. 观察者模式: 定义了对象之间的一对多依赖,这 样一来,当一个对象改变状态时,它的所有依赖者都 会收到通知并自动更新。
3. 装饰者模式动态地将责任附加到对象上。 若要扩展功能,装饰者提供了比继承更有弹性 的替代方案。
4. 单体模式:namespacing and modularizing your code
  * 懒实例化(Lazy Instantiation):不是脚本一加载就实例化，而是需要的时候，通常用在初始化的时候需要加载大量数据的时候

### 相关代码
  1. 所有异步程序完成之后执行 : 代码 tep2.js 
  2. 节流器，对于重复触发的动作，只执行最后一次事件 : 代码 tep.js
  3. 事件绑定同步附加多个参数: 代码 tep1.js
