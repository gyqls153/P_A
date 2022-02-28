import { Link } from 'react-router-dom';

 

function UserShoppingPayment(){
    return(
        <section className="info__Wrap">
            <div className="title__sec__box">
                <div className="notice-title-box">
                    <p>결제하기</p>
                    <Link to="/"></Link>
                </div>
            </div>

            <h3>주문상품</h3>
            
            <div className="tab_content">
                <div className="notice-list-inner">
                    <table>
                        <thead>
                            <tr scope="col" className="support-tb-inner">
                                <td>상품명</td>
                                <td>기간</td>
                                <td>상품가격</td>
                                <td>신청일</td>
                            </tr>
                        </thead>
                        <tbody className="support-tbody-list">
                            <tr>
                                <td className="tbs-notice">
                                    <Link to="/">최신구독30회 패키지</Link>
                                </td>
                                <td className="txt_Day">3개월</td>
                                <td className="price">79,000원</td>
                                <td className="">2020-11-30</td>
                                <td className=""><i className="icon-Delet"></i></td>
                            </tr>
                        </tbody> 
                    </table>
                    <div className="tbs-total-num">
                        <p>선택 상품금액 <span>79,000원</span></p>
                        <p>총 결제금액 <span className="total-num-data">79,000원</span></p>
                    </div> 
                </div>

                <div className="payment-box">
                    <h3>결제수단</h3>
                    <form className="payment-type">
                        <input type="radio" id="credit" name="card" value="" checked />
                        <label for="credit">신용카드</label>

                        <input type="radio" id="credit" name="card" value="" checked />
                        <label for="credit">무통장입금</label>
                        
                        <input type="radio" id="credit" name="card" value="" checked />
                        <label for="credit">실시간계좌이체</label>

                        <input type="radio" id="credit" name="card" value="" checked />
                        <label for="credit">휴대폰결제</label>
                    </form>
                </div>

                <div className="asomein-point">
                    <h3>어썸인 포인트</h3><span>(2,000P)</span>
                    <div className="point-input-box">
                        <input type="text" />
                        <label for="useinfo">1,000 포인트부터 사용 가능합니다.</label>
                    </div>
                </div>

                <div className="asomein-total-pay">
                    <h3>최종 결제정보</h3>
                    <div className="point-total-btn-box">
                        <p>사용포인트<span>-2,000</span>원</p>
                        <p>총 결제금액 <span className="total-num-data">79,000원</span></p>
                        <button type="button">결제하기</button>
                    </div>
                </div>

            </div>
        </section>
    )
}
export default UserShoppingPayment;