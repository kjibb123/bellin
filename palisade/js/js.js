$(function(){
    $('#moonlight').click(function(){
        $('.moonlight').css("display","block").fadeIn();
        $('.burgundy').css("display","none").fadeOut();
        $('.white').css("display","none").fadeOut();
        $('.steal').css("display","none").fadeOut();
        $('.black').css("display","none").fadeOut();
        $('.forest').css("display","none").fadeOut();
    });

    $('#white').click(function(){
        $('.moonlight').css("display","none").fadeOut();
        $('.burgundy').css("display","none").fadeOut();
        $('.white').css("display","block").fadeIn();
        $('.steal').css("display","none").fadeOut();
        $('.black').css("display","none").fadeOut();
        $('.forest').css("display","none").fadeOut();
    });

    $('#burgundy').click(function(){
        $('.moonlight').css("display","none").fadeOut();
        $('.burgundy').css("display","block").fadeIn();
        $('.white').css("display","none").fadeOut();
        $('.steal').css("display","none").fadeOut();
        $('.black').css("display","none").fadeOut();
        $('.forest').css("display","none").fadeOut();
    });

    $('#steal').click(function(){
        $('.moonlight').css("display","none").fadeOut();
        $('.burgundy').css("display","none").fadeOut();
        $('.white').css("display","none").fadeOut();
        $('.steal').css("display","block").fadeIn();
        $('.black').css("display","none").fadeOut();
        $('.forest').css("display","none").fadeOut();
    });

    $('#black').click(function(){
        $('.moonlight').css("display","none").fadeOut();
        $('.burgundy').css("display","none").fadeOut();
        $('.white').css("display","none").fadeOut();
        $('.steal').css("display","none").fadeOut();
        $('.black').css("display","block").fadeIn();
        $('.forest').css("display","none").fadeOut();
    });

    $('#forest').click(function(){
        $('.moonlight').css("display","none").fadeOut();
        $('.burgundy').css("display","none").fadeOut();
        $('.white').css("display","none").fadeOut();
        $('.steal').css("display","none").fadeOut();
        $('.black').css("display","none").fadeOut();
        $('.forest').css("display","block").fadeIn();
    });
});

$(function(){
    $('.car-back-text').click(function(){
        $('.car-front').hide();
        $('.car-back').show();
        $('.point-1,.point-2,.point-3').hide();
        $('.point-4,.point-5,.point-6').show();

        $('.car-front-text').css({backgroundColor:"black", color:"white"});
        $('.car-back-text').css({backgroundColor:"white", color:"black", border:"1px solid gray"});
    });
    $('.car-front-text').click(function(){
        $('.car-back').hide();
        $('.car-front').show();
        $('.point-1,.point-2,.point-3').show();
        $('.point-4,.point-5,.point-6').hide();

        $('.car-back-text').css({backgroundColor:"black", color:"white"});
        $('.car-front-text').css({backgroundColor:"white", color:"black", border:"1px solid gray"});
    });
});

$(function(){
    $('.button-1,.button-4').click(function(){
        $('.ex01,.ex03').hide();
        $('.ex02,.ex04').show();
        $('.ex07').hide();
        $('.ex06').show();
    });
    $('.button-2,.button-3').click(function(){
        $('.ex01,.ex03').show();
        $('.ex02,.ex04').hide();
        $('.ex07').show();
        $('.ex06').hide();
    });
});