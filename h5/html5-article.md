HTML5新增元素/属性

##全局属性:
1. **contenteditable**    内容可编辑,标签属性里设置,
       ` <ul contenteditable>
             <li>红</li>
             <li>绿</li>
             <li>蓝</li>
         </ul>
       `
      【注:contenteditable/contenteditable=''/contenteditable = true 默认都是可编辑; 只有contenteditable='false'是不可编辑】

2. **hidden**   隐藏;
3. **designMode**:  页面是否可编辑，在js里设置; 自动带语法和输入检查;<br/>
                    document.designMode = 'on'/'off' 【只能js里写;】<br/>
               `designMode与contenteditable的区别
                    contenteditable用于对局部元素进行可编辑设置,应用灵活;designMode用于对document进行可编辑设置；
               `
4. **spellcheck**  input/textarea 对用户输入进行语法和输入检查,效果时灵时不灵的,不怎么好用);
5. **tabIndex**    设置按tab键时的顺序;不能与designMode混用;


##文章标签
*  **article**: 一个页面可以使用多次，可以嵌套使用，可以表示插件；<br/>
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
* **section**:
          进行内容分块，由标题和内容组成
          1.不要将section元素作为设置样式的页面容器,用div；
          2.如果article元素，aside元素/nav元素更符合使用条件，那不要使用section元素;
          3.没有标题内容，不要使用section元素;
          `
              <section>
                  <h1>苹果</h1>
                  <p>这是一个水果，可以吃，而且很好吃</p>
              </section>
          `
* **aside**:附属信息部分，包含内容的引用，侧边栏，广告，导航条等等<br/>
          `
               <aside>
                   <nav>
                   <h2>评论</h2>
                   <ul>
                       <li><a href="#">淘宝</a></li>
                       <li><a href="#">京东</a></li>
                   </ul>
                   </nav>
               </aside>
          `
* **nav**:   导航:导航条，侧边栏导航，业内导航,翻页操作等- 不能使用menu元素代替nav元素;
          `
          <nav>
              <ul>
                  <li><a href="#">主页</a></li>
                  <li><a href="#">开发文档</a></li>
              </ul>
          </nav>
          `
* **time**
  **pubdate** :明确表示当前发布的日期;
          `
                 <time datetime="2015-10-10">2015-10-10</time>
                 <time datetime="2015-10-11T20:00" pubdate='true'>2015-10-11</time>
                 <time datetime="2015-10-12T20:00Z">2015-10-12</time>
                 <time datetime="2015-10-13T20:00+09:00">2015-10-13</time>
                 <!--t分割符，z标准格式，+时区时差-->
          `
 

* **header**  : 放标题(h1-h6)，数据表格，搜素表单，logo；可以出现多次-->
          `
              <article>
                  <header>
                      <h1>Hello</h1>
                  </header>
              </article>
          `

* **footer** :footer:脚注：包括作者，相关信息等;可以使用多次
          `
                <footer>
                    <ul>
                        <li><a href="#">版权信息</a></li>
                        <li><a href="#">版权信息</a></li>
                        <li><a href="#">版权信息</a></li>
                    </ul>
                </footer>
          `
* **hgroup** :将标题与子标题分组
          `
                <hgroup>
                            <h1>标题</h1>
                            <h2>这是一个子标题</h2>
                </hgroup>
          `
* **address** :呈现信息：作者名字，网站链接，邮箱地址，联系方式等;
          `
                <address>
                    <a href="#">iwen</a>
                    <a href="#">ime</a>
                </address>
          `

* **figure** :  插入配图 <br/>
  **figcaption** :配图说明文字
          `
             <figure>
                  <img src="shanghai_lupu_bridge.jpg" width="350" height="234" /><br>
                  <figcaption>黄浦江上的的卢浦大桥</figcaption>
             </figure>

          `
