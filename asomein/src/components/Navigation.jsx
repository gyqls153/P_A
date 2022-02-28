
import Noticenew from './NoticeNew';
import BoardInquiry from './BoardInquiry';
import Preparing from './Preparing';
import { useState } from 'react';

// navigation - 서브페이지 및 해더바로 아래 메뉴 /
function Navimenu(props){

    const [tab, setTab] = useState(0);

    const Middle = () => {
        if (tab === 0) { return (<Noticenew/>)}
        else if (tab === 1) { return (<Preparing />)}
        else if (tab === 2) { return (<Preparing />)}
        else if (tab === 3) { return (<Preparing />)}
        else if (tab === 4) { return (<Preparing />)}
        else if (tab === 5) { return (<Preparing />)}
        else if (tab === 6) { return (<BoardInquiry />)}
        else return (<BoardInquiry/>)
    }
    
    return(
        <>
        <div className="header__navi__wrap">
            <nav className="nav-bbs-tab tabs">
                 <ul>
                    <li onClick={() => {setTab(0)}}>공지사항</li>
                    <li onClick={() => {setTab(1)}}>경제뉴스</li>
                    <li onClick={() => {setTab(2)}}>어썸인 YOU 퀴즈?</li>
                    <li onClick={() => {setTab(3)}}>스크랩 뉴스</li>
                    <li onClick={() => {setTab(4)}}>재테크수다방</li>
                    <li onClick={() => {setTab(5)}}>이용 후기</li>
                    <li onClick={() => {setTab(6)}}>어썸인에게 문의하기</li>
                 </ul>
             </nav>
        </div>
        <Middle/>
        </>
    )
}
export default Navimenu;