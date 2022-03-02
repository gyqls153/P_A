import React from 'react';
// import { useState, useCallBack } from 'react';
// import { Swiper, SwiperSlide } from 'swiper/react';
import './App.css';
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
import ModalLayout from './Components/ModalLayout';
SwiperCore.use([ Pagination, Autoplay, Mousewheel ])


//Main App
function App() {

        return (
            
            <div className="App">
                <div className="app-inner-grid">

                    <Router>
                        <Routes>
                            <Route path="/" element={<><Main/></>} />
                            <Route path="/Login" element={<Login />} />
                            <Route path="/join" element={<Joinasomein />} />
                            <Route path="/welcome" element={<Joinclear />} />

                            <Route path="/notice" element={<Notice />} />
                            <Route path="/subscribe" element={<Subscribemain />} />
                            <Route path="/userinfo" element={<UserManagement />} />
                            
                        </Routes>
                    </Router>
                </div>
            </div>
            
        );
    }

export default App;