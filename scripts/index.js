var banner = new Swiper("main .banner_container .swiper", {
    navigation:{
        nextEl: "main .banner_container .swiper .swiper_btn_wrap .swiper_arrow_wrap .swiper-button-next",
        prevEl: "main .banner_container .swiper .swiper_btn_wrap .swiper_arrow_wrap .swiper-button-prev",
    },
    pagination: {
        el: "main .banner_container .swiper .swiper_btn_wrap .swiper-pagination",
    },
});