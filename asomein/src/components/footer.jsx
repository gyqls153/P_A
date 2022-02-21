
function Footer(props) {
    return(

        <footer>
            <hr /> 
            <div className="footer-bottom">
                <div className="foot-bottom-inner">
                    <div className="footer-bottom-menu">
                        <a href="#!">안전구매(에스크로)서비스 가맹점</a>
                        <a href="#!">이용약관</a>
                         <a href="#!">개인정보처리방침</a>
                    </div>
                    <ul className="footer-bottom-info">
                        <li>상호: (주)어썸인</li>  
                        <li>대표: 성선화</li>
                        <li>개인정보관리책임자: 성선화</li>
                        <li>전화: 01095243477</li>
                        <li>이메일: alloga@naver.com</li>
                    </ul>
                    <ul className="footer-bottom-adress">
                        <li>주소: 서울특별시 서초구 강남대로51길 10, 비1층 106-218호(서초동,강남효성해링턴타워)</li>
                        <li>사업자등록번호: 585-87-01608</li>
                    </ul>
                    <ul className="footer-bottom-sale">
                        <li>통신판매: 제2020-서울서초-3093호</li>
                        <li>호스팅제공자: (주)식스샵</li>
                    </ul>
                </div>
                <div className="footer-sns">
                    <a className="foot-insta" href="#!">{}</a>
                    <a className="foot-youtube" href="#!">{}</a>
                    <a className="foot-cafe" href="#!">{}</a>
                </div>
                <span className="footer-text-logo"></span>
            </div>
        </footer>
    )
}
export default Footer;