import React from 'react';
import PropTypes from 'prop-types';
import '../styles/Display.css';

const Display = ({ count }) => (
  <div className="display">
    {count}
  </div>
);

Display.propTypes = {
  count: PropTypes.number.isRequired,
};

export default Display;
