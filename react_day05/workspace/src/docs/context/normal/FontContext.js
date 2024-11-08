import React, { useState } from 'react';
import FontSizeComponent from './fontSizeComponent';
const fontContext = React.createContext({
    state : {fontSize : ""},
    action : {setFontSize : ()=>{}}
});
const FontContextProvider = ({children}) =>{
    const [fontSize,setFontSize]= useState("2rem");
    const value={
        state : {fontSize},
        action : {setFontSize}
    }
    return (
        <fontContext.Provider value = {value}>
        {children}
        </fontContext.Provider>
    )
}
const FontSizeConsumer = fontContext.Consumer;
export {FontContextProvider, FontSizeConsumer, fontContext}; 