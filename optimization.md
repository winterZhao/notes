1. 检测数据类型(返回boolean)
```html
var toString = Object.prototype.toString;
    var isType = function(type){
        return function(obj){
            return toString.call(obj)=='[object '+ type +']';
        }
    }

    var isString = isType('String');
    var a = '我们';
    console.log(isString(a));     //true
```
