
let slickOpts = {
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: false,
    dots: false,
    infinite: true,
    arrows: false,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
                dots: false
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        },
    ]
};
$(".service-slide").slick(slickOpts);