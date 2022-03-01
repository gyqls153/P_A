import { useState } from 'react';
import { Link } from 'react-router-dom';
import UserShoppingPayment from './UserShoppingPayment';
import '../assets/css/userShopping.css';

function Usershopping(){

    const [payment, setPayment] = useState(false);

    return(
        <>
        {
            payment === false ?  
            <section className="info__Wrap">
                <div className="title__sec__box">
                    <div className="notice-title-box">
                        <p>나의 장바구니</p>
                        <Link to=""></Link>
                    </div>
                </div>

                <div className="angled-service-btn-top">
                    <button type="button">전체 선택</button>
                    <button type="button">선택 삭제</button>     
                </div>

                <div className="tab_content">
                    <div className="notice-list-inner">
                        <table>
                            <thead>
                                <tr scope="col" className="support-tb-inner">
                                    <td><input type="checkbox" /></td>
                                    <td>상품명</td>
                                    <td>기간</td>
                                    <td>상품가격</td>
                                    <td>신청일</td>
                                    <td>삭제</td>
                                </tr>
                            </thead>
                            <tbody className="support-tbody-list">
                                <tr>
                                    <td className="check-list"><input type="checkbox" /></td>
                                    <td className="tbs-notice">
                                        <Link to="">최신구독30회 패키지</Link>
                                    </td>
                                    <td className="txt_Day">3개월</td>
                                    <td className="price-shop">79,000원</td>
                                    <td className="">2020-11-30</td>
                                    <td className="Delete"><i className="icon-Delet"></i></td>
                                </tr>
                                <tr>
                                    <td className="check-list"><input type="checkbox" /></td>
                                    <td className="tbs-notice"><Link to="">금융ONLY</Link></td>
                                    <td className="txt_Day">1년</td>
                                    <td className="price-shop">240,000원</td>
                                    <td className="apply-day">2020-10-30</td>
                                    <td className="Delete"><i className="icon-Delet"></i></td>
                                </tr>
                                <tr>
                                    <td className="check-list"><input type="checkbox" /></td>
                                    <td className="tbs-notice"><Link to=""></Link></td>
                                    <td className="txt_Day"></td>
                                    <td className="price-shop"></td>
                                    <td className="apply-day"></td>
                                    <td className="Delete"><i className="icon-Delet"></i></td>
                                </tr>
                                <tr>
                                    <td className="check-list"><input type="checkbox" /></td>
                                    <td className="tbs-notice"><Link to=""></Link></td>
                                    <td className="txt_Day"></td>
                                    <td className="price-shop"></td>
                                    <td className="apply-day"></td>
                                    <td className="Delete"><i className="icon-Delet"></i></td>
                                </tr>
                                <tr>
                                    <td className="check-list"><input type="checkbox" /></td>
                                    <td className="tbs-notice"><Link to=""></Link></td>
                                    <td className="txt_Day"></td>
                                    <td className="price-shop"></td>
                                    <td className="apply-day"></td>
                                    <td className="Delete"><i className="icon-Delet"></i></td>
                                </tr>
                            </tbody> 
                        </table>
                        <div className="tbs-total-num">
                            <p>선택 상품금액 <span>79,000원</span></p>
                            <p>총 결제금액 <span className="total-num-data">79,000원</span></p>
                        </div> 
                    </div>
                    <div className="angled-service-btn">
                        <button type="button">구독하러가기</button>
                        <button type="button" onClick={() => setPayment(true)}>선택상품결제</button>
                        <button type="button" onClick={() => setPayment(true)}>전체상품결제</button>    
                    </div>
                </div>
                
            </section> : <UserShoppingPayment/>
        }
       </>
    )
}
export default Usershopping;