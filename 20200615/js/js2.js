$(function(){
    $('.menu').hover(function(){
        $(this).children('.submenu').slideToggle();
    });
});

$('.slide_box > img:gt(0)').hide();

setInterval(function(){
    $('.slide_box > img:first').
    fadeOut(1000).
    next().
    fadeIn(1000).
    end().
    appendTo('.slide_box');
},2000);
