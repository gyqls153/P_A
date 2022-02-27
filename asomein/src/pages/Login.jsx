
import React from 'react';
import '../index.css';
import '../App.css';
import PageHeader from '../Components/HeaderMenu';
import LoginSns from '../Components/LoginSns';
import Footer from '../Components/Footer';

function Login() {
    return(
        <div className="App">
            <div className="app-inner-grid">
                <PageHeader />
                <section className="login-section">
                    <p className="line-title">로그인</p>

                    <div className="login-form-sect">
                        <form action="Login-form-box">
                            <div className="user-join email">
                                <i className="check-icon"></i>
                                <label for="join-id">이메일</label>
                                <input type="text" name="login" onChange={''} value={''} placeholder="이메일입력" />
                            </div>
                            <div className="user-join pw">
                                <i className="check-icon"></i>
                                <label for="join-pw">비밀번호</label>
                                <input type="password" name="password" onChange={''} value={''} placeholder="비밀번호 입력" />
                            </div>
                        </form>

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