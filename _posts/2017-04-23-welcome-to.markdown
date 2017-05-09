---
layout: post
title:  "JS event"
date:   2017-04-23 14:39:51 +0800
categories: jekyll update
---

* input.value 永远是字符串，需要自己转化（parseInt，parseFloat）
* 数字舍入规则

```
Math.ceil()执行向上舍入，即它总是将数值向上舍入为最接近的整数；
◎Math.floor()执行向下舍入，即它总是将数值向下舍入为最接近的整数；
◎Math.round()执行标准舍入，即它总是将数值四舍五入为最接近的整数(这也是我们在数学课上学到的舍入规则)。

```


```

alert(Math.ceil(25.9)); //26
alert(Math.ceil(25.5)); //26
alert(Math.ceil(25.1)); //26
alert(Math.round(25.9)); //26
alert(Math.round(25.5)); //26
alert(Math.round(25.1)); //25
alert(Math.floor(25.9)); //25
alert(Math.floor(25.5)); //25
alert(Math.floor(25.1)); //25
```