import React, { useState } from 'react';
import './Login.css';

const LoginForm = () => {
  const [usernameEmail, setUsernameEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ usernameEmail, password }),
      });

      if (response.ok) {
        const { email, token } = await response.json();
        // Store the token and email in local storage or state
      } else {
        const errorMessage = await response.text();
        setError(errorMessage);
      }
    } catch (error) {
      setError('Something went wrong');
    }
  };

  return (
    <div className="login-form">
      <div className="glassmorphism">
        <h2>Login</h2>
        {error && <p className="error-message">{error}</p>}
        <form onSubmit={handleSubmit}>
          <input
            className="input-field"
            type="text"
            placeholder="Username or Email"
            value={usernameEmail}
            onChange={(e) => setUsernameEmail(e.target.value)}
          />
          <input
            className="input-field"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="submit-button" type="submit">Login</button>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;