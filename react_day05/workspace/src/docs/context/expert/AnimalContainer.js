import React from 'react';
import Animals from './Animals';
import { AnimalContextProvider } from './AnimalContext';
// Animals Provider 하위요소에게 context 제공 
const AnimalContainer = () => {
    return (
        <AnimalContextProvider>
            <Animals/>
        </AnimalContextProvider>
    );
};

export default AnimalContainer;