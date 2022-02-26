import React from 'react';
// import { useState, useCallBack } from 'react';
// import { Swiper, SwiperSlide } from 'swiper/react';
import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Swiper from './services/Swiper';
import Tabs from './Components/Tabs';
import Interview from './Components/Interview';
import ContentTableSection from './Components/ContentTableSection';
// import Categories from './Components/Categories';
import './index.css';
import './services/Swiper.js';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import SwiperCore, { Pagination, Autoplay, Mousewheel } from "swiper/core";
import Terms from './Components/Term';
import SubTitle from './Components/SubTitle';
SwiperCore.use([ Pagination, Autoplay, Mousewheel ])


//Main App
function App() {

        // const [category, setCategory] = useState('all');
        // const onSelect = 지useCallBack(category => setCategory(category), []);

        return (
            
            <div className="App">
                <div className="app-inner-grid">                  

                    <Router>
                        <Routes>
                            <Route exact={true} path="/test" element={<Header />} />
                            <Route path="/" element={<Terms />} />
                        </Routes>
                    </Router>
                    <SubTitle color="#FFF" text="hi"></SubTitle>
                    <div className="top-contents">
                        <div className="big-logo-img"></div>
                        <ul className="logo-text-style">
                            <li>성선희의 투자 인사이트 엿보기</li>
                            <li>투자하는 사람들을 위한 플랫폼</li>
                            <li>AWESOME LETTEER</li>
                        </ul>
                    </div> 
                    <div className="swiper-empty-img">
                        <Swiper />
                    </div>

                    <ContentTableSection />

                    <Interview />
                    
                    <Tabs />
                    
                    <Footer />
                </div>
            </div>
            
        );
    }

export default App;