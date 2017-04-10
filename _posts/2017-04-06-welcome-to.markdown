---
layout: post
title:  "javascript code"
date:   2017-04-05 14:39:51 +0800
categories: jekyll update
---

### private and public

* 当在类函数中声明变量时候  用this,比如 this.name = name;
就是public ，当用 var 时候，比如 var name = 45;此时的name 变量是类私有的
实例是没有此属性的


```
  function Test(){
    var serectNum = 78;

    this.guessNum = function(num){
      if(num>78){
        return 'lower'
      }else if(num<78){
        return 'higher'
      }else{
        return 'you guess the num'
      }
    }
  }


  Test.prototype.getSerect = function(){
    return this.serectNum;
  }

  var serect = new SerectCode();
  
  <!-- //返回 undefined -->
  document.write("Value of serectNum :" + serect.serectNum + "<br />") 
  

  document.write("Value of serectNum :" + serect.getSecret() + "<br />") 




```

### react and angular2 

 * react is a component development library
   angualr2 is a framework can be used all alone 














