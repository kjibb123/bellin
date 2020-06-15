$(function(){
    $('.menu').hover(function(){
        $('.submenu').stop().slideToggle();
        $('.navi_bg').stop().slideToggle();
    });
});

setInterval(function(){
    $('.slide_box').delay(1000)
    $('.slide_box').animate({marginLeft:"-1200px"},1000);
    $('.slide_box').delay(1000)
    $('.slide_box').animate({marginLeft:"-2400px"},1000);
    $('.slide_box').delay(1000)
    $('.slide_box').animate({marginLeft:"0"},1000);
});

$(function(){
    $('.pop').click(function(){
        $('.popup').fadeIn();
    });
    $('.close').click(function(){
        $('.popup').fadeOut()
    });
});