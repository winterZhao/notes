//此文件记录一些常见功能的正则
"use strict";

//将url参数中具有指定参数名的参数值返回;
function GetQueryString(name){
    var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
    var r = window.location.search.substr(1).match(reg);
    if(r != null){
        return  decodeURI(r[2]);
    }
    return null;
}

function GetQueryString(name){
        var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
        var r = window.location.search.substr(1).match(reg);
        if(r != null){
            var a = decodeURI(r[2]);

            return a.replace(/\&/g, "&amp;").replace(/\</g, "&lt;").replace(/\>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&apos;");
        }
        return null;
    }
// 将数字转换为国际货币形式(三位一个逗号,)
var reg = /(\d{1,3})(?=(?:\d{3})+(?!\d))/g;
str = str.toString().replace(reg,'$1,');
