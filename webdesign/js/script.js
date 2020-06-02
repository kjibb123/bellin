$(function(){
        $('.menu').mouseover(function(){
            $('.menu_content>li').css("background","black");
            $('.submenu').stop().slideDown();
            $('.submenu').css("display","flex");
        })
        $('.menu').mouseout(function(){
            $(this).children('.submenu').stop().slideUp();
        })
        $('#tab1').click(function(){
            $('#tab1').css("background","white");
            $('#tab2').css("background","none");
            $('.tab-1').css("display","block");
            $('.tab-2').css("display","none");
        });
        $('#tab2').click(function(){
            $('#tab2').css("background","white");
            $('#tab1').css("background","none");
            $('.tab-2').css("display","block");
            $('.tab-1').css("display","none");
        });

});
$(function(){
    setInterval(function(){
        $('.slider').delay(500);
        $('.slider').animate({marginTop:"-300"});
        $('.slider').delay(500);
        $('.slider').animate({marginTop:"-600px"});
        $('.slider').delay(500);
        $('.slider').animate({marginTop:"0"});
    });
});

$(function(){
    $('#popup_button').on('click', function(){
        $('.popup').fadeIn();
    });
    $('.pop').on('click', function(){
        $('.popup').fadeOut();
    });
});

$(function(){
    $('.menu_content').mouseover
})
