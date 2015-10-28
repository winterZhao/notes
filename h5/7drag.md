## 拖放
    drag、drop
    拖放开始:
* **ondragstart**: 调用了一个函数，drag(event)；规定被拖放的数据;
* **setData()**: 设置被拖数据的数据类型和值;
* **ondragover**: 事件规定在何处放置被拖动的数据
* **ondrop**:   当放置被拖数据时，会发生drop事件;

**html5网页内部拖拽**
```html

    <!DOCTYPE html>
    <html>
    <head >
        <meta charset="UTF-8">
        <title></title>
        <style>
            div{
                float:left;
                margin-left:20px;
                width:200px;
                height:200px;
                border:1px solid black;

            }
        </style>
    </head>
    <body>
    <div id="div1"></div>
    <div id="div2"></div>
    <img id="img1" src="1.jpg" alt=""/>

    <script>
        window.onload = function(){
            var oDiv1 = document.getElementById('div1');
            var oDiv2 = document.getElementById('div2');
            var img = document.getElementById('img1');

            oDiv1.ondragover = function(e){
                e.preventDefault();
            };
            oDiv2.ondragover = function(e){
                e.preventDefault();
            };
            img.ondragstart = function(e){
                e.dataTransfer.setData('imgId','img1');
            }
            oDiv1.ondrop = dropImg;
            oDiv2.ondrop = dropImg;
        }
        function dropImg(e){
            e.stopPropagation();
            var img = document.getElementById(e.dataTransfer.getData('imgId'));
            console.log(e.dataTransfer);
            e.target.appendChild(img);
        }
    </script>
    </body>
    </html>
```

**线下资源拖拽到网页中**

```html
    <!DOCTYPE html>
    <html>
    <head lang="en">
        <meta charset="UTF-8">
        <title></title>
        <style>
            div{
                float:left;
                margin-left:20px;
                width:200px;
                height:200px;
                border:1px solid black;

            }
        </style>

    </head>
    <body>

    <div id="div1"></div>
    <script>
        window.onload = function(){
            var oDiv1 = document.getElementById('div1');
            oDiv1.ondragover = function(e){
                e.preventDefault();
            }
            oDiv1.ondrag = function(e){
                e.preventDefault();
                var f = e.dataTransfer.files[0];
                var fileReader = new FileReader();
                fileReader.onload = function(e){
                    oDiv1.innerHTML = "<img src='"+fileReader.result+"'/>";
                }
                fileReader.readAsDataURL(f)
            }
        }
    </script>
    </body>
    </html>

```
