import React, { useState } from 'react';
import {Link} from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');

    try {
      const response = await fetch('http://localhost:8000/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
        credentials: 'include' 
      });

      const data = await response.json();

      if (response.ok) {
        window.location.href = 'http://localhost:5174';
      } else {
        setError(data.message || 'Invalid username or password');
      }
    } catch (err) {
      setError('Server error connecting to backend.');
    }
  };

  return (
    <div className="container">
      <div className="logoContainer">
        <h1 className="logoText">kite</h1>
      </div>

      <div className="card">
        <h2 className="heading">Login to Kite</h2>
        
        {error && <p className="errorText">{error}</p>}

        <form onSubmit={handleLogin}>
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
              placeholder="Password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required 
            />
          </div>

          <button type="submit">Login</button>
        </form>

        <div className="footerLinks">
            <Link to="/signup" className="link">Don't have an account? Signup</Link>
        </div>
      </div>
    </div>
  );
};

export default Login;