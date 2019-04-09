const topic = 'MyTopic';
const partition = 0;

const kafka = require('kafka-node');
const HighLevelProducer = kafka.HighLevelProducer;
const client = new kafka.KafkaClient({
            kafkaHost:'127.0.0.1:9092',
        });
const producer = new HighLevelProducer(client);
const Consumer = kafka.Consumer;
const consumer = new Consumer(client, [{topic,partition}]);
    
consumer.on('message', function (message) {
    console.log(message);
});
consumer.on('error', function (error) {
    console.log(error);
});

producer.on('ready', function() {
    console.log('111111');
    producer.send([{
        topic,
        // partition,
        // timestamp: Date.now(),
        message: ['uu'],
    }], function(err,data) {
        console.log(err);
        console.log(data);
    })
})

producer.on('error', function(err) {
    console.log(err);
})

    