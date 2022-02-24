import React from 'react';
// import { useState, useCallBack } from 'react';
// import { Swiper, SwiperSlide } from 'swiper/react';
import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Swiper from './services/Swiper';
import Tabs from './Components/Tabs';
// import Categories from './Components/Categories';
import './index.css';
import './services/Swiper.js';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


import SwiperCore, { Pagination, Autoplay, Mousewheel } from "swiper/core";
SwiperCore.use([ Pagination, Autoplay, Mousewheel ])

// /* Main App */
function App() {

        // const [category, setCategory] = useState('all');
        // const onSelect = 지useCallBack(category => setCategory(category), []);

        return (
            <> 
            <div className="App">

            
                <div className="app-inner-grid">                  

                    <Router>
                        <Routes>
                            <Route path="/aaa" element={<Header />} />
                        </Routes>
                    </Router>
                    {/* <!!!!!! */}

                    <div className="top-contents">
                        <div className="big-logo-img"></div>
                        <ul className="logo-text-style">
                            <li>성선희의 투자 인사이트 엿보기</li>
                            <li>투자하는 사람들을 위한 플랫폼</li>
                            <li>AWESOME LETTEER</li>
                        </ul>
                    </div> 
                    <div className="swiper-empty-img" alt="대체이미지">
                        <Swiper />
                    </div>
                    <div className="container-list">
                        <div className="list-top-area">
                            <ul className="list-3d-menu">
                                <li><p>전체</p></li>
                                <li><p>Only부동산</p></li>  
                                <li><p>Only금융</p></li>
                            </ul>
                            <div className="search-inner-box">
                                <div className="bbs-list-search">
                                    <select id="" className="search-inner-selectBox">
                                        <option selected>전체</option>
                                        <option>Only부동산</option>
                                        <option>Only금융</option>
                                    </select>
                                    <input id="list-search" type="text" name="search-field" />
                                    <button type="submit" className="seachBtn"></button>
                                </div>
                            </div>
                            
                            <div className="right-content-top-bbs">
                                <div className="subscribe-asomein"><a href="#!">어썸레터<br />구독하기</a></div>
                                <select id="" className="all-dropdown-selbox">
                                    <option selected>전체보기</option>
                                    <option>Only부동산</option>
                                    <option>Only금융</option>
                                </select>
                            </div>
                        </div>
                        <div className="table-contents">
                            <table>
                                <tr>
                                    <td>
                                        <span className="icon-01"></span>
                                        <h3>현대중공업 공모주 할까요?(feat,9월 공모주 투자전략)</h3>
                                        <p>삼성중공업은 무상감자로 제외, 한국조선해양은 현대중공업의 모회사로 제외, 현대미포조선은 모회사와의... 현대중공업 공모주 청약 청약일정...</p>
                                        <span className="list-num">220128</span>
                                    </td>
                                    <td>
                                        <span className="icon-02"></span>
                                        <h3>현대중공업 공모주 할까요?(feat,9월 공모주 투자전략)</h3>
                                        <p>삼성중공업은 무상감자로 제외, 한국조선해양은 현대중공업의 모회사로 제외, 현대미포조선은 모회사와의... 현대중공업 공모주 청약 청약일정...</p>
                                        <span className="list-num">220128</span>
                                    </td>
                                    <td>
                                        <span className="icon-01"></span>
                                        <h3>현대중공업 공모주 할까요?(feat,9월 공모주 투자전략)</h3>
                                        <p>삼성중공업은 무상감자로 제외, 한국조선해양은 현대중공업의 모회사로 제외, 현대미포조선은 모회사와의... 현대중공업 공모주 청약 청약일정...</p>
                                        <span className="list-num">220128</span>
                                    </td>
                                    <td>
                                        <span className="icon-02"></span>
                                        <h3>현대중공업 공모주 할까요?(feat,9월 공모주 투자전략)</h3>
                                        <p>삼성중공업은 무상감자로 제외, 한국조선해양은 현대중공업의 모회사로 제외, 현대미포조선은 모회사와의... 현대중공업 공모주 청약 청약일정...</p>
                                        <span className="list-num">220128</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <span className="icon-01"></span>
                                        <h3>현대중공업 공모주 할까요?(feat,9월 공모주 투자전략)</h3>
                                        <p>삼성중공업은 무상감자로 제외, 한국조선해양은 현대중공업의 모회사로 제외, 현대미포조선은 모회사와의... 현대중공업 공모주 청약 청약일정...</p>
                                        <span className="list-num">220128</span>
                                    </td>
                                    <td>
                                        <span className="icon-02"></span>
                                        <h3>현대중공업 공모주 할까요?(feat,9월 공모주 투자전략)</h3>
                                        <p>삼성중공업은 무상감자로 제외, 한국조선해양은 현대중공업의 모회사로 제외, 현대미포조선은 모회사와의... 현대중공업 공모주 청약 청약일정...</p>
                                        <span className="list-num">220128</span>
                                    </td>
                                    <td>
                                        <span className="icon-02"></span>
                                        <h3>현대중공업 공모주 할까요?(feat,9월 공모주 투자전략)</h3>
                                        <p>삼성중공업은 무상감자로 제외, 한국조선해양은 현대중공업의 모회사로 제외, 현대미포조선은 모회사와의... 현대중공업 공모주 청약 청약일정...</p>
                                        <span className="list-num">220128</span>
                                    </td>
                                    <td>
                                        <span className="icon-02"></span>
                                        <h3>현대중공업 공모주 할까요?(feat,9월 공모주 투자전략)</h3>
                                        <p>삼성중공업은 무상감자로 제외, 한국조선해양은 현대중공업의 모회사로 제외, 현대미포조선은 모회사와의... 현대중공업 공모주 청약 청약일정...</p>
                                        <span className="list-num">220128</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <span className="icon-01"></span>
                                        <h3>현대중공업 공모주 할까요?(feat,9월 공모주 투자전략)</h3>
                                        <p>삼성중공업은 무상감자로 제외, 한국조선해양은 현대중공업의 모회사로 제외, 현대미포조선은 모회사와의... 현대중공업 공모주 청약 청약일정...</p>
                                        <span className="list-num">220128</span>
                                    </td>
                                    <td>
                                        <span className="icon-02"></span>
                                        <h3>현대중공업 공모주 할까요?(feat,9월 공모주 투자전략)</h3>
                                        <p>삼성중공업은 무상감자로 제외, 한국조선해양은 현대중공업의 모회사로 제외, 현대미포조선은 모회사와의... 현대중공업 공모주 청약 청약일정...</p>
                                        <span className="list-num">220128</span>
                                    </td>
                                    <td>
                                        <span className="icon-01"></span>
                                        <h3>현대중공업 공모주 할까요?(feat,9월 공모주 투자전략)</h3>
                                        <p>삼성중공업은 무상감자로 제외, 한국조선해양은 현대중공업의 모회사로 제외, 현대미포조선은 모회사와의... 현대중공업 공모주 청약 청약일정...</p>
                                        <span className="list-num">220128</span>
                                    </td>
                                    <td>
                                        <span className="icon-02"></span>
                                        <h3>현대중공업 공모주 할까요?(feat,9월 공모주 투자전략)</h3>
                                        <p>삼성중공업은 무상감자로 제외, 한국조선해양은 현대중공업의 모회사로 제외, 현대미포조선은 모회사와의... 현대중공업 공모주 청약 청약일정...</p>
                                        <span className="list-num">220128</span>
                                    </td>
                                </tr>
                            </table>
                            <div className="more">
                                <a href="!#">더보기<br />+</a>
                            </div>
                        </div>
                    </div>

                    <div className="contents-interview">
                        <div className="interview-title">
                            <i className="icon-interview"></i>
                            <p>INTERVIEW</p>
                        </div>
                        <div className="comments-box">
                            <ul>
                                <li>
                                    <h4>머리에 쏙쏙<br/> 들어오는 <br/> 뉴스레터</h4>
                                    <p>바이오섹터는 너무 생속한 분야라고 생각했는데 어썸레터로 또 하나 배우게됐어요`^^ 바이오에 대해서는 관심도 없었고 생각을 해본적도 없었는데, 아무것도 몰랐던 저도 이해할수 있을정도로 도움되는 정보였던것 같아요`^^</p>
                                </li>
                                <li>
                                    <h4>머리에 쏙쏙<br/> 들어오는 <br/> 뉴스레터</h4>
                                    <p>바이오섹터는 너무 생속한 분야라고 생각했는데 어썸레터로 또 하나 배우게됐어요`^^ 바이오에 대해서는 관심도 없었고 생각을 해본적도 없었는데, 아무것도 몰랐던 저도 이해할수 있을정도로 도움되는 정보였던것 같아요`^^</p>
                                </li>
                                <li>
                                    <h4>머리에 쏙쏙<br/> 들어오는 <br/> 뉴스레터</h4>
                                    <p>바이오섹터는 너무 생속한 분야라고 생각했는데 어썸레터로 또 하나 배우게됐어요`^^ 바이오에 대해서는 관심도 없었고 생각을 해본적도 없었는데, 아무것도 몰랐던 저도 이해할수 있을정도로 도움되는 정보였던것 같아요`^^</p>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="contents-community">
                            <Tabs />
                        <div className="more">
                            <a href="!#">더보기<br />+</a>
                        </div>
                    </div>
                    <Footer />
                </div>
            </div>
            </>
        );
    }

export default App;