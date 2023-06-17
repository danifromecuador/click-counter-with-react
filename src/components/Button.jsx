import React from 'react';
import PropTypes from 'prop-types';
import '../styles/Button.css';

const Button = ({
  symbol, add, subtract, restore,
}) => {
  const handleClick = () => {
    if (symbol === '+') add();
    else if (symbol === '-') subtract();
    else restore();
  };
  return (
    <button className="button" type="button" onClick={handleClick}>
      {symbol}
    </button>
  );
};

Button.propTypes = {
  symbol: PropTypes.string,
  add: PropTypes.func,
  subtract: PropTypes.func,
  restore: PropTypes.func,
};

Button.defaultProps = {
  symbol: '',
  add: () => {},
  subtract: () => {},
  restore: () => {},
};

export default Button;
