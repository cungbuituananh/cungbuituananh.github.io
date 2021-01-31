$('.slider-wrapper').slick({
    centerMode: true,
    // centerPadding: '60px',
    slidesToShow: 3,
    arrows: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
        //   centerPadding: '40px',
          slidesToShow: 3
        }
      },
      {
        breakpoint: 580,
        settings: {
          arrows: false,
          centerMode: true,
        //   centerPadding: '40px',
          slidesToShow: 1
        }
      }
    ]
  });

