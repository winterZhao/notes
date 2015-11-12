#Bootstrap

* [布局](#a1)
* [文本段落](#a2)
* [table](#a3)
* [form](#a4)
* [button](#a5)
* [图片](#a6)
* [帮助类(关闭按钮/下拉三角)](#a7)
* [visibility and print](#a8)
* [字形图标](#a9)



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
