

function Loginform(){
    return(
        <>
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
        </>
    )
}
export default Loginform;