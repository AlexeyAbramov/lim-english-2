// $(document).ready(function(){
//     $('#raiting-tabs').tabs()
// })
$(document).ready(function () {
  $(".leaderboard-raiting__item").click(function () {
    $(".leaderboard-raiting__item").removeClass("active");
    $(this).addClass("active");
  });
  $(".filter-course__link").click(function () {
    $(".filter-course__link").removeClass("filter__button_active");
    $(this).addClass("filter__button_active");
  });

  //plan
  $(".form-popup__plan").change(function () {
    $(".form-popup__wrapper").removeClass("checked");
    $(this).parent().addClass("checked");
  });
  $(".time-personal__settings").click(function () {
    $(".popup").css("display", "block");
  });
  $(".popup__cross").click(function () {
    $(".popup").css("display", "none");
  });
  $(".form-popup__button").click(function (e) {
    e.preventDefault();
    $(".popup").css("display", "none");
  });
  //notification
  $('.notification-header').click(function(){
    $(this).toggleClass('open');
  })
  //menu
  $('.header__menu').click(function(){
    $(this).toggleClass('open');
  })
  //region
  $('.region-header').click(function(){
    $(this).toggleClass('open');
    $('.region-header__wrapper').toggleClass('open');
  })
});
