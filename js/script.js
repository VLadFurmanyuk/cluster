$(document).ready(function (){
    $('.slider').slick({
        arrows: false,
        dots: true,
        slidesToShow: 3,
        slidesToScroll: 2,
        responsive:[
            {
                breakpoint: 834,
                settings:{
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            }
        ]
    });
});
$(document).ready(function (){
    $('.slider-partners').slick({
        arrows: false,
        dots: true,
        slidesToShow: 3,
        rows: 2,
        // rtl: false,
        // infinite: false,
        slidesToScroll: 3,
        // swipeToSlide: true,
        // slidesPerRow: 3,
        responsive: [
            {
                breakpoint: 834,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            }
        ]
    });
});
$(document).ready(function (){
    $('.single-item').slick({
        arrows: false,
        dots: false,
        slidesToShow: 2,
        slidesToScroll: 2,
        autoplay: true,
        autoplaySpeed: 11000,
    });
});