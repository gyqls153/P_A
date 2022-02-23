import { useState } from "react";
import React from "react";



function Tabs() {

    const [toggleState, setToggleState] = useState(1);
    
    const toggleTab = (index) => {
        setToggleState(index);
      };

    return(
        <div className="contents-community">
             <div className="community-inner-title">
                 <div className="community-title">
                     <i className="icon-community"></i>
                     <p>COMMUNITY</p>
                 </div>
                 <nav className="community-bbs-tab tabs">
                     <ul>
                         <li className={toggleState === 1 ? "tabs active-tabs" : "tabs"} onClick={() => toggleState(1)}>공지사항/새소식</li>
                         <li className={toggleState === 2 ? "tabs active-tabs" : "tabs"} onClick={() => toggleState(2)}>경제뉴스</li>
                         <li className={toggleState === 3 ? "tabs active-tabs" : "tabs"} onClick={() => toggleState(3)}>어썸인 YOU 퀴즈</li>
                         <li className={toggleState === 4 ? "tabs active-tabs" : "tabs"} onClick={() => toggleState(4)}>재테크수다방</li>
                         <li className={toggleState === 5 ? "tabs active-tabs" : "tabs"} onClick={() => toggleState(5)}>구독후기</li>
                     </ul>
                 </nav>
             </div>
                        
            <div className="community-table">
                <table className={toggleState === 1 ? "tab-cont-table active-cnt": "tab-cont-table"}>
                    <tr className="tab">
                        <td>
                            <p id="title" className="tbs-title"><span>[설문]</span>어썸인 Brand new 로고를 골라주세요.</p>  
                            <p>어썸인의 새 로고를 런칭하려고 합니다! 그동안 어썸 레터를 구독해주셨던 열북이들에게 도움을 구해요!!
                            어떤 로고가 우리 어썸 경제 뉴스 레터와 잘 어울러지나요?! 댓글에 숫자로 의견 남겨주세요 ^^</p>
                            <span className="tbs-list-num">220125</span>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <p id="title" className="tbs-title"><span>[설문]</span>어썸인 Brand new 로고를 골라주세요.</p> 
                            <p>어썸인의 새 로고를 런칭하려고 합니다! 그동안 어썸 레터를 구독해주셨던 열북이들에게 도움을 구해요!!
                            어떤 로고가 우리 어썸 경제 뉴스 레터와 잘 어울러지나요?! 댓글에 숫자로 의견 남겨주세요 ^^</p>
                            <span className="tbs-list-num">220125</span>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <p id="title" className="tbs-title"><span>[설문]</span>어썸인 Brand new 로고를 골라주세요.</p> 
                            <p>어썸인의 새 로고를 런칭하려고 합니다! 그동안 어썸 레터를 구독해주셨던 열북이들에게 도움을 구해요!!
                            어떤 로고가 우리 어썸 경제 뉴스 레터와 잘 어울러지나요?! 댓글에 숫자로 의견 남겨주세요 ^^</p>
                            <span className="tbs-list-num">220125</span>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <p id="title" className="tbs-title"><span>[설문]</span>어썸인 Brand new 로고를 골라주세요.</p> 
                            <p>어썸인의 새 로고를 런칭하려고 합니다! 그동안 어썸 레터를 구독해주셨던 열북이들에게 도움을 구해요!!
                            어떤 로고가 우리 어썸 경제 뉴스 레터와 잘 어울러지나요?! 댓글에 숫자로 의견 남겨주세요 ^^</p>
                            <span className="tbs-list-num">220125</span>
                        </td>
                    </tr>
                </table>               

                <table className={toggleState === 2 ? "tab-cont-table active-cnt": "tab-cont-table"}>
                    <tr className="tab">
                        <td>
                            <p id="title" className="tbs-title"><span>[뉴스]</span>어썸인 최고의 경제도우미로 발돋음</p>  
                            <p>어썸인의 새 로고를 런칭하려고 합니다! 그동안 어썸 레터를 구독해주셨던 열북이들에게 도움을 구해요!!
                            어떤 로고가 우리 어썸 경제 뉴스 레터와 잘 어울러지나요?! 댓글에 숫자로 의견 남겨주세요 ^^</p>
                            <span className="tbs-list-num">220125</span>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <p id="title" className="tbs-title"><span>[뉴스]</span>어썸인 최고의 경제도우미로 발돋음</p> 
                            <p>어썸인의 새 로고를 런칭하려고 합니다! 그동안 어썸 레터를 구독해주셨던 열북이들에게 도움을 구해요!!
                            어떤 로고가 우리 어썸 경제 뉴스 레터와 잘 어울러지나요?! 댓글에 숫자로 의견 남겨주세요 ^^</p>
                            <span className="tbs-list-num">220125</span>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <p id="title" className="tbs-title"><span>[뉴스]</span>어썸인 최고의 경제도우미로 발돋음</p> 
                            <p>어썸인의 새 로고를 런칭하려고 합니다! 그동안 어썸 레터를 구독해주셨던 열북이들에게 도움을 구해요!!
                            어떤 로고가 우리 어썸 경제 뉴스 레터와 잘 어울러지나요?! 댓글에 숫자로 의견 남겨주세요 ^^</p>
                            <span className="tbs-list-num">220125</span>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <p id="title" className="tbs-title"><span>[뉴스]</span>어썸인 최고의 경제도우미로 발돋음</p> 
                            <p>어썸인의 새 로고를 런칭하려고 합니다! 그동안 어썸 레터를 구독해주셨던 열북이들에게 도움을 구해요!!
                            어떤 로고가 우리 어썸 경제 뉴스 레터와 잘 어울러지나요?! 댓글에 숫자로 의견 남겨주세요 ^^</p>
                            <span className="tbs-list-num">220125</span>
                        </td>
                    </tr>
                </table>

                <table className={toggleState === 3 ? "tab-cont-table active-cnt": "tab-cont-table"}>
                    <tr className="tab">
                        <td>
                            <p id="title" className="tbs-title"><span>[공지]</span>변수 많은 올해,주식과 부동산을 한눈에</p>  
                            <p>어썸인의 새 로고를 런칭하려고 합니다! 그동안 어썸 레터를 구독해주셨던 열북이들에게 도움을 구해요!!
                            어떤 로고가 우리 어썸 경제 뉴스 레터와 잘 어울러지나요?! 댓글에 숫자로 의견 남겨주세요 ^^</p>
                            <span className="tbs-list-num">220125</span>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <p id="title" className="tbs-title"><span>[공지]</span>변수 많은 올해,주식과 부동산을 한눈에</p>  
                            <p>어썸인의 새 로고를 런칭하려고 합니다! 그동안 어썸 레터를 구독해주셨던 열북이들에게 도움을 구해요!!
                            어떤 로고가 우리 어썸 경제 뉴스 레터와 잘 어울러지나요?! 댓글에 숫자로 의견 남겨주세요 ^^</p>
                            <span className="tbs-list-num">220125</span>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <p id="title" className="tbs-title"><span>[공지]</span>변수 많은 올해,주식과 부동산을 한눈에</p>  
                            <p>어썸인의 새 로고를 런칭하려고 합니다! 그동안 어썸 레터를 구독해주셨던 열북이들에게 도움을 구해요!!
                            어떤 로고가 우리 어썸 경제 뉴스 레터와 잘 어울러지나요?! 댓글에 숫자로 의견 남겨주세요 ^^</p>
                            <span className="tbs-list-num">220125</span>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <p id="title" className="tbs-title"><span>[공지]</span>변수 많은 올해,주식과 부동산을 한눈에</p>  
                            <p>어썸인의 새 로고를 런칭하려고 합니다! 그동안 어썸 레터를 구독해주셨던 열북이들에게 도움을 구해요!!
                            어떤 로고가 우리 어썸 경제 뉴스 레터와 잘 어울러지나요?! 댓글에 숫자로 의견 남겨주세요 ^^</p>
                            <span className="tbs-list-num">220125</span>
                        </td>
                    </tr>
                </table>

                <table className={toggleState === 4 ? "tab-cont-table active-cnt": "tab-cont-table"}>
                    <tr className="tab">
                        <td>
                            <p id="title" className="tbs-title"><span>[설문]</span>어썸인 Brand new 로고를 골라주세요.</p>  
                            <p>어썸인의 새 로고를 런칭하려고 합니다! 그동안 어썸 레터를 구독해주셨던 열북이들에게 도움을 구해요!!
                            어떤 로고가 우리 어썸 경제 뉴스 레터와 잘 어울러지나요?! 댓글에 숫자로 의견 남겨주세요 ^^</p>
                            <span className="tbs-list-num">220125</span>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <p id="title" className="tbs-title"><span>[설문]</span>어썸인 Brand new 로고를 골라주세요.</p> 
                            <p>어썸인의 새 로고를 런칭하려고 합니다! 그동안 어썸 레터를 구독해주셨던 열북이들에게 도움을 구해요!!
                            어떤 로고가 우리 어썸 경제 뉴스 레터와 잘 어울러지나요?! 댓글에 숫자로 의견 남겨주세요 ^^</p>
                            <span className="tbs-list-num">220125</span>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <p id="title" className="tbs-title"><span>[설문]</span>어썸인 Brand new 로고를 골라주세요.</p> 
                            <p>어썸인의 새 로고를 런칭하려고 합니다! 그동안 어썸 레터를 구독해주셨던 열북이들에게 도움을 구해요!!
                            어떤 로고가 우리 어썸 경제 뉴스 레터와 잘 어울러지나요?! 댓글에 숫자로 의견 남겨주세요 ^^</p>
                            <span className="tbs-list-num">220125</span>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <p id="title" className="tbs-title"><span>[설문]</span>어썸인 Brand new 로고를 골라주세요.</p> 
                            <p>어썸인의 새 로고를 런칭하려고 합니다! 그동안 어썸 레터를 구독해주셨던 열북이들에게 도움을 구해요!!
                            어떤 로고가 우리 어썸 경제 뉴스 레터와 잘 어울러지나요?! 댓글에 숫자로 의견 남겨주세요 ^^</p>
                            <span className="tbs-list-num">220125</span>
                        </td>
                    </tr>
                </table>

                <table className={toggleState === 5 ? "tab-cont-table active-cnt": "tab-cont-table"}>
                    <tr className="tab">
                        <td>
                            <p id="title" className="tbs-title"><span>[후기]</span>좋은정보 많이 알려주셔서 너무 좋아요!</p>  
                            <p>어썸인의 새 로고를 런칭하려고 합니다! 그동안 어썸 레터를 구독해주셨던 열북이들에게 도움을 구해요!!
                            어떤 로고가 우리 어썸 경제 뉴스 레터와 잘 어울러지나요?! 댓글에 숫자로 의견 남겨주세요 ^^</p>
                            <span className="tbs-list-num">220125</span>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <p id="title" className="tbs-title"><span>[후기]</span>이러다 부자되겠어요!~</p> 
                            <p>어썸인의 새 로고를 런칭하려고 합니다! 그동안 어썸 레터를 구독해주셨던 열북이들에게 도움을 구해요!!
                            어떤 로고가 우리 어썸 경제 뉴스 레터와 잘 어울러지나요?! 댓글에 숫자로 의견 남겨주세요 ^^</p>
                            <span className="tbs-list-num">220125</span>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <p id="title" className="tbs-title"><span>[후기]</span>어려운 정보들이 머리에 쏙쏙들어와요!</p> 
                            <p>어썸인의 새 로고를 런칭하려고 합니다! 그동안 어썸 레터를 구독해주셨던 열북이들에게 도움을 구해요!!
                            어떤 로고가 우리 어썸 경제 뉴스 레터와 잘 어울러지나요?! 댓글에 숫자로 의견 남겨주세요 ^^</p>
                            <span className="tbs-list-num">220125</span>
                        </td>
                    </tr>
                </table>
            </div>

        </div>
    )
}

export default Tabs;