---
layout: post
title:  "css 双飞翼 和 圣杯"
date:   2017-05-07 14:39:51 +0800
categories: jekyll update
---

### 正常三列布局

```
<!-- html -->

<div class="sub">子列</div>
<div class="extra">附加列</div>
<div class="main">主列</div>

<!-- css -->

.sub {
  float: left;
  width: 200px;
  height: 300px;
  background-color: rgba(255, 0, 0, .5);
}
.extra {
  float: right;
  width: 180px;
  height: 300px;
  background-color: rgba(0, 255, 0, .5);
}
.main {
  height: 300px;
  margin-left: 210px;
  margin-right: 190px;
  background-color: rgba(0, 0, 255, .5);
}

```

### 圣杯布局


```
<!-- html -->
<div class="container">
    <div class="main"></div>
  <div class="sub"></div>
  <div class="extra"></div>
</div>

<!-- css -->
body {
  min-width: 600px; /* 2*sub + extra */
}
.main {
  float: left;
  width: 100%;
  height: 300px;
  background-color: rgba(255, 0, 0, .5);
}
.sub {
  float: left;
  width: 200px;
  height: 300px;
  margin-left: -100%;
  background-color: rgba(0, 255, 0, .5);
}
.extra {
  float: left;
  width: 180px;
  height: 300px;
  margin-left: -180px;
  background-color: rgba(0, 0, 255, .5);
}


.container {
  padding-left: 210px;
  padding-right: 190px;
}


.sub {
  position: relative;
  left: -210px;
}
.extra {
  position: relative;
  right: -190px;
}
```

### 双飞翼

```
<!-- html -->
<div class="main-wrapper">
    <div class="main"></div>
</div>
<div class="sub"></div>
<div class="extra"></div>

<!-- css -->

.main-wrapper {
  float: left;
  width: 100%;
  background:#ccc;
  
}
.main {
  height: 300px;
  margin-left: 210px;
  margin-right: 190px;
  background-color: rgba(255, 0, 0, .5);
}
.sub {
  float: left;
  width: 200px;
  height: 300px;
  margin-left: -100%;
  background-color: rgba(0, 255, 0, .5);
}
.extra {
  float: left;
  width: 180px;
  height: 300px;
  margin-left: -180px;
  background-color: rgba(0, 0, 255, .5);
}
```

### 双飞翼与圣杯布局比较



1. 俩种布局方式都是把主列放在文档流最前面，使主列优先加载。
2. 两种布局方式在实现上也有相同之处，都是让三列浮动，然后通过负外边距形成三列布局。
3. 两种布局方式的不同之处在于如何处理中间主列的位置：圣杯布局是利用父容器的左、右内边距定位；双飞翼布局是把主列嵌套在div后利用主列的左、右外边距定位。
4. 两者相比较，双飞翼布局虽然多了一个div，却减少了相对定位属性的代码，个人认为双飞翼布局在实现思路和代码简洁度上都要比圣杯布局更好一些。




