
import '../assets/css/Login.css';
import PageHeader from "./HeaderMenu";
import Footer from "./Footer";

/* 회원가입 완료할때 화면 */
function Joinclear(props)
{
    return(
        <div className="App">
            <div className="app-inner-grid"> 
                <PageHeader />
                <section className="join-clear">
                    <i className="show-icon"></i>
                    <div className="complete-join-site">   
                        <span className="user-name">홍길동</span><span>님</span>
                        <p>어썸인 경제뉴스레터 회원가입이 완료되었습니다.</p>
                    </div>

                    <button>로그인</button>
        
                </section>

                <Footer />
            </div>        
        </div>  
        
    )
}

export default Joinclear;