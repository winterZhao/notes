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
                    if(ti == 7 ) {
                        var m = $(this).parent('#seven').siblings('.dialog')
                         m.addClass('show');
                         $('.assign').click(function(){
                             m.removeClass('show');
                             $('.result').addClass('show');
                         })
                    }

                })
            });
        },
        getCoupon:function(){
            var _self = this;
            var score = _self.totalScore;
            if (score == 100) {
                _self.content = '我真的还想再吃500年';
            } else if (score >= 90 && score < 100) {
                _self.content = '吃货,放开那个盘子';
            } else if (score >= 80 && score < 90) {
                _self.content = '根本停不下来';
            } else if (score >= 60 && score < 80) {
                _self.content = '身未动嘴已远';
            } else if (score >= 40 && score < 60) {
                _self.content = '吃货你去哪儿了';
            } else if ( score < 40) {
                _self.content = '吃货,你还在胎盘里';
            }
            var str = '<div class="swiper-slide"><h4>'+_self.content+'</h4><img src="images/erweima.png"></div>'
            var m = document.querySelector('#submit').parentNode;
            m.className ="swiper-slide"
            m.innerHTML = str;

        }

    }
