import React, { Component } from 'react';
import { Swiper, SwiperSlide } from 'Swiper/react';
import './App.css';
import './index.css';
import 'swiper/css/pagination';
import './assets/css/swiper.css';


class App extends Component {
    render(){
        return (
            <div className="App">
                <header className="App-header">
                    <p>
                    Edit <code>src/App.js</code> and save to reload.
                    </p>
                    <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">Learn React</a>
                </header>

                <div className="Top-contents">
                    <ul className="mainLogo">
                        <li>main-Logo</li>
                        <li>성선희의 투자 인사이트 엿보기</li>
                        <li>투자하는 사람들을 위한 플랫폼</li>
                        <li>AWESOME LETTEER</li>
                    </ul>
                </div>
                {/* swiper slide */}

                <div className="container-list">
                    <div className="top-area">
                        <ul className="list-3d-menu">
                            <li>전체</li>
                            <li>Only부동산</li>
                            <li>Only금융</li>
                        </ul>
                        <div className="bbs-list-search">
                            <input id="list-search" type="search" name="list-search-field" />
                        </div>
                        <p>어썸레터 <br />구독하기</p>
                        <select id="" className="">
                            <option selected>전체보기</option>
                            <option>Only부동산</option>
                            <option>Only금융</option>
                        </select>
                    </div>
                    <div className="list-contents">

                    </div>
                </div>
            </div>
        );
    }
}

export default App;