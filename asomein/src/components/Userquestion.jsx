
import { Link } from 'react-router-dom';
import PageNation from './Pagenation';
import '../assets/css/userquestion.css';

function Userquestion(){
    return(
        <>
          <section class="notice__Wrap">
                <div class="title__sec__box">
                    <div class="notice-title-box">
                        <p>나의 문의</p>
                        <Link to=""></Link>
                    </div>
                </div>

                <div class="search-section-userInfo">
                    <select class="search-inner-userInfo">
                        <option selected>전체보기</option>
                        <option value="">구독서비스</option>
                        <option value="">조회수</option>
                        <option value="">작성일</option>
                    </select>
                </div>

                
                <div class="tab_content">
                    <div class="notice-list-inner">
                        <table>
                            <thead>
                                <tr scope="col" class="support-tb-inner">
                                    <td>번호</td>
                                    <td>구분</td>
                                    <td>제목</td>
                                    <td>첨부파일</td>
                                    <td>작성일</td>
                                    <td>답변여부</td>
                                </tr>
                            </thead>
                            <tbody class="support-tbody-list">
                                <tr>
                                    <td class="number-list">5</td>
                                    <td class="using-line">구독서비스</td>
                                    <td class="tbs-notice">이렇게 이용해 보세요</td>
                                    <td class="icon-attachment"><span></span></td>
                                    <td class="txt_Day">2021-11-30</td>
                                    <td class="answer-state"><span class="state-clear">답변완료</span></td>
                                </tr>
                                <tr>
                                    <td class="number-list">4</td>
                                    <td class="using-line">구독서비스 사용 후기</td>
                                    <td class="tbs-notice">이렇게 이용해 보세요.</td>
                                    <td class="icon-attachment"><span></span></td>
                                    <td class="txt_Day">2021-11-30</td>
                                    <td class="answer-state"><span class="state-wait">답변대기</span></td>
                                </tr>
                                <tr>
                                    <td class="number-list">3</td>
                                    <td class="using-line"></td>
                                    <td class="tbs-notice"></td>
                                    <td class="icon-attachment"></td>
                                    <td class="txt_Day"></td>
                                    <td class="answer-state"><span class="state"></span></td>
                                </tr>
                                <tr>
                                    <td class="number-list">2</td>
                                    <td class="using-line"></td>
                                    <td class="tbs-notice"></td>
                                    <td class="icon-attachment"></td>
                                    <td class="txt_Day"></td>
                                    <td class="answer-state"><span class="state"></span></td>
                                </tr>
                                <tr>
                                    <td class="number-list">1</td>
                                    <td class="using-line"></td>
                                    <td class="tbs-notice"></td>
                                    <td class="icon-attachment"></td>
                                    <td class="txt_Day"></td>
                                    <td class="answer-state"><span class="state"></span></td>
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
export default Userquestion;