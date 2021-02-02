$('.slider-wrapper').slick({
    centerMode: true,
    slidesToShow: 3,
    arrows: false,
    centerPadding: 0,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: 0,
          slidesToShow: 3
        }
      },
      {
        breakpoint: 580,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: 0,
          slidesToShow: 1
        }
      }
    ]
  });

