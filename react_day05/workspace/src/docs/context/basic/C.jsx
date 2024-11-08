import React, { useContext } from 'react';
import CharContext from './CharContext';

const C = () => {
    const context = useContext(CharContext); // useContext를 사용하여 Context 값 가져오기

    return (
        <p style={{ color: context.color, fontSize: context.fontSize }}>
            리액트 Context API
        </p>
    );
};

export default C;
