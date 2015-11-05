#Selector
###
**选择器性能**(高到低):
        id选择器（#myid）> 类选择器（.myclassname）> 标签选择器（div,h1,p）> 相邻选择器（h1+p）> 子选择器（ul>li）> 后代选择器（li a）> 通配符选择器（*）> 属性选择器（a[rel="external"]）> 伪类选择器（a:hover,li:nth-child）
        【注:网络资料获取，仅限参考】
##id选择器
##类选择器
*类选择器 .a
*类标签选择器(特指): p.a;
*多类选择器:
```html

 .a{
     color:red;
 }
 .b{
     font-size:36px;
 }
 .a.b{
     font-weight:bold;
     background:black;
 }
//css
<div class="a b">我们都是好孩子</div>  //.a .b .a.b的css样式都能应用到;
```
##标签选择器

##属性选择器
```html
//css
  [href]{color:yellow; }    //更为具体的可以为[href='localhost']{ color:red;}
  <a href="localhost">点击</a>
```


##相邻选择器 + :当前元素的下一个元素;
```html
//css
div+p{color:red;}
<div class="a">我们都是好孩子</div>
<p>最最天真的孩子</p>
```

##子元素选择器 : >
```html
//css
div>span{ color:red;}
<div>
     我们
        <p>
            <span>都是</span>
        </p>
        <span>好孩子</span>     //变红
    </div>
```
##后代选择器##
```html
//css
div span{ color:red;}
<div>
     我们
        <p>
            <span>都是</span>   //变红
        </p>
        <span>好孩子</span>     //变红
    </div>
```

##结构性伪类选择器##
* **:root**:修改根元素,相当于html{}  【注意:html/:root与body同时增加background,所有文本内容的背景色用body,整个背景用html】
```html
   :root{background:red;}
   body{ background:yellowgreen;}
   //css
   <p>我们都是好孩子</p>          //p段落背景为绿色,整个页面背景为红色;
```
* **:not**: *
```html
  div *:not(p){color:red;}
  //css
  <div><p>我们都是好孩子</p> </div>          //不变红;
  <div><span>我们都是好孩子</span></div>     //变红
```
* **:empty**: *
```html
div:empty{border:1px solid red; }
//css
<div></div>                                //边框
<div><p>我们都是好孩子</p> </div>
<div></div>                                //边框
```

* **:target**:当跳转到对应链接(p)后，对应的p的效果发生变化;
```html
 p:target{ background:yellowgreen; }
 //css效果，点击不同的跳转,两个p标签的背景轮流变色;
   <a href="#a1">跳转</a>
       <a href="#a2">跳转</a>
   <p id="a1">我们都是好孩子</p>
   <p id="a2">我们都是好孩子</p>
```

* **first-child last-child nth-child(4n+1) nth-last-child(从下往上数)/nth-child(even);【对所有子元素标签中的特定进行设置】**
```html
 p:nth-child(odd){color:red;}
//css:对所有标签中的处于奇数位的标签设置样式
    <div>我们都是好孩子</div>
    <p>最最天真的孩子</p>
    <p>我们都是好孩子</p>                 //变红
    <div>最最天真的孩子</div>
    <div>我们都是好孩子</div>
    <p>最最天真的孩子</p>
    <p>我们都是好孩子</p>                 //变红
    <div>最最天真的孩子</div>
```




* **nth-of-type  nth-last-of-type**: 对同一父元素下的同类标签的进行设置，
```html
 p:nth-of-type(odd){color:red;}
//css 对同类标签中的处于奇数位的标签设置样式
<div>我们都是好孩子</div>
    <p>最最天真的孩子</p>                //变红
    <p>我们都是好孩子</p>
    <div>最最天真的孩子</div>
    <div>我们都是好孩子</div>
    <p>最最天真的孩子</p>               //变红
    <p>我们都是好孩子</p>
    <div>最最天真的孩子</div>
```



* **only-child**:当该元素为唯一的子元素可替代nth-child;
```html
 p:only-child{color:red;}
 //css
 <div>
     <p>我们都是好孩子</p>
     <p>我们都是好孩子</p>
 </div>
 <div>
     <p>我们都是好孩子</p>      //变红
 </div>
```



##UI元素状态伪类元素选择器 :
       元素处于某种状态下起作用
    hover/active/focus/enabled/disabled【text的disabled属性是否选择】/
    read-only/checked【checkbox选中与否】/default/indeterminate/E::selection/
    invalid/valid/required/optional/in-range/out-of-range……

## 通用兄弟元素选择器 ##: 指定位于同一个父元素之中的某个元素之后的所有其他某个种类的兄弟元素所使用样式; div~p{}兄弟;
```html
//css
  div~p{color:red;}
  <div>
      <div><p>我们</p><p>我们</p></div>
      <p>我们</p><p>我们</p>               //两个均变红;
  </div>
```