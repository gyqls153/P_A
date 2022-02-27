import MainPage from "../services/Swiper"

import Footer from './Footer';
import Tabs from './Tabs';
import Interview from './Interview';
import ContentTableSection from './ContentTableSection';

function Main() {
    return (
        <>
            <div className="top-contents">
            <div className="big-logo-img"></div>
            <ul className="logo-text-style">
                <li>성선희의 투자 인사이트 엿보기</li>
                <li>투자하는 사람들을 위한 플랫폼</li>
                <li>AWESOME LETTEER</li>
            </ul>
        </div> 
        <div className="swiper-empty-img">
            <MainPage></MainPage>
        </div>

        <ContentTableSection />

        <Interview />
        
        <Tabs />
        
        <Footer />
        </>
    )
}

export default Main;