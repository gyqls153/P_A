import React from 'react';
// import { useState, useCallBack } from 'react';
// import { Swiper, SwiperSlide } from 'swiper/react';
import './App.css';
import Header from './Components/Header';
// import Categories from './Components/Categories';
import './index.css';
import './services/Swiper.js';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import SwiperCore, { Pagination, Autoplay, Mousewheel } from "swiper/core";
import Terms from './Components/Term';
import SubTitle from './Components/SubTitle';
import Login from './pages/Login';
import Main from './Components/Main';
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
                            <Route path="/" element={<><Header /><Terms /><Main/></>} />
                            <Route path="/Login" element={<Login />} />
                        </Routes>
                    </Router>
                </div>
            </div>
            
        );
    }

export default App;