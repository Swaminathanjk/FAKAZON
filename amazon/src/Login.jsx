import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth, signInWithEmailAndPassword } from './firebase'; // Ensure this import matches your firebase.js setup 
import './Login.css';
import { Link } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password); // Adjusted to use modular approach
      setSuccess('Logged in successfully!');
      setError('');
      navigate('/'); // Redirect to home page or another route
    } catch (err) {
      setError(err.message); 
      setSuccess('');
    }
  };

  return (
    <div className="parent-container">
      <div className='login-container'>
        <Link to='/'>
          <img className='login_logo' src='https://static.vecteezy.com/system/resources/previews/019/766/240/non_2x/amazon-logo-amazon-icon-transparent-free-png.png' alt="Amazon Logo"/>
        </Link>
        <h1>Login</h1>
        <form onSubmit={handleLogin}>
          <label>
            Email:
            <input className='email_input'
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)} 
              required
            />
          </label> 
          <label>
            Password:
            <input 
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </label>
          <button className="login_button" type="submit">Login</button>
          <button type="button" onClick={() => navigate('/create-new')}>
            Create New Account
          </button>
          {error && <p className='error'>{error}</p>}
          {success && <p className='success'>{success}</p>}
        </form>
      </div>
    </div>
  );
};

export default Login; 
