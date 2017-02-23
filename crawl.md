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

        var options = {
            url: 'http://www.163.com/',
            encoding: null
        }
        request(options, function (error, response, body) {
            if (!error && response.statusCode == 200) {
                str = iconv.decode(body, 'gbk');
                var $ = cheerio.load(str);
                console.log( $('#_link_auto').text() ) // 汽车
                
            }
            
        })



#### 爬取时伪造浏览器useragent以及请求头信息；

上面爬取网页页面其实会提示访问受限制，然后跑到上的这个受限制页面；是因为没有伪造浏览器头部信息

        var options = {
            url: 'http://www.163.com/',
            encoding: null,
            headers: {
               'user-agent': 'xx',
            }
        }
        request(options, function (error, response, body) {
            if (!error && response.statusCode == 200) {
                str = iconv.decode(body, 'gbk');
                console.log(str) // Show the HTML for the Google homepage.
            }
        })

#### 定时爬取


#### 动态修改ip
