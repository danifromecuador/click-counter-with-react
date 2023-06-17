import React from 'react';
import PropTypes from 'prop-types';
import '../styles/Button.css';

const Button = ({
  symbol, add, subtract, restore,
}) => (
  <button className="button" type="button" onClick={symbol === '+' ? add : symbol === '-' ? subtract : restore}>
    {symbol}
  </button>
);

Button.propTypes = {
  symbol: PropTypes.string.isRequired,
  add: PropTypes.func.isRequired,
  subtract: PropTypes.func.isRequired,
  restore: PropTypes.func.isRequired,
};

export default Button;
