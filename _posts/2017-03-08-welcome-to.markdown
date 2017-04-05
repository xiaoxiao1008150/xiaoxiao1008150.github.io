---
layout: post
title:  "flex"
date:   2017-03-08 14:39:51 +0800
categories: jekyll update
---

### flex child 默认所有的高度都是一样的，如果需要不一样
父容器 设置 align-items:flex-start,chils会根据自身内容回到相应的高度
默认的 align-items:stretch

### childs margin，padding

padding,margin可以正常设置

### 有margin的时候平均分布
1.正常设置margin-right
2.设置childs 宽度:假设有三个div ,width:30%
parent div ,div:justify-content:space-between

justify-content是childs在水平方向上分布的guidde
align-items是在垂直方向上的guide

flex 定义width 可以用flex-basis


### parent flex:wrap

默认：childs是不会换行的，只有设置了flex:wrap
才会换行


### 居中对齐

    <div class="parent">
      <p>child</p>
    </div>


> 目的：child居中对齐
.parent---heigth,width,display:flex
.child---margin-auto
