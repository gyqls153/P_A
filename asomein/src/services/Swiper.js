
import { Swiper, SwiperSlide } from 'Swiper/react';
import { Pagination } from 'swiper';

class App extends Swiper{
    render(){
        return (
            <>
                <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
                    <SwiperSlide>Slide 1</SwiperSlide>
                    <SwiperSlide>Slide 2</SwiperSlide>
                    <SwiperSlide>Slide 3</SwiperSlide>
                    <SwiperSlide>Slide 4</SwiperSlide>
                </Swiper>
            </>
        );
    }
} 
export default App;

