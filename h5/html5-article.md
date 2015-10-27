HTML5新增元素/属性

##全局属性:
1. ### contenteditable    内容可编辑,标签属性里设置,
        <ul contenteditable>
             <li>红</li>
             <li>绿</li>
             <li>蓝</li>
       </ul>
      【注:contenteditable/contenteditable=''/contenteditable = true 默认都是可编辑; 只有contenteditable='false'是不可编辑】

2. ### hidden   隐藏;
3. designMode:  页面是否可编辑，在js里设置; 自动带语法和输入检查;
       document.designMode = 'on'/'off' 【只能js里写;】
    designMode与contenteditable的区别
         contenteditable用于对局部元素进行可编辑设置,应用灵活;designMode用于对document进行可编辑设置；
4. spellcheck  input/textarea 对用户输入进行语法和输入检查,效果时灵时不灵的,不怎么好用);
5. tabIndex    设置按tab键时的顺序;不能与designMode混用;


##文章标签
* article: 一个页面可以使用多次，可以嵌套使用，可以表示插件；
  `
        <article>
            <header>
                <h1>小明</h1>
                <p>Hello,欢迎来到我家</p>
            </header>
            <article>
                <header>作者</header>
                <p>评论</p>
                <footer>time</footer>
            </article>
            <p>Hello</p>
            <footer>
                <p>这是底部</p>
            </footer>
        </article>
  `