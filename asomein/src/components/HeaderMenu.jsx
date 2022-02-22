import styled from 'styled-components';

const BodyColor = styled.div` // eslint-disable-line no-unused-vars
    background: #FFF4F0;
`

function PageHeader(propss)
{
    return(
        <header className="App-header">
            <span className="pages-header-logo"></span>
            <div class="header-middle-menu-section">
                <a href="#!">HOME</a>
                <a href="#!">커뮤니티</a>
                <a href="#!">어썸인 서비스 소개</a>
            </div>
            <nav className="header-menu-list">
                <a href="#!">로그인</a>
                <a href="#!">회원가입</a>
                <a href="#!">장바구니</a>
            </nav>
        </header>
    )
}

export default PageHeader;