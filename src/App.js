import React from 'react';
import { BrowserRouter as Router, Route, Routes, NavLink } from 'react-router-dom';
import './App.css';
import MobileSite from './MobileSite';
import './MobileSite.css';
import Navbar from './Navbar';
import Home from './Home';
import About from './About';
import Services from './Services';
import Contact from './Contact';
import SearchResults from './SearchResults';


function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
          <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/search" element={<SearchResults />} />

          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;

