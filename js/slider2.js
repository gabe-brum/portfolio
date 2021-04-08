$(function () {

    var delay = 7000;
    var curIndex = 0;
    var amt;
    initSlider();
    autoPlay();

    function initSlider() {
        amt = $('.skill-single2').length;
        var sizeContainer = 100 * amt;
        var sizeBoxSingle = 100 / amt;
        $('.skill-single2').css('width', sizeBoxSingle + '%');
        $('.scroll-wraper2').css('width', sizeContainer + '%');

        // gera os span's automaticamente pelo numero de elementos no HTML
        for (var i = 0; i < amt; i++) {
            if (i == 0) {
                $('.slider-bullets2').append('<span style="background-color: #616060"></span>')
            } else {
                $('.slider-bullets2').append('<span></span>')
            }
        }
    }

    function autoPlay() {
        setInterval(function () {
            curIndex++;
            if (curIndex == amt) {
                curIndex = 0;
            }
            goToSlider(curIndex);
        }, delay)
    }

    function goToSlider(curIndex) {
        var offSetX = $('.skill-single2').eq(curIndex).offset().left - $('.scroll-wraper2').offset().left;
        $('.slider-bullets2 span').css('background-color', '#ccc');
        $('.slider-bullets2 span').eq(curIndex).css('background-color', '#616060');
        $('.scrollSkill2').stop().animate({
            'scrollLeft': offSetX
        });
    }

    $(window).resize(function () {
        $('.scrollSkill2').stop().animate({
            'scrollLeft': 0
        });
    })
});