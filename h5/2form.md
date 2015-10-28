#表单
【html5新添加的属性的作用均是为表单中的每一个元素指定不同的规则】

* **type**:url，email,date,time,datetime,datetime-local,month,week,number,range,search,tel,color类型
```html
    <input type="number" name='number' value="10" max="100" min="5" step="5"/>
    //页面背景颜色切换
    <input type="color" onchange="document.body.style.backgroundColor = this.value"/>


```
* **form属性**:表单内的从属元素可以书写在页面任何地方，通过为其设置form属性，属性值为该表单的id，以确定从属关系;
```html
    <form action="" id="myForm">
        <input type="text"/>
    </form>
    <input type="text" form="myForm"/>;
```

* **formaction**:通过表单元素添加不同的formaction属性，以实现点击不同的按钮将表单提交到不同的页面;
```html
    <form action="" id="myForm1">
        <input type='submit' name="s1" value="v1" formmethod="get" formaction="http://www.baidu.com"/>
        <input type='submit' name="s2" value="v2" formmethod="post" formaction="http://www.taobao.com"/>
    </form>
```

* **formmethod**:表单元素添加不同的formmethod属性,制定不同的提交方式;
```html
    <form action="" id="myForm2">
        <input type='submit' name="s1" value="v1" formmethod="get" formaction="http://www.baidu.com"/>
        <input type='submit' name="s2" value="v2" formmethod="post" formaction="http://www.taobao.com"/>
    </form>
```


* **formenctype**:表单元素添加不同的formmethod属性,指定不同的编码格式`application/x-www-form-urlencoded`;`text/plain`;`multipart/form-data;`
```html
   <form action="" id="myForm3">
       <input type="text" formenctype="application/x-www-form-urlencoded"/>
   </form>
```


* **formtarget**:分别指定在何处打开要加载的资源; `_blank`;`_self`;`_parent`;`_top`;`framename`;
```html
    <form action="" id="myForm4">
        <input type="submit" formtarget="_blank" formaction="https://www.baidu.com/" value="提交"/>
    </form>
```

* **autofocus** :页面打开时自动获得焦点;
```html
    <input type="text" autofocus/>
```

* **required**:提交时，如果内容为空白，则不允许提交;
```html
    <form action="">
        <input type="text" required/>
        <input type="submit" value="提交"/>
    </form>
```

* **labels**:nodeList对象,代表该元素所绑定的标签元素所构成的集合;
```html
    <form action="" id="myForm">
        <label for="text1" id="myLabel"></label>
        <input type="text" id="text1"/>
        <input type="button" id="myButton" value="验证" onclick="validate()"/>
    </form>
    <script>
        function validate(){
            var myForm = document.getElementById('myForm');
            var text1 = document.getElementById('text1');
            var myButton = document.getElementById('myButton');
            if(text1.value.trim()==''){
                var label = document.createElement('label');
                label.setAttribute('for','text1');
                myForm.insertBefore(label,myButton);
                text1.labels[1].innerHTML = '请输入姓名';
                text1.labels[1].setAttribute('style','font-size:14px;color:red;')
            }
        }
    </script>
```


* **placeholder**:文本框默认提示，当获取焦点时，模糊显示提示文字
```html
      <input type="text" placeholder="请输入您的姓名"/>
```

* **list**:为单行文本框增加list属性,该属性的值为某个datalist的id;当文本框获得焦点的时候以提示输入的方式显示;允许用户自动输入，类似<百度搜索框>
```html
   <form action="">
       <input type="text" name="text" list="data"/>
       <datalist id="data" style="display:none">
           <option value="百度">百度</option>
           <option value="淘宝">淘宝</option>
           <option value=企鹅>企鹅</option>
       </datalist>
   </form>
```

* **pattern**:对input元素使用pattern，并将属性值设置为正则表达式，会对其内容进行正则匹配;
```html
   <form action="" id="myForm5">
       <input type="text" pattern="\d"/>
       <input type="submit" value="提交"/>
   </form>
```

* **selectionDirection**:input/textarea，获取用户选择方向，正向，反向，chrome不支持/ff支持;
```html
    <form action="">
        <input type="text" name="text"/>
        <input type='button' value="点击" onclick="AD()"/>
    </form>
    <script>
        function AD(){
            var myInput = document.forms[0].getElementsByTagName('input')[0];
            var direction = myInput.selectionDirection;
            alert(direction);
        }
    </script>
```

* **indeterminate**:js脚本中，表示复选框处于"尚未明确是否选取"状态;【三种状态，选中，未选中，不明状态】
```html
    <input type="checkbox" indeterminate id="cb"/>属性测试
    <script>
        var cb =document.getElementById('cb');
        cb.indeterminate = true;
    </script>

```

* **image**:表单里具有提交功能的按钮为submit和image;image提交时会把鼠标点击图片的x和y作为参数传递;
```html
    <form action="">
        姓名
        <input type="text" name="text"/>
        <input type="image" src="1.jpg" width="50px" height="50px" />
    </form>
```