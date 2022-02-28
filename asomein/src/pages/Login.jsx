
import React from 'react';
import { Link } from 'react-router-dom';
import '../index.css';
import '../assets/css/reset.css';
import '../App.css';
import '../assets/css/Login.css';
import PageHeader from '../Components/HeaderMenu';
import Loginform from '../Components/LoginForm';
import Joinasomein from '../Components/JoinAsomein';
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
                            <Loginform />

                            <div className="find-in-pw"><Link to="/" >비밀번호를 잃어버리셨나요?</Link> </div>

                            <div className="show-page-line-styled">
                                <p><Link to="/join" element={<Joinasomein />} >회원가입</Link></p>
                                <p><Link to="/Login"element={<Login />} >로그인</Link></p>
                            </div>
                            
                            <p>소셜아이디로 간단하게 로그인하세요</p>

                            <LoginSns />

                        </div>
                </section>
                <Footer />
            </div>
        </div>

    )
}

export default Login;