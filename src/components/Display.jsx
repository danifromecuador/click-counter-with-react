import React from 'react';
import '../styles/Display.css'

const Display = (props) => (
  <div className='display'>
    {props.number}
  </div>
);

export default Display;
