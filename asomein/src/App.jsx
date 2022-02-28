import React from 'react';
// import { useState, useCallBack } from 'react';
// import { Swiper, SwiperSlide } from 'swiper/react';
import './App.css';
// import Categories from './Components/Categories';
import './index.css';
import './services/Swiper.js';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import SwiperCore, { Pagination, Autoplay, Mousewheel } from "swiper/core";
import Login from './pages/Login';
import Notice from './pages/Notice';
import Joinclear from './Components/JoinClear';
import UserManagement from './pages/UserSetting';
import Main from './Components/Main';
import Subscribemain from './pages/Subscribe';
import Joinasomein from './Components/JoinAsomein';
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
                            <Route path="/" element={<><Main/></>} />
                            <Route path="/Login" element={<Login />} />
                            <Route path="/join" element={<Joinasomein />} />
                            <Route path="/welcome" element={<Joinclear />} />

                            <Route path="/notice" elment={<Notice />} />새로운 게시판라우터생성
                            <Route path="/subscribe" element={<Subscribemain />} />
                            <Route path="/userinfo" element={<UserManagement />} />
                        </Routes>
                    </Router>
                </div>
            </div>
            
        );
    }

export default App;