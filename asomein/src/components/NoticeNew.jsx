import { Link } from 'react-router-dom';

function Noticenew (){
    return(
        <section className="notice__Wrap">
                    
            <div className="title__sec__box">
                <div className="notice-title-box">
                    <p>공지사항/새소식</p>
                    <Link to="/"></Link>
                </div>

                <div className="notice__table__box">
                    <span>총 1,245건</span>
                    <div className="search-section">
                        <select className="search-inner-selectBox">
                            <option selected>회원명 / ID / 닉네임</option>
                            <option value="name">회원명</option>
                            <option value="id">ID</option>
                            <option value="nickname">닉네임</option>
                        </select>
                        <input id="list-search" type="text" name="search-field" />
                        <button type="submit" className="seachBtn"></button>
                    </div>
                </div>
            </div>
        
            <div className="image-notice-list">
                <div className="image-notice-list-inner">

                    <div className="image-list-contents line">
                        <div><img src="" alt="" /></div>
                        <div className="list__box">
                            <p>어썸인 Brand new 로고를 골라주세요.</p>
                            <div className="data-list">
                                <span className="day-num">2021.10.15</span>
                                <span className="use">관리자</span>
                                <span className="data-num">조회 158</span>
                            </div>
                            <p>
                                어썸인의 새 로고를 런칭하려고 합니다! 그동안 어썸 레터를 구독해주셨던 열북이들에게 도움을 구해요!!
                                어떤 로고가 우리 어썸 경제 뉴스 레터와 잘 어울러지나요?! 댓글에 숫자로 의견 남겨주세요 ^^   
                            </p> 
                        </div> 
                    </div>

                    <div className="image-list-contents">
                        <div><img src="" alt="" /></div>
                        <div className="list__box">
                            <p>어썸인 Brand new 로고를 골라주세요.</p>
                            <div className="data-list">
                                <span className="day-num">2021.10.15</span>
                                <span className="use">관리자</span>
                                <span className="data-num">조회 158</span>
                            </div>
                            <p>
                                어썸인의 새 로고를 런칭하려고 합니다! 그동안 어썸 레터를 구독해주셨던 열북이들에게 도움을 구해요!!
                                어떤 로고가 우리 어썸 경제 뉴스 레터와 잘 어울러지나요?! 댓글에 숫자로 의견 남겨주세요 ^^   
                            </p> 
                        </div> 
                    </div>

                    <div className="image-list-contents">
                        <div><img src="" alt="" /></div>
                        <div className="list__box">
                            <p>어썸인 Brand new 로고를 골라주세요.</p>
                            <div className="data-list">
                                <span className="day-num">2021.10.15</span>
                                <span className="use">관리자</span>
                                <span className="data-num">조회 158</span>
                            </div>
                            <p>
                                어썸인의 새 로고를 런칭하려고 합니다! 그동안 어썸 레터를 구독해주셨던 열북이들에게 도움을 구해요!!
                                어떤 로고가 우리 어썸 경제 뉴스 레터와 잘 어울러지나요?! 댓글에 숫자로 의견 남겨주세요 ^^   
                            </p> 
                        </div> 
                    </div>

                    <div className="more">
                        <a href="!#">더보기<br />+</a>
                    </div>

                </div>
            </div>
        </section>
    )
}
export default Noticenew;