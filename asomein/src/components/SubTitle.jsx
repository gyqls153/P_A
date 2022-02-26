
import styled from 'styled-components';

const cc = styled.div`
    color: ${props => props.color};

/*상단 타이틀 styled*/
.notice-title-box { display: flex; align-items: center; padding: 65px 0; }
.notice-title-box p{ font-size: 26px; margin: 0 auto; color: #FF557D; letter-spacing: 2px;}
.notice-title-box a{
    padding: 16px; 
    background: url(../images/icon-share.png)no-repeat;
}

`;


function SubTitle(props){
    return(
        <>
            <cc color={props.color} >{props.text}</cc>
            <div class="notice-title-box">
                <p>다른글자</p>
                <a href="#"></a>
            </div>
        </>
    )
}
export default SubTitle;