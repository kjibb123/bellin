$(function(){
    $('#tab1').click(function(){
        $('#tab1').css("backgroundColor","red");
        $('#tab2').css("backgroundColor","red");
        $('.contents-02').css("display", "block");
        $('.contents-03').css("display", "none");
    });
    $('#tab-2').click(function(){ 
        $('.contents-03').css("display", "block");
        $('.contents-02').css("display", "none");
    });
});
$(function(){
    $('.menu').mouseover(function(){
        $('.submenu').stop().slideDown();
        $('.submenu').css("display","flex");
    });
});
