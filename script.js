$(function () {
  $(".testimonial-slider").slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    dots: true,
    arrows: true,
    infinite: true,
    speed: 600,
    adaptiveHeight: true,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 1.5,
          centerMode: false,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1.2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });
});
