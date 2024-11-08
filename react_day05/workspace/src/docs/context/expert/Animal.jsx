import React, { useContext } from 'react';
import { AnimalContext } from './AnimalContext';

const Animal = ({data}) => {
    const {state , action } = useContext(AnimalContext);
    const onClickDelete= (e)=>{
        console.log(e);
        action.RemoveList(e.target.innerText);
    }
    return (
        <li><button onClick={onClickDelete}>{data}</button></li>
    );
};

export default Animal;