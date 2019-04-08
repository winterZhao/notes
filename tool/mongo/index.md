# mongo

##1. 功能
nosql数据库

##2. 安装

docker run -d --name mongo -p 27017:27017  -v /root/tool/mongo/data:/data/db   mongo:3.4

##3. 操作
1. 默认容器的mongo没有用户名密码限制;数据在`/data/db`,配置文件/etc/mongod.conf

2. 开启登录身份验证

db.createUser(
  {
    user: "admin",
    pwd: "123456",
    roles: [ { role: "root", db: "admin" } ]
  }
)