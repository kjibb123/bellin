$(function(){
    $('.buy-1').click(function(){
        swal("구매가 완료되었습니다!", "기다리시면 홈페이지로 돌아갑니다. ", "success", {
            buttons: false,
            timer: 3000,
          });
        setTimeout(function(){
            $(location).attr("href", "index.html");
        },3000);
    });
}); 