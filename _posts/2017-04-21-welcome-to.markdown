---
layout: post
title:  "Vue fundamental"
date:   2017-04-21 14:39:51 +0800
categories: jekyll update
---

### method and computed

* html
```
<div id="example">
  <p>Original message: "{{ message }}"</p>
  <p>计算属性: "{{ reversedMessage }}"</p>
  <p>方法   : "{{ reversedMessage() }}"</p>
</div>

```

* js

```
methods: {
  reversedMessage: function () {
    return this.message.split('').reverse().join('')
  }
}


computed: {
    reversedMessage: function () {
      return this.message.split('').reverse().join('')
    }
  }
```


> 区别：计算属性是基于它们的依赖进行缓存的，只要依赖属性不发生变化，计算属性结果是不会
  发生变化的，而比较而言，只要发生重新渲染，method 调用总会执行该函数。所以计算属性可以
  用于开销比较大的情况

### computed 

* 计算属性一般只有getter,需要时也可以使用setter

```
computed: {
  fullName: {
    // getter
    get: function () {
      return this.firstName + ' ' + this.lastName
    },
    // setter
    set: function (newValue) {
      var names = newValue.split(' ')
      this.firstName = names[0]
      this.lastName = names[names.length - 1]
    }
  }
}
```

* 现在在运行 vm.fullName = 'John Doe' 时， setter 会被调用， vm.firstName 和 vm.lastName 也相应地会被更新。