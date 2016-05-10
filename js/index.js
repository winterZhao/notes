'use strict';
window.onload = function(){

};
var mySwiper = new Swiper('.swiper-container',{
    width:window.innerWidth,
    height:window.innerHeight,
    direction:'vertical',
    allowSwipeToPrev : false,
    loop:false,
    lazyLoading:true,
    lazyLoadingInPrevNext:true,
    lazyLoadingInPrevNextAmount :1,
})

var Games = {
        answerNum:[2,2,2,3,4,1,2,2],
        totalScore:0,
        ti:0,
        isRepeatSlide:false,

        init:function(){
            var _self = this;
            $('#ceshi .third-list-item').on('click',_self.analysis.bind(this));
        },
        rightShow:function(){
            console.log(1)
            var _self = this;
            $('.right-dialog').removeClass('show');
            if(_self.ti == 7 ){
                _self.getCoupon();
            };
            mySwiper.slideNext();
            $('.next').off('click',_self.show);
            $('.close').off('click',_self.show);
            $('.next').off('click',_self.wrongShow);
            $('.close').off('click',_self.wrongShow);

        },
        wrongShow:function(){
            console.log(2)
            var _self = this;
            $('.wrong-dialog').removeClass('show');
            if(_self.ti == 7 ){
                _self.getCoupon();
            }
            mySwiper.slideNext();
            $('.next').off('click',_self.show);
            $('.close').off('click',_self.show);
            $('.next').off('click',_self.wrongShow);
            $('.close').off('click',_self.wrongShow);
        },
        analysis:function(e){
            var _self = this,target = $(e.target);
            var userAnswer = target.parents('li.third-list-item').data('answer');
            _self.ti = Number(target.parents('ul.third-list').data('ti'));
            console.error(_self.ti);
            var ti = _self.ti;
            var rightNumber = _self.answerNum[ti];

            if(userAnswer == rightNumber){
                if(ti == 6 || ti == 7){
                    _self.totalScore += 20;
                } else {
                    _self.totalScore += 10;
                }
                $('.right-dialog').addClass('show');
                $('.next').on('click',_self.rightShow.bind(this));
                $('.close').on('click',_self.rightShow.bind(this));
            } else {
                $('.wrong-dialog').addClass('show');
                $('.next').on('click',_self.wrongShow.bind(this));
                $('.close').on('click',_self.wrongShow.bind(this));

            };
        },
        getCoupon:function(){

            var _self = this,str1,str2;
            var score = _self.totalScore;
            if (score ==  100){
                str1 ='<img src="img/chihuo4_03.png" alt=""/>';
                str2 ='<div class="float-left one-img"><img src="img/one_03.png" alt="img"/> </div><div class="float-left one-img"><img src="img/zero_02.png" alt="img"/></div><div class="float-left one-img"><img src="img/zero_02.png" alt="img"/></div>';
            }else  if (score == 90) {
                str1 = '<img src="img/chihuo3_03.png" alt=""/>';
                str2 = '<div class="float-left left"> <img src="img/nine_03.png" alt="img"/> </div> <div class="float-left left"> <img src="img/zero_02.png" alt="img"/></div>';
            } else if (score == 80 ) {
                str1 = '<img src="img/chihuo6_02.png" alt=""/>';
                str2 = '<div class="float-left left"> <img src="img/eight_03.png" alt="img"/> </div> <div class="float-left left"> <img src="img/zero_02.png" alt="img"/></div>';
            } else if (score == 70) {
                str1 = '<img src="img/chihuo5_02.png" alt=""/>';
                str2 = '<div class="float-left left"> <img src="img/seven_03.png" alt="img"/> </div> <div class="float-left left"> <img src="img/zero_02.png" alt="img"/></div>';
            } else if (score == 60) {
                str1 = '<img src="img/chihuo5_02.png" alt=""/>';
                str2 = '<div class="float-left left"> <img src="img/six_03.png" alt="img"/> </div> <div class="float-left left"> <img src="img/zero_02.png" alt="img"/></div>';
            } else if (score == 50 ){
                str1 = '<img src="img/chihuo2_02.png" alt=""/>';
                str2 = '<div class="float-left left"> <img src="img/five_03.png" alt="img"/> </div> <div class="float-left left"> <img src="img/zero_02.png" alt="img"/></div>'
            } else if (score == 40) {
                str1 = '<img src="img/chihuo2_02.png" alt=""/>';
                str2 = '<div class="float-left left"> <img src="img/four_03.png" alt="img"/> </div> <div class="float-left left"> <img src="img/zero_02.png" alt="img"/></div>';
            } else if (score == 30) {
                str1 = '<img src="img/chihuo1_01.png" alt=""/>';
                str2 = '<div class="float-left left"> <img src="img/three_03.png" alt="img"/> </div> <div class="float-left left"> <img src="img/zero_02.png" alt="img"/></div>';
            } else if (score == 20) {
                str1 = '<img src="img/chihuo1_01.png" alt=""/>';
                str2 = '<div class="float-left left"> <img src="img/two_03.png" alt="img"/> </div> <div class="float-left left"> <img src="img/zero_02.png" alt="img"/></div>';
            } else if (score == 10) {
                str1 = '<img src="img/chihuo1_01.png" alt=""/>';
                str2 = '<div class="float-left left"> <img src="img/one_03.png" alt="img"/> </div> <div class="float-left left"> <img src="img/zero_02.png" alt="img"/></div>';
            } else if(score == 0){
                str1 = '<img src="img/chihuo1_01.png alt=""/>';
                str2 = '<div class="float-left left"> <img src="img/one_03.png" alt="img"/> </div> <div class="float-left left"> <img src="img/zero_02.png" alt="img"/></div>';
            }

            $('.assess').html(str1);
            $('.score').html(str2);

            $('.play').on('click',function(){
                window.open('https://www.baidu.com');
            });
            $('#shuafen').on('click',function(){
                mySwiper.slideTo(0, 1000, false);
                _self.totalScore = 0;
            });
            $('#share').on('click',function(){
                $('.dialog').addClass('show')
            })


            //
            //if(score == 100){
            //    str +=' <img src="img/chihuo4_03.png" alt=""/></div><div class="score"><div class="float-left one-img"><img src="img/one_03.png" alt="img"/> </div><div class="float-left one-img"><img src="img/zero_02.png" alt="img"/></div><div class="float-left one-img"><img src="img/zero_02.png" alt="img"/></div></div>'
            //} else  if (score == 90){
            //    str+='<img src="img/chihuo3_03.png" alt=""/> </div> <div class="score"> <div class="float-left left"> <img src="img/nine_03.png" alt="img"/> </div> <div class="float-left left"> <img src="img/zero_02.png" alt="img"/></div></div>';
            //} else if(score == 80 ) {
            //    str+='<img src="img/chihuo6_02.png" alt=""/> </div> <div class="score"> <div class="float-left left"> <img src="img/eight_03.png" alt="img"/> </div> <div class="float-left left"> <img src="img/zero_02.png" alt="img"/></div></div>';
            //} else if(score == 70) {
            //    str+='<img src="img/chihuo5_02.png" alt=""/> </div> <div class="score"> <div class="float-left left"> <img src="img/seven_03.png" alt="img"/> </div> <div class="float-left left"> <img src="img/zero_02.png" alt="img"/></div></div>';
            //} else if (score == 60) {
            //    str+='<img src="img/chihuo5_02.png" alt=""/> </div> <div class="score"> <div class="float-left left"> <img src="img/six_03.png" alt="img"/> </div> <div class="float-left left"> <img src="img/zero_02.png" alt="img"/></div></div>';
            //} else if (score == 50 ) {
            //    str+='<img src="img/chihuo2_02.png" alt=""/> </div> <div class="score"> <div class="float-left left"> <img src="img/five_03.png" alt="img"/> </div> <div class="float-left left"> <img src="img/zero_02.png" alt="img"/></div></div>';
            //} else if (score == 40) {
            //    str+='<img src="img/chihuo2_02.png" alt=""/> </div> <div class="score"> <div class="float-left left"> <img src="img/four_03.png" alt="img"/> </div> <div class="float-left left"> <img src="img/zero_02.png" alt="img"/></div></div>';
            //} else if (score == 30) {
            //    str+='<img src="img/chihuo1_01.png" alt=""/> </div> <div class="score"> <div class="float-left left"> <img src="img/three_03.png" alt="img"/> </div> <div class="float-left left"> <img src="img/zero_02.png" alt="img"/></div></div>';
            //} else if (score == 20){
            //    str+='<img src="img/chihuo1_01.png" alt=""/> </div> <div class="score"> <div class="float-left left"> <img src="img/two_03.png" alt="img"/> </div> <div class="float-left left"> <img src="img/zero_02.png" alt="img"/></div></div>';
            //} else if (score == 10){
            //    str+='<img src="img/chihuo1_01.png" alt=""/> </div> <div class="score"> <div class="float-left left"> <img src="img/one_03.png" alt="img"/> </div> <div class="float-left left"> <img src="img/zero_02.png" alt="img"/></div></div>';
            //} else if(score == 0){
            //    str+='<img src="img/chihuo1_01.png" alt=""/> </div> <div class="score"> <div class="float-left left"> <img src="img/one_03.png" alt="img"/> </div> <div class="float-left left"> <img src="img/zero_02.png" alt="img"/></div></div>';
            //}

            //str+='<div class="play cur"> <img src="img/again_02.png" alt=""/> </div> <div class="bottom"> <button class="float-left left-btn cur" id="shuafen">我要刷分</button> <button class="float-left left-btn right-btn cur" id="share">抓人来考</button> </div> <div class="dialog"> <div class="share"> <img src="img/share_02.png" alt=""/> </div></div></div>'
            //
            //$('.swiper-wrapper').html(str);



        }

    }
Games.init();