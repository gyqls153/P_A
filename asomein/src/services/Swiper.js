

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
        <div>
            <Swiper
                className="banner"
                spaceBetween={50}
                slidesPerView={1}
                pagination={{ clickable: true }}
                autoplay={{ delay : 1000 }} //자동플레이시간
            >
                <SwiperSlide>slide 1</SwiperSlide>
                <SwiperSlide>Slide 2</SwiperSlide>
                <SwiperSlide>Slide 3</SwiperSlide>
            </Swiper>
        </div>
    )   
}
export default MainPage;

