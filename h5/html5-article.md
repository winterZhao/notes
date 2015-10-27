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
3. designMode:  页面是否可编辑，在js里设置;
       document.designMode = 'on'/'off' 【只能js里写;】
    designMode与contenteditable的区别
         contenteditable用于对局部元素进行可编辑设置,应用灵活;designMode用于对document进行可编辑设置；

##文章标签