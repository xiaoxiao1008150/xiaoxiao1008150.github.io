---
layout: post
title:  "git command"
date:   2017-04-03 14:39:51 +0800
categories: jekyll update
---


### .gitignore文件
* 不需要文件的直接写文件的名字，或者用通配符
* 不需要文件夹的写成 /dir

### 新建分支


* 新建分支--git branch login  
* 切换到新建分支--git checkout login
* 切换到master--git checkout master
* 分支login完成工作之后，master分支是看不到的，此时要把分支内容合并到master分支
 先切换到master 分支，git merge login


### linux command

 * cd / -- back to root
 * cd 或者 cd ~ -- back to home
 * cat --watch file content
 * less 

 * mv -- rename

 eg:

 ```
  mv file1.txt file2.txt
 ```

 file1.txt 文件名现在为 file2.txt

 * cp -- copy file

 eg:
 ```
 cp file2.txt file1.txt

 ```
 * delete file

 ```
 rm log.txt
 ```
 * delete dir -- rmdir 

 rmdir 只适用于文件夹是空的，如果文件夹不是空的，就不行，用rm -R 删除

 ```
 rmdir 
 ```
 * ifconfig
 * ping
 *  uname -a
 * top --process relative


### new

* git branch --查看分支
* git branch -a 查看本地和远程分支
* git pull --先把代码拉下来





 


























































