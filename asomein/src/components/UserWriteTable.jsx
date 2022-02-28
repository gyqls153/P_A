
import { Link } from 'react-router-dom';
import PageNation from './Pagenation';

function UserWriteTable(){
    return(
        <>
            <section class="notice__Wrap">
                <div class="title__sec__box">
                    <div class="notice-title-box">
                        <p>나의 작성글</p>
                        <Link to="" />
                    </div>
                </div>

                <div class="search-section">
                    <select class="search-inner-selectBox">
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
                                    <td>조회수</td>
                                </tr>
                            </thead>
                            <tbody class="support-tbody-list">
                                <tr>
                                    <td class="number-list">5</td>
                                    <td class="using-line">구독서비스</td>
                                    <td class="tbs-notice">이렇게 이용해 보세요. (12)</td>
                                    <td class="icon-attachment"><Link to="/" /></td>
                                    <td class="txt_Day">2021-11-30</td>
                                    <td class="view-num">234</td>
                                </tr>
                                <tr>
                                    <td class="number-list">4</td>
                                    <td class="using-line">구독서비스 사용 후기</td>
                                    <td class="tbs-notice">정말 잘 활용되었습니다. (23)</td>
                                    <td class="icon-attachment"><Link to="/" /></td>
                                    <td class="txt_Day">2021-11-30</td>
                                    <td class="view-num">155</td>
                                </tr>
                                <tr>
                                    <td class="number-list">3</td>
                                    <td class="using-line"></td>
                                    <td class="tbs-notice"></td>
                                    <td class="icon-attachment"></td>
                                    <td class="txt_Day"></td>
                                    <td class="view-num"></td>
                                </tr>
                                <tr>
                                    <td class="number-list">2</td>
                                    <td class="using-line"></td>
                                    <td class="tbs-notice"></td>
                                    <td class="icon-attachment"></td>
                                    <td class="txt_Day"></td>
                                    <td class="view-num"></td>
                                </tr>
                                <tr>
                                    <td class="number-list">1</td>
                                    <td class="using-line"></td>
                                    <td class="tbs-notice"></td>
                                    <td class="icon-attachment"></td>
                                    <td class="txt_Day"></td>
                                    <td class="view-num"></td>
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
export default UserWriteTable;