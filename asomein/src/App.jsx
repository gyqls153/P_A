import React from 'react';
import './App.css';
import './index.css';
import './services/Swiper.js';


function App() {
        return (
            <div className="App">
                <div className="app-inner-grid">
                    <header className="App-header">
                        <div className="service-introduce">
                            어썸인 서비스 소개
                        </div>
                        <nav className="header-menu-list">
                            <a href="#!">로그인</a>
                            <a href="#!">회원가입</a>
                            <a href="#!">장바구니</a>
                        </nav>
                    </header>

                    <div className="top-contents">
                        <div className="big-logo-img"></div>
                        <ul className="logo-text-style">
                            <li>성선희의 투자 인사이트 엿보기</li>
                            <li>투자하는 사람들을 위한 플랫폼</li>
                            <li>AWESOME LETTEER</li>
                        </ul>
                    </div> 
                    {/* Swiper-slide */}
                    <div className="swiper-empty-img" alt="대체이미지">
                        <div class="swiper">
                            <div class="swiper-wrapper">
                                <div class="swiper-slide">Slide 1</div>
                                <div class="swiper-slide">Slide 2</div>
                                <div class="swiper-slide">Slide 3</div>
                            </div>
                            <div class="swiper-pagination"></div>
                        </div>
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
                        <div className="community-table">
                            <table>
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
                        </div>
                        
                        <div className="more">
                            <a href="!#">더보기<br />+</a>
                        </div>
                    </div>

                    <footer>
                        <hr /> 
                        <div className="footer-bottom">
                            <div className="foot-bottom-inner">
                                <div className="footer-bottom-menu">
                                    <a href="#!">안전구매(에스크로)서비스 가맹점</a>
                                    <a href="#!">이용약관</a>
                                    <a href="#!">개인정보처리방침</a>
                                </div>
                                <ul className="footer-bottom-info">
                                    <li>상호: (주)어썸인</li>  
                                    <li>대표: 성선화</li>
                                    <li>개인정보관리책임자: 성선화</li>
                                    <li>전화: 01095243477</li>
                                    <li>이메일: alloga@naver.com</li>
                                </ul>
                                <ul className="footer-bottom-adress">
                                    <li>주소: 서울특별시 서초구 강남대로51길 10, 비1층 106-218호(서초동,강남효성해링턴타워)</li>
                                    <li>사업자등록번호: 585-87-01608</li>
                                </ul>
                                <ul className="footer-bottom-sale">
                                    <li>통신판매: 제2020-서울서초-3093호</li>
                                    <li>호스팅제공자: (주)식스샵</li>
                                </ul>
                            </div>
                            <div className="footer-sns">
                                <a className="foot-insta" href="#!"></a>
                                <a className="foot-youtube" href="#!"></a>
                                <a className="foot-cafe" href="#!"></a>
                            </div>
                            <span className="footer-text-logo"></span>
                        </div>
                    </footer>
                </div>
            </div>
        );
    }

export default App;