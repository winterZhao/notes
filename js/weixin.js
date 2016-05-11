var weiXin=(function(){
    /*
     *是否在微信客户端中;
     * @param callback存在后执行的环境;
     * 监听定时器检测，100ms一次，直到成功后才停止；
     */

    function weixinInit(callback){
        var timer=null;
        var count=0;
        if(typeof WeixinJSBridge=="undefined" || WeixinJSBridge.invoke=="undefined"){
            timer=window.setTimeout(function(){
                count++;
                if(count<=100){
                    weixinInit(callback);
                }else{
                    window.clearTimeout(timer);
                    timer=null;
                    count=0;
                }
            },200);
        }else{
            callback();
            timer=null;
            count=0;
        }
    }

    /*
     *微信分享
     */
    function weixinShare(shareTitle,shareDesc,shareImg,url){
        weixinInit(share);
        function share(){
            WeixinJSBridge.on('menu:share:appmessage',function(argv){
                WeixinJSBridge.invoke('sendAppMessage',{
                    "img_width":"120",
                    "img_height":"120",
                    "title":shareTitle,
                    "link":url,
                    "desc":shareDesc,
                    "img_url":shareImg
                },function(res){
                });
            });
            WeixinJSBridge.on('menu:share:timeline',function(argv){
                WeixinJSBridge.invoke('shareTimeline',{
                    "img_width":"120",
                    "img_height":"120",
                    "title":shareTitle,
                    "link":url,
                    "desc":shareDesc,
                    "img_url":shareImg
                },function(res){
                });
            });
            WeixinJSBridge.on('menu:share:weibo',function(argv){
                WeixinJSBridge.invoke('shareWeibo',{
                    "title":shareTitle,
                    "link":url,
                },function(res){
                });
            });
        }
    }

    /*
     * 检测安装app；
     */
    function weixinHasApp(packageName,packageUrl,callback){
        weixinInit(hasApp);
        function hasApp(){
            WeixinJSBridge.invoke('getInstallState',{
                'packageName':packageName,
                'packageUrl':packageUrl
            },function(e){
                var msg= e.err_msg;
                if(msg.indexOf("get_install_state:yes") > -1){
                    callback(true);
                }else{
                    callback(false);
                }
            });
        }
    }
    return {
        weixinInit:weixinInit,
        weixinShare:weixinShare,
        weixinHasApp:weixinHasApp

    };
})()