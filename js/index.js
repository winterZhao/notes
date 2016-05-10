'use strict';

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
        init:function(){
            var _self = this;
            var timer = setTimeout(function(){
                _self.bindSlide();
            },6000);
            $('.arrow').on('touchend',function(){
                clearTimeout(timer);
                _self.bindSlide();
            })
            $('#ceshi .third-list-item').on('touchend',_self.analysis.bind(this));
        },
        rightShow:function(){
            var _self = this;
            $('.right-dialog').removeClass('show');
            if(_self.ti == 7 ){
                _self.getCoupon();
            };
            _self.bindSlide();
            _self.cancelBind();

        },
        wrongShow:function(){
            var _self = this;
            $('.wrong-dialog').removeClass('show');
            if(_self.ti == 7 ){
                _self.getCoupon();
            }
            _self.bindSlide();
            _self.cancelBind();
        },
        cancelBind:function(){
            var _self = this;
            $('.next').off('touchend',_self.show);
            $('.close').off('touchend',_self.show);
            $('.next').off('touchend',_self.wrongShow);
            $('.close').off('touchend',_self.wrongShow);
        },
        //滑到下一屏并取消滑动;
        bindSlide:function(){
            mySwiper.unlockSwipes();
            mySwiper.slideNext();
            mySwiper.lockSwipes();
        },
        analysis:function(e){
            mySwiper.lockSwipes();
            var _self = this,target = $(e.target);
            var userAnswer = target.parents('li.third-list-item').data('answer');
            _self.ti = Number(target.parents('ul.third-list').data('ti'));
            var ti = _self.ti;
            var rightNumber = _self.answerNum[ti];

            if(userAnswer == rightNumber){
                if(ti == 6 || ti == 7){
                    _self.totalScore += 20;
                } else {
                    _self.totalScore += 10;
                }
                $('.right-dialog').addClass('show');
                $('.next').on('touchend',_self.rightShow.bind(this));
                $('.close').on('touchend',_self.rightShow.bind(this));
            } else {
                $('.wrong-dialog').addClass('show');
                $('.next').on('touchend',_self.wrongShow.bind(this));
                $('.close').on('touchend',_self.wrongShow.bind(this));

            };
        },
        getCoupon:function(){
            var _self = this,str1,str2;
            var score = _self.totalScore;
            if (score ==  100){
                str1 ='<img src="img/chihuo4_03.png" alt=""/>';
                str2 ='<div class="float-left one-img"><img src="img/one_03.png" alt="img"/> </div><div class="float-left one-img"><img src="img/zero_02.png" alt="img"/></div><div class="float-left one-img"><img src="img/zero_02.png" alt="img"/></div>';
                $('.score').addClass('handred');
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

            $('.play').on('touchend',function(){
                window.open('https://www.baidu.com');
            });
            $('#shuafen').on('touchend',function(){
                mySwiper.unlockSwipes();
                mySwiper.slideTo(0, 100, false);
                mySwiper.lockSwipes();

                _self.totalScore = 0;
            });
            $('#share').on('touchend',function(){
                $('.dialog').addClass('show');
                setTimeout(function(){
                    $('.dialog').removeClass('show');
                },2000);
            });
        }
    }
Games.init();