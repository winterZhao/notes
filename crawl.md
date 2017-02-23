爬虫项目的总结

#### 爬取utf8页面

        const request = require('request');
        const cheerio = require('cheerio');
        request('https://www.baidu.com/', function (error, response, body) {
            if (!error && response.statusCode == 200) {
                var $ = cheerio.load(body);
                console.log( $('#su').val() )       // 百度一下
            }
        });

#### 爬取gbk页面




#### 爬取时伪造浏览器useragent以及请求头信息；


#### 定时爬取
