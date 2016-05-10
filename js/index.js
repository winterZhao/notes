'use strict';
window.onload = function(){
    Games.init();
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
};
var Games = {
        answerNum:[2,2,2,3,4,1,2,2],
        totalScore:0,
        init:function(){
            this.judge();
        },
        judge:function(){
            var _self = this;
            $('#ceshi .third-list-item').each(function(){
                $(this).click(function(){
                    var userAnswer = $(this).data('answer');
                    var ti = Number($(this).parent().data('ti'));
                    var target = _self.answerNum[ti];

                    if(userAnswer == target){
                        if(ti == 6 || ti == 7){
                            _self.totalScore += 20;
                        } else {
                            _self.totalScore += 10;
                        }
                    }
                    if(ti == 7) {
                        if ( userAnswer == target ) {
                            var m = $(this).parent('#seven').siblings('.right-dialog')
                            m.addClass('show');
                        } else {
                            var n = $(this).parent('#seven').siblings('.wrong-dialog')
                            n.addClass('show');
                        }
                        $('.assign').click(function(){
                            //_self.getCoupon();
                        })
                    }
                    mySwiper.slideNext();
                })
            });
        },
        getCoupon:function(){
            var _self = this,str;
            str+='<div class="swiper-slide result show bg-size"><div class="assess">';

            var score = _self.totalScore;

            if(score == 100){
                str +=' <img src="img/chihuo4_03.png" alt=""/></div><div class="score"><div class="float-left one-img"><img src="img/one_03.png" alt="img"/> </div><div class="float-left one-img"><img src="img/zero_02.png" alt="img"/></div><div class="float-left one-img"><img src="img/zero_02.png" alt="img"/></div></div>'
            } else  if (score == 90){
                str+='<img src="img/chihuo3_03.png" alt=""/> </div> <div class="score"> <div class="float-left left"> <img src="img/nine_03.png" alt="img"/> </div> <div class="float-left left"> <img src="img/zero_02.png" alt="img"/></div></div>';
            } else if(score == 80 ) {
                str+='<img src="img/chihuo6_02.png" alt=""/> </div> <div class="score"> <div class="float-left left"> <img src="img/eight_03.png" alt="img"/> </div> <div class="float-left left"> <img src="img/zero_02.png" alt="img"/></div></div>';
            } else if(score == 70) {
                str+='<img src="img/chihuo5_02.png" alt=""/> </div> <div class="score"> <div class="float-left left"> <img src="img/seven_03.png" alt="img"/> </div> <div class="float-left left"> <img src="img/zero_02.png" alt="img"/></div></div>';
            } else if (score == 60) {
                str+='<img src="img/chihuo5_02.png" alt=""/> </div> <div class="score"> <div class="float-left left"> <img src="img/six_03.png" alt="img"/> </div> <div class="float-left left"> <img src="img/zero_02.png" alt="img"/></div></div>';
            } else if (score == 50 ) {
                str+='<img src="img/chihuo2_02.png" alt=""/> </div> <div class="score"> <div class="float-left left"> <img src="img/five_03.png" alt="img"/> </div> <div class="float-left left"> <img src="img/zero_02.png" alt="img"/></div></div>';
            } else if (score == 40) {
                str+='<img src="img/chihuo2_02.png" alt=""/> </div> <div class="score"> <div class="float-left left"> <img src="img/four_03.png" alt="img"/> </div> <div class="float-left left"> <img src="img/zero_02.png" alt="img"/></div></div>';
            } else if (score == 30) {
                str+='<img src="img/chihuo1_01.png" alt=""/> </div> <div class="score"> <div class="float-left left"> <img src="img/three_03.png" alt="img"/> </div> <div class="float-left left"> <img src="img/zero_02.png" alt="img"/></div></div>';
            } else if (score == 20){
                str+='<img src="img/chihuo1_01.png" alt=""/> </div> <div class="score"> <div class="float-left left"> <img src="img/two_03.png" alt="img"/> </div> <div class="float-left left"> <img src="img/zero_02.png" alt="img"/></div></div>';
            } else if (score == 10){
                str+='<img src="img/chihuo1_01.png" alt=""/> </div> <div class="score"> <div class="float-left left"> <img src="img/one_03.png" alt="img"/> </div> <div class="float-left left"> <img src="img/zero_02.png" alt="img"/></div></div>';
            } else if(score == 0){
                str+='<img src="img/chihuo1_01.png" alt=""/> </div> <div class="score"> <div class="float-left left"> <img src="img/one_03.png" alt="img"/> </div> <div class="float-left left"> <img src="img/zero_02.png" alt="img"/></div></div>';
            }

            str+='<div class="play cur"> <img src="img/again_02.png" alt=""/> </div> <div class="bottom"> <button class="float-left left-btn cur" id="shuafen">我要刷分</button> <button class="float-left left-btn right-btn cur" id="share">抓人来考</button> </div> <div class="dialog"> <div class="share"> <img src="img/share_02.png" alt=""/> </div></div></div>'

            $('.swiper-wrapper').html(str);

            $('.play').on('click',function(){
                window.open('https://www.baidu.com');
            });
            $('#shuafen').on('click',function(){
                window.reload();
            });
            $('#share').on('click',function(){
                   $('.dialog').addClass('show')
            })

        }

    }
