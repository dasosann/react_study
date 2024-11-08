import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
const GlobalStyle =createGlobalStyle`
    ${reset}
    * {
        box-sizing: border-box;
        text-shadow: 0 0 2px rgba(0,0,0,0.05);
        letter-spacing: -0.4px;
        color:#131313;
        line-height: 1.3;
        font-family: 'Pretendard-Regular';
    }
    button{
         cursor: pointer;
    }
    @font-face {
    font-family: 'Pretendard-Regular';
    src: url('https://fastly.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Regular.woff') format('woff');
    }
`
export default GlobalStyle;