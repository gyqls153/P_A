import styled, { css } from 'styled-components';

const categories = [

    {name:'notice/new', text:'공지사항/새소식'},
    {name:'EconomyNews', text: '경제뉴스'},
    {name:'quiz', text: '어썸인 YOU 퀴즈'},
    {name:'FinancialTalk', text: '재태크수다방'},
    {name:'Subscribe', text: '구독후기'}
];

const CategoriesBlock = styled.div`
    display: flex;
    padding: 1rem;
    justify-content: center;
`
const Category = styled.div`
    font-size: 16px;
    padding: 0 20px;
    cursor: pointer;
    color: black;
    ${props =>
        props.active && css`
            font-weight: 600;
            color: #22b8cf;
        `
}`;

const Categories = ({ onSelect, catergory }) => {
    return(
        <CategoriesBlock>
            {categories.map(c => (
                <Category key={c.name}
                          active={catergory === c.name}
                          onClick={() => onSelect(c.name)}
                >{c.text}</Category>
            ))}
        </CategoriesBlock>
    );
};


export default Categories;