

function Joinasomeinform(){
    return(
        <>
            <form action="Login-form-box">
                <div className="user-join email">
                    <i className="check-icon"></i>
                    <label for="email">이메일</label>
                    <input type="text" name="join" value="" placeholder="이메일입력" />
                </div>
                <div className="user-join new-pw">
                    <i className="check-icon"></i>
                    <label for="password">비밀번호</label>
                    <input type="password" name="password" value="" placeholder="비밀번호 입력" />
                </div>
                <div className="user-join new-pw-check">
                    <i className="check-icon"></i>
                    <label for="password-check">비밀번호 확인</label>
                    <input type="password" name="password" value="" placeholder="비밀번호 입력" />
                </div>
                <div className="user-join new-pw-check">
                    <i className="check-icon"></i>
                    <label for="name">이름</label>
                    <input type="text" name="name" value="" placeholder="이름 입력" />
                </div>
                <div className="user-join cellphone-number">
                    <label>휴대전화</label>
                    <input type="text" name="phone-number" value={""} />
                </div>

                <button type="submit">인증번호받기</button>
            </form>
        </>
    )
}
export default Joinasomeinform;