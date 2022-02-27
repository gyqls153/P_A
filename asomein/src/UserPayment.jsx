

function Userpayment(){ 
    return(
    <section class="notice__Wrap">
        <div class="title__sec__box">
            <div class="notice-title-box">
                <p>나의 결제내역</p>
                <a href="#"></a>
            </div>
        </div>
        <div class="tab_content">
            <div class="notice-list-inner">
                <table>
                    <thead>
                        <tr scope="col" class="support-tb-inner">
                            <td>번호</td>
                            <td>결제일</td>
                            <td>승인번호</td>
                            <td>결제방식</td>
                            <td>결제금액</td>
                            <td>상태</td>
                            <td>영수증</td>
                        </tr>
                    </thead>
                    <tbody class="support-tbody-list">
                        <tr>
                            <td class="number-list">224</td>
                            <td class="txt_Day">2021-12-06</td>
                            <td class="tbs-notice">14837493</td>
                            <td class="txt_Day">카드결제</td>
                            <td class="total-pay">625,000원</td>
                            <td class="paystate">입금대기</td>
                            <td class="last"><span class="clear">내역삭제</span></td>
                        </tr>
                        <tr>
                            <td class="number-list">282</td>
                            <td class="txt_Day">2021-12-06</td>
                            <td class="tbs-notice">14837493</td>
                            <td class="txt_Day">무통장입금</td>
                            <td class="total-pay">625,000원</td>
                            <td class="paystate">입금대기</td>
                            <td class="last">
                                <span class="clear">영수증출력</span>
                                <span class="clear">전표출력</span>
                            </td>
                        </tr>
                        <tr>
                            <td class="number-list">223</td>
                            <td class="txt_Day">2021-12-06</td>
                            <td class="tbs-notice">14837493</td>
                            <td class="txt_Day">계좌이체</td>
                            <td class="total-pay">625,000원</td>
                            <td class="paystate">입금대기</td>
                            <td class="last"><span class="clear">내역삭제</span></td>
                        </tr>
                        <tr>
                            <td class="number-list">222</td>
                            <td class="txt_Day">2021-12-06</td>
                            <td class="tbs-notice">14837493</td>
                            <td class="txt_Day">모바일 신용카드</td>
                            <td class="total-pay">625,000원</td>
                            <td class="paystate">입금대기</td>
                            <td class="last"><span class="clear">내역삭제</span></td>
                        </tr>
                        <tr>
                            <td class="number-list">183</td>
                            <td class="txt_Day"></td>
                            <td class="tbs-notice"></td>
                            <td class="txt_Day"></td>
                            <td class="total-pay"></td>
                            <td class="paystate"></td>
                            <td class="last"></td>
                        </tr>
                    </tbody>  
                </table>
            </div>
        </div>
        
        <div class="pagination">
            <div class="pager-inner">
                <div class="move-before">
                    <a href="" class="first"></a>
                    <a href="" class="before"></a>
                </div>
                <ul class="number-pages">
                    <li class="num">1</li>
                    <li class="num">2</li>
                    <li class="num">3</li>
                    <li class="num">4</li>
                    <li class="num">5</li>
                    <li class="num">6</li>
                    <li class="num">7</li>
                </ul>
                <div class="move-after">
                    <a href="" class="next"></a>
                    <a href="" class="end"></a>
                </div>
            </div>
        </div>
        <p class="wait-info-ex">대기 상태의 결제 내역 삭제는 입금예정일(혹은 결제일) 7일 이후 가능합니다.</p>
    </section>
    )
}
export default Userpayment;