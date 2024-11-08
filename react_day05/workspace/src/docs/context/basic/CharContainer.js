import React from 'react';
import A from './A';
import CharContext from './CharContext';
import C from './C';

const CharContainer = () => {
    return (
        <CharContext.Provider value={{color:"blue", fontSize:"30px"}}>
            <C/>
        </CharContext.Provider>
    );
};

export default CharContainer;