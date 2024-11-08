import React, { useContext, useRef, useState } from 'react';
import { AnimalContext } from './AnimalContext';
import Animal from './Animal';

const Animals = () => {
    const {state, action }= useContext(AnimalContext);
    console.log("animalList", state.animalList);
    const [inputValue, setInput]= useState("");
    const onkeyEnter= (e)=>{
        console.log(e);
        if (e.key === "Enter" && inputValue.trim() !== "") {
            action.AddList(e.target.value); 
            setInput("");
        }
    }
    return (
        <div>
            {state.animalList.map ((data,i)=><Animal key={i} data={data} />)}

            <input type="text"placeholder='동물 이름 입력' onKeyDown={onkeyEnter}  
             value={inputValue}
             onChange={(e)=>setInput(e.target.value)} />
        </div>
    );
};

export default Animals;