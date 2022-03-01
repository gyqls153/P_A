import { Link } from 'react-router-dom';

function LoginSns(props)
{
    return(
        <div className="login-sns">
            <Link to="/" className="naver_sns_btn link_naver">
                <div className="thumb_sns"></div>
                <span>네이버로 로그인</span>
            </Link>
            <Link to="/" className="kakao_sns_btn link_kakao">
                <div className="thumb_sns"></div>
                <span>카카오로 로그인</span>
            </Link>
        </div>
    )
}

export default LoginSns;