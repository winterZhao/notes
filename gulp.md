### gulp
1. 安装`gulp`;全局,项目根目录同时安装;

2. 项目根目录下建文件`gulpfile.js`

```javascript
// gulpfile.js文件
var gulp = require('gulp');
var less = require('gulp-less');
gulp.task('testLess',function(){ //当前事务的名字,第二个参数可选为数组，是执行此事务的依赖,第三个参数为函数;
    gulp.src('src/less/index.less')
        .pipe(less())
        .pipe(gulp.dest('src/css'))
});
gulp.task('default',['testLess'])    //'default'入口, ['testLess']为下一步执行的代码;

```
3. 运行

　　命令窗口`gulp`;

4. 常用gulp插件
压缩html                    (gulp-htmlmin)
自动添加css前缀              （gulp-autoprefixer）
less编译                    (gulp-less)
sass的编译                  （gulp-ruby-sass）
压缩css                    （gulp-minify-css）
js代码校验                  （gulp-jshint）
合并js文件                  （gulp-concat）
压缩js代码                  （gulp-uglify）
压缩图片                    （gulp-imagemin）
图片裁剪                     (gulp-image-resize) `.pipe(imageResize({width:1000}))` [有点问题]
将background图片合成雪碧图    (gulp-css-spriter);
自动刷新页面                 （gulp-livereload）
图片缓存，只有图片替换了才压缩  （gulp-cache）
更改提醒                    （gulp-notify）
清除文件                    （del）



```javascript
'use strict';
var gulp =require('gulp'),
    htmlmin =require('gulp-htmlmin'),             //压缩html
    autoprefixer= require('gulp-autoprefixer'),   //给css自动添加浏览器前缀的
    less = require('gulp-less'),                  //将less转成css
    minify = require('gulp-minify-css'),          //压缩css
    concat = require('gulp-concat'),              //合并js的
    uglify = require('gulp-uglify'),              //压缩js的
    notify = require('gulp-notify'),              //添加通知的
    imagemin = require('gulp-imagemin'),          //压缩图片的
    spriter = require('gulp-css-spriter');        //生成雪碧图的

//压缩html的
gulp.task('compressHTML',function(){
    gulp.src('index.html')
        .pipe(htmlmin())
        .pipe(gulp.dest('build'))
        .pipe(notify('html压缩成功'))
});

//针对css的压缩
gulp.task('compressCss',function(){
    gulp.src('src/css/index.css')
        .pipe(minify())            //压缩css
        .pipe(gulp.dest('build/src/css'))
        .pipe(notify('css压缩成功'))
});
//合并压缩js
var paths = {
    scripts:['src/js/index.js','src/js/index2.js']
};
gulp.task('compressJs',function(){
    gulp.src(paths.scripts)
        .pipe(concat('main.js'))           //合并的文件名;
        .pipe(uglify())                    //压缩文件
        .pipe(gulp.dest('build/src/js'))   //输出到的目录下    build/src/js/main.js
        .pipe(notify('js压缩成功'));
})

//压缩图片
gulp.task('compressImg',function(){
    gulp.src('src/spriteImages/sprite.png')
        .pipe(imagemin())
        .pipe(gulp.dest('build/src/spriteImages'))
        .pipe(notify('图片压缩成功'));
})

//将less转换为css
gulp.task('less',function(){
    gulp.src('src/css/index.less')
        .pipe(autoprefixer())      //自动添加浏览器前缀
        .pipe(less())              //自动将less转换为css
        .pipe(gulp.dest('src/css'))
        .pipe(notify('less转换css成功'))
})

//生成雪碧图的
gulp.task('getSpriter',['less'],function(){
    gulp.src('src/css/index.css')
        .pipe(spriter({
            'spriteSheet':'src/spriteImages/sprite.png',     //生成的雪碧图地址;貌似不能放在原先的文件夹下
            'pathToSpriteSheetFromCSS':'../spriteImages/sprite.png',      //修改对应css里雪碧图的位置;
        }))
        .pipe(gulp.dest('src/css'))
        .pipe(notify('生成雪碧图成功'))
});

gulp.task('default',['compressHTML','compressCss','compressJs','compressImg']);

```
