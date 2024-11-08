import FontSizeComponent from "./docs/context/normal/fontSizeComponent";
import FoodContainer2 from "./docs/ref/expert/FoodContainer2";
import GlobalStyle from "./global/globalStyle";
import theme from "./global/thema";
import Styled01 from "./pages/docs/_components/Styled01";
import Styled02 from "./pages/docs/_components/Styled02";
import Styled03 from "./pages/docs/_components/Styled03";
import Styled04 from "./pages/docs/_components/Styled04";
import { ThemeProvider } from 'styled-components';
import Styled05 from "./pages/docs/_components/Styled05";
import CharContainer from "./docs/context/basic/CharContainer";
import ParentContainer from "./docs/context/normal/ParentContainer";
import AnimalContainer from "./docs/context/expert/AnimalContainer";
import { AnimalContext } from "./docs/context/expert/AnimalContext";
function App() {
  return (
    <>
      <ThemeProvider theme ={theme}>
        <GlobalStyle/>
        {/* <Styled03/>
        <FontSizeComponent/> */}
        {/* <CharContainer/> */}
        <AnimalContainer/>
        {/* <CharContainer/> */}
        
      </ThemeProvider>
    </>
  );
}

export default App;
