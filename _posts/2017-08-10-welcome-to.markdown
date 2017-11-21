---
layout: post
title:  "实战项目相关技巧"
date:   2017-08-10 14:39:51 +0800
categories: jekyll update
---


body{height:100%,overflow:hidden}

IOS10下，如果body中的内容设置了positon:absolute的话，body的overflow:hidden 是不起作用的
解决方法，给body加上 position:relative
### Icon制作
1. Base64格式
2. css3 - 适合制作一些规则形状

### worker
1. worker 存放的是一个js文件，跟UI有关系的js不能放到worker中#

### 移动端性能
1. 减少repaint,reflow(减少dom);
2. 缓存一切可以缓存的数据(app cache/manifest/localStorage)
3. 使用css3 transform代替dom操作
4. 不要给非static定位元素添加css3动画
5. 适当的使用硬件加速

### 开发技术选型原则
1. 轻量化
2. 维护简单
3. 能够快速开发
4. 原生js还是移动框架(根据项目，移动端浏览器基本都是标准浏览器，不存在太多的兼容问题)
5.是否模块化(pc端一般是要模块化的，但是移动端不一定)

###
1. Base64格式:减少http请求，但是体积大一些，难以维护，兼容性好  
2. 打断点:debugger
3. 为了严谨，将受到的数据再处理成数字，并且是十进制的数字 parseInt(arg,10)
4. webkit 内核4.0 以前click事件是延迟300ms，4.0以后就不明显延迟了

### html5相对于native
1. html5更新迭代方便
2. native(ios,android)更加流畅，更新迭代慢一些

###
1. vue-cli初始化项目
2. keep-alive标签包裹的内容可以缓存，下次不用再请求一遍
3. 为了保护接口，让浏览器请求(jsonp,ajax)时候拿不到接口，可以设置Host，
Referer，在请求头中，要求只能是Host和Referer下的域名菜可以拿到接口，但是可以再后端利用http代理技术拿到数据，设置请求Header为要求的header，然后拿数据
4. img中的src换成v-lazy实现懒加载，这个是vue-lazyload插件，可以懒加载组件或者图片，对于图片来讲，下滑到固定图片位置的时候，再加载图片，而不是开始的时候全部加载


