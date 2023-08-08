import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import './Navbar.css';
import yourLogo from './images/your-logo.png';

const Navbar = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();

    // You can perform the search logic here
    // For simplicity, let's just navigate to the '/search' page with the search query as a query parameter
    navigate(`/search?q=${searchQuery}`);
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <img src={yourLogo} alt="Your Logo" />
      </div>
      <ul className="nav-links">
        <li><NavLink to="/" exact>Home</NavLink></li>
        <li><NavLink to="/about">About</NavLink></li>
        <li><NavLink to="/services">Services</NavLink></li>
        <li><NavLink to="/contact">Contact</NavLink></li>
      </ul>
      {/* Add the search bar element */}
      <form className="search-bar" onSubmit={handleSearchSubmit}>
        <input type="text" placeholder="Search..." value={searchQuery} onChange={handleSearchChange} />
        <button type="submit">Search</button>
      </form>
    </nav>
  );
};

export default Navbar;
