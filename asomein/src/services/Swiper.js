
// import { Swiper, SwiperSlide } from 'swiper/react';
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react.js';
import SwiperCore, { pagination, Autoplay, Mousewheel } from "swiper";

//import swiper styling
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import 'swiper/css/bundle';
import 'swiper/css/a11y';

SwiperCore.use([ pagination, Autoplay, Mousewheel ])

function MainPage() {
    return(
        <div>
        <Swiper
            className="banner"
            spaceBetween={50}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay : 1000 }} //자동플레이시간
        >
            <SwiperSlide>Slide 1</SwiperSlide>
            <SwiperSlide>Slide 2</SwiperSlide>
            <SwiperSlide>Slide 3</SwiperSlide>
        </Swiper>
        </div>
    )
}

export default MainPage;

