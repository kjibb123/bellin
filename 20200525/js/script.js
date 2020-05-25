$(function(){
//     $('.subNav').hide();

//     $('.menu').mouseover(function(){
//         $('.subNav').stop().slideDown(200);

//     });
//     $('.menu').mouseout(function(){
//         $('.subNav').stop().slideUp(200);
//     });

$('.menu').mouseover(function(){
    $('.subNav').stop().slideDown();
    $('.subNav').css("display","flex");
});
$('.menu').mouseleave(function(){
    $(this).children('.subNav').stop().slideUp();
});
});

