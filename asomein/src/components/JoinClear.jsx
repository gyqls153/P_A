

/* 회원가입 완료할때 화면 */
function LoginSns(props)
{
    return(
        <section className="join-clear">
            <div className="complete-join-site">
                <i className="show-icon"></i>
                <span className="user-name">홍길동</span><span>님</span>
                <p>어썸인 경제뉴스레터 회원가입이 완료되었습니다.</p>
            </div>

            <button>로그인</button>
        
        </section>
    )
}

export default LoginSns;