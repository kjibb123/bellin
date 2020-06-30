$(function(){
    $('.menu').hover(function(){
        $(this).children('.submenu').stop().fadeToggle();
    });
});

//setInterval(function(){
//    $('.slide_box').delay(500);
//    $('.slide_box').animate({marginLeft:"-800px"},1500);
//    $('.slide_box').delay(500);
//    $('.slide_box').animate({marginLeft:"-1600px"},1500);
//    $('.slide_box').delay(500);
//    $('.slide_box').animate({marginLeft:"0px"},1500);
//});



$(function(){
    setInterval(function(){
        $('.slide_box').animate({
            marginLeft:"-800px"
        },function(){
            $('.slide_box img').eq(0).appendTo('.slide_box');
            $('.slide_box').css({
                marginLeft:0
            });
        });
    },2000);
});

$(function(){
    $('.pop').click(function(){
        $('.popup').stop().fadeIn();
    });
    $('.close').click(function(){
        $('.popup').stop().fadeOut();
    });
});