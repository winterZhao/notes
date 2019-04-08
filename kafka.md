# kafka

##1. 功能
流处理消息队列

##2. 安装
* 环境: 
    * centos7.4
    * jdk8
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
2. Topic：每条发布到Kafka集群的消息都必须有一个Topic, 一个Topic可以认为是一类消息
3. Partition：是物理概念上的分区，为了提供系统吞吐率，在物理上每个Topic会分成一个或多个Partition，每个Partition对应一个文件夹;每个partition在存储层面是append log文件。任何发布到此partition的消息都会被直接追加到log文件的尾部，每条消息在文件中的位置称为offset（偏移量），offset为一个long型数字，它是唯一标记一条消息。 
4. Producer：消息产生者，负责生产消息并发送到Kafka Broker;Producer将消息发布到指定的Topic中,同时Producer也能决定将此消息归属于哪个partition;
5. Consumer：消息消费者，向kafka broker读取消息并处理的客户端。 每个consumer属于一个consumer group;反过来说,每个group中可以有多个consumer.发送到Topic的消息,只会被订阅此Topic的每个group中的一个consumer消费.如果所有的consumer都具有相同的group,这种情况和queue模式很像;消息将会在consumers之间负载均衡. 如果所有的consumer都具有不同的group,那这就是"发布-订阅";消息将会广播给所有的消费者.

6. Consumer Group：每个Consumer属于一个特定的组，组可以用来实现一条消息被组内多个成员消费等功能。
7. zookeeper:服务注册发现, 无论是kafka集群，还是producer和consumer都依赖于zookeeper来保证系统可用性集群保存一些meta信息。

   kafka和activeMQ不同的是:即使消息被消费,消息仍然不会被立即删除.日志文件将会根据broker中的配置要求,保留一定的时间之后删除;比如log文件保留 2天,那么两天后,文件会被清除,无论其中的消息是否被消费.kafka通过这种简单的手段,来释放磁盘空间,以及减少消息消费之后对文件内容改动的磁盘IO开支.

   对于consumer而言,它需要保存消费消息的offset,对于offset的保存和使用,有consumer来控制;当consumer正常消费消息时,offset将会"线性"的向前驱动,即消息将依次顺序被消费.事实上consumer可以使用任意顺序消费消息,它只需要将offset重置为任意值.

   kafka集群几乎不需要维护任何consumer和producer状态信息,这些信息有zookeeper保存;因此producer和consumer的客户端实现非常轻量级,它们可以随意离开,而不会对集群造成额外的影响.

   partitions的设计目的有多个.最根本原因是kafka基于文件存储.通过分区,可以将日志内容分散到多个server上,来避免文件尺寸达到单机磁盘的上限,每个partiton都会被当前server(kafka实例)保存;可以将一个topic切分多任意多个partitions,来消息保存/消费的效率.此外越多的partitions意味着可以容纳更多的consumer,有效提升并发消费的能力.

   基于replicated方案,那么就意味着需要对多个备份进行调度;每个partition都有一个server为"leader";leader负责所有的读写操作,如果leader失效,那么将会有其他follower来接管(成为新的leader);follower只是单调的和leader跟进,同步消息即可..由此可见作为leader的server承载了全部的请求压力,因此从集群的整体考虑,有多少个partitions就意味着有多少个"leader",kafka会将"leader"均衡的分散在每个实例上,来确保整体的性能稳定.

   在kafka中,一个partition中的消息只会被group中的一个consumer消费;每个group中consumer消息消费互相独立;我们可以认为一个group是一个"订阅"者,一个Topic中的每个partions,只会被一个"订阅者"中的一个consumer消费,不过一个consumer可以消费多个partitions中的消息.kafka只能保证一个partition中的消息被某个consumer消费时,消息是顺序的.事实上,从Topic角度来说,消息仍不是有序的.

   kafka的设计原理决定,对于一个topic,同一个group中不能有多于partitions个数的consumer同时消费,否则将意味着某些consumer将无法得到消息.
   如果一个topic的名称为"my_topic",它有2个partitions,那么日志将会保存在my_topic_0和my_topic_1两个目录中;日志文件中保存了一序列"log entries"(日志条目)

## 4. 配置文件

## 5. 基本操作

#创建topic
bin/kafka-topics.sh --create --zookeeper localhost:2181 --replication-factor 1 --partitions 1 --topic MyTopic  
#查看topic列表
bin/kafka-topics.sh --list --zookeeper localhost:2181
# 创建group
bin/kafka-console-consumer.sh --bootstrap-server localhost:9092 --topic MyTopic --from-beginning --group 'topic-group'

#运行producter
bin/kafka-console-producer.sh --broker-list localhost:9092 --topic MyTopic
#运行consumer 
bin/kafka-console-consumer.sh --bootstrap-server localhost:9092 --topic MyTopic --from-beginning (--group 'topic-group')

## 4. node使用


## 5. kafka和MQ的区别


## 6. kafka的优缺点
1. 优点
* 大数据量流式操作
* 可异步操作，性能好
* 批量操作,性能好
* kafka是对日志文件进行append操作,因此磁盘检索的开支是较小的;同时为了减少磁盘写入的次数,broker会将消息暂时buffer起来,当消息的个数(或尺寸)达到一定阀值时,再flush到磁盘,这样减少了磁盘IO调用的次数.
* 消息传送机制
    * at most once: 最多一次,这个和JMS中"非持久化"消息类似.发送一次,无论成败,将不会重发.
    * at least once: 消息至少发送一次,如果消息未能接受成功,可能会重发,直到接收成功.[首选]

2. 缺点:
* 尚未确保消息的发送与接收绝对可靠

## 7. kafka的高并发/对内存/cpu的影响



## 8. kafka优化
1.  其实对于producer/consumer/broker三者而言,CPU的开支应该都不大,因此启用消息压缩机制是一个良好的策略;压缩需要消耗少量的CPU资源,不过对于kafka而言,网络IO更应该需要考虑.可以将任何在网络上传输的消息都经过压缩.kafka支持gzip/snappy等多种压缩方式.
2. 负载均衡: producer将会和Topic下所有partition leader保持socket连接;消息由producer直接通过socket发送到broker,中间不会经过任何"路由层".事实上,消息被路由到哪个partition上,有producer客户端决定.比如可以采用"random""key-hash""轮询"等,如果一个topic中有多个partitions,那么在producer端实现"消息均衡分发"是必要的.

## 9. 面试
1.   