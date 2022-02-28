
import { Link } from 'react-router-dom';
import PageNation from "./Pagenation";
import '../assets/css/boardaply.css';


function BoardInquiry(){
    return(
        <section className="notice__Wrap">
            <div className="title__sec__box">
                <div className="notice-title-box">
                    <p>어썸인에게 문의하기</p>
                    <Link to="/"></Link>
                </div>
            </div>
            <div className="notice__table__box">
                <p>총<span>2건</span>의 상담내역이 있습니다</p>
                <div className="search-section">
                    <select className="search-inner-selectBox">
                        <option selected>제목 + 본문</option>
                        <option value="title">제목</option>
                        <option value="main-text">본문</option>
                        <option value="both">제목 + 본문</option>
                    </select>
                    <input id="list-search" type="text" name="search-field" />
                    <button type="submit" className="seachBtn"></button>
                </div>
            </div>
            
            <div className="tab_content">
                <div className="notice-list-inner">
                    <table>
                        <thead>
                            <tr scope="col" className="support-tb-inner">
                                <td>번호</td>
                                <td>내용</td>
                                <td>작성일</td>
                                <td>처리현황</td>
                            </tr>
                        </thead>
                        <tbody className="support-tbody-list">
                            <tr>
                                <td className="number-list">4</td>
                                <td className="tbs-notice">
                                    <i className="icon-lock"></i>
                                    <Link to="/">연장구독에 관한 질문 드립니다.</Link>
                                </td>
                                <td className="txt_Day">2021-12-06</td>
                                <td className="last"><span className="clear">답변완료</span></td>
                            </tr>
                            <tr>
                                <td className="number-list"></td>
                                <td className="tbs-notice">
                                    <i className="icon-answer"></i>
                                    <Link to="/"><span>[답변]</span> 연장구독에 관한 답변 드립니다.</Link>
                                </td>
                                <td className="txt_Day">2021-12-06</td>
                                <td className="last"></td>
                            </tr>
                            <tr>
                                <td className="number-list">3</td>
                                <td className="tbs-notice">
                                    <i className="icon-lock"></i>
                                    <Link to="/">구독에 관한 질문 드립니다.</Link>
                                </td>
                                <td className="txt_Day">2021-12-06</td>
                                <td className="last">답변대기</td>
                            </tr>
                            <tr>
                                <td className="number-list">2</td>
                                <td className="tbs-notice">
                                    <i className="icon-lock"></i>
                                    <Link to="/">어썸인 구독 관련하여 문의사항이 있습니다.</Link>
                                </td>
                                <td className="txt_Day">2021-12-06</td>
                                <td className="last"><span className="clear">답변완료</span></td>
                            </tr>
                            <tr>
                                <td className="number-list"></td>
                                <td className="tbs-notice">
                                    <i className="icon-answer"></i>
                                    <Link to="/"><span>[답변]</span> 답변 드립니다.</Link>
                                </td>
                                <td className="txt_Day">2021-12-06</td>
                                <td className="last"></td>
                            </tr>
                            <tr>
                                <td className="number-list">1</td>
                                <td className="tbs-notice">
                                    <i className="icon-lock"></i>
                                    <Link to="/">구독에 관한 질문 드립니다.</Link>
                                </td>
                                <td className="txt_Day">2021-12-06</td>
                                <td className="last">답변대기</td>
                            </tr>
                        </tbody>  
                    </table>
                </div>
            </div>

            <PageNation />
            <button type="submit" className="write-btn">글쓰기</button>
        </section>
    )
}
export default BoardInquiry;