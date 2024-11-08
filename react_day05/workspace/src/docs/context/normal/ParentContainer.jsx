import React from 'react';
import ChildContainer from './ChildContainer';
import { FontContextProvider, fontContext, FontSizeConsumer } from './FontContext';
const ParentContainer = () => {
    return (
       <FontContextProvider>
           <ChildContainer/>
       </FontContextProvider>
    );
};

export default ParentContainer;