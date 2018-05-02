import React from 'react';

const person = (props) => {
  return (

    <div onClick={props.clicked} >
      <p>I'm {props.name} and I am {props.age} years old</p>
      <p>{props.children} </p>
    </div>
  )
};

export default person;
