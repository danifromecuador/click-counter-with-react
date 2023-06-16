import React from 'react';
import Button from './Button';
import '../styles/Buttons.css';

const Buttons = ({add, subtract, restore}) => {  
  return (
    <div className="buttons">
      <Button symbol="-" subtract={subtract} />
      <Button symbol="&#x27F3;" restore={restore} />
      <Button symbol="+" add={add}/>
    </div>);
};

export default Buttons;
