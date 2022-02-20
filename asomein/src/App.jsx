import React from 'react';
// import { useMediaQuery } from 'react-responsive';
import './App.css';
import './index.css';


function App() {
        return (
            <div className="App">
                <div className="app-inner-grid">
                    <header className="App-header">
                        <div className="service-introduce">
                            어썸인 서비스 소개
                        </div>
                        <ul className="header-menu-list">
                            <li><span></span><a href="#!">로그인</a></li>
                            <li><span></span><a href="#!">회원가입</a></li>
                            <li><span></span><a href="#!">장바구니</a></li>
                        </ul>
                    </header>

                    <div className="top-contents">
                        <div className="big-logo-img"></div>
                        <ul className="logo-text-style">
                            <li>성선희의 투자 인사이트 엿보기</li>
                            <li>투자하는 사람들을 위한 플랫폼</li>
                            <li>AWESOME LETTEER</li>
                        </ul>
                    </div> 
                    {/* swiper slide */}
                    <div className="swiper-empty-img" alt="대체이미지"></div>

                    <div className="container-list">
                        <div className="list-top-area">
                            <ul className="list-3d-menu">
                                <li>전체</li>
                                <li>Only부동산</li>  
                                <li>Only금융</li>
                            </ul>
                            <div className="search-inner-box">
                                <div className="bbs-list-search">
                                    <select id="" className="search-inner-selectBox">
                                        <option selected>전체보기</option>
                                        <option>Only부동산</option>
                                        <option>Only금융</option>
                                    </select>
                                    <input id="list-search" type="text" name="search-field" />
                                    <button type="submit" className="seachBtn"><i className="icons-search">검색잇콘</i></button>
                                </div>
                            </div>
                            
                            <div className="right-content-top-bbs">
                                <p>어썸레터 <br />구독하기</p>
                                <select id="" className="">
                                    <option selected>전체보기</option>
                                    <option>Only부동산</option>
                                    <option>Only금융</option>
                                </select>
                            </div>
                        </div>
                        <div className="table-contents">
                            <table>

                            </table>
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
                                    <p>머리에 쏙쏙 들어오는뉴스레터</p>
                                    <p>바이오섹터는 너무 생속한 분야라고 생각했는데 어썸레터로 또 하나 배우게됐어요`^^ 바이오에 대해서는 관심도 없었고 생각을 해본적도 없었는데, 아무것도 몰랐던 저도 이해할수 있을정도로 도움되는 정보였던것 같아요`^^</p>
                                </li>
                                <li>
                                    <p>머리에 쏙쏙 들어오는뉴스레터</p>
                                    <p>바이오섹터는 너무 생속한 분야라고 생각했는데 어썸레터로 또 하나 배우게됐어요`^^ 바이오에 대해서는 관심도 없었고 생각을 해본적도 없었는데, 아무것도 몰랐던 저도 이해할수 있을정도로 도움되는 정보였던것 같아요`^^</p>
                                </li>
                                <li>
                                    <p>머리에 쏙쏙 들어오는뉴스레터</p>
                                    <p>바이오섹터는 너무 생속한 분야라고 생각했는데 어썸레터로 또 하나 배우게됐어요`^^ 바이오에 대해서는 관심도 없었고 생각을 해본적도 없었는데, 아무것도 몰랐던 저도 이해할수 있을정도로 도움되는 정보였던것 같아요`^^</p>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="contents-community">
                        <nav className='community-menu-tab'>
                            <ul>
                                <li>공지사항/새소식</li>
                                <li>경제뉴스</li>
                                <li>어썸인 YOU 퀴즈</li>
                                <li>재테크수다방</li>
                                <li>구독후기</li>
                            </ul>
                        </nav>
                        <div className="community-table">
                            <table>
                                <td></td>
                            </table>
                        </div>
                    </div>

                    <footer> 
                        <div className="footer-bottom">
                            <div className="footer-bottom-info">
                                <ul className="footer-bottom-menu">
                                    <li><a href="#!">안전구매(에스크로)서비스 가맹점</a></li>
                                    <li><a href="#!">이용약관</a></li>
                                    <li><a href="#!">개인정보처리방침</a></li>
                                </ul>
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
                                <ul className="footer-bottom-">
                                    <li>통신판매: 제2020-서울서초-3093호</li>
                                    <li>호스팅제공자: (주)식스샵</li>
                                </ul>
                            </div>
                            <div className="footer-sns">
                                <a className="footer-bottom-sns" href="#!">
                                    <i className="icon-foot-sns-insta">인스타</i>
                                </a>
                                <a className="footer-bottom-sns" href="#!">
                                    <i className="icon-foot-sns-youtube">유튜브</i>
                                </a>
                                <a className="footer-bottom-sns" href="#!">
                                    <i className="icon-foot-sns-cafe">카-페</i>
                                </a>
                            </div>
                            <div className="footer-text-logo">Logoimg</div>
                        </div>
                    </footer>
                </div>
            {/* compiled */}
            </div>
        );
    }

export default App;