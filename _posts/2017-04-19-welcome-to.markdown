---
layout: post
title:  "网站性能优化"
date:   2017-04-18 14:39:51 +0800
categories: jekyll update
---

### CSS blocking

* 浏览器解析html 过程，包含所有需要呈现的内容
  浏览器形成cssdom，包含了页面的所有样式
  
  characters → tokens → nodes → cssdom(csss object model)
  characters → tokens → nodes → dom（document object model）


> css 不能不分加载，因为可能出现样式错误（后面的样式会覆盖前面的样式）,这也是为什么
  css 叫做层次样式表的原因，因此有 CSS Blocking 一说


### render tree

* domtree 和 cssdom 完成之后，会生成rendertree 

### layout

> 注意：布局可能会被以下操作触发：手机上的设备方向更改、窗口大小调节或会修改 DOM 内容的任何其他操作 - 例如，向 DOM 树添加内容或从中移除内容、在节点上切换 CSSOM 属性等等！

### 渲染页面的步骤
1. 解析html,开始构建dom,dom不是一次性完成的，是逐步进行的；
2. 在 head 标签里，有css 和 script 标签，需要加载css 和 js 文件，这里是同步的，会出现block
3. 解析 css 构建 cssdom 
4. 执行 js 
5. 根据 dom 和 cssdom 构建成 render
6. layout
7. painting


### 选取 JavaScript 方法

#### 参考网址：[https://developers.google.com/web/fundamentals/performance/critical-rendering-path/adding-interactivity-with-javascript#parser-blocking-vs-asynchronous-javascript](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/adding-interactivity-with-javascript#parser-blocking-vs-asynchronous-javascript)

1. 阻止（Blocking）

```
<script src="anExteralScript.js"></script>

脚本会同步加载，阻止解析器解析dom 过程

```

2. 内联（Inline）

```
<script>document.write("this is an inline script")</script>

内联脚本，因为js 会修改dom ,cssdom相关，所以浏览器此时会阻止解析器解析don

而会去解析cssdom,会阻止dom的解析，脚本位置不对，有可能还会出错

```

3. 异步（Async）

```
<script async src="anExternalScript.js"></script>

异步加载脚本，正常

```

### 优化方面总结

1. minify ,compress .cache

 -- Minize bytes

2. 最小化使用渲染阻止资源（css 同步）

 -- 使用媒体查询，比如‘print’
 -- inline css

3. 最小化使用解析阻止资源（JS）
 
 -- defer
 -- async


> 总结为三条：minize bytes，减少关键资源数量，
  缩短关键呈现路径的长度（只要一次性请求就好，通常页面会有其他的附属请求，这是假设的最好情况是路径为一次）

### CRP(critial rendering path) 三个指标

1. 关键资源数量（越少越好）
2. 关键资源的字节数（越少越好）
3. 关键路径长度（请求关键资源的来回）


### web worker

* 对于需要长时间运行的js 代码，可以单独放置一个文件，利用 web worker 技术开启一个新的新的线程来处理[https://developer.mozilla.org/zh-CN/docs/Web/API/Web_Workers_API/Using_web_workers](https://developer.mozilla.org/zh-CN/docs/Web/API/Web_Workers_API/Using_web_workers)


### GC(垃圾回收机制)

* js 自己处理垃圾回收，避免内存泄漏

1. [https://www.smashingmagazine.com/2012/11/writing-fast-memory-efficient-javascript/](https://www.smashingmagazine.com/2012/11/writing-fast-memory-efficient-javascript/)

2. MDN:[https://developer.mozilla.org/en-US/docs/Web/JavaScript/Memory_Management](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Memory_Management)

3. [http://buildnewgames.com/garbage-collector-friendly-code/](http://buildnewgames.com/garbage-collector-friendly-code/)


### 避免布局反复

### 视频方法
1. html5 video:浏览器的外观不一样(大小,位置，UI等)
2. flash:需要.swf插件，兼容性好，但是需要下载额外的插件
3. 目前解决方案，支持h5,用h5，不支持的话，用flash
4. 实现自己的UI，熟悉播放器事件







