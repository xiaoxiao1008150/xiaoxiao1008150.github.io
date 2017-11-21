---
layout: post
title:  "node 相关"
date:   2017-08-20 14:39:51 +0800
categories: jekyll update
---
1. 要想监控服务端的代码比如，server.js，可以安装nodemon(npm i -D nodemon)
,这样就可以不用重启server.js
2.中间件:本质是一个function,可以有多个
3. request:
  * req.param
  * req.query
  * req.body(需要body-parser)
  * req.cookies(cookie-paser)
  * req.header:从请求的header信息中取出想要的信息
4. response
  * res.render
  * res.locals:设置的值默认会当做res.render的参数传入handlebar
  * res.set:设置response的header
  * res.send([body|status],[body])
  * res.json([status]|body):是res.send的一种，默认发送回客户端的内容
  形式是json
  * res.status:返回response code 
5. 模板:
  * 默认支持 ejs和 jade,express知道，但是还需要在package下进行安装，在文件中不需要特殊设置。
    handlebar需要安装并且设置
  * app.set('view engine','jade'):设置了之后，渲染文件不用写.jde后缀
  * app.set('views','templates'):设置渲染模板的路径，默认是views下，如果要
  渲染templates下的，app.set('views','templates')
  * app.engine('hbs',hbs()):告诉express使用handlebar的引擎

### 全栈项目
1. 新建一个文件夹client,通过vue-cli启动vue项目
2. 新建文件夹server
  * npm -init:初始化服务器端的package.json
  * npm install express body-parser morgon cors 
  * npm eslint nodemon
  * node ./node-modelus/eslint/eslint.js :具体没记清楚，功能是启动一个eslint配置文件
    进行eslint代码的配置
  * index.js: 配置基本的服务器端代码，路由等

### XSS 攻击方式
1. 反射型：XSS代码在url中，提交到服务端，服务端解析，XSS代码随响应内容传回浏览器，修改cookie，破坏页面结构，插入恶意内容广告等
2. 存储型：提交的代码会存储在服务器端(数据库，内存，文件系统)，下次请求目标页面时候不在提交XSS代码
3. 防范措施：
  * x-xss-protection:0 服务器设置，response-header中的内容，一些浏览器会默认拦截
  * 编码: 对用户的输入进行编码
  * 过滤: 输入的一些不合法的东西进行过滤
  * 校正: 

### 跨站请求伪造
1.概念: 攻击者盗用你的身份，以你的名义发送恶意请求
2.常见危害: 发送邮件，修改账户信息，资金转账，网站被上传网马 








bluebird:
jsonwebtoken
bcrypt-node.js
vuex-router-sync
db.posts.remove({}):清空数据库中的posts集合
truncate npm :文本截断
express-session
express-message
connect-flash

"test": "mocha --harmony test"
NODE_ENV=production supervisor --harmony index ：链接线上的mLab


   // "node-sass": "^4.5.0",
    // "sass-loader": "^4.1.1"





 












