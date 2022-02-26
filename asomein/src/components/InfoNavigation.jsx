import { Link } from 'react-router-dom';

// user info header
function Userinfo(){
    return(
        <div className="header__navi__wrap">
            <nav className="sub-info-nav">
                 <ul>
                    <li><Link to="/">나의 정보</Link></li>
                    <li><Link to="/">비밀번호변경</Link></li>
                    <li><Link to="/">나의 구독서비스</Link></li>
                    <li><Link to="/">나의 장바구니</Link></li>
                    <li><Link to="/">나의 결제</Link></li>
                    <li><Link to="/">나의 작성글</Link></li>
                    <li><Link to="/">나의 문의글</Link></li>
                    <li><Link to="/">나의 포인트</Link></li>
                    <li><Link to="/">설정</Link></li>
                 </ul>
             </nav>
        </div>
    )
}
export default Userinfo;