import React from 'react';
import Button from './Button';
import '../styles/Buttons.css';

const Buttons = ({add}) => {  
  return (
    <div className="buttons">
      <Button symbol="-" />
      <Button symbol="&#x27F3;" />
      <Button symbol="+" add={add} />
    </div>);
};

export default Buttons;
