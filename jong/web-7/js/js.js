$(function(){
    $('.menu').hover(function(){
        $(this).children('.submenu').stop().slideToggle();
    });
});

setInterval(function(){
    $('.slide_box').delay(500);
    $('.slide_box').animate({marginTop:"-300px"},1000);
    $('.slide_box').delay(500);
    $('.slide_box').animate({marginTop:"-600px"},1000);
    $('.slide_box').delay(500);
    $('.slide_box').animate({marginTop:"0"},1000);
});

$(function(){
    $('.pop').click(function(){
        $('.popup').stop().fadeIn();
    });
    $('.close').click(function(){
        $('.popup').stop().fadeOut();
    });
});