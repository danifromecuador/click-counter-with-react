import React from 'react';
import PropTypes from 'prop-types';
import '../styles/Display.css';

const Display = ({ number }) => (
  <div className="display">
    {number}
  </div>
);

Display.propTypes = {
  number: PropTypes.number.isRequired,
};

export default Display;
