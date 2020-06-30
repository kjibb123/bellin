$(function(){
    $('.menu').hover(function(){
        $(this).children('.submenu').stop().slideToggle();
    });
});

$(function(){
    $('.slide_box > a:gt(0)').hide();
        setInterval(function(){
    $('.slide_box > a:first')
        .fadeOut(1000)
        .next()
        .fadeIn(1000)
        .end()
        .appendTo('.slide_box');
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