$(function(){
    $('.menu').hover(function(){
        $('.submenu').stop().slideToggle();
    });
});

setInterval(function(){
    $('.slide_box').delay(500);
    $('.slide_box').animate({marginLeft:"-1200px"},1000);
    $('.slide_box').delay(500);
    $('.slide_box').animate({marginLeft:"-2400px"},1000);
    $('.slide_box').delay(500);
    $('.slide_box').animate({marginLeft:"0"},1000);
});

$(function(){
    $('#tab-2').click(function(){
        $('.notice').hide();
        $('.gallery').show();
        $('.gallery').css("display","flex");
        $(this).css("backgroundColor","white");
        $("#tab-1").css("backgroundColor","aqua");
    });
    $('#tab-1').click(function(){
        $('.notice').show();
        $('.gallery').hide();
        
        $(this).css("backgroundColor","white");
        $("#tab-2").css("backgroundColor","aqua");
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