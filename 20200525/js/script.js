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

setInterval(function(){
    //setInterval(); 함수 반복 실행
    $(".slide_box").delay(500);
    $(".slide_box").animate({marginTop: "-300px"}, "2000");
    $(".slide_box").delay(500);
    $(".slide_box").animate({marginTop: "-600px"}, 2000, "swing");
    $(".slide_box").delay(2500);
    $(".slide_box").animate({marginTop: "0"}, "500");
})

