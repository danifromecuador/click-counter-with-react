import React from 'react';
import Button from './Button';
import '../styles/Buttons.css';

const Buttons = () => (
  <div className="buttons">
    <Button symbol="-" />
    <Button symbol="&#x27F3;" />
    <Button symbol="+" />
  </div>
);

export default Buttons;
