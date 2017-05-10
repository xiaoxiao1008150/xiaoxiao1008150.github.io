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

> 新建的分支是在本地下的，git push -u origin login 推送到远程分支，这样在github上也可以查看到
  login分支

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

### git revert

1. 撤销未提交的代码
  
  ```
  (1) git status 查看状态
  (2) git checkout -- <file> ,快捷方式 git checkout -- . 撤销全部文件的内容
  ```
2. 撤销已经commit的代码

```
(1) git log查看提交日志
(2) git revert <版本号> 直接进行add commit程序
(3) git revert -n <版本号> 不直接进行add commit 程序，必须自己进行手工commit
```





 


























































