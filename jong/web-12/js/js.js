$(function(){
    $('.menu').hover(function(){
        $(this).children('.submenu').stop().fadeToggle();
    });
});

$(function(){
    setInterval(function(){
        $('.slide_box').animate({
            marginLeft:"-800px"
        },function(){
            $('.slide_box img').eq(0).appendTo('.slide_box');
            $('.slide_box').css({
                marginLeft:"0"
            });
        });
    }, 2000);
});

$(function(){
    $('.pop').click(function(){
        $('.popup').stop().fadeIn();
    });
    $('.close').click(function(){
        $('.popup').stop().fadeOut();
    });
});