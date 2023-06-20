import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import ClickCounter from './pages/ClickCounter';


const App = () => {
  return (
    <div className="App">
      <Router >
        <Navbar />
        <Route exact path="/" component={Home} />
        <Route exact path="/ClickCounter" component={ClickCounter} />
      </Router>
    </div>
  );
};

export default App;