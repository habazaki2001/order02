$(window).bind("load", function () {
  "use strict";
  if ($(".main_slider").length > 0) {
    $(".mv_bg").addClass("init");
    var mainSlider = $(".main_slider").slick({
      dots: true,
      infinite: true,
      speed: 1000,
      autoplay: true,
      autoplaySpeed: 6000,
      arrows: true,
      centerMode: true,
      centerPadding: "275px",
      pauseOnHover: false,
      variableWidth: false,
      draggable: true,
      pauseOnFocus: false,
      slidesToShow: 1,
      responsive: [
        {
          breakpoint: 751,
          settings: {
            centerPadding: "0",
          }
        }
      ]
    });
  }

  // AOS.init({
  //     once: "true",
  //     duration: 1200,
  // });
  // var widthSec05 = ($('.sec05_list').width() - 1170) / 2;

  $(".sec05_list").slick({
    autoplay: false,
    autoplaySpeed: 2000,
    infinite: true,
    centerMode: true,
    centerPadding: "372px",
    arrows: true,
    slidesToScroll: 1,
    slidesToShow: 2,
    responsive: [
      {
        breakpoint: 1566,
        settings: {
          centerPadding: "100px",
        }
      },
      {
        breakpoint: 751,
        settings: {
          centerMode: true,
          centerPadding: "0px",
          slidesToShow: 1,
          variableWidth: true
        }
      },
    ]
  });
});