### 饿了么App相关
1. 制作图标字体:比如有一些svg图片文件，可以转化为字体形式的图片文件
```
a.登陆IcoMoon网站
b.导入svg文件，根据步骤流程，进行相关设置
c.下载生成的文件，把fonts文件夹引入到自己的项目中
```
2. 安装viewJson插件 chrome
3. vue-loader会自动依赖安装postcss插件，处理css兼容代码
4. 手机看网站的技巧
```
<!-- 第一种方式 -->
a. ifconfig找到本机的ip,将localhost更换为本机ip
b. 早料二维码官网，粘贴网站，生成二维码
c. 扫描二维码即可
<!-- 第二种方式 -->
a. 打开wifi设置选项，手动输入ifconfig查到的ip地址
b. 把localhost更换为本机ip
c. 浏览器中输入网址即可查看
```
5.手机1px的实现：像素不能设置为小数，因此方法为
```
a.给元素增加一个after伪类
border-1px($color)
  position:relative
  &:after
    display:block
    position:absolute
    left:0
    bottom:0
    width:100%
    border-top:1px solid color
    content:' '
b. 通过媒体查询
@medie(-webkit-min-device-pixel-ratio:1.5),(min-device-pixel-ratio:1.5){
  .border-1px
    &::after
      -webkit-transform:scaleY(0.7)
      transform:scaleY(0.7)
}

@medie(-webkit-min-device-pixel-ratio:2),(min-device-pixel-ratio:2){
  .border-1px
    &::after
      -webkit-transform:scaleY(0.5)
      transform:scaleY(0.5)
}
```
6. 两个div设置为inline-block的时候，默认中间会有空隙，是因为有空白字符，解决方法
```
a. 两个div的父元素设置font-size:0
b. font-size设置为0，默认子元素会继承，此时应该给子元素设置font-size
```
7.溢出省括号设置{white-space:nowrap;overflow:hidden:text-overflow:ellipsis}
8. css sticky footers:一种css排版布局方式，参照仿照vue饿了么弹出层效果
网址是[http://www.w3cplus.com/css3/css-secrets/sticky-footers.html](http://www.w3cplus.com/css3/css-secrets/sticky-footers.htmlhttp://www.w3cplus.com/css3/css-secrets/sticky-footers.html)
```
a.把上下两个区域分为两个平行的div.detail-wrapper clearfix和detail-main
b. 把上部分的具体内容写在.detail-main中
```
9. 对于vue而言，假如有个属性是this.food，想要增加一个key,比如
this.foods.count,这样vue是不能监测到count这个属性的变化的，要用 Vue.set

### vue-music
1. jsonp:一个jsonp请求的库
2. fastclick: 解决移动端click延迟的问题
3. base目录下的组件一般是基础组件，会通过npm进行安装
4. 图片懒加载：Vue lazyload组件
5. listView 组件名js <list-view> || listview 组件名js <listview>
6.
```
//之所以在created接口定义属性，而不是在data中定义，是因为定义在created接口的属性不会获得vue的观测，当好几处都使用了一个属性的时候，我们又不想一直重复，就可以把属性定义在created中
    created() {
      this.probeType = 3
      this.listenScroll = true
      this.touch = {}
      this.listHeight = []
    },
```
7. number | 0 ->相当于 Math.floor,向下取整
8. vuex使用场景:项目负责，组件之间关系联系不紧密/路由跳转时候复杂的数据传递
9. 拖动进度条的时候，要加上阻止默认事件的修饰符，即阻止默认事件，可能会拖动浏览器，这点不是很立即，但是项目中是这样做的，参考common/progerss-bar.vue文件
10. watch可以传入两个参数，一个是新的值，一个是旧的值，也可以传入一个参数，
    表示新的值
11. 给组件设置ref，通过this.$refs.comname 取到的是整个组件，要取到
    真正的组件下的dom元素，要用this.$refs.comname.$el
12. 搜索历史要存储到localStorage中,老师自己写了一个storage库可以直接用
13. vue loader:可以使用stylus

### 电商项目
1. 引入的组件只要是有大写的，在template中书写的时候统一转化为小写，比如 ComA-> (<com-a></com-a>),SomeOtherChildrenCom->(<some-other-children-com></some-other-children-com>),在2.0中取消了严格的限制，是可以直接写的，属性帮定也是这样的规则
2. 动画部分
    - v-if
    - v-show
    - v-if-else:if和else的标签不一样，如果是一样的，比如都是p，就需要加上key以示区分<p key=''></p>
    - 动态组件:is动态渲染组件

### webApp 组件开发
1. 当给子元素和父元素同时定义了同一名称的事件时，可能会触发冒泡行为，解决办法两个，一是用jQuery提供的triggerHandler，在
子元素trigger事件的时候，而是在子元素定义的事件函数的结尾写上 return false

### es6加强
1.
 * 数组结构特别适用于 数字交换
```
let a=1,
    b=2;
[a,b] = [b,a]
console.log(a,b) //a=2 b=1
```
* 适用于取需要的的值
```
let b,c;
let a = [1,2,3,4,5];
[b,,,c] = a;
console.log(b,c)//1,4
```
2. 对象解构
```
let {name,id} = {name:'cui',id:2}
console.log(name,id)//'cui' 
<!-- 默认值的处理 -->
let {a=10,b=5} = {a:3}
console.log(a,b)//3,5
```
3.字符串扩展
 * includes:字符串是否包含某字符
 * startsWith:字符串是否以某字符开始
 * endsWith:是否是以某字符串结束的(某字符串可以是一位，也可以是多位)
 * repeat:字符串复制
 * 模板字符串:`${变量}`
 * padStart:补位，字符串前面补
 * padEnd:补位，字符串后面补

4. 数组扩展
 * Array.of:把一组数据变量转化为数组，如果不传参数，返回一个空数组
 * Array.from:将类数组转化为数组，比如arguments,dom集合等，转化
 之后，可以使用数组的方法，比如forEach
 * keys,values
 ```
 for(let index of [1,2,3].keys()){
  console.log(index)//0,1,2
 }

for(let value of [1,2,3].values()){
  console.log(value)//1,2,3
}

for(let [index,value] of [1,2,3].entries()){
  console.log(value)//[0,1] [1,2] [2,3]
  console.log(index,value)
}
 ```
 * find:找出符合条件的值，并且只返回第一个就返回
 * findIndex:找出符合条件的值的索引
 * includes:数组是否包含某值，但只限于数组的元素

5. 函数扩展
* 参数默认值
```
function test(x,y='world'){
  console.log(x,y)
}
test('hello')//hello world
test('hello','hhh')//hello hhh

```
* 展开符:当不知道有多少个参数的时候
```
function test(...args){
  for(let v of args){
    console.log(v);
  }
}
test(1,2,3,'a')//[1,2,3,a]
```
* 同上，上面是将离散的值转化为数组，这个是将数组转化为离散的值
```
console.log(...[1,2,3])//1,2,3
```
6. 对象
* 对象中函数的表示法 hello(){}
* Object.is:判断两个值是否相等,相当于===
```
Object.is('abc','abc')//true
Object.is([],[])//false

```
* Object.assign:拷贝对象,浅拷贝，只有自身对象的属性，不可枚举的属性不会拷贝
* Object.entries()

### Symbol
* 概念:提供一个独一无二的值

### 类
* class 
* 继承: extends ,super
* 属性getter,setter
* 静态方法:static，只能类调用
* 静态属性:直接在类上定义

DNS
vue-infinate-scroll vue下拉加载插件












