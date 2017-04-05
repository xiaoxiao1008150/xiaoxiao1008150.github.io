---
layout: post
title:  "ES6 let and const"
date:   2016-10-25 14:39:51 +0800
categories: jekyll update
---

### let



```
if (true){
  var  name = "cuixiao";
  
}

console.log(name);

```

### const



```
let name = `Ray 
this is a test`

```

### template string ``

### function 



```
let add = (a,b) =>{
  return a + b;
}

console.log(add(2,3))
```



```
let list = [2,3,4,5];

let times = list.map((n) => n*2);
console.log(times);
```