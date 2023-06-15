import React from 'react';
import '../styles/Button.css';

const Button = (props) => (
  <div className="button">
    {props.symbol}
  </div>
);

export default Button;
