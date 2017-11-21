---
layout: post
title:  "node部署"
date:   2017-09-10 14:39:51 +0800
categories: jekyll update
---
### 域名
1. 爱名网
2. 阿里云
3. goDaddy
注意：DNSPOD网站进行域名的解析

### 服务器
1. 国外
  * 亚马逊
  * Linode
  * DigitOcean/Heroku
2. 国内
 * 阿里云 ECS
 * 青云、UCloud/百度云

1abqbf
15102969594
634089cx
fdisk -l 查看系统盘
df -h 查看硬盘使用情况
1. 到 cd ~ 下
2. vim .zshrc

3. alias ssh-imooc = "ssh root@120.26.235.4"
4. source .zshrc

adduser manager: 给服务器电脑添加一个人员

本地电脑
1. cd ~ 
2. id_rsa 私钥  id_rsa.pub  公钥
(之前没有生成过的话 ssh-keygen -t rsa -b 4096 -C "xiaoxiao1008150@gmail.com")
3. eval "$(ssh-agent -s)"
4. ssh-add ~/.ssh/id_rsa
服务器电脑
1-4同样的流程
5.  .ssh$目录下:  vi .authorized_keys，此时.ssh 目录下多出文件 authorized_keys
6. 将本地电脑的公钥复制， 粘贴到 authorized_keys 中
7. 授权 chmod 600 authorized_keys
8. sudo service ssh restart ：重启ssh服务
完成之后在本地电脑上 ssh root@120.26.235.4 重新连接 就不用输入密码了

### 服务器安全相关设置
1. ssh...
2. vim  /etc/ssh/sshd_config(修改相关设置)
3. 输入密码
4. sudo service ssh  restart


ssh-copy-id root@106.15.224.127 
可以将本机的 密钥贴到远程的 .ssh/authorized_keys中，可以无密码登录

安装完 nginx 我们的电脑就可以访问了， 此时的页面是一个nginx默认的页面
因为我们还没有加载自己的文件
安装node运行环境
node 6以上的版本 npm 为3 以上版本











