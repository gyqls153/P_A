

/*마케팅 약관, 필수약관 동의 CheckBox*/
function Terms()
{
    return(
        
        <div className="terms">
            <div className="terms__wrap">

                <div className="terms__subject_select">
                    <div className="termd__title">
                        <p>마케팅 정보 수신(선택)</p>
                    </div>
                    <div className="terms__checkbox">
                        <input type="checkbox" id="check-btn" className="input-check" />
                        <label for="terms-check all-select">전체 동의</label>
                    </div>
                    <div className="terms__checkbox">
                        <input type="checkbox" id="check-btn" className="input-check" />
                        <label for="terms-check">이메일</label>
                    </div>
                    <div className="terms__checkbox">
                        <input type="checkbox" id="check-btn" className="input-check" />
                        <label for="terms-check">휴대폰 문자메세지</label>
                    </div>
                </div>

                <div className="terms__subject_Required">
                    <div className="termd__title">
                        <p>약관 동의(필수)</p>
                    </div>
                    <div className="terms__checkbox">
                        <input type="checkbox" id="check-btn" className="input-check" />
                        <label for="terms-check all-select">전체 동의</label>
                    </div>
                    <div className="terms__checkbox">
                        <input type="checkbox" id="check-btn" className="input-check" />
                        <label for="terms-check">이용약관에 동의합니다.</label>
                        <a href="!#">내용보기</a>
                    </div>
                    <div className="terms__checkbox">
                        <input type="checkbox" id="check-btn" className="input-check" />
                        <label for="terms-check">개인정보수집 및 이용에 동의합니다.</label>
                        <a href="!#">내용보기</a>
                    </div>
                    <div className="terms__checkbox">
                        <input type="checkbox"id="check-btn" className="input-check" />
                        <label for="terms-check">만 14세 이상입니다. (필수)</label>
                    </div>
                </div>
                
                <button type="submit" className="upload-btn">이메일로 회원가입하기</button>
            </div>
        </div>

    )
}

export default Terms;