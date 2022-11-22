import React from 'react';
import { Link } from 'react-router-dom';
import '../styling/Navbar.css';

const Navabar = () => (
  <nav>
    <Link to="/" className="link">Rockets</Link>
    <Link to="/missions" className="link">Missions</Link>
    <Link to="/my-profile" className="link">My profile</Link>
  </nav>
);

export default Navabar;
