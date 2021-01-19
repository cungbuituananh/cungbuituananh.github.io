let slickOpts = {
    slidesToShow: 3, // hiển thị 4 ảnh 
    slidesToScroll: 1, // cái này hình như là hiển thị ở 1 hàng
    autoplay: false, // tắt tự động chuyển slide 
    // dots: false, // tắt dấu chấm
    infinite: true, // kéo thả slide vô hạn ( không có điểm đầu điểm cuối), để false thì sẽ chỉ kéo được đến ảnh cuối & không quay lại được ảnh đầu 
    arrows: false, // tắt dấu mũi tên trái phải
    responsive: [
        {
            breakpoint: 1100, // set với màn hình nhỏ hơn 1024px  
            settings: {
                slidesToShow: 2, // hiển thị 3 ảnh
                slidesToScroll: 1,
                infinite: true,
                dots: false
            }
        },
        {
            breakpoint: 600, // set với màn hình nhỏ hơn 600px 
            settings: {
                slidesToShow: 1, // hiển thị 1 ảnh 
                slidesToScroll: 1
            }
        },
    ]
};
$(".like-slide").slick(slickOpts);