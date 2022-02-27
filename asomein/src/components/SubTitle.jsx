
import styled from 'styled-components';
import { useState } from 'react';

function SubTitle(props){

    const texts = [
        '나의 정보1', '나의 정보2', '나의 정보3', '나의 정보4','나의 정보5'
    ]

    const [currentIdx, setState] = useState(1);
    
    return(
        <>
        <ul>
            {
                texts.map((prop, idx) => <li key = {idx}>{prop}</li>)
            }
        </ul>
            <p>
            {
                texts.filter((props, idx) => currentIdx === idx)
            }
            </p>
        </>
    )
}
export default SubTitle;