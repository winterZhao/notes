数据类型主要分为两种:基本数据类型和引用数据类型。基本数据类型又称值类型，赋予变量的是确确实实的值；而引用数据类型是一个个堆，赋予变量的是引用地址。
[JavaScript模式];

#基本数据类型#
    基本数据类型主要包括Number(数值型)、String(字符串)、Boolean(布尔型)、Null、Undefined;
#引用数据类型#
    引用数据类型主要包括Object(对象)和Function(函数);Object:包括Object、Array 、Math、Date、RegExp……

【具体数据类型的学习在chrome浏览器里console.dir(Number)进行学习】


##Number##
###重要的属性:
         parseFloat,parseInt(str,10);
###重要的方法 :
              toFixed():四舍五入到指定位数     var a = 12.23434;    console.log(a.toFixed(2));    //12.23;
             toString():转换为字符串;        console.log(a.toString());                     // '12.23434'
              valueOf() :获取当前值;          console.log(a.valueOf());                       //12.23434
###特殊:NaN :not a number,数值型，表示不是一个数，还有一个判断是否为数值型的方法isNaN();

##String
 ###属性方法:
     charAt,charCodeAt,     //根据索引查找对应的value值/ASCII码; 【索引从0开始】
     indexOf,lastIndexOf,   //根据value值查找其在整个字符串中第一次(最后一次)出现时的索引【索引从0开始】
     toLowerCase,toUpperCase, //全部转换为大小写;
     trim,trimLeft,trimRight,  //去除首尾空格，ie有兼容性问题;
     concat,split            //将多个字符串合并成一个新的字符串;  /将一个字符串拆分成数组[注里头参数如果是数字则会将该字符串转换为数组];
     slice,substr,substring,  //截取字符串;[注:第一个参数均为索引;slice，substr第一个参数可以取负值,substr第二个参数为到……;substring第二个参数为长度]
     match,replace,         //正则匹配;
     eval,valueOf           //eval:将字符按照js代码进行执行;valueOf:获取字符串值;


##Boolean(布尔值):
        true,false;
        !1 否;   !!1 强制转换为Boolean类型;



##Array(数组):
      push、pop、unshift、shift      //数组首尾增删,会改变原数组;
      splice                        //在任意位置增删，耗性能;【注，返回的是被删除的那个数】
      slice                         //查找;
      sort                          //排序;
      concat                        //将两个数组合并为一个数组
      join、toString                 //将数组以指定格式转为字符串/ 标准格式字符串;
      reverse:                       //反转数组，会改变当前字符串;
      不兼容
      indexOf                       //检查数组中是否包含某一项，包含则返回其所在的索引号，不包含返回-1;
      forEach                        //遍历数组中的每一项;有兼容性问题;
                                   var m =[1.2,3,4]; m.forEach(function(item,index,arr){})         map                                     【forEach与map的区别不大,只是forEach没有返回值，map有返回值】
      例:
      `          var a = [1,2,3,4,5];
                 a.forEach(function(item){
                      console.log(++item);
                 })                         //2,3,4,5,6,
                 a.map(function(item){
                      return index;         //0,1,2,3,4
                 })
      `


## Math(数学)
      Math.abs()                   //取绝对值;
      Math.ceil()                  //向上取整;
      Math.floor()                 //向下取整;
      Math.max()                   //取最大值；
      Math.min()                   //取最小值；
      Math.round()                 //四舍五入;
      Math.sqrt()                  //取平方根;
      Math.pow(m,n)                //取m的n次方;
      Math.random()                //[0,1)的随机数;
      Math.round(Math.random()*(m-n)+n) [m,n]之间的随机数;

##Date(日期时间型)
       new Date()                  //创建时间
       getTime()                   //获取指定时间距离1970 年 1 月 1 日之间的毫秒数;
       getFullYear()                // 获取年份;
       getMonth()+1                 //获取月份;
       getDate()                    //获取日期;
       getDay()                     //获取星期;
       getHours();                  //获取小时;
       getMinutes()                 //获取分钟;
       getSeconds()                 //获取秒;

##Function(函数)
     （1）函数主要分为两部分:函数定义和函数执行;
      (2)函数表达式、匿名函数、自治性函数、———————>闭包(私有作用域,预解释);
      (3)预解释:js代码自上倒下执行时，会先对所有带var的进行声明;对所有function进行声明并定义;
      (4)arguments 函数的参数集合为一个类数组arguments;
      (5)return    终止函数执行，返回;
      (6)自执行函数:  ()();
                    ;(function () {})();
                    ~function () {}();
                    !function () {}();
                    +function () {}();
                    -function () {}();


#数据创建方式#
1. **字面量方法**：  var a = '11', b=12,c=true,d=[1,2,3,4],e={'姓名':'张三'},f=function(){}，g=//……
2. **构造函数方法(new一个)**： var a = new String('111'),var b=new Number(12) var obj = new Object();


#检测数据类型的四种方法#
1. **typeof** : 最简单也是最直接的检测数据类型的方法;可以用来检测全部的基本数据类型值；缺点是检测引用数据类型只会返回Object和Function，而不会返回具体的Array等等；
2. **constructor** : 返回创建该对象的构造函数。原理:实例可以用原型上的任何方法，包括constructor;缺点是如果自定义了一个构造函数，则只能返回该构造函数，而不能返回最终的数据类型;
3. **instanceof ** :  …是…的一个实例，适用于new创造的简单数据类型和所有的引用数据类型。缺点是我们常用的字面量创建的基本数据类型检测会失败；
       `var a = new String('1234'),obj ={'姓名':'张三'};console.log(a instanceof String);console.log(obj isntanceof Object);`
4. **Object.prototype.toString.call()**:通用方法，可以检测所有的数据类型，缺点是返回的结果是[object String]这种格式，后期处理较为的麻烦;
       ` var a = '12345'; Object.prototype.toString.call(a); `
    【注：使用typeof和Object.prototype.toString.call()方法相结合 ;可以简写为toString.call({})】

    `一道古老的面试题:
          console.log(typeof typeof typeof ([])); //string
    `


#数据类型转换

#Null和Undefined的区别;

#toString()方法扩展

#sort方法扩展