import React, { useState } from 'react';

const Name = () => {
    const [result, textState] = useState("");
    const onChangeInputValue = (e) => {
        console.log(e);
        textState(e.target.value); 
    }
    return (
        <div>
            <p>{result}</p>
            <input type="text" onChange={onChangeInputValue} />
        </div>
    );
};

export default Name;