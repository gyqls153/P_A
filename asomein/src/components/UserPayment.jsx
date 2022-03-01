
import { Link } from 'react-router-dom';
import PageNation from './Pagenation';

//나의 결제 내역(사용자)
function UserPayment(){
    return(
        <>
        <section className="notice__Wrap">
                <div className="title__sec__box">
                    <div className="notice-title-box">
                        <p>나의 결제내역</p>
                        <Link to=""></Link>
                    </div>
                </div>
                
                <div className="tab_content">
                    <div className="notice-list-inner">
                        <table>
                            <thead>
                                <tr scope="col" className="support-tb-inner">
                                    <td>번호</td>
                                    <td>결제일</td>
                                    <td>승인번호</td>
                                    <td>결제방식</td>
                                    <td>결제금액</td>
                                    <td>상태</td>
                                    <td>영수증</td>
                                </tr>
                            </thead>
                            <tbody className="support-tbody-list">
                                <tr>
                                    <td className="number-list">224</td>
                                    <td className="txt_Day">2021-12-06</td>
                                    <td className="tbs-notice">14837493</td>
                                    <td className="txt_Day">카드결제</td>
                                    <td className="total-pay">625,000원</td>
                                    <td className="paystate">입금대기</td>
                                    <td className="user-receipt"><span className="clear">내역삭제</span></td>
                                </tr>
                                <tr>
                                    <td className="number-list">282</td>
                                    <td className="txt_Day">2021-12-06</td>
                                    <td className="tbs-notice">14837493</td>
                                    <td className="txt_Day">무통장입금</td>
                                    <td className="total-pay">625,000원</td>
                                    <td className="paystate">입금대기</td>
                                    <td className="user-receipt">
                                        <span className="re-print">영수증출력</span>
                                        <span className="print">전표출력</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="number-list">223</td>
                                    <td className="txt_Day">2021-12-06</td>
                                    <td className="tbs-notice">14837493</td>
                                    <td className="txt_Day">계좌이체</td>
                                    <td className="total-pay">625,000원</td>
                                    <td className="paystate">입금대기</td>
                                    <td className="user-receipt"><span className="clear">내역삭제</span></td>
                                </tr>
                                <tr>
                                    <td className="number-list">222</td>
                                    <td className="txt_Day">2021-12-06</td>
                                    <td className="tbs-notice">14837493</td>
                                    <td className="txt_Day">모바일 신용카드</td>
                                    <td className="total-pay">625,000원</td>
                                    <td className="paystate">입금대기</td>
                                    <td className="user-receipt"><span className="clear">내역삭제</span></td>
                                </tr>
                                <tr>
                                    <td className="number-list">183</td>
                                    <td className="txt_Day"></td>
                                    <td className="tbs-notice"></td>
                                    <td className="txt_Day"></td>
                                    <td className="total-pay"></td>
                                    <td className="paystate"></td>
                                    <td className="user-receipt"></td>
                                </tr>
                            </tbody>  
                        </table>
                    </div>
                </div>
        
                <PageNation />
                <p className="wait-info-ex">대기 상태의 결제 내역 삭제는 입금예정일(혹은 결제일) 7일 이후 가능합니다.</p>
            </section>
        </>
    )
}
export default UserPayment;