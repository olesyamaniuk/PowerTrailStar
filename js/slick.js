$(function () {
  $(".w-p-why-lists").slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    autoplay: true,
    autoplaySpeed: 3500,
    speed: 1000,
    dots: false,
    centerMode: true,
    cssEase: "linear",
    prevArrow: ".w-p-why-list-left",
    nextArrow: ".w-p-why-list-right",
  });
});
