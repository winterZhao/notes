## audio and video

* **audio**:可以使用controls音频控制器，也可以自定义;方法: @pause; @play; @paused(属性)
```html
   <input type='button' onclick="clickA()" value="播放/暂停"/>
   <audio id="audio" src="1.mp3">您的浏览器不支持audio;</audio>
   <script>
       function clickA(){
           var audio = document.getElementById('audio');
           if(audio.paused){
               audio.play();
           } else{
               audio.pause();
           }
       }
   </script>
```

* **video**:标签video,source;<br/>
    属性: width;  height; autoplay; controls; loop; poster; preload ; src;
    @preload : 是否福预加载视频  auto:当页面加载后载入整个视频;metadata当页面加载后只载入头信息;none：边播放边加载

   <video>
        <source src="beyond.mp3" controls type="audio/mpeg">
        <source src="beyond.wav" controls type="audio/wav">
        <source src="beyond.ogg" controls type="audio/ogg">
        your browser is not supporting audio
        <!-- 三种都不支持-->
        <embed src="">采用传统flash方案</embed>
        您的浏览器不支持video
   </video>



* **视频编解码工具**:FFmpeg  www.ffmpeg.org;转换视频格式;
