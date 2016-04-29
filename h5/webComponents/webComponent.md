　　就目前而言，纯粹的Web Components在兼容性方面还有着较为长远的路，这里做个记录总结，以纪念自己最近关于Web Components的学习道路。

#### 参考教材

* [JavaScript 标准参考教程(alpha)](http://javascript.ruanyifeng.com/htmlapi/webcomponents.html);

* [跟 Web Components 打个啵](https://segmentfault.com/a/1190000002931974);

* [argelius/favorite-star](https://github.com/argelius/favorite-star);


　　Web Components由`HTML Import`、`Template`、`Custom Element`、`Shadow DOM`四种技术规范。上面的三个文件，是我这次学习的主要参考，其中前两个教材引领我入门，学习了`HTML import`、`Template`、`shadowDOM`以及`custom Element`的相关知识;而第三个github上的资源则是一个比较完善的综合使用web Components实现的一个小例子。这里,最后，我也会给出自己学习制作的一个弹层的组件小例子。

#### HTML Import

1. 作用:`HTML Import`将外部的html引入,引入的文档全局有效。其用途有二:一是将整个项目所有的公共的css和js引用都放在一个html页面里,需要时直接引用这个html文档即可;二是将写好的组件放入一个html文档中，需要时直接引用这个html文档;

2. 用法: 被引用html页面不需要操作,引用页面需要加入link标签 `<link rel="import" href="xxx.html" />`这时被引入的文档内容只会被主文档存储起来，不会显示在页面中，需要手动添加到DOM结构中。

3. 将被引用文档内容添加到DOM结构中，需要先获取其link值的import,再通过其获得对应子文档的DOM结构，将其引入。格式如下:
```javascript
//子文档 importSub.html
<h1>hello world!</h1>

//主文档 importMain.html
<head lang="en">
    <link rel="import" href="importSub.html"/>
</head>
<body>
<script>
//获取到子文档在本文档对应的引用——即子文档在本文档的"代言人";
var s = document.querySelector('link[rel="import"]').import;
//获取子文档要被插入的DOM;
var t = s.querySelector('h1');
//插入到主文档中;
document.body.appendChild(t);
</script>
</body>
</html>

```

#### Template模板

1. template里可以存放html,css,js;

2. template本身及其内部的css、js、html不会被浏览器加载的,包括其中的格式;

3. 引入的时候先获取到模板,再复制模板的content,将其插入dom结构中;模板的作用在于可重用,每次的使用都需要复制模板的content，插入DOM中;模板的复制可以采用`cloneNode`,也可以采用`importNode`,推荐`importNode`;格式为`var x=document.importNode(content,true)`或者`var x = content.cloneNode(true)`

4. 移除模板 `document.querySelector('template').remove();`

5. `Template`模板所定义的css样式和js可被外界干扰，封装性不好,通常多与`shadowDOM`组合;

格式
```javascript

<div class="container"></div>
<template>
    <style>
        span{color:red;}
    </style>
    <span>hello</span>
    <script>
        console.log(1);
    </script>
</template>
<script>
//通过模板选择器获取到模板，再选择其内容;
    var m = document.querySelector('template').content;
//两种克隆模板内容的方法
    var s = document.importNode(m,true);
//    var s = document.importNode(m,true);
//将克隆结果插入到dom结构中;
    document.querySelector('.container').appendChild(s);
</script>
</body>
</html>
```

#### shadowDOM

1. `shadowDOM`,形成一个封闭的空间;将内部的html、css、js与外部隔离，不受干扰。其中,DOM结构中的元素是代言人,被爬虫爬取，而`shadowDOM`则是真正的DOM，用于展示内容,不会被爬取。多与`template`组合使用，使`template`内的css、js不受外界干扰。

2. `shadowDOM`内的模板可以通过`:host{}`来修改其外部容器的css样式,在外部也可以通过`选择器::shadow 选择器击穿`修改`shadowDOM`内的css样式; 优先级依照元素选择器的优先级进行比较,来决定是否能够修改template内部的样式;

3. 格式
```javascript
// 给class为container的div创建一个shadowDOM;
var shadow = document.querySelector('.container').createShadowRoot();
// 获取模板内容
var content = document.querySelector('template').content;
//将模板内容插入到shadowDOM中;
shadow.appendChild(content);
```

#### customElement

1. 作用: customElement允许我们定制独有的HTMLElement元素;

2. 生命周期:customElement在其生命周期内提供了四个回调函数`createdCallback`、`attachedCallback`、`attributeChangedCallback`和`detachedCallback`;

3. 格式
```javascript
//创建一个自定义DOM元素，继承自HTML.prototype;
var MyButton = Object.create(HTMLElement.prototype);
//增加自定义方法
MyButton.say = function(){
    console.log('hello');
};
//增加生命周期方法
MyButton.createdCallback = function(){
   this.innerHTML = 'hello,I\'m customElement!'
}
//将创建的DOM元素注册到DOM结构;这里的注册名字必须是带 '-'的写法;返回一个构造函数;

var myButton = document.registerElement('my-button',{
   prototype:MyButton,
   extends:'div',
//不加extends属性则为 <my-button></my-button>格式,加extends则为<div is="my-button"></div>格式
});
//接下来可以什么也不写,直接在页面中创建<div is="my-button"></div>;也可以执行下面的方法,自动添加;

var meButton =new myButton();
document.body.appendChild(meButton);

//获取加入的me-button
var s = document.querySelector('div[is="me-button"]');
s.say();        //output:hello;

```

#### 总结

　　我理解的Web Components开发组件是`customElement`做外壳，在其中建立`shadowDOM`,将模板放到`shadowDOM中`,形成一个html页面，使用时通过`HTML Import`引入。

　　学习Web Components碰到最多问题是事件方面,很多问题都是由于真正的DOM结构里没有对应的元素，可以在元素被插入到DOM结构中再绑定事件,引以为戒！

　　在学习web Components的时候，想像着自己封装的一个个组件，将整个页面通过组件像"搭积木"一样搭起来，挺有意思!

　