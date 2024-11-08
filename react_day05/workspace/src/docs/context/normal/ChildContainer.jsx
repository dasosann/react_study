import React, { useState } from 'react';

import { FontSizeConsumer, fontContext, FontContextProvider } from './FontContext';
const ChildContainer = () => {

    return (
        <div>
            <FontSizeConsumer>
                {(context)=>{
                    return( <>
                        <p style={{fontSize: context.state.fontSize}}>중간 ChildContainer입니다!</p>
                        <button onClick={()=>{context.action.setFontSize("5rem")}} >커져라!</button>
                    </>)
                   
                }}
            </FontSizeConsumer>
        </div>
    );
};
export default ChildContainer;