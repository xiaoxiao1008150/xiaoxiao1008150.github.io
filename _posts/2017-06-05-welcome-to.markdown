---
layout: post
title:  "Vue code"
date:   2017-06-05 14:39:51 +0800
categories: jekyll update
---

### vue两大核心点

1. 响应式数据绑定 -- 数据改变，界面也随之发生改变
    核心是使用了Object.defineProperty()
2. 组合的视图组件 -- UI映射为组件树，可维护，可重用，可测试

### 声明式渲染

1. 声明式渲染 -- 只关注在哪里怎么做，不用关心是怎么实现的

2. 命令式渲染 -- 关注在哪里怎么做，还要关心具体是怎么实现的
一般的js编程都是命令式的

```
<!-- 数组的每项乘以2 -->
<!-- 命令式 -->
var arr = [1,2,3];
var newArr = [];
for(var i=0;i<arr.length;i++){
    arr.push(newArr[i]*2);
}

<!-- 声明式 -->
var newArr = arr.map(function(item){
    return item*2
})

```

### 事件修饰符

* 事件处理函数只有纯粹的逻辑判断，不处理DOM事件的细节，例如：
阻止冒泡，取消默认行为，判断按键


### 指令

* v-show:表达值
* input,type是checkbox的 v-model默认是绑定的checkbox的checked属性

### 组件的基本组成

1. 样式结构
2. 行为逻辑
3. 数据

* 注册组件的时候可以用驼峰式或者烤串式，使用的时候必须用烤串式

### 单项数据流

* 数据的传输是单项的，不能直接改变从父组件传输过来的数据，要先用data属性
接收父组件传递来的数据，成为自己的数据，然后修改













