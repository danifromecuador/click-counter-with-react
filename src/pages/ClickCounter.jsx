import React, {useState} from 'react';
import Display from '../components/Display';
import Buttons from '../components/Buttons';

const ClickCounter = () => {
  const [count, setCount] = useState(0);

  const add = () => setCount(count + 1);

  const subtract = () => {
    setCount(count - 1);
    if (count === 0) setCount(0);
    console.log(count);
    return count;
  };

  const restore = () => setCount(0);

  return (
    <div>
    <Display count={count} />
    <Buttons add={add} subtract={subtract} restore={restore} />
    </div>
  )
}

export default ClickCounter;