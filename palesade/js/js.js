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