
import { Link } from 'react-router-dom';
import IntroAsomein from './IntroAsomein';

function PageHeader(propss)
{
    return(
        <header className="App-header">
            <span className="pages-header-logo"></span>
            <div class="header-middle-menu-section">
                <Link to="/">HOME</Link>
                <Link to="/">커뮤니티</Link>
                <Link to="/introAsomein" element={<IntroAsomein />}>어썸인 서비스 소개</Link>
            </div>
            <nav className="header-menu-list">
                <Link to="/Login">로그인</Link>
                <Link to="/join">회원가입</Link>
                <Link to="/">장바구니</Link>
            </nav>
        </header>
    )
}

export default PageHeader;