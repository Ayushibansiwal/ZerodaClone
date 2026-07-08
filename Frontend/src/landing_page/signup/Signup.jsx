import React, { useState } from 'react';
import {Link} from "react-router-dom";


const Signup = () => {
  const baseUrl = import.meta.env.VITE_API_BASE_URL;
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSignup = async (e) => {
    e.preventDefault();
    setMessage('');

    try {
      const response = await fetch(`${baseUrl}/api/signup`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({username, password })
      });

      const data = await response.json();

      if (response.ok) {
        setIsSuccess(true);
        setMessage('Account created successfully! Redirecting to login...');
        setTimeout(() => {
          window.location.href = '/login'; 
        }, 2000);
      } else {
        setIsSuccess(false);
        setMessage(data.message || 'Signup failed');
      }
    } catch (err) {
      setIsSuccess(false);
      setMessage('Server error during registration.');
    }
  };

  return (
    <div className="container">
      <div className="logoContainer">
        <h1 className="logoText">kite</h1>
      </div>

      <div className="card">
        <h2 className="heading">Open a free trading account</h2>
        <p style={{ fontSize: '14px', color: '#999', marginBottom: '30px', lineHeight: '1.4' }}>
          Join over 1+ crore investors tracking markets with Kite.
        </p>
        
        {message && (
          <p className={isSuccess ? "successText" : "errorText"} style={isSuccess ? { color: '#4caf50' } : {}}>
            {message}
          </p>
        )}

        <form onSubmit={handleSignup}>
          <div className="inputGroup">
            <input 
              type="text" 
              placeholder="Username" 
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required 
            />
          </div>
          
          <div className="inputGroup">
            <input 
              type="password" 
              placeholder="Choose Password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required 
            />
          </div>

          <button type="submit">Continue</button>
        </form>

        <div className="footerLinks">
            <Link to="/login" className="link">Already have a Kite account? Login</Link>
        </div>
      </div>
    </div>
  );
};

export default Signup;