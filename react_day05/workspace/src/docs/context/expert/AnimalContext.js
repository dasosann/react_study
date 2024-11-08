//컨텍스트 생성 및 초기화
// Provider 생성
// useContext를 사용하므로 consumer는 필요없다
// animals 리스트 초기값 [누렁이,야옹이,점박이]
//버튼을 눌렀을때 삭제하는 remove라는 메소드 생성

import React, { useState } from "react"

//화면에서 동물을 받았을때 추가하는 insert라는 메서드 생성
const AnimalContext = React.createContext({
    state : {animalList : ""},
    action : {AddList : ()=>{}, RemoveList : ()=>{}, setList:()=>{} }
})
const AnimalContextProvider = ({children}) =>{
    const [animalList, setList] = useState(["누렁이","야옹이","점박이"]);
    const AddList=(animal)=>{
        setList((prevList)=>[...prevList , animal]); 
    }
    const RemoveList= (animal)=>{
        setList((prevList)=>prevList.filter((list)=>list!==animal));
    }
    const value = {
        state : {animalList},
        action: {setList , RemoveList, AddList}
    }
    return(
        <AnimalContext.Provider value ={value}>
            {children}
        </AnimalContext.Provider>
    )
    
}
export {AnimalContext , AnimalContextProvider};