import React from 'react';
// import { useState, useCallBack } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Categories from './Components/Categories';
import './index.css';
import './services/Swiper.js';

import SwiperCore, { Pagination, Autoplay, Mousewheel } from "swiper/core";
SwiperCore.use([ Pagination, Autoplay, Mousewheel ])


//import swiper styling


function App() {

        // const [category, setCategory] = useState('all');
        // const onSelect = useCallBack(category => setCategory(category), []);

        return (
            <div className="App">
                <div className="app-inner-grid">
                   <Header />
                    <div className="top-contents">
                        <div className="big-logo-img"></div>
                        <ul className="logo-text-style">
                            <li>성선희의 투자 인사이트 엿보기</li>
                            <li>투자하는 사람들을 위한 플랫폼</li>
                            <li>AWESOME LETTEER</li>
                        </ul>
                    </div> 
                    
                    
                    <div className="swiper-empty-img" alt="대체이미지">
                        <Swiper
                            className="banner"
                            spaceBetween={50}
                            slidesPerView={1}
                            pagination={{ clickable: true }}
                            autoplay={{ delay : 2000 }} //자동플레이시간
                        >
                            <SwiperSlide><span className="slide-img01"></span></SwiperSlide>
                            <SwiperSlide><span className="slide-img02"></span></SwiperSlide>
                            <SwiperSlide><span className="slide-img03"></span></SwiperSlide>
                        </Swiper>
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
                        <div className="community-inner-title">
                            <div className="community-title">
                                <i className="icon-community"></i>
                                <p>COMMUNITY</p>
                            </div>
                            <nav className="community-bbs-tab tabs">
                                <ul>
                                    <li className="active" rel="tab1">공지사항/새소식</li>
                                    <li rel="tab2">경제뉴스</li>
                                    <li rel="tab3">어썸인 YOU 퀴즈</li>
                                    <li rel="tab4">재테크수다방</li>
                                    <li rel="tab5">구독후기</li>
                                </ul>
                            </nav>
                        </div>
                        
                       <Categories /> 
                        
                        <div className="community-table">
                            <table id="tab1" className="tab-cont-table">
                                <tr className="tab">
                                    <td>
                                        <p id="title" className="tbs-title"><span>[설문]</span>어썸인 Brand new 로고를 골라주세요.</p>  
                                        <p>어썸인의 새 로고를 런칭하려고 합니다! 그동안 어썸 레터를 구독해주셨던 열북이들에게 도움을 구해요!!
                                        어떤 로고가 우리 어썸 경제 뉴스 레터와 잘 어울러지나요?! 댓글에 숫자로 의견 남겨주세요 ^^</p>
                                        <span className="tbs-list-num">220125</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <p id="title" className="tbs-title"><span>[설문]</span>어썸인 Brand new 로고를 골라주세요.</p> 
                                        <p>어썸인의 새 로고를 런칭하려고 합니다! 그동안 어썸 레터를 구독해주셨던 열북이들에게 도움을 구해요!!
                                        어떤 로고가 우리 어썸 경제 뉴스 레터와 잘 어울러지나요?! 댓글에 숫자로 의견 남겨주세요 ^^</p>
                                        <span className="tbs-list-num">220125</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <p id="title" className="tbs-title"><span>[설문]</span>어썸인 Brand new 로고를 골라주세요.</p> 
                                        <p>어썸인의 새 로고를 런칭하려고 합니다! 그동안 어썸 레터를 구독해주셨던 열북이들에게 도움을 구해요!!
                                        어떤 로고가 우리 어썸 경제 뉴스 레터와 잘 어울러지나요?! 댓글에 숫자로 의견 남겨주세요 ^^</p>
                                        <span className="tbs-list-num">220125</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <p id="title" className="tbs-title"><span>[설문]</span>어썸인 Brand new 로고를 골라주세요.</p> 
                                        <p>어썸인의 새 로고를 런칭하려고 합니다! 그동안 어썸 레터를 구독해주셨던 열북이들에게 도움을 구해요!!
                                        어떤 로고가 우리 어썸 경제 뉴스 레터와 잘 어울러지나요?! 댓글에 숫자로 의견 남겨주세요 ^^</p>
                                        <span className="tbs-list-num">220125</span>
                                    </td>
                                </tr>
                            </table>

                            <table id="tab2" className="tab-cont-table">
                                <tr className="tab">
                                    <td>
                                        <p id="title" className="tbs-title"><span>[뉴스]</span>어썸인 최고의 경제도우미로 발돋음</p>  
                                        <p>어썸인의 새 로고를 런칭하려고 합니다! 그동안 어썸 레터를 구독해주셨던 열북이들에게 도움을 구해요!!
                                        어떤 로고가 우리 어썸 경제 뉴스 레터와 잘 어울러지나요?! 댓글에 숫자로 의견 남겨주세요 ^^</p>
                                        <span className="tbs-list-num">220125</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <p id="title" className="tbs-title"><span>[뉴스]</span>어썸인 최고의 경제도우미로 발돋음</p> 
                                        <p>어썸인의 새 로고를 런칭하려고 합니다! 그동안 어썸 레터를 구독해주셨던 열북이들에게 도움을 구해요!!
                                        어떤 로고가 우리 어썸 경제 뉴스 레터와 잘 어울러지나요?! 댓글에 숫자로 의견 남겨주세요 ^^</p>
                                        <span className="tbs-list-num">220125</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <p id="title" className="tbs-title"><span>[뉴스]</span>어썸인 최고의 경제도우미로 발돋음</p> 
                                        <p>어썸인의 새 로고를 런칭하려고 합니다! 그동안 어썸 레터를 구독해주셨던 열북이들에게 도움을 구해요!!
                                        어떤 로고가 우리 어썸 경제 뉴스 레터와 잘 어울러지나요?! 댓글에 숫자로 의견 남겨주세요 ^^</p>
                                        <span className="tbs-list-num">220125</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <p id="title" className="tbs-title"><span>[뉴스]</span>어썸인 최고의 경제도우미로 발돋음</p> 
                                        <p>어썸인의 새 로고를 런칭하려고 합니다! 그동안 어썸 레터를 구독해주셨던 열북이들에게 도움을 구해요!!
                                        어떤 로고가 우리 어썸 경제 뉴스 레터와 잘 어울러지나요?! 댓글에 숫자로 의견 남겨주세요 ^^</p>
                                        <span className="tbs-list-num">220125</span>
                                    </td>
                                </tr>
                            </table>

                            <table id="tab3" className="tab-cont-table">
                                <tr className="tab">
                                    <td>
                                        <p id="title" className="tbs-title"><span>[공지]</span>변수 많은 올해,주식과 부동산을 한눈에</p>  
                                        <p>어썸인의 새 로고를 런칭하려고 합니다! 그동안 어썸 레터를 구독해주셨던 열북이들에게 도움을 구해요!!
                                        어떤 로고가 우리 어썸 경제 뉴스 레터와 잘 어울러지나요?! 댓글에 숫자로 의견 남겨주세요 ^^</p>
                                        <span className="tbs-list-num">220125</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <p id="title" className="tbs-title"><span>[공지]</span>변수 많은 올해,주식과 부동산을 한눈에</p>  
                                        <p>어썸인의 새 로고를 런칭하려고 합니다! 그동안 어썸 레터를 구독해주셨던 열북이들에게 도움을 구해요!!
                                        어떤 로고가 우리 어썸 경제 뉴스 레터와 잘 어울러지나요?! 댓글에 숫자로 의견 남겨주세요 ^^</p>
                                        <span className="tbs-list-num">220125</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <p id="title" className="tbs-title"><span>[공지]</span>변수 많은 올해,주식과 부동산을 한눈에</p>  
                                        <p>어썸인의 새 로고를 런칭하려고 합니다! 그동안 어썸 레터를 구독해주셨던 열북이들에게 도움을 구해요!!
                                        어떤 로고가 우리 어썸 경제 뉴스 레터와 잘 어울러지나요?! 댓글에 숫자로 의견 남겨주세요 ^^</p>
                                        <span className="tbs-list-num">220125</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <p id="title" className="tbs-title"><span>[공지]</span>변수 많은 올해,주식과 부동산을 한눈에</p>  
                                        <p>어썸인의 새 로고를 런칭하려고 합니다! 그동안 어썸 레터를 구독해주셨던 열북이들에게 도움을 구해요!!
                                        어떤 로고가 우리 어썸 경제 뉴스 레터와 잘 어울러지나요?! 댓글에 숫자로 의견 남겨주세요 ^^</p>
                                        <span className="tbs-list-num">220125</span>
                                    </td>
                                </tr>
                            </table>

                            <table id="tab4" className="tab-cont-table">
                                <tr className="tab">
                                    <td>
                                        <p id="title" className="tbs-title"><span>[설문]</span>어썸인 Brand new 로고를 골라주세요.</p>  
                                        <p>어썸인의 새 로고를 런칭하려고 합니다! 그동안 어썸 레터를 구독해주셨던 열북이들에게 도움을 구해요!!
                                        어떤 로고가 우리 어썸 경제 뉴스 레터와 잘 어울러지나요?! 댓글에 숫자로 의견 남겨주세요 ^^</p>
                                        <span className="tbs-list-num">220125</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <p id="title" className="tbs-title"><span>[설문]</span>어썸인 Brand new 로고를 골라주세요.</p> 
                                        <p>어썸인의 새 로고를 런칭하려고 합니다! 그동안 어썸 레터를 구독해주셨던 열북이들에게 도움을 구해요!!
                                        어떤 로고가 우리 어썸 경제 뉴스 레터와 잘 어울러지나요?! 댓글에 숫자로 의견 남겨주세요 ^^</p>
                                        <span className="tbs-list-num">220125</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <p id="title" className="tbs-title"><span>[설문]</span>어썸인 Brand new 로고를 골라주세요.</p> 
                                        <p>어썸인의 새 로고를 런칭하려고 합니다! 그동안 어썸 레터를 구독해주셨던 열북이들에게 도움을 구해요!!
                                        어떤 로고가 우리 어썸 경제 뉴스 레터와 잘 어울러지나요?! 댓글에 숫자로 의견 남겨주세요 ^^</p>
                                        <span className="tbs-list-num">220125</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <p id="title" className="tbs-title"><span>[설문]</span>어썸인 Brand new 로고를 골라주세요.</p> 
                                        <p>어썸인의 새 로고를 런칭하려고 합니다! 그동안 어썸 레터를 구독해주셨던 열북이들에게 도움을 구해요!!
                                        어떤 로고가 우리 어썸 경제 뉴스 레터와 잘 어울러지나요?! 댓글에 숫자로 의견 남겨주세요 ^^</p>
                                        <span className="tbs-list-num">220125</span>
                                    </td>
                                </tr>
                            </table>

                            <span className="tab-confirmed-wd" rel="tab5"></span>
                            <table id="tab5" className="tab-cont-table">
                                <tr className="tab">
                                    <td>
                                        <p id="title" className="tbs-title"><span>[후기]</span>좋은정보 많이 알려주셔서 너무 좋아요!</p>  
                                        <p>어썸인의 새 로고를 런칭하려고 합니다! 그동안 어썸 레터를 구독해주셨던 열북이들에게 도움을 구해요!!
                                        어떤 로고가 우리 어썸 경제 뉴스 레터와 잘 어울러지나요?! 댓글에 숫자로 의견 남겨주세요 ^^</p>
                                        <span className="tbs-list-num">220125</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <p id="title" className="tbs-title"><span>[후기]</span>이러다 부자되겠어요!~</p> 
                                        <p>어썸인의 새 로고를 런칭하려고 합니다! 그동안 어썸 레터를 구독해주셨던 열북이들에게 도움을 구해요!!
                                        어떤 로고가 우리 어썸 경제 뉴스 레터와 잘 어울러지나요?! 댓글에 숫자로 의견 남겨주세요 ^^</p>
                                        <span className="tbs-list-num">220125</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <p id="title" className="tbs-title"><span>[후기]</span>어려운 정보들이 머리에 쏙쏙들어와요!</p> 
                                        <p>어썸인의 새 로고를 런칭하려고 합니다! 그동안 어썸 레터를 구독해주셨던 열북이들에게 도움을 구해요!!
                                        어떤 로고가 우리 어썸 경제 뉴스 레터와 잘 어울러지나요?! 댓글에 숫자로 의견 남겨주세요 ^^</p>
                                        <span className="tbs-list-num">220125</span>
                                    </td>
                                </tr>
                            </table>
                        </div>
                        <div className="more">
                            <a href="!#">더보기<br />+</a>
                        </div>
                    </div>
                    <Footer />
                </div>
            </div>
        );
    }

export default App;