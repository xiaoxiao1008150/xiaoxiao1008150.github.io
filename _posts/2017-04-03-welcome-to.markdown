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

1. 撤销未提交到stage的代码(只在working进行修改的代码)
  
  ```
  (1) git status 查看状态
  (2) git checkout -- <file> ,快捷方式 git checkout -- . 撤销全部文件的内容
  ```
2. 撤销stage区域的代码(已经git add)
  
  ```
  git reset HEAD <file>
  ```
 
3. 撤销已经commit的代码

```
(1) git log查看提交日志
(2) git revert <版本号> 直接进行add commit程序
(3) git revert -n <版本号> 不直行add commit 程序，必须自己进行手工commit
```




### new

* git branch --查看分支
* git branch -a 查看本地和远程分支
* git pull --先把代码拉下来
* git log -n 3 -- 查看三条log信息
* git log --since=2017-06-20 -- 根据时间查看log信息，since从哪天开始
* git log --until=2017-06-20 -- 根据时间查看log信息，until到哪天结束
* git log --grep="fixbug" -- 查看含有所有‘fixbug’字段的log信息

### git diff 
1. working 区改变了文件，可以用git diff查看working 和 reposity文件之间的区别
2. 默认git diff是查看所有改变文件改变部分的区别，要单独查看某一个文件的话，git diff file.txt，
可以单独查看file1.txt文件的diff
3. 查看stage区文件与reposity问价的区别，git diff --staged

### delete 
1.从电脑文件夹删除，git add . -> git commit，删除可以在垃圾箱中找回
2.git rm package.json -> git commit 删除不可再找回
### git mv(重命名)
1. git 修改名字也有两种方法，一种是直接在文件夹下修改
2. git mv file1.txt file_rename.txt
> 无论是删除还是重命名文件，都有两种方法，一种是直接在文件夹修改，一种是用linux命令修改，
第二种会默认 git add步骤，所以直接到stage区域

### git commit --amend -m ''
```
比如说是修改导航的信息，已经提交过一次，commit 时候是‘change nav’,但是因为少修改了一条信息，
修改之后，git add -> git commit --amend -m ''，加到上次的commit里面，提交之后，只能查找到
一条commit信息，即 ‘change nav’
```

### .gitignore
参考地址:[https://github.com/github/gitignore](https://github.com/github/gitignore)
        [https://help.github.com/articles/ignoring-files/](https://help.github.com/articles/ignoring-files/)
1. 正则
2. ！非
3.注意嵌套文件夹
4.git会按照.gitignore里面的配置忽视文件跟踪，对于已经处于跟踪状态的文件，使用 git rm --cached 'file1.txt' 清除从stage中清除文件，这样，可以保证file1.txt之后的修改 不再被跟踪

### branch
1. git log --oneline:git log 一样，但是会列出简单的信息 
2. git commit -am 'XXXx': 等于 git add . -> git commit
3. git checkout -b new_branch: 等于 git branch new_branch -> git checkout new_branch ,即新建一个分支并且直接切换到该分支
4. git log --graph --oneline --decorate --all:查看主分支所有在一起的信息
5. git diff master..new_branch:查看两个分支HEAD之间的区别
6. git branch -m test mytest:重新命名分支名字
7.git branch -d need_delete:删除分支
8.git merge --abort 当合并分支有冲突的时候，可以先放弃合并，master分支回到原先未合并之前的状态

### .gitconfig
1. 我的电脑上，git的配置文件在/Users/wu下，使用命令 git .config --global core.editor "vim"
配置git 默认pop up的编辑器，git .config --list,可以查看当前配置信息。

### remote
1. git remote :查看远程分支
2. git remote -v:查看远程分支的详细信息
3. git remote rm orign :移除远程分支
4. git remote add <alias> <url>:对应给已经存在的分支添加远程时候的粘贴信息
alias指远程分支的别名，默认是origin,url是地址
5. git push -u origin master:把本地master分支推送到远程origin上
6. git branch -r:
7. git branch -a
8 .git log --oneline origin/master
9. git pull = git fetch + git merge
10.git push origin :test
11. git push origin --delete test:



























































