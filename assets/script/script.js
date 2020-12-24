// $(document).ready(function(){
//     $('#raiting-tabs').tabs()
// })
$(document).ready(function () {
  //slider
  $(".premium__slider").slick({
    slidesToShow: 1,
    dots: true,
    infinite: true,
    arrows: false,
    accessibility: false,
    autoplay: true,
    autoplaySpeed: 3000,
  });

  // COURSE-FILTER
  $(".filter-course__item").click(function () {
    $index = $(this).index();
    $course = $(".course__wrapper");
    if ($index === 0) {
      $course.addClass("show").removeClass("hide");
    } else {
      $course.addClass("hide");
      $course.removeClass("show");
      $course
        .eq($index - 1)
        .addClass("show")
        .removeClass("hide");
    }
    $(".filter-course__item").removeClass("filter__button_active");
    $(this).addClass("filter__button_active");
  });
  //LEADERBOARD-FILTER
  $(".leaderboard-raiting__item").click(function () {
    $(".leaderboard-raiting__item").removeClass("active");
    $(this).addClass("active");

    $index = $(this).index();
    $raitingList = $(".users-raiting__list");
    $length = $raitingList.length - 1;
    if ($index === $length) {
      $raitingList.addClass("hide");
      $raitingList.removeClass("show");
      $raitingList.eq($index).addClass("show").removeClass('hide');
    } else {
      $raitingList.addClass("hide");
      $raitingList.removeClass("show");
      $raitingList.eq($index).addClass("show").removeClass("hide");
    }
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
  $(".notification-header").click(function () {
    $(this).toggleClass("open");
  });
  //menu
  $(".header__menu").click(function () {
    $(this).toggleClass("open");
  });
  //region
  $(".region-header").click(function () {
    $(this).toggleClass("open");
    $(".region-header__wrapper").toggleClass("open");
  });
});
