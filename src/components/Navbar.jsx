import React from "react";
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';

const Navbar = () => (
  <nav>
    <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/ClickCounter">ClickCounter</Link>
        </li>
    </ul>
  </nav>
);

export default Navbar;