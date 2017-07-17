---
layout: post
title:  "Css code"
date:   2017-05-13 14:39:51 +0800
categories: jekyll update
---


### 清除浮动方法

1. 给父级加高度 -- 扩展性不强
2. 空标签  -- <div style='clear:both'></div> | 此方法IE6有最小高度，会有2px的偏差
3. 添加br -- <br clear='all' />

```
<div>
    <div id="div1"></div>
    <br clear='all' />
</div>
```

4. 伪类 

```
<!-- 给父元素添加 -->
.clearfix:after{
  content:'';
  clear:both;
  display:block;
  *zoom:1       //针对IE6  
}
```