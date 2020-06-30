$(function(){
    $('.menu').hover(function(){
        $('.navi-bg').stop().slideToggle();
        $('.submenu').stop().slideToggle();
    });
});

$(function(){
    $('.slide_box img:gt(0)').hide();
setInterval(function(){
    $('.slide_box img:first')
        .fadeOut(1000)
        .next()
        .fadeIn(1000)
        .end()
        .appendTo('.slide_box');
    },2000);
    
});

$(function(){
    $('.pop').click(function(){
        $('.popup').fadeIn();
    });
    $('.close').click(function(){
        $('.popup').fadeOut();
    });
});