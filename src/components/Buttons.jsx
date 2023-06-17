import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';
import '../styles/Buttons.css';

const Buttons = ({ add, subtract, restore }) => (
  <div className="buttons">
    <Button symbol="-" subtract={subtract} />
    <Button symbol="&#x27F3;" restore={restore} />
    <Button symbol="+" add={add} />
  </div>
);

Buttons.propTypes = {
  add: PropTypes.func.isRequired,
  subtract: PropTypes.func.isRequired,
  restore: PropTypes.func.isRequired,
};

export default Buttons;
