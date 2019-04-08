# gitlab

##1. 功能
流处理消息队列

##2. 安装
* 环境: 
    * centos7.4
* [安装链接](https://blog.csdn.net/wqh8522/article/details/79163467)
* 下载: `wget http://mirror.bit.edu.cn/apache/kafka/1.0.0/kafka_2.11-1.0.0.tgz`
* 安装: `tar -zxvf kafka_2.11-2.2.0.tgz  -C /opt/ `
* `cd kafka_2.11-2.2.0/ `
* 配置: `vim config/server.properties`
    
    
    broker.id=1
* 启动zookeeper `bin/zookeeper-server-start.sh -daemon config/zookeeper.properties`
* 启动kafka  `bin/kafka-server-start.sh config/server.properties`



##3. 概念

1. Broker：Kafka集群包含一个或多个服务器，这些服务器就是Broker
2. Topic：每条发布到Kafka集群的消息都必须有一个Topic
3. Partition：是物理概念上的分区，为了提供系统吞吐率，在物理上每个Topic会分成一个或多个Partition，每个Partition对应一个文件夹
4. Producer：消息产生者，负责生产消息并发送到Kafka Broker
5. Consumer：消息消费者，向kafka broker读取消息并处理的客户端。
6. Consumer Group：每个Consumer属于一个特定的组，组可以用来实现一条消息被组内多个成员消费等功能。

## 4. 配置文件

## 5. 基本操作

## 4. node使用


## 5. kafka和MQ的区别


## 6. kafka的优缺点


## 7. kafka的高并发/对内存/cpu的影响



## 8. 面试