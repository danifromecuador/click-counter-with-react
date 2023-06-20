import React, { useState } from 'react';
import './App.css';
import Display from './components/Display';
import Buttons from './components/Buttons';
import Navbar from './components/Navbar';
import About from './pages/About';
import Contact from './pages/Contact';

const App = () => {
  const [count, setCount] = useState(0);

  const add = () => setCount(count + 1);

  const subtract = () => {
    setCount(count - 1);
    if (count === 0) setCount(0);
    return count;
  };

  const restore = () => setCount(0);

  return (
    <div className="App">
      <Navbar />
      <Display number={count} />
      <Buttons add={add} subtract={subtract} restore={restore} />
    </div>
  );
};

export default App;