import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';
import { auth, db } from './firebase'; // Import Firestore
import './Create_new.css';
import styled from "styled-components";

// Styled-components can be used if you prefer, but in this example, CSS is used

const CreateNew = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const navigate = useNavigate();

  const handleCreateAccount = async (e) => {
    e.preventDefault();
    try {
      // Create user with email and password
      const userCredential = await createUserWithEmailAndPassword(auth, email, password); 
      const user = userCredential.user;

      // Save additional user data (username) to Firestore
      await setDoc(doc(db, 'users', user.uid), {
        username: username,
        email: email
      });

      setSuccess('Account created successfully!');
      setError('');
      navigate('/login'); // Redirect to login page or another route
    } catch (err) {
      setError(err.message);
      setSuccess('');
    }
  };

  return (
    <div className="parent-container">
      <div className='create-new-container'>
        <Link to='/'>
          <img  
            className='login_logo' 
            src='https://static.vecteezy.com/system/resources/previews/019/766/240/non_2x/amazon-logo-amazon-icon-transparent-free-png.png' 
            alt="Amazon Logo"
          />
        </Link>
        <h1>Create New Account</h1>
        <form onSubmit={handleCreateAccount}>
          <label>
            Username:
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </label>
          <label>
            Email:
            <input
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
          <button type="submit">Create Account</button>
          {error && <p className='error'>{error}</p>}
          {success && <p className='success'>{success}</p>}
        </form>
      </div>
    </div>
  );
};

export default CreateNew;
