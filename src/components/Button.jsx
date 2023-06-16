import React from 'react';
import PropTypes from 'prop-types';
import '../styles/Button.css';

const Button = ({ symbol, add, subtract, restore }) => {

  return (
    <div className="button" onClick={symbol === '+' ? add : symbol==='-' ? subtract : restore } >
      {symbol}
    </div>
  );
}

Button.propTypes = {
  symbol: PropTypes.string.isRequired,
};

export default Button;
