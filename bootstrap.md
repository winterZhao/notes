#Bootstrap

[label/button]:
label-default、label-primary、label-success、label-info、label-warning、label-danger

* [布局](#a1)
* [文本段落](#a2)
* [table](#a3)
* [form](#a4)
* [button](#a5)
* [图片](#a6)
* [帮助类(关闭按钮/下拉三角)](#a7)
* [visibility and print](#a8)
* [字形图标](#a9)
* [按钮组/下拉菜单/按钮下拉菜单组](#a10)
* [导航](#a11)
* [分页/翻页](#a12)



<a name='a1'>
##布局(移动优先)
.container  固定宽度，居中显示;
.container-fluid     100%宽度(和上面不能同时使用);
###网格系统
   col-xs-  手机   col-sm-  平板  col-md- 电脑    col-lg-  大型电脑;
.col-md-offset-*  左偏移列(单位是列)
```html
<div class="container">
  <div class="row">
      <div class="col-xs-2"></div>
      <div class="col-xs-10"></div>
  </div>
</div>
```
###媒体查询
/* 超小设备（手机，小于 768px） */
/* Bootstrap 中默认情况下没有媒体查询 */

/* 小型设备（平板电脑，768px 起） */
@media (min-width: @screen-sm-min) { ... }

/* 中型设备（台式电脑，992px 起） */
@media (min-width: @screen-md-min) { ... }

/* 大型设备（大台式电脑，1200px 起） */
@media (min-width: @screen-lg-min) { ... }



<a name='a2'>
##Text文本段落
.lead	使段落突出显示<br/>
.small	设定小文本 (设置为父文本的 85% 大小)<br/>
.text-left	设定文本左对齐<br/>
.text-center	设定文本居中对齐<br/>
.text-right	设定文本右对齐<br/>
.text-justify	设定文本对齐,段落中超出屏幕部分文字自动换行<br/>
.text-nowrap	段落中超出屏幕部分不换行<br/>
.text-lowercase	设定文本小写<br/>
.text-uppercase	设定文本大写<br/>
.list-unstyled	移除默认的列表样式，列表项中左对齐应用于`<ul>`元素和` <ol> `元素中。 这个类仅适用于直接子列表项<br/> (如果需要移除嵌套的列表项，你需要在嵌套的列表中使用该样式)<br/>
.list-inline	将所有列表项放置同一行<br/>
.dl-horizontal	该类设置了浮动和偏移，应用于`<dl>`元素和` <dt> `元素中，<br/>
.pre-scrollable	使`<pre>` 元素可滚动<br/>
.`<code>`         如果您想要内联显示代码，那么您应该使用`<code>` 标签。<br/>
.`<pre>`         如果代码需要被显示为一个独立的块元素或者代码有多行，那么您应该使用`<pre>` 标签。<br/>

*单个标签背景改变*:<br/>
.active	       对某一特定的行或单元格应用悬停颜色<br/>
.success	   表示一个成功的或积极的动作<br/>
.warning	   表示一个需要注意的警告<br/>
.danger	       表示一个危险的或潜在的负面动作<br/>


<a name='a3'>
##Table
`<table>`	容纳以表格形式显示数据的元素。<br/>
`<thead>`	表格标题行的容器元素（`<tr>`），用来标识表格列。<br/>
`<tbody>`	表格主体中的表格行的容器元素（`<tr>`）。<br/>
`<tr>`	一组出现在单行上的表格单元格的容器元素（`<td>` 或` <th>`）。<br/>
`<td>`	默认的表格单元格。<br/>
`<th>`	特殊的表格单元格，用来标识列或行（取决于范围和位置）。必须在 `<thead>` 内使用。<br/>
`<caption>`	关于表格存储内容的描述或总结(标题)。<br/>

.table       带有内边距和水平分割线;<br/>
.table-striped    <tbody>行上看到条纹;<br/>
.table-bordered   每个单元格带有边框；<br/>
.table-hover      鼠标滑过变色<br/><br/>
.table-condensed   行高变小,显得紧凑;<br/>
【将表格包裹在`<div class='responsive'>响应式表格</div>`】<br/>

<a name='a4'>
##form
role='form'<br/>
form.form-inline:  表单内的元素一行显示,左对齐;<br/>
`form`.form-horizontal +`label`.control-label  【表单内的每一个标签组一行显示】<br/>
.form-group： 把标签和空间放在一个div中;<br/>
.form-control: 向所有的文本元素`<input>`、`<textarea>` 和 `<select>` 添加<br/>
.checkbox-inline/.radio-inline:   复选框、单选框一行显示;<br/>
multiple = 'multiple'     选择框允许用户多选项;<br/>
p.form-control-static    label后放置纯文本p标签<br/>
*input表单状态*<br/>
disabled    禁用;<br/>
div.has-warning、 .has-error 或 .has-success     对父元素div添加相应的class即可使用验证状态。<br/>
###输入框组
【`<div class='input-group'><span class='input-group-addon'>@</span><input type='text' class='form-control'></div>`            把前缀后缀元素`span.input-group-addon`及`<input>`放在一个带有`div.input-group` 中。
 [如果前后缀为按钮,则需用`<div.input-group-btn><button>go</button></div>`替换其中的`<span>`]
 】
```html
<div class="container">
    <form action="" role="form">
        <div class="row" style="margin-top:20px;">
            <div class="form-group">
                <label for="name" class="col-xs-3 control-label">姓名</label>
                <div class="col-xs-9">
                    <input type="text" class="form-control" id="name"/>
                </div>
            </div>
        </div>
        <div class="row" style="margin-top:20px;">
            <div class="form-group">
                <label for="password" class="col-xs-3 control-label">密码</label>
                <div class="col-xs-9">
                    <input type="password" class="form-control" id="password"/>
                </div>
            </div>
        </div>
//输入框组
        <div class="input-group" style="margin-top:20px;">
            <span class="input-group-addon">Tel</span>
            <input type="text" class="form-control"/>
        </div>
        <div class="input-group" style="margin-top:20px;">
            <span class="input-group-addon">$</span>
            <input type="text" class="form-control"/>
            <span class="input-group-addon">.00</span>
        </div>
        <div class="input-group" style="margin-top:20px;">
            <input type="text" class="form-control"/>
            <span class="input-group-addon">@</span>
            <input type="text" class="form-control"/>
        </div>
    </form>
</div>
```

<a name='a5'>
##button
*样式*
.btn	默认的/标准的按钮。<br/>
.btn-primary	提供额外的视觉效果，标识一组按钮中的原始动作。<br/>
.btn-success	表示一个成功的或积极的动作。<br/><br/>
.btn-info	信息警告消息的上下文按钮。<br/>
.btn-warning	表示应谨慎采取的动作。<br/>
.btn-danger	表示一个危险的或潜在的负面动作。<br/>
.btn-link	并不强调是一个按钮，看起来像一个链接，但同时保持按钮的行为。<br/>
*大小*
.btn-lg	这会让按钮看起来比较大。<br/>
.btn-sm	这会让按钮看起来比较小。<br/>
.btn-xs	这会让按钮看起来特别小。<br/>
.btn-block	这会创建块级的按钮，会横跨父元素的全部宽度。<br/>
*状态*
.active<br/>
`disabled`<br/>

<a name='a6'>
##图片(img标签)
.img-rounded               `border-radius:6px;`   <br/>
.img-circle               ` border-radius:500px;` <br/>
.img-thumbnail            增加边框和内边距;<br/>
【缩略图 `<a href='# class='thumbnail'><img src=''></a>`】






<a name='a7'>
##帮助器类:
`<button class="close button">&times</button>`  关闭按钮<br/>
<span class="caret"></span>                   倒三角<br/>
.pull-left                 浮动,相当于`float:left`;<br/>
.pull-right                浮动,相当于`float:right`;<br/>
.clearfix                  清除浮动<br/>
.show                      显示<br/>
.hidden                    隐藏<br/>
.center-block              居中内容块;<br/>
.sr-only                 把元素对所有设备隐藏，除了屏幕阅读器。【适用于给搜索引擎看的东西而不是给人看的注释等】<br/>

<a name='a8'>
##visibility and print
.visible-xs	              额外的小设备（小于 768px）可见<br/>
.visible-sm	              小型设备（768 px 起）可见<br/>
.visible-md	              中型设备（768 px 到 991 px）可见<br/>
.visible-lg	              大型设备（992 px 及以上）可见<br/>
.hidden-xs	              额外的小设备（小于 768px）隐藏<br/>
.hidden-sm	              小型设备（768 px 起）隐藏<br/>
.hidden-md	              中型设备（768 px 到 991 px）隐藏<br/>
.hidden-lg	              大型设备（992 px 及以上）隐藏<br/>
.visible-print	          可见，可打印<br/>
.hidden-print	          只对浏览器可见，不可打印<br/>

<a name='a9'>
##字形图标
  比如购物车等;<br/>
   `<span class="glyphicon  glyphicon-search"></span>`

<a name='a10'>
##按钮下拉菜单组
####下拉菜单
`div.dropdown`            包裹容器div加.dropdown;
`ul.pull-right`             .drodpdown-menu添加.pull-right实现对齐,多用于`ul`;
`li.dropdown-header`         .dropdown-header向下拉菜单项中添加标题，效果类似于`dt`;
####按钮组
`div.btn-toolbar`         包裹多个按钮组 `div.btn-group`
`div.btn-group`           每一个按钮组;
.btn-group-vertical       纵向排列的按钮组;
.btn-group-lg, .btn-group-sm, .btn-group-xs   按钮组内按钮大小;
.btn-large、.btn-sm 或 .btn-xs。       按钮大小调整;
####按钮下拉菜单
【按钮下拉菜单会要求按钮组嵌套,即.btn-group中嵌套.btn-group;实现按钮组内的菜单向上拉伸】
【按钮组.btn-group中加入.dropup】


```html
<!--下拉列表-->
<div class="dropdown" role="dropdown">
    <button class="btn dropdown-toggle" data-toggle="dropdown" data-target="dropdown-menu">
        主题
        <span class="caret"></span>
    </button>
    <ul class="dropdown-menu" id="dropdown-menu" role="menu">
        <li role="menuitem"><a href="#">JAVA</a></li>
        <li role="menuitem"><a href="#">PHP</a></li>
        <div class="divider"></div>
        <li role="menuitem"><a href="#">IOS</a></li>
    </ul>
</div>

<!--按钮组+按钮下拉列表[最外层的`<div class='dropdown'></div>`不用写]-->
<div class="btn-toolbar">
    <!-- 横向按钮组-->
    <div class="btn-group">
        <button class="btn btn-default">按钮</button>
        <button class="btn btn-default">按钮</button>
        <button class="btn btn-default">按钮</button>
    </div>
<!--按钮下拉菜单-->
    <div class="btn-group">
        <button class="btn btn-primary dropdown-toggle" data-toggle="dropdown" data-target="menu2">按钮1 <span class="caret"></span><span class="sr-only">切换下拉菜单</span></button>
        <ul class="dropdown-menu" id="menu2" role="menu" style="margin: -10px 0 0  70px;">
            <li role="menu-item"><a href="#">html</a></li>
            <li role="menu-item"><a href="#">css</a></li>
            <li role="menu-item"><a href="#">javascript</a></li>
        </ul>
    </div>
    <!--按钮上拉菜单-->
   <!--<div class="dropdown">-->
    <div class="btn-group">
        <div class="dropup">
            <button class="btn btn-default dropdown-toggle" data-toggle="dropdown" data-target="dropdown-menu2" role="dropdown">按钮2
                <span class="caret"></span>
            </button>
            <ul class="dropdown-menu" id="dropdown-menu2" role="menu" style="margin-bottom:-140px;">
                <li role="menuitem"><a href="#">JAVA</a></li>
                <li role="menuitem"><a href="#">IOS</a></li>
                <li class="divider"></li>
                <li role="menuitem"><a href="#">PHP</a></li>
            </ul>
        </div>
    </div>
<!--按钮切换下拉菜单-->
    <div class="btn-group">
        <button class="btn btn-default">按钮3</button>
        <button class="btn btn-default dropdown-toggle" data-toggle="dropdown" data-target="dropdown-menu3" role="menu">
            <span class="caret"></span>
            <span class="sr-only">切换下拉菜单</span>
        </button>
        <ul class="dropdown-menu" id="dropdown-menu3" role="menu">
            <li role="menu-item"><a href="#">html</a></li>
            <li role="menu-item"><a href="#">css</a></li>
            <li role="menu-item"><a href="#">javascript</a></li>
        </ul>
    </div>
    <!-- 不同样式的按钮-->
    <div class="btn-group-vertical">
        <button class="btn btn-success">按钮1</button>
        <button class="btn btn-primary">按钮2</button>
        <button class="btn btn-warning">按钮3</button>
        <button class="btn btn-info">按钮4</button>
        <button class="btn btn-danger">按钮5</button>
    </div>
</div>
```

<a name='a11'>
##导航
####导航菜单
[`<ul class='nav nav-tabs'><li></li></ul>`]
.nav               `margin+padding+list-style='none'`
.nav-tabs           普通导航菜单样式(加边框)
.nav-pills          胶囊样式(被选中的背景变色,`border-radius:4px`)
.nav-stacked        导航元素纵向排列;
.nav-justified      导航元素两端对齐【电脑上`ul`自动根据一行来平铺;手机上每个`li`占一行】;
li.disabled         禁用;
```html
<ul class="nav nav-pills">
    <li><a href="#">首页</a></li>
    <li><a href="#">首页2</a></li>
    <li class="dropdown">
        <a href="#" class=" dropdown-toggle" data-toggle="dropdown" data-target="menu">首页3
        <span class="caret"></span>
        </a>
        <ul class="dropdown-menu" id="menu" role="menu">
            <li role="menu-item"><a href="#">SVN</a></li>
            <li role="menu-item"><a href="#">Git</a></li>
            <li class="divider"></li>
            <li role="menu-item"><a href="#">Github</a></li>
        </ul>
    </li>
</ul>
```
####导航栏
*导航栏*
     `<nav class="navbar navbar-default" role="navigation">`
     `<div class='navbar-header'><a class = 'navbar-brand'></a></div>`
     `<ul class='nav navbar-nav'><li></li></ul>`;
 ```html
 //结果: Home / 2013 / 十一月
<ol class='breadcrumb'>
     <li><a href="#">Home</a></li>
     <li><a href="#">2013</a></li>
     <li class="active">十一月</li>
</ol>
```

*响应式的导航栏*
1.    被折叠内容包裹在`<div class='collapse navbar-collapse'>`中
2.    折叠显示内容加样式 .navbar-toggle;data-toggle='collapse' data-target
3.    这里的data-target里的id要加#;

*导航中的表单*
`<input type='button' class='navbar-btn'/>` 【尽量不要在a标签上使用navbar-btn】

*导航中的按钮*         `<form class='navbar-form'></form>`
*导航中的文本*         `<p class='navbar-text'></p>`
*导航中的链接*         `<a class='navbar-link'></a>`
*组件对齐方式*         navbar-left/navbar-right
*固定到顶部*           .navbar-fixed-top
*固定到底部*           .navbar-fixed-bottom
倒置的导航栏(黑底白字)   navbar-inverse

```html
<nav class="navbar navbar-default" role="navigation">
    <div class="navbar-header">
        <button class="navbar-toggle" data-toggle='collapse' data-target="#menu">
            <span class="sr-only"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
        </button>
        <a href="#" class="navbar-brand">Project name</a>
    </div>
    <div class="collapse navbar-collapse" id="menu">
        <ul class="nav navbar-nav">
            <li><a href="#">Home</a></li>
            <li><a href="#">PHP</a></li>
        </ul>
    </div>
</nav>
```

##分页
####分页
ul.pagination         显示分页
ul.pagination-lg        获取不同大小的项;
li.disabled/active    不可点击/当前页
```html
<ul class="pagination pagination-sm">
    <li><a href="#">&laquo</a></li>
    <li><a href="#">1</a></li>
    <li><a href="#">2</a></li>
    <li class="active"><a href="#">3</a></li>
    <li><a href="#">4</a></li>
    <li><a href="#">5</a></li>
    <li><a href="#">&raquo</a></li>
</ul>
```
####翻页
【左右两个按钮】
ul.pager                翻页
li.previous/next       链接左对齐/右对齐  相当于行内float:left/float:right
li.disabled
```html
<ul class="pager">
    <li><a href="#">previous</a></li>
    <li><a href="#">next</a></li>
    <li class="previous"><a href="#">&larr; Older</a></li>
    <li class="next"><a href="#">Newer &rarr;</a></li>
</ul>
```
http://os.51cto.com/art/201409/450260.htm


<a name='a10'>
##按钮下拉菜单组
####下拉菜单
`div.dropdown`            包裹容器div加.dropdown; <br/>
`ul.pull-right`             .drodpdown-menu添加.pull-right实现对齐,多用于`ul`;<br/>
`li.dropdown-header`         .dropdown-header向下拉菜单项中添加标题，效果类似于`dt`;<br/>
####按钮组
`div.btn-toolbar`         包裹多个按钮组 `div.btn-group`<br/>
`div.btn-group`           每一个按钮组;<br/>
.btn-group-vertical       纵向排列的按钮组;<br/>
.btn-group-lg, .btn-group-sm, .btn-group-xs   按钮组内按钮大小;<br/>
.btn-large、.btn-sm 或 .btn-xs。       按钮大小调整;<br/>
####按钮下拉菜单
【按钮下拉菜单会要求按钮组嵌套,即.btn-group中嵌套.btn-group;实现按钮组内的菜单向上拉伸】<br/>
【按钮组.btn-group中加入.dropup】<br/>


```html
<!--下拉列表-->
<div class="dropdown" role="dropdown">
    <button class="btn dropdown-toggle" data-toggle="dropdown" data-target="dropdown-menu">
        主题
        <span class="caret"></span>
    </button>
    <ul class="dropdown-menu" id="dropdown-menu" role="menu">
        <li role="menuitem"><a href="#">JAVA</a></li>
        <li role="menuitem"><a href="#">PHP</a></li>
        <div class="divider"></div>
        <li role="menuitem"><a href="#">IOS</a></li>
    </ul>
</div>

<!--按钮组+按钮下拉列表[最外层的`<div class='dropdown'></div>`不用写]-->
<div class="btn-toolbar">
    <!-- 横向按钮组-->
    <div class="btn-group">
        <button class="btn btn-default">按钮</button>
        <button class="btn btn-default">按钮</button>
        <button class="btn btn-default">按钮</button>
    </div>
<!--按钮下拉菜单-->
    <div class="btn-group">
        <button class="btn btn-primary dropdown-toggle" data-toggle="dropdown" data-target="menu2">按钮1 <span class="caret"></span><span class="sr-only">切换下拉菜单</span></button>
        <ul class="dropdown-menu" id="menu2" role="menu" style="margin: -10px 0 0  70px;">
            <li role="menu-item"><a href="#">html</a></li>
            <li role="menu-item"><a href="#">css</a></li>
            <li role="menu-item"><a href="#">javascript</a></li>
        </ul>
    </div>
    <!--按钮上拉菜单-->
   <!--<div class="dropdown">-->
    <div class="btn-group">
        <div class="dropup">
            <button class="btn btn-default dropdown-toggle" data-toggle="dropdown" data-target="dropdown-menu2" role="dropdown">按钮2
                <span class="caret"></span>
            </button>
            <ul class="dropdown-menu" id="dropdown-menu2" role="menu" style="margin-bottom:-140px;">
                <li role="menuitem"><a href="#">JAVA</a></li>
                <li role="menuitem"><a href="#">IOS</a></li>
                <li class="divider"></li>
                <li role="menuitem"><a href="#">PHP</a></li>
            </ul>
        </div>
    </div>
<!--按钮切换下拉菜单-->
    <div class="btn-group">
        <button class="btn btn-default">按钮3</button>
        <button class="btn btn-default dropdown-toggle" data-toggle="dropdown" data-target="dropdown-menu3" role="menu">
            <span class="caret"></span>
            <span class="sr-only">切换下拉菜单</span>
        </button>
        <ul class="dropdown-menu" id="dropdown-menu3" role="menu">
            <li role="menu-item"><a href="#">html</a></li>
            <li role="menu-item"><a href="#">css</a></li>
            <li role="menu-item"><a href="#">javascript</a></li>
        </ul>
    </div>
    <!-- 不同样式的按钮-->
    <div class="btn-group-vertical">
        <button class="btn btn-success">按钮1</button>
        <button class="btn btn-primary">按钮2</button>
        <button class="btn btn-warning">按钮3</button>
        <button class="btn btn-info">按钮4</button>
        <button class="btn btn-danger">按钮5</button>
    </div>
</div>
```

<a name='a11'>
##导航
####导航菜单
[`<ul class='nav nav-tabs'><li></li></ul>`]
.nav               `margin+padding+list-style='none'`<br/>
.nav-tabs           普通导航菜单样式(加边框)<br/>
.nav-pills          胶囊样式(被选中的背景变色,`border-radius:4px`)<br/>
.nav-stacked        导航元素纵向排列;<br/>
.nav-justified      导航元素两端对齐【电脑上`ul`自动根据一行来平铺;手机上每个`li`占一行】;<br/>
li.disabled         禁用;<br/>
```html
<ul class="nav nav-pills">
    <li><a href="#">首页</a></li>
    <li><a href="#">首页2</a></li>
    <li class="dropdown">
        <a href="#" class=" dropdown-toggle" data-toggle="dropdown" data-target="menu">首页3
        <span class="caret"></span>
        </a>
        <ul class="dropdown-menu" id="menu" role="menu">
            <li role="menu-item"><a href="#">SVN</a></li>
            <li role="menu-item"><a href="#">Git</a></li>
            <li class="divider"></li>
            <li role="menu-item"><a href="#">Github</a></li>
        </ul>
    </li>
</ul>
```
####导航栏
     `<nav class="navbar navbar-default" role="navigation">`<br/>
     `<div class='navbar-header'><a class = 'navbar-brand'></a></div>`<br/>
     `<ul class='nav navbar-nav'><li></li></ul>`;<br/>
 ```html
 //结果: Home / 2013 / 十一月
<ol class='breadcrumb'>
     <li><a href="#">Home</a></li>
     <li><a href="#">2013</a></li>
     <li class="active">十一月</li>
</ol>
```

**响应式的导航栏**<br/>
1.    被折叠内容包裹在`<div class='collapse navbar-collapse'>`中<br/>
2.    折叠显示内容加样式 .navbar-toggle;data-toggle='collapse' data-target<br/>
3.    这里的data-target里的id要加#;<br/>

**导航中的表单**
`<input type='button' class='navbar-btn'/>` 【尽量不要在a标签上使用navbar-btn】<br/>

**导航中的按钮**         `<form class='navbar-form'></form>`<br/>
**导航中的文本**        `<p class='navbar-text'></p>`<br/>
**导航中的链接**         `<a class='navbar-link'></a>`<br/>
**组件对齐方式**         navbar-left/navbar-right<br/>
**固定到顶部**           .navbar-fixed-top<br/>
**固定到底部**           .navbar-fixed-bottom<br/>
倒置的导航栏(黑底白字)   navbar-inverse<br/>

```html
<nav class="navbar navbar-default" role="navigation">
    <div class="navbar-header">
        <button class="navbar-toggle" data-toggle='collapse' data-target="#menu">
            <span class="sr-only"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
        </button>
        <a href="#" class="navbar-brand">Project name</a>
    </div>
    <div class="collapse navbar-collapse" id="menu">
        <ul class="nav navbar-nav">
            <li><a href="#">Home</a></li>
            <li><a href="#">PHP</a></li>
        </ul>
    </div>
</nav>
```
<a name='a12'>
##分页/翻页
####分页
ul.pagination         显示分页  <br/>
ul.pagination-lg        获取不同大小的项;<br/>
li.disabled/active    不可点击/当前页<br/>
```html
<ul class="pagination pagination-sm">
    <li><a href="#">&laquo</a></li>
    <li><a href="#">1</a></li>
    <li><a href="#">2</a></li>
    <li class="active"><a href="#">3</a></li>
    <li><a href="#">4</a></li>
    <li><a href="#">5</a></li>
    <li><a href="#">&raquo</a></li>
</ul>
```
####翻页
【左右两个按钮】<br/>
ul.pager                翻页<br/>
li.previous/next       链接左对齐/右对齐  相当于行内float:left/float:right<br/>
li.disabled<br/>
```html
<ul class="pager">
    <li><a href="#">previous</a></li>
    <li><a href="#">next</a></li>
    <li class="previous"><a href="#">&larr; Older</a></li>
    <li class="next"><a href="#">Newer &rarr;</a></li>
</ul>
```



















