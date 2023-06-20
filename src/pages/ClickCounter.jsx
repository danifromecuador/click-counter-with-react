import React, {useState} from 'react';
import Display from '../components/Display';
import Buttons from '../components/Buttons';

const ClickCounter = () => {
  const savedCount = parseInt(localStorage.getItem('saveCount')) || 0;  
  const [count, setCount] = useState(savedCount);

  const add = () => {
    setCount(count + 1);
    localStorage.setItem('saveCount', count + 1);
  }

  const subtract = () => {
    setCount(count - 1);
    if (count === 0) setCount(0);
    localStorage.setItem('saveCount', count - 1);
    return count;
  };

  const restore = () => {
    setCount(0);
    localStorage.setItem('saveCount', 0);
  }

  return (
    <div>
    <Display count={count} />
    <Buttons add={add} subtract={subtract} restore={restore} />
    </div>
  )
}

export default ClickCounter;