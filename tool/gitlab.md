# gitlab

##1. 功能
代码仓库

##2. 安装
* 环境: 
    * centos7.4
* [安装链接](https://blog.csdn.net/duyusean/article/details/80011540)
1. snap方式
* 安装脚本(root用户)
* `wget https://mirrors.tuna.tsinghua.edu.cn/gitlab-ce/yum/el7/gitlab-ce-10.0.0-ce.0.el7.x86_64.rpm`
* `rpm -i gitlab-ce-10.0.0-ce.0.el7.x86_64.rpm`
*  vim  /etc/gitlab/gitlab.rb   #配置ip,端口

    external_url 'http://127.0.0.1:3002'

* `gitlab-ctl reconfigure`
* `gitlab-ctl restart`


安装成功但需要4g内存，暂时放弃

##3. 安装问题
1. 汉化