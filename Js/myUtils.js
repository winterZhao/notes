/**
 * Created by wb-zhaoleilei.a on 2015/10/26.
 */
var MyUtils = function() {

}
MyUtils.prototype = {
    /**
     * 数组排序(冒泡排序)
     * @param {Array} 数组本身
     * returns {Array} 排序后的新数组
     */
    mySort: function(arr){
        for(var i = 0,len = arr.length; i < len; i++){
            for(var j = 0; j < len-1-i; j++){
                if(arr[j] > arr[j+1]){
                    var temp;
                    temp = arr[j];
                    arr[j] = arr[j+1];
                    arr[j+1] = temp;
                    temp = null;
                }
            }
        }
        return arr;
    },
    /**
     *数组去重
     * @params {Array} 数组本身
     * return  {Array} 去重后的数组
     */
    myDistinct:function(arr) {
        var obj = {};
        for(var i = 0;i < arr.length; i++){
            var cur = arr[i];
            if(obj[cur] === cur ){
                arr[i] = arr [arr.length-1];
                arr.length--;
                i--;
            } else {
                obj[cur] = cur;
            }
        }
        return arr;
        obj = null;
    },
    /**
     * forEach    循环遍历数组中的每一项；
     *@params {Function} 函数本身;item,index,array三个参数，可选；
     */
     myForEach:function(arr,fn){
            for(var i = 0; i<arr.length;i++){
                fn.apply(arr,[arr[i],i,arr]);
            }
    },
    /**
     * map    循环遍历数组中的每一项；
     *@params {Function} 函数本身;item,index,array三个参数，可选；
     * return {Array}   new Array;
     */
    myMap:function(arr,fn){
        var array = [];
        for(var i=0;i<arr.length;i++) {
            array[i] = fn.apply(arr,[arr[i],i,arr]);
        }
        return array;
    }

}

var utils =(function(){
    return new MyUtils;
})()

