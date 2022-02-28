
import Preparing from './Preparing';
import { useState } from 'react';




// user info header
function Userinfo(props){

    const [tab, setTab] = useState(0);

    const UserInfonav = () => {
        if (tab === 0) { return (<Preparing />) }
            else if (tab === 1) {return (<Preparing />)}
            else if (tab === 2) {return (<Preparing />)}
            else if (tab === 3) {return (<Preparing />)}
            else if (tab === 4) {return (<Preparing />)}
            else if (tab === 5) {return (<Preparing />)}
            else if (tab === 6) {return (<Preparing />)}
            else if (tab === 7) {return (<Preparing />)}
            else if (tab === 8) {return (<Preparing />)}
            else return(<Preparing />)
    }

    return(
        <>
        <div className="header__navi__wrap">
            <nav className="sub-info-nav">
                 <ul>
                    <li onClick={() => {setTab(0)}}>나의 정보</li>
                    <li onClick={() => {setTab(1)}}>비밀번호변경</li>
                    <li onClick={() => {setTab(2)}}>나의 구독서비스</li>
                    <li onClick={() => {setTab(3)}}>나의 장바구니</li>
                    <li onClick={() => {setTab(4)}}>나의 결제</li>
                    <li onClick={() => {setTab(5)}}>나의 작성글</li>
                    <li onClick={() => {setTab(6)}}>나의 문의글</li>
                    <li onClick={() => {setTab(7)}}>나의 포인트</li>
                    <li onClick={() => {setTab(8)}}>설정</li>
                 </ul>
             </nav>
        </div>
        <UserInfonav />
        </>
    )
}
export default Userinfo;