#Handlebars.js
Handlebars.js是一种模板引擎，是相对于字符串拼接、动态添加元素以及文档碎片等在js里添加html内容而提出来的。它的特点在于是写在html/php页面里，可以很方便的将php语句添加到模板引擎中，解决一些字符串拼接所不能解决的问题。比如打点。

##Handlebars的引入:
1.先引入jquery;
2.引入handlebars.js;
```js
<script src="//cdn.bootcss.com/jquery/1.11.2/jquery.min.js"></script>
<script src="//cdn.bootcss.com/handlebars.js/4.0.5/handlebars.min.js"></script>
```
##Handlebars的结构:
```html
//html页面里;
<div id="main"></div>
<script id="my-template" type="text/x-handlebars-template">
</script>
//js页面
     var url = '***';
    $.getJSON(url,function(JSON){
        var data = JSON.content.nodeList[0].nodeData.dataList;
        var myTemplate = Handlebars.compile($("#collection-template").html());
          $('#main').html(myTemplate(data));
    })
```



##Handlebars的基本语法;
1.所有的Handlebars语句由{{}}双大括号包裹. `<span>{{id}}</span>` <br/>
2.行内元素:Handlebars像html一样也可以分为行内元素和块元素:行内元素的渲染如上. `<p>{{title}}</p>` <br/>
3.块元素:**块元素前要加#号,结尾时要用"/";**Handlebars渲染的是JSON数据,JSON数据主要由对象和数组进行层次嵌套.Handlebars封装的方法是`with`和`each`; <br/>
简单点说就是**逢对象with进入,逢数组each遍历;**
```
<script id="my-template" type="text/x-handlebars-template">
   {{#with dataList}}
       {{#each this}}
          <span>{{id}}</span>
       {{/each}}
   {{/each dataList}}
</script>
```
4.同js一样,这里也可以大胆的使用this来遍历each(其前面有with进入时)/或者是块元素里的行内元素 `<span>{{this.id}}</span>` <br/>
5. `$('#main').html(myTemplate(data));`里的data;<br/>
这里的data是传入模板引擎的数据,是模板引擎渲染的部分。如果data是数组,则模板引擎里以{{#each xx}}开始,{{/each}}结尾;<br/> 如果data是对象,则以{{#with xx}}开头,{{/with}}结尾。我们需要的往往是JSON数据里的dataList部分,可以通过 `var data = JSON.content.nodeList[0].nodeData.dataList;`直达我们所需要数据的最主要部分。<br/>
6. 问:如果我只需要渲染ajax获得的一部分数据怎么办?
   答:这里的处理主要有两种方法:
   方法一:在传入data之前就先对data做处理。截取到所需要的数据,将整个JSON数据里所需要的不同纵深位置的数据都放到data一层里(通过数组push,对象加属性的方法);这样传入模板引擎的JSON数据实际上只有两层,会大大方便你的工作.
   方法二:简单的使用Handlebars里的if,复杂的使用Handlebars的Handlebars.registerHelper增加帮助函数;
7.`$('#main').html(myTemplate(data));` 这里可以选择html,也可以选择append;具体视情况而定;
8. Handlerbars.js可以通过`../`来返回上一层,也可以通过对象的`.属性`方式进入下一层;




下面是个完整的例子.将通过两种方法进行数据的渲染.这里的url为随机百度检索关键字所得.

```html
<!DOCTYPE html>
<html>
<head lang="en">
    <meta charset="UTF-8">
    <title></title>
</head>
<body>
<table>
    <thead><th><td>姓名</td><td>年龄</td><td>语文</td><td>数学</td><td>英语</td></th></thead>
    <tbody id="tbody"></tbody>
</table>
<script src="//cdn.bootcss.com/jquery/1.11.2/jquery.min.js"></script>
<script src="//cdn.bootcss.com/handlebars.js/4.0.5/handlebars.min.js"></script>
<script id="my-template" type="text/x-handlebars-template">
  {{#each this}}
      <tr>
          <td>{{name}}</td><td>{{age}}</td><td>{{ch}}</td><td>{{this.ma}}</td><td>{{en}}</td>
      </tr>
   {{/each}}
</script>
<script>
    var JSON={
        isEnd:false,
        nodeData:[
            {
                name: '张三',
                age:18,
                score:{
                    Chinese:80,
                    Math:90,
                    English:85
                }

            },
            {
                age:19,
                score:{
                    Chinese:50,
                    Math:70,
                    English:95
                }

            },
            {
                name: '王五',
                age:20,
                score:{
                    Chinese:70,
                    Math:60,
                    English:55
                }

            }
        ]
    }


  console.log(JSON);

    var data = JSON.nodeData;
    var arr=[];
    for(var i= 0,r=data.length;i<r;i++){
        if(data[i].name){
            data[i].ch=data[i].score.Chinese;
            data[i].ma =data[i].score.Math;
            data[i].en=data[i].score.English;
            arr.push(data[i]);
        }
    }
    console.log(arr);
    var myTemplate = Handlebars.compile($('#my-template').html());
    $('#tbody').html(myTemplate(arr))

</script>
</body>
</html>
```

或者

```html
<body>
<table>
    <thead><th><td>姓名</td><td>年龄</td><td>语文</td><td>数学</td><td>英语</td></th></thead>
    <tbody id="tbody"></tbody>
</table>
<script src="//cdn.bootcss.com/jquery/1.11.2/jquery.min.js"></script>
<script src="//cdn.bootcss.com/handlebars.js/4.0.5/handlebars.min.js"></script>
<script id="my-template" type="text/x-handlebars-template">
  {{#each this}}
      <tr>
          <td>{{name}}</td><td>{{age}}</td><td>{{this.score.Chinese}}</td><td>{{this.score.Math}}</td><td>{{this.score.English}}</td>
      </tr>
   {{/each}}
</script>
<script>
    var JSON={
        isEnd:false,
        nodeData:[
            {
                name: '张三',
                age:18,
                score:{
                    Chinese:80,
                    Math:90,
                    English:85
                }

            },
            {
                age:19,
                score:{
                    Chinese:50,
                    Math:70,
                    English:95
                }

            },
            {
                name: '王五',
                age:20,
                score:{
                    Chinese:70,
                    Math:60,
                    English:55
                }

            }
        ]
    }

    var data = JSON.nodeData;
    var myTemplate = Handlebars.compile($('#my-template').html());
    $('#tbody').html(myTemplate(data))

</script>
</body>
```
