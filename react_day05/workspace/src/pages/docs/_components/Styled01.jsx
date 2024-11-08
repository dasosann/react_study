import React from 'react';
import styled from 'styled-components';
import S from '../style';
const StyledDiv = styled.div`
    width: 500px;
    height: 100px;
    border: solid 10px black;
`;
const Styled01 = () => {
    return (
        <StyledDiv>
            <S.Input color = {"pink"}/>
            스타일 된 컴포넌트 
        </StyledDiv>
    );
};

export default Styled01;