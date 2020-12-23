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
});
