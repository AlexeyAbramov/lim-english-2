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

  // courses-FILTER
  $(".filter-courses__item").click(function () {
    $index = $(this).index();
    $courses = $(".courses__wrapper");
    if ($index === 0) {
      $courses.addClass("show").removeClass("hide");
    } else {
      $courses.addClass("hide");
      $courses.removeClass("show");
      $courses
        .eq($index - 1)
        .addClass("show")
        .removeClass("hide");
    }
    $(".filter-courses__item").removeClass("filter__button_active");
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
      $raitingList.eq($index).addClass("show").removeClass("hide");
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
    $("#user-menu").toggleClass("open");
  });
  $(".user-header").click(function () {
    $("#user-menu").toggleClass("open");
  });
  $(".user-header").mouseenter(function () {
    $("#user-menu").addClass("open");
  });
  $(".user-header").mouseleave(function () {
    $("#user-menu").removeClass("open");
  });
  $(".user-header__body").click(function () {
    $("#user-menu").toggleClass("open");
  });
  $("#user-menu").hover(function () {
    $(this).toggleClass("open");
  });
  //region
  $(".region-header").click(function () {
    $(this).toggleClass("open");
    $(".region-header__wrapper").toggleClass("open");
  });
  $("#courses__select").change(function () {
    $index = $("option:checked").index();
    $courses = $(".courses__wrapper");
    // $headline = $(".courses__headline");
    if ($index === 0) {
      $courses.addClass("show").removeClass("hide");
      // $headline.addClass("show").removeClass("hide");
    } else {
      $courses.addClass("hide");
      // $headline.addClass("hide");
      $courses.removeClass("show");
      // $headline.removeClass("show");
      $courses
        .eq($index - 1)
        .addClass("show")
        .removeClass("hide");
      // $headline
      //   .eq($index - 1)
      //   .addClass("show")
      //   .removeClass("hide");
    }
    $(".filter-courses__item").removeClass("filter__button_active");
    $(this).addClass("filter__button_active");
  });
  //level
  $(".level__item").click(function () {
    $(this).find(".content-level").toggleClass("hide");
    $(this).find(".arrow").toggleClass("arrow_hide");
    $(this).find(".popup-level__text").text() === "Свернуть"
      ? $(this).find(".popup-level__text").text("Развернуть")
      : $(this).find(".popup-level__text").text("Свернуть");
  });

  // progress-bar
  function progressBar(percent) {
    $progress = $(".svg-progress__circle_load");
    $radius = $progress.attr("r");
    $circumference = 2 * Math.PI * $radius;

    $offset = $circumference - (percent / 100) * $circumference;
    $progress.css("stroke-dashoffset", $offset);
    percent === 100 ? $progress.css("stroke-linecap", "square") : false;

    $(".progress-bar__count").text(percent);
    $('.progress-bar').append(`      <svg class="progress-bar__svg svg-progress" xmlns="http://www.w3.org/2000/svg"
    width="150" height="150" viewBox="0 0 150 150">
    <defs>
        <linearGradient id="load-gradient">
            <stop offset="11.75%" stop-color="#FFD56A" />
            <stop offset="90.12%" stop-color="#FF9900" />
        </linearGradient>
    </defs>
    <circle class="svg-progress__circle_stat" cx="50%" cy="50%" r="65"
        fill="url('#load-gradient')" />
    <circle class="svg-progress__circle_load" cx="50%" cy="50%" r="65"/>
  </svg>`)
    $progress.attr("style", `stroke-dashoffset:${400}`);
    
    console.log("hi");
  }
  let percent = parseInt(
    $(".progress-bar__percent[data-progress]").attr("data-progress")
  );
  progressBar(percent);

});
