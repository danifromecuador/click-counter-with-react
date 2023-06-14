import React from 'react';
import './App.css';
import Display from './components/Display';

const number = 122;

const App = () => (
  <div className="App">
    <Display number={number} />
  </div>
);

export default App;
