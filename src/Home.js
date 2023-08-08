import React, { useState, useEffect } from 'react';
import SiteMap from './SiteMap';
import './SiteMap.css';
import heroImage from './images/hero-image.jpeg'; // Replace with your image path
import WelcomePopup from './WelcomePopup';


const Home = () => {
  const [showPopup, setShowPopup] = useState(false);
   const [capturedEmail, setCapturedEmail] = useState('');

  useEffect(() => {
    // Check if the popup has been shown before using localStorage
    const popupShown = localStorage.getItem('popupShown');
    if (popupShown !== 'true') {
      setShowPopup(true);
      // Set a flag in localStorage to indicate the popup has been shown
      localStorage.setItem('popupShown', 'true');
      console.log('Popup flag set in localStorage.');
    }
  }, []);

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  const handleEmailCaptured = (email) => {
    // You can store the captured email in state or perform any desired actions with it.
    setCapturedEmail(email);
  };

  return (
    <div>
      {showPopup && <WelcomePopup onClose={handleClosePopup} onEmailCaptured={handleEmailCaptured} />}
      <header className="hero">
        <div className="hero-image">
          <img src={heroImage} alt="Hero" />
        </div>
        <div className="hero-content">
          <h1>Welcome to Our Website</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tristique metus ut justo bibendum, a bibendum odio vulputate.</p>
          <button className="btn-primary">Learn More</button>
        </div>
      </header>
        <section className="features">
        <div className="feature">
          <h2>Quality Services</h2>
          <p>We provide top-notch services to meet your needs. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div className="feature">
          <h2>About Us</h2>
          <p>Learn more about our company and our mission. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
      </section>
    <SiteMap />
    </div>
  );
};

export default Home;





