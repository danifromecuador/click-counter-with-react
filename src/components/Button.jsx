import React from 'react';
import PropTypes from 'prop-types';
import '../styles/Button.css';

const Button = ({ symbol, add }) => {

  return (
    <div className="button" onClick={add} >
      {symbol}
    </div>
  );
}

Button.propTypes = {
  symbol: PropTypes.string.isRequired,
};

export default Button;
