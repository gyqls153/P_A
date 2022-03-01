import { Link } from "react-router-dom";
import '../assets/css/userInfo.css';
import '../assets/css/mySubscribe.css';

function UseInfo (){
    return(
        <>
            <section class="info__Wrap">
                <div class="title__sec__box">
                    <div class="notice-title-box">
                        <p>나의 정보</p>
                        <Link to=""></Link>
                    </div>
                </div>

                <div class="user-info-inner">
                    <form action="Login-form-box">
                        <div class="user-join new-pw-check">
                            <i class="check-icon"></i>
                            <label for="name">이름</label>
                            <input type="text" name="name" value="" placeholder="홍길동" />
                        </div>
                        <div class="user-join email">
                            <i class="check-icon"></i>
                            <label for="email">이메일</label>
                            <input type="text" name="join" value="" placeholder="abcd@naver.com" />
                        </div>
            
                        <button type="button" class="upload-btn">나의정보 변경하기</button>
                    </form>
                </div>
            </section>
        </>
    )
}
export default UseInfo;