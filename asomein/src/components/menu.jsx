import { Link } from 'react-router-dom';

/* 탭모양의 상단페이지 네비메뉴 */
function Submenu(propss)
{
    return(
        <nav className="header-sub-navigation">
            <ul>
                <li><Link to="/">공지사항/새소식</Link></li>
                <li><Link to="/">경제뉴스</Link></li>
                <li><Link to="/">어썸인 YOU 퀴즈</Link></li>
                <li><Link to="/">재테크수다방</Link></li>
                <li><Link to="/">구독후기</Link></li>
            </ul>
        </nav>
    )
}

export default Submenu;