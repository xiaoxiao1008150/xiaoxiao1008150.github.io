---
layout: post
title:  "正则表达式"
date:   2017-06-03 14:39:51 +0800
categories: jekyll update
---

###正则规则

```
\s: 空格
\S: 非空格
\d: 数字
\D: 非数字
\w: 字符（字符，数字，下划线_）
\W: 汉字，转义字符等等

```

### test

* 正则去匹配字符串，成功，true,失败，false
    写法：正则.test(字符串)

### search

* 正则去匹配字符串，成功，元素位置,失败，-1
    写法：正则.search(字符串)


```
<!-- 不区分大小写 -->
var zz = /B/i;
<!-- var zz = new RegExp('B','i'); -->

```
### match

* 正则去匹配字符串，成功，数组,失败，null
写法：字符串.test(正则)

### 正则默认

* 正则匹配成功，就会结束，要继续查找，全局匹配

### 量词 -- 匹配不确定的位数

```
+ : 大于等于1，至少一位
? : 

```

### replace

* 正则去匹配字符串,匹配成功的字符串去替换成新的字符串
    写法：字符串.replace(正则，新的字符串)

### |

```
| : 或者
() : 分组操作 ，匹配子项

[]: 字符类，一组相似的元素，[]整体代表一个字符

^:如果^是写在[]里面的话，表示排除的意思[^abc]，排除abc
    外
. : 任意字符

\. : 真正的点

\b : 独立的部分 （起始，结束，空格）
\B : 非独立的部分

```
> 正常情况下，正则的写法为// 或者，new RegExp(),但是当有传参的情况出现的时候，
必须使用new RegExp()

```
function getByClass(parent,sClass){
    
    var arr =[];
    var aEle = parent.getElementsByTagName('*');

    <!-- var re = /sClass/ 如果这样写，会被认为就是匹配‘sClass’字符串，而不是参数本身的内容-->

   
    var re = new RegExp('\\b' + sClass + '\\b');

    for(var i=0;i<aEle.length;i++){
        if(re.test(aEle[i])){
            arr.push[aEle[i]]
        }
    }
    
    return arr;
}

```



