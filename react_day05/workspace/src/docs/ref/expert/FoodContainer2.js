import React from 'react';
import { useRef } from 'react';
import { useState } from 'react';

const FoodContainer2 = () => {
    const [foods, setFoods] = useState([]);
    const [checked, setCheck] = useState([]);

    const inputRef = useRef([]);
    const onClickPlus= ()=>{
        const korean = inputRef.current[0].value;
        const english = inputRef.current[1].value;
        setFoods(
            foods.concat({kor: korean, eng : english})
        );
        setCheck(checked.concat(false));
        console.log(foods);
        console.log(checked);
    }
    const onChangeCheckBox = (i)=>{
         checked.splice(i,1,!checked[i])
         setCheck(checked.concat())
    }
    const onClickMinus = ()=>{
        setFoods(foods.filter((food, i)=>!checked[i]))
        setCheck(new Array(foods.length).fill(false));
    }
    const foodlist =foods.map((data,i)=><li key={i}>
    <input type='checkbox'checked={checked[i]} onChange={ ()=>onChangeCheckBox(i)}/>
    {data.kor}({data.eng})
    </li>
    )
    return (
        <div style={{dispaly:"flex", flexDirection:"column"}}>
            <div style={{display:"flex"}}>
                <div>
                    <input type='text' placeholder='한국 음식 이름' ref={(el)=>inputRef.current[0]=el}/>
                    <input type='text' placeholder='영어 음식 이름' ref={(el)=>inputRef.current[1]=el}/>
                </div>
                <div>
                    <button onClick={onClickPlus}>추가</button>
                    <button onClick={onClickMinus}>삭제</button>
                </div>
            </div>
            <ul>   
                {foodlist}
            </ul>
        </div>
       
    );
    
};

export default FoodContainer2;