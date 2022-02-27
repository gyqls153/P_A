
import { Link } from 'react-router-dom';
import Pagenation from './Pagenation';

function Userquestion(){
    return(
        <section className="notice__Wrap">
            <div className="title__sec__box">
                <div className="notice-title-box">
                    <p>나의 결제내역</p>
                    <Link to="/"></Link>
                </div>
            </div>

            <div className="search-section">
                <select className="search-inner-selectBox">
                    <option selected>전체보기</option>
                    <option value="">구독서비스</option>
                    <option value="">조회수</option>
                    <option value="">작성일</option>
                </select>
            </div>

            <div className="tab_content">
                <div className="notice-list-inner">
                    <table>
                        <thead>
                            <tr scope="col" className="support-tb-inner">
                                <td>번호</td>
                                <td>구분</td>
                                <td>제목</td>
                                <td>첨부파일</td>
                                <td>작성일</td>
                                <td>답변여부</td>
                            </tr>
                        </thead>
                        <tbody className="support-tbody-list">
                            <tr>
                                <td className="number-list">5</td>
                                <td className="using-line">구독서비스</td>
                                <td className="tbs-notice">이렇게 이용해 보세요. (12)</td>
                                <td className="icon-attachment"><Link to="/"></Link></td>
                                <td className="txt_Day">2021-11-30</td>
                                <td className="answer-state"><span className="state-clear">답변완료</span></td>
                            </tr>
                            <tr>
                                <td className="number-list">4</td>
                                <td className="using-line">구독서비스</td>
                                <td className="tbs-notice">이렇게 이용해 보세요. (12)</td>
                                <td className="icon-attachment"><Link to="/"></Link></td>
                                <td className="txt_Day">2021-11-30</td>
                                <td className="answer-state"><span className="state-wait">답변대기</span></td>
                            </tr>
                            <tr>
                                <td className="number-list">3</td>
                                <td className="using-line"></td>
                                <td className="tbs-notice"></td>
                                <td className="icon-attachment"><Link to="/"></Link></td>
                                <td className="txt_Day"></td>
                                <td className="answer-state"><span className="state"></span></td>
                            </tr>
                            <tr>
                                <td className="number-list">2</td>
                                <td className="using-line"></td>
                                <td className="tbs-notice"></td>
                                <td className="icon-attachment"><Link to="/"></Link></td>
                                <td className="txt_Day"></td>
                                <td className="answer-state"><span className="state"></span></td>
                            </tr>
                            <tr>
                                <td className="number-list">1</td>
                                <td className="using-line"></td>
                                <td className="tbs-notice"></td>
                                <td className="icon-attachment"><Link to="/"></Link></td>
                                <td className="txt_Day"></td>
                                <td className="answer-state"><span className="state"></span></td>
                            </tr>
                        </tbody>  
                    </table>
                </div>
            </div>
        
            <Pagenation />
        </section>
    )
}
export defalt Userquestion;