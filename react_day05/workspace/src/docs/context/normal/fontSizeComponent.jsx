import React, { useContext } from 'react';
import { FontSizeConsumer } from './FontContext';

const FontSizeComponent = () => {
    const {state,action} = useContext(FontSizeComponent);
    return (
        <FontSizeConsumer>
            {(context)=>{
                    return( <>
                        <p style={{fontSize: state.fontSize}}>중간 ChildContainer입니다!</p>
                        <button onClick={()=>{action.setFontSize("0.5rem")}} >작아져라!</button>
                    </>)
                   
                }}
        </FontSizeConsumer>
    );
};

export default FontSizeComponent;