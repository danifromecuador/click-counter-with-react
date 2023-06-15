import React from 'react';
import PropTypes from 'prop-types';
import '../styles/Button.css';

const Button = ({ symbol }) => (
  <div className="button">
    {symbol}
  </div>
);

Button.propTypes = {
  symbol: PropTypes.string.isRequired,
};

export default Button;
