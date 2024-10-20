import React from 'react';
import Component from './Component';
import Component2 from './Component2';

const Container = () => {
  const name = "홍길동";
  const age = 20;
  const printName = (name) => {
    console.log(name)
  };
  return (
    <div>
      <Component name={name} age={age} />
      <Component2 printName={printName} name={name} >
        <span>회원입니다😄</span>
      </Component2>
    </div>
  );
};

export default Container;