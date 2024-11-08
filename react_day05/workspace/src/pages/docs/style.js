import styled from 'styled-components';
import { flexCenter, flexCenterColumn, flexCenterRow, orangeBox } from '../../global/commom';
import { fadeIn } from '../../styles/ketframes';

const S = {};

  S.P = styled.p`
    color: orange;
    font-weight: ${(props)=>props.fontWeight};
    `
  S.Strong = styled.strong`
    font-size: ${({fontSize})=>fontSize};
    `
    S.StyledDiv = styled.div`
      width: 500px;
      height: 100px;
      border: solid 1px #333;
    `;
  
    S.StyledButton = styled.button`
      background-color: orange;
      border: none;
    `
    S.Input = styled.input`
      width: 200px;
      height: 200px;
      border: 1px solid orange;
      color : ${(props)=>props.color}
    `
  S.Wrap = styled.div`
    ${flexCenterColumn}
    & span {
      color: green;
    }
    & button{
      width: 30%;
    }
  `
  S.orangeBox = styled.div`
    ${orangeBox}
    ${flexCenter}
  `
  S.flexRow = styled.div`
    ${flexCenterRow}
    gap: 5px;
    & p {
      font-size : ${({theme})=>theme.FONT_SIZE["h1"]};
      font-weight: 900px;
      animation: ${fadeIn} 1s forwards ease-in;
    }
  `
export default S;
