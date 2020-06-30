$(function(){
    $('.menu').hover(function(){
        $(this).children('.submenu').stop().slideToggle();
    });
});

$(function(){
    $('.slide_box >a:gt(0)').hide();
    setInterval(function(){
        $('.slide_box >a:first').fadeOut().next().fadeIn().end().appendTo('.slide_box');
    },2000);
});

$(function(){
    $('.tab-2').click(function(){
        $('.tab-1').css("backgroundColor","blue");
        $(this).css("backgroundColor","white");
        $(this).css("color","black");
        
        $('.con-notice').hide();
        $('.con-gallery').show();
        $('.con-gallery').css("display","flex");
    });
    
    $('.tab-1').click(function(){
        $('.tab-2').css("backgroundColor","blue");
        $('.tab-2').css("color","white");
        $(this).css("backgroundColor","white");
        $(this).css("color","black");
        
        
        $('.con-notice').show();
        $('.con-gallery').hide();
    });
});

$(function(){
    $('.pop').click(function(){
        $('.popup').stop().fadeIn();
    });
    $('.close').click(function(){
        $('.popup').stop().fadeOut();
    });
});