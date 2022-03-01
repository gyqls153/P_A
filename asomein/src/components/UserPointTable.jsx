import { Link } from 'react-router-dom';
import PageNation from "./Pagenation";

function UserPointTable(){
    return(
        <>
            <section className="notice__Wrap">
                <div className="title__sec__box">
                    <div className="notice-title-box">
                        <p>나의 포인트</p>
                        <Link to="/"></Link>
                    </div>
                </div>

                <div className="mypoint-show-box">
                    <p>총 적립 포인트(사용가능 포인트) <span>2,000</span> p</p>
                </div>

                <div className="tab_content">
                    <div className="notice-list-inner">
                        <table>
                            <thead>
                                <tr scope="col" className="support-tb-inner">
                                    <td>적용일자</td>
                                    <td>마일리지 적립 및 사용내역</td>
                                    <td>적립포인트 (+)</td>
                                    <td>사용포인트 (-)</td>
                                </tr>
                            </thead>
                            <tbody className="support-tbody-list">
                                <tr>
                                    <td className="txt_Day">2021-12-06</td>
                                    <td className="tbs-notice">최초 신규 회원가입</td>
                                    <td className="earn-plus">1,000</td>
                                    <td className="earn-using"></td>
                                </tr>
                                <tr>
                                    <td className="txt_Day">2021-12-06</td>
                                    <td className="tbs-notice">이용후기 작성확인</td>
                                    <td className="earn-plus">1,000</td>
                                    <td className="earn-using"></td>
                                </tr>
                                <tr>
                                    <td className="txt_Day">2021-12-06</td>
                                    <td className="tbs-notice">이용후기 작성확인</td>
                                    <td className="earn-plus">1,000</td>
                                    <td className="earn-using"></td>
                                </tr>
                                <tr>
                                    <td className="txt_Day">2021-12-06</td>
                                    <td className="tbs-notice">부동산ONLY 단일 결제 회수</td>
                                    <td className="earn-plus"></td>
                                    <td className="earn-using">-1,000</td>
                                </tr>
                            </tbody>  
                        </table>
                    </div>
                </div>
                <PageNation />
            </section>
        </>
    )
}
export default UserPointTable;