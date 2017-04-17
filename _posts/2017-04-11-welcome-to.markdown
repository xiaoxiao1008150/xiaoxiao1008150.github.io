---
layout: post
title:  "How does browser work "
date:   2017-04-11 14:39:51 +0800
categories: jekyll update
---


### render engine

  1. resource gathing
  2. parse html  & create dom tree // dom --document object module 
  3. create render tree from dom tree -- add style 
  4. layout //position size
  5.painting // 得到的信息到 UI backend to draw 

### status code

 * 200 -- ok
 * 300 --redicrect
 * 400 -- error
 * 500 -- server broke

### App lifecircle

1. load -- 1s 的 合适时间
2. idel -- 加载之后有大概 100ms 的闲置时间（比如观看网页），这段时间处理后面需要的
    代码
3. response -- 响应用户动作的时间，在用户觉察到延迟 的时间是100ms,处理相关之后需要反应的代码，比如让动画保持在60帧每秒

4. animation -- 60帧每秒 不卡顿流畅

