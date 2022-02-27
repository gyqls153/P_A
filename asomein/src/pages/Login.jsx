
import React from 'react';
import '../index.css';
import '../App.css';
import PageHeader from '../Components/HeaderMenu';
import Loginform from '../Components/LoginForm';
import LoginSns from '../Components/LoginSns';
import Footer from '../Components/Footer';
// import '../Login.css';

function Login() {
    return(
        <div className="App">
            <div className="app-inner-grid">                  
                <PageHeader />
                <section className="login-section">
                        <p className="line-title">로그인</p>

                        <div className="login-form-sect">
                            <Loginform />

                            <div className="find-in-pw"><a href="!#">비밀번호를 잃어버리셨나요?</a> </div>

                            <div className="show-page-line-styled">
                                <p>회원가입</p>
                                <p>로그인</p>
                            </div>
                            <p>소셜아이디로 간단하게 로그인하세요</p>

                        <LoginSns />

                        </div> {/* login-form-sect */}
                </section>
                <Footer />
            </div>
        </div>

    )
}

export default Login;