var tabSwitch = function() {
  $('.carousel-nav .col').click(function() {
    let index = $(this).index();
    $(".carousel-nav .col").removeClass('active');
    $('.carousel-nav').children().eq(index).addClass('active');
    if(index==0){
      $('.sundayService').css("display", "flex");
      $('.specialEvent').css("display", "none");
    }
    else if (index===1) {
      $('.sundayService').css("display", "none");
      $('.specialEvent').css("display", "flex");
    }
  });
}

tabSwitch();


$(document).ready(tabSwitch);

