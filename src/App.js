import React from 'react';
import './App.css';
import Display from './components/Display';
import Button from './components/Button';

const number = 122;

const App = () => (
  <div className="App">
    <Display number={number} />
    <Button symbol="+" />
  </div>
);

export default App;
