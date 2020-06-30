$(function(){
    $('.menu').hover(function(){
        $(this).children('.submenu').stop().slideToggle();
    });
});

$(function(){
    $('.slide_box>img:gt(0)').hide();
    setInterval(function(){
        $('.slide_box>img:first')
            .fadeOut(1000)
            .next()
            .fadeIn(1000)
            .end()
            .appendTo('.slide_box');
    },2000);
});

$(function(){
    $('#tab-2').click(function(){
        $('.gallery').show();
        $('.notice').hide();
        $('.gallery').css("display", "flex");
        
        $(this).css("backgroundColor","white");
        $('#tab-1').css("backgroundColor","plum");
    });
    
    $('#tab-1').click(function(){
        $('.gallery').hide();
        $('.notice').show();
        
        $(this).css("backgroundColor","white");
        $('#tab-2').css("backgroundColor","plum");
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