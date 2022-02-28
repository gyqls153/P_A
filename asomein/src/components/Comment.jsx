
import '../assets/css/comment.css'

//댓글창 comment section
function Comment(){
    return(
        <>
             <div class="comment">
                <div class="comment-inner-box">
                    <div class="comment-title">
                        <i class="comment-buble-icon"></i>
                        <p>이용후기</p>
                        <span id="">(10)</span>
                    </div>
                    <div class="profile"></div>
                    <div class="comment-subject-inner">
                        <div class="user-id-timeline">
                            <p id="" class="user-id">주원아비</p>
                            <span>2020.10.31. 14:19</span>
                        </div>
                            <div class="user-in-comment">
                                <p class="user-comment">
                                    좋은 정보 얻고 갑니다. 좋은 정보 얻고 갑니다. 좋은 정보 얻고 갑니다. 좋은 정보 얻고 갑니다. 좋은 정보 얻고 갑니다. 좋은 정보 얻고 갑니다. 좋은 정보 얻고 갑니다. 
      좋은 정보 얻고 갑니다. 좋은 정보 얻고 갑니다. 좋은 정보 얻고 갑니다. 좋은 정보 얻고 갑니다. 좋은 정보 얻고 갑니다. 좋은 정보 얻고 갑니다. 좋은 정보 얻고 갑니다. 좋은 정보 얻고 갑니다. 
                                </p>
                            </div>
                    </div>
                </div>
                <form action="">
                    <input type="text" id="" name="" placeholder="후기를 남겨보세요" />
                    <button type="submit" id="" class="comment-btn-submit">후기작성</button>
                </form>
            </div>
        </>
    )
}
export default Comment;