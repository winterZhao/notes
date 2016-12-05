## 移动端开发遇到的问题和总结

### 判断是否移动端

    var sUserAgent  =  navigator.userAgent
    var str = '';
    // 是否移动端
    if(sUserAgent.match(/(iPhone|iPod|Android|ios|iPad)/i)){
        var reg = /(iPhone|iPod|ios|iPad)/i;
        // 是否ios;
        if(reg.test(sUserAgent) ){
            str += this.link.ios;
        }else{
            str += this.link.android;
        }
        $('#link012345679').attr('href',str);
    } else {
        $('#banner012345679').css({
            'display': 'none'
        })
    }
    
### ios不支持本地存储 localStorage
