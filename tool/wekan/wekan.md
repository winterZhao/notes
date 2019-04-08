# wekan

##1. 功能
看板工具

##2. 安装
* 环境: 
    * centos7.4
* [安装链接](https://github.com/wekan/wekan-snap/wiki/Install)
1. snap方式
* 安装脚本(root用户)

        #!/bin/bash
        yum makecache fast
        yum install -y yum-plugin-copr epel-release
        yum copr enable ngompa/snapcore-el7
        yum install -y snapd
        systemctl enable --now snapd.socket
        sleep 20
        snap install wekan
        export MONGO_URL='mongodb://wekan:wekan@127.0.0.1:27017/wekan?authSource=wekan'
        snap set wekan root-url="https://127.0.0.1"
        snap set wekan port='3001'
        systemctl restart snap.wekan.wekan
        systemctl enable snap.wekan.wekan

* 访问 https://127.0.0.1:3001端口,先注册，后登录，如果有报错刷新页面
* 相关日志在`/var/snap/wekan/common/mongodb.log` 可看,数据存储在`/var/snap/wekan/common`



