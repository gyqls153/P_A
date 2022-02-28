
// import {Link} from 'react-router-dom';

import PageHeader from "./HeaderMenu";
import LoginSns from "./LoginSns";
import Terms from "./Term";
import Joinasomeinform from "./JoinContents";
import Footer from "./Footer";
import '../assets/css/Login.css'


function Joinasomein(){
    return(
        <div className="App">
            <div className="app-inner-grid"> 
            <PageHeader />
                <p className="line-title">회원가입</p>
                <div className="login-form-sect">
                    <Joinasomeinform />
                </div>

                <Terms />
                <LoginSns />
                <Footer />
            </div>        
        </div>    
    )
}
export default Joinasomein;