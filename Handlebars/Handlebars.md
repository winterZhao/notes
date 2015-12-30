#Handlebars.js
Handlebars.js是一种模板引擎，是相对于字符串拼接、动态添加元素以及文档碎片等在js里添加html内容而提出来的。它的特点在于是写在html/php页面里，可以很方便的将php语句添加到模板引擎中，解决一些字符串拼接所不能解决的问题。比如打点。

我是学习杨元的Handlebars.js的教程入门的。建议先看这里: <a href ="http://www.cnblogs.com/iyangyuan/archive/2013/12/12/3471227.html" target="_blank">Handlebars</a>  

##Handlebars的引入:
1.先引入jquery;<br/>
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
        var myTemplate = Handlebars.compile($("#collection-template").html());   //compile编译
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
   答:这里的处理主要有两种方法:<br/>
   方法一:在传入data之前就先对data做处理。截取到所需要的数据,将整个JSON数据里所需要的不同纵深位置的数据都放到data一层里(通过数组push,对象加属性的方法);这样传入模板引擎的JSON数据实际上只有两层,会大大方便你的工作.<br/> 【具体事例参加data1.html】
   方法二:简单的使用Handlebars里的if,复杂的使用Handlebars的Handlebars.registerHelper增加帮助函数; 【具体事例参加data2.html】
7.`$('#main').html(myTemplate(data));` 这里可以选择html,也可以选择append;具体视情况而定;<br/>
8. Handlerbars.js可以通过`../`来返回上一层,也可以通过对象的`.属性`方式进入下一层;<br/>


9.Handlebars.registerHelper :给Handlerbars注册帮助函数.写在js里，格式为`Handlebars.registerHelper('name',function(a,b,options){})`，这里的a,b为可选参数，数量不定,写在模板引擎里'name'函数名的后面的属性为实参;options为可选参数，代表本次循环渲染的当前对象;【具体事例参加data2.html】

10. 注释 {{{注释}}},注释用三个大括号包围;




   data1.html和data2.html为两个例子。data1.html是在渲染数据前对数据进行截取处理;data2.html为Handlebars.registerHelper注册帮助函数;
