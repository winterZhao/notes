## range ##

* **selection+range**
     一个range对象代表页面上的一段连续区域，通过range对象，可以获取/修改网页上的任何区域;
     【chrome只能选取一段，firefox可以选择多段;】
     【作用是对用户通过鼠标选中的页面内容进行操作】
```html
   <p>这些字写完就十个字了。</p>
   <input type='button' value="点击" onclick="rangeTest()"/>
   <div id="showRange"></div>
   <script>
       function rangeTest(){
           var showRangeDiv,selection,range,str="";
           showRangeDiv = document.getElementById('showRange');
           selection = document.getSelection();
           if(selection.rangeCount > 0){
               str = "您选取了" + selection.rangeCount + "段内容<br/>";
               for(var i = 0,r = selection.rangeCount; i < r; i++){
                   range = selection.getRangeAt(i);
                   str += "第" + (i+1) + "段的内容为:" + range + ";<br/>";
               }
           showRangeDiv.innerHTML = str;
           str = null;
       }
   }
   </script>

```
* **selectNode / selectNodeContents / deleteContents(onlyContent)**
     【deleteContents(onlyContent):true为删除内容;false为删除整个元素】

```html
      <div id="div1" style="width:200px;height:200px;background-color:#ccc;">
          <input type="button" value="删除内容" onclick="deleteRangeContent(true)"/>
          <input type="button" value="删除元素" onclick="deleteRangeContent(false)"/>

      </div>
      <script>
          function deleteRangeContent(onlyContent){
              var rangeObj = document.createRange();
              var oDiv = document.getElementById('div1');
              if(onlyContent){
                  rangeObj.selectNodeContents(oDiv);
                  rangeObj.deleteContents();
              }else{
                  rangeObj.selectNode(oDiv);
                  rangeObj.deleteContents();
              }
          }
      </script>
```
* **setStart/setENd**<br/>
  **setStartBefore/setStartAfter**<br/>
  **setEndBefore/setEndAfter**<br/>
```html
<p id="my">这些字写完就十个字了。</p>
   <input type="button" value="删除" onclick="deleteW()"/>
   <script>
       function deleteW(){
           var oP=document.getElementById('my');
           var textNode = oP.firstChild;
           console.log(textNode);
           var range = document.createRange();
           range.setStart(textNode,1);
           range.setEnd(textNode,4);
           range.deleteContents();
       }
   </script>
```















