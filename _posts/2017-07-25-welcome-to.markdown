---
layout: post
title:  "jquery 源码"
date:   2017-07-25 14:39:51 +0800
categories: jekyll update
---

### 源码相关
1.$('div').get(0) :不传值的话，get会首先调用to.Array方法将$('div')集合转为数组;如果传值的话，就会直接在类数组的集合里获取相关的dom元素
2.pushStack:JQ对象的入栈
3. jQuery.extend:给jQuery函数对象上增加方法属性，叫做静态属性或者静态方法；
4. jQuery.fn.extend:给实例上扩展属性，叫做实例方法
5. jQuery中是拷贝继承，还有类式继承和原型继承
6. DOMContentLoaded:dom加载完毕
7. $.isFunction :判断是否为函数
8. Array.isArray:原生支持
9. typeof NaN:返回为number,用jquery的isNumeric判断会更准确
10. $.type():data array object全部能判断出来，更加的准确
    内部也是调用的{}.toString.call()
11. isPlainObject:判断是否是对象字面量:new Object/{}
12. for in 循环: for in 循环是不能循环对象继承的属性的，只有对象自身的属性才可以循环到
13. makeArray:将类数组，字符串等转化为数组
14. !!undefined:将undefined加上两个感叹后之后，转为false
15. [].apply.concat.apply( [], [[1],[2]] )可以转化为 [1,2],参照jQuery map工具方法
16. $.now 内部调用的是 Data.now,是ES5新提供的方法，相当于 new Date().getTime()
17. jQuery是可以获得隐藏元素的宽高的，做法是设置css {display:block;visibility:hidden;position:absolute}
18. DOM元素和对象之间互相引用，大部分浏览器会出现内存泄漏
    ```
    var  oDOm = document.getElementById('div');
    var obj = {};
    oDOm.name = obj;
    obj.age = oDOm;
    ```
  19.jQUery data两种使用方法
      -- $.data()
      -- $().data
  20. Object.freeze/ Object.preventExtensions:防止修改对象，jQuery中采用了Object.defineProperty，是ES5的新方
  法，兼容性更好
  21. html5获取data设置的属性值的方法
      ```
      <div id="div1" data-miaov='妙味'></div>
      <div id="div1" data-miaov-all='妙味'></div>
      <!-- js -->
      $('#div1').get(0).dataset.miaov
      $('#div1').get(0).dataset.miaovAll
      ```
    22. jQueryd的data方法可以 
    23. removeClass toggleClass hasClass val源码解释：妙味课堂54 
    24. js正则match方法返回一个类数组
    25. Boolean("") -> false Boolean(" ") -> true
    26. + '100' -> 100(字符串转数字)   100 + '' -> "100"(数字转字符串)
    27. jQuery事件传参,.on( events [, selector ] [, data ], handler ),data中的值
        可以通过ev传递
      ```
      $('#div1').on('click',{name:'hello'},function(ev){
            console.log(ev.data.name); //hello
        })
      ```
    28. triggerHandler:不会触发事件的默认行为
    29. 事件中return false 就相当于 event.preventDefault() 和 event.stopPropagation()
    30. pageY是到页面的距离,clientY是到可视区的距离
    31. 事件中event参数不是原生事件的event,是jQuery包装之后的event,
        会更加详细，一些属性做了兼容,想要获取原生的event,event.originalEvent
    32. trigger支持冒泡
    33. mouseenter 和 mouseleave 子集不会影响父集，即不会产生冒泡行为
    34. DOM操作，has值的是内部
    35. getComputedStyle 获取行内 外部的都可以，但是不能获取复合样式，比如background,要写成
        backgroundColor,因为jQuery中css()获取样式的时候内部调用的getComputedStyle,所以在用在用
        css()方法获取背景颜色的时候要用backgroundColor
    36. css()多值设置用对象的形式，设置float的时候，要设置为style.cssFloat,jQuery已经做了兼容  

### Ajax(95)
  1. $.param():此方法可以格式化将要传递的数据,如果value值是汉字/符号/数组的话，会将汉字编码
        -$.param({'a':'1','b':'2'}) -> a=1&b=2
  2. $().serialize():专门针对表格中的数据
  3. $('#div1').load('data.php',{name:'hello'},function(){})
        本质是调用的$.ajax()方法，{name:hello}会传递到后端，默认只能接受html类型的数据
  4. 现在新版本的jQuery $.ajax的操作接受两种形式
      ```
      $.ajax({
          url:url,
          success:function(){},
          error:function(){}
        })

      $.ajax({
          url:url
        }).done(function(){}).fail(function(){})
      ```
  5. $.get() $.post() $.load() $.getJson() $.getScript() 最终调用的都是$.json()
  6. $.ajax(),默认参数
            url->当前页面地址
            processData -> 串联化数据，比如发送的数据是{“name”:'hello'},默认串联化的形式为name=hello,
            如果就希望是以本身的形式传递而不需要串联化字符串的时候，设置processData:false,发送给后台的就是json对象
            async ->默认是异步的
            content-Type:"application/x-www-form-urlencoded; charset=UTF-8",默认是数据类型
  7. $.ajaxStart() $.ajaxStop 只能通过document触发

### jQuery动画(107)
  1. hide()/show()/toggle:同时改变宽，高，透明度
  2. slideUp/slideDown/slideToggle: 改变高度
  3. fadeIn/fadeOut/fadeToggle: 改变透明度
  4. fadeTo:透明度，animate也能做，但是fadeTo可以作用于隐藏元素



