import { Link } from 'react-router-dom';

function Userinfosubscribe(){
    return(
        <section className="info__Wrap">
            <div className="title__sec__box">
                <div className="notice-title-box">
                    <p>나의 구독서비스</p>
                    <Link to="/"></Link>
                </div>
            </div>

            <div className="user-info-subscribe">
                <div className="subscribe-info-inner">
                    <div className="info-left">
                        <p>D-29</p>
                        <p>[부동산ONLY]&nbsp;3개월</p>
                    </div>
                    <div className="info-right">
                        <p className="day-subscribe">구독 서비스 기간 :
                            <span>2022-01-23 ~ 2022-08-23</span>
                        </p>
                        <div className="subscribe-service-btn">
                            <button type="button">구독연장</button>
                            <button type="button">구독취소</button>
                            <button type="button">결제내역</button>    
                        </div>
                    </div>
                </div>
                <div className="subscribe-info-inner">
                    <div className="info-left">
                        <p className="n-day">D-7</p>
                        <p>[금융ONLY]&nbsp;3개월</p>
                    </div>
                    <div className="info-right">
                        <p className="day-subscribe">구독 서비스 기간 :
                            <span>2022-01-15 ~ 2022-05-23</span>
                        </p>
                        <div className="subscribe-service-btn">
                            <button type="button">구독연장</button>
                            <button type="button">구독취소</button>
                            <button type="button">결제내역</button>    
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Userinfosubscribe;