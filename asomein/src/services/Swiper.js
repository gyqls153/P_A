
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Pagination, Autoplay, Mousewheel } from "swiper/core";

//import swiper styling
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import 'swiper/css/bundle';
SwiperCore.use([ Pagination, Autoplay, Mousewheel ])

function MainPage() {
    return(
        <Swiper
            className="banner"
            spaceBetween={10}
            slidesPerView={1}
            pagination={{ clickable: true }}
            autoplay={{ delay : 2000 }} //자동플레이시간
        >
            <SwiperSlide><span className="slide-img01"></span></SwiperSlide>
            <SwiperSlide><span className="slide-img02"></span></SwiperSlide>
            <SwiperSlide><span className="slide-img03"></span></SwiperSlide>
            <div className="swiper-pagination"></div>
        </Swiper>
    )   
}
export default MainPage;

