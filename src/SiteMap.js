// SiteMap.js
import React from 'react';
import { Link } from 'react-router-dom';

const SiteMap = () => {
  return (
    <div className="site-map">
      <h3>Site Map</h3>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/services">Services</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        {/* Add more links for other pages if needed */}
      </ul>
    </div>
  );
};

export default SiteMap;
