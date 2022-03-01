//import { Link, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';

function Header(propss)
{
    return(
        <header className="App-header">
            <div className="service-introduce">
                어썸인 서비스 소개
            </div>
            <nav className="header-menu-list">
                <Link to="/login" className="link">로그인</Link>
                <Link to="/join">회원가입</Link>
                <Link to="/">장바구니</Link>
            </nav>
        </header>
    )
}

export default Header;
