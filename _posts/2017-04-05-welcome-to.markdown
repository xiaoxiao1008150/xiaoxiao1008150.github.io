---
layout: post
title:  "git revert"
date:   2017-04-05 14:39:51 +0800
categories: jekyll update
---

### 撤销未提交的改变

* 查看gs之后，按照自己的文件路径进行操作

```
use "git checkout -- <file>..." to discard changes in working directory

```
> 如果是多个文件改变， git checkout -- .

### 撤销已经提交的改变

1. git log 查看提交的历史记录
2. git revert + 版本号 

> 这个操作直接撤销文件 + 重新 commit ，也可以手动显示自己commit

3. git revert -n + 版本号

> 输入此命令之后，查看git status ，改变的问价会显示为绿色，意思是要手动
git add ,git commit


### git resert 

 * git reser --hard + 版本号 / 返回到之前任意版本提交的stamp
