import { Link } from 'react-router-dom';

function UserInfoPassword(){
    return(
        <>
            <section class="info__Wrap">
                <div class="title__sec__box">
                    <div class="notice-title-box">
                        <p>비밀번호 변경</p>
                        <Link to=""></Link>
                    </div>
                </div>

                <div class="user-info-inner">
                    <form action="Login-form-box">
                        <div class="user-join new-pw">
                            <i class="check-icon"></i>
                            <label for="password">현재비밀번호</label>
                            <input type="password" name="password" value="" placeholder="**************" />
                        </div>
                        <div class="user-join new-pw">
                            <i class="check-icon"></i>
                            <label for="password">새 비밀번호</label>
                            <input type="password" name="password" value="" placeholder="새 비밀번호 입력하세요" />
                        </div>
                        <div class="user-join new-pw-check">
                            <i class="check-icon"></i>
                            <label for="password-check">새 비밀번호 확인</label>
                            <input type="password" name="password" value="" placeholder="새 비밀번호 입력하세요" />
                        </div>
                        
                        <button type="button" class="upload-btn">비밀번호 변경하기</button>
                    </form>
                </div>
            </section>
        </>
    )
}
export default UserInfoPassword;