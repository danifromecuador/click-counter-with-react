import React from 'react';
import './App.css';
import Display from './components/Display';
import Buttons from './components/Buttons';

const number = 0;

const App = () => (
  <div className="App">
    <Display number={number} />
    <Buttons />
  </div>
);

export default App;
