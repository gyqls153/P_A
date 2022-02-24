import { Router } from "react-router-dom";
import Login from '../pages/Login';

function Header(propss)
{
    return(
        <header className="App-header">
            <div className="service-introduce">
                어썸인 서비스 소개
            </div>
            <nav className="header-menu-list">
                <Router path="/" element={<Login />}>로그인</Router>
                <Router path="/">회원가입</Router>
                <Router path="/">장바구니</Router>
            </nav>
        </header>
    )
}

export default Header;
