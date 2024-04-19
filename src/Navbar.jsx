import React from 'react';
import { Link } from 'react-router-dom';
import './styles/navbar.css';
import bookmark from './img/Vector 30.png';
import circle from './img/Ellipse 50.png'
import './styles/App.css'

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="nav-list">
        <li className="nav-item">
          <Link to="/" className="nav-link left-item"><img src={circle} alt="circle" className="bookmark"/></Link>
        </li>
        <li className="nav-item">
          <Link to="/contact" className="nav-link"><img src={bookmark} alt="bookmark" className="bookmark"/></Link>
        </li>
        <li className="nav-item">
          <Link to="/contact" className="nav-link">username@uw.edu</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
