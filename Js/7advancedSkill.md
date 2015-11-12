#高级函数
---
##惰性载入函数##
    当函数第一次完成时，该函数自动return变成最适合的浏览器函数(不同考虑兼容性)，而不用过多的执行if……else……;
【当一个函数频繁的使用其返回值的时候，可以考虑直接将其返回值赋给该函数】;
```js
var xhr = (function(){
        if(window.XMLHttpRequest){
            return new XMLHttpRequest();
        } else if(window.XMLHTTP){
            return new ActiveXObject("Microsoft.XMLHTTP");
        }
    })();

```


##函数柯里化##
   合并参数：第一个函数的参数合并成整体的传递给统一的函数；
```js
var currying = function(fn) {
        var args = [].slice.call(arguments, 1);
        return function() {
            var newArgs = args.concat([].slice.call(arguments));
            return fn.apply(null, newArgs);
        };
    };
    var getWife = currying(function() {
        var allWife = [].slice.call(arguments);
        console.log(allWife.join(";"));
    }, "10");
   getWife(1,2,3,4,5,6);       //10,1,2,3,4,5,6
```
或者
```js
  function curry(fn){
      var args = Array.prototype.slice.call(arguments,1);
      return function(){
          var innerArgs = Array.prototype.slice.call(arguments);
          var finalArgs = args.concat(innerArgs);
          return fn.apply(null,finalArgs);
}
}
function add(num1,num2,num3){
return num1+num2+num3;
}
var t= curry(add,50)(1,2);
alert(t);
```

***一个有意思的函数【之前我一直不明白函数柯里化,直到看到这个……还是不明白】***
```js
var fn = function(m){
   return  function(n){
    console.log(m+n);
   }
}
fn(5)(4);    //9 有意思在他的执行写法上; 5为外层函数的参数，4为内层函数的参数;


```

##级联函数##
  jQuery的return this;————链式写法;
