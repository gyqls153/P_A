import { Link } from 'react-router-dom';

// navigation - 서브페이지 및 해더바로 아래 메뉴 /
function Navimenu(){
    return(
        <div className="header__navi__wrap">
            <nav className="nav-bbs-tab tabs">
                 <ul>
                    <li><Link to="/">공지사항/새소식</Link></li>
                    <li><Link to="/">경제뉴스</Link></li>
                    <li><Link to="/">어썸인 YOU 퀴즈?</Link></li>
                    <li><Link to="/">스크랩 뉴스</Link></li>
                    <li><Link to="/">재테크수다방</Link></li>
                    <li><Link to="/">이용 후기</Link></li>
                    <li><Link to="/">어썸인에게 문의하기</Link></li>
                 </ul>
             </nav>
        </div>
    )
}
export default Navimenu;