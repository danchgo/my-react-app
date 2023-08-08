import React, { useState } from 'react';
import './WelcomePopup.css';

const WelcomePopup = ({ onClose, onEmailCaptured }) => {
  const [email, setEmail] = useState('');

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Validate email format
    if (!/^\S+@\S+\.\S+$/.test(email)) {
      console.error('Invalid email format.');
      return;
    }

    try {
      // Send the captured email to the backend
      const response = await fetch('http://localhost:5000/submit-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        console.log('Email submitted successfully.');
        // Call the onEmailCaptured callback to notify the parent component
        onEmailCaptured(email);
      } else {
        console.error('Error submitting email.');
      }
    } catch (error) {
      console.error('Error:', error);
    }

    // Close the popup
    onClose();
  };

  return (
    <div className="welcome-popup">
      <div className="popup-content">
        <h2>Welcome to Our Website!</h2>
        <p>Thank you for visiting us. Enjoy exploring our services and content.</p>
        <form onSubmit={handleSubmit}>
          <label htmlFor="email">Enter your email:</label>
          <input type="email" id="email" value={email} onChange={handleEmailChange} />
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default WelcomePopup;
