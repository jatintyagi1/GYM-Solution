// SignUp.js
import React, { useState } from 'react';
import './signup.css';

const SignUp = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      if (response.ok) {
        console.log('User signed up successfully');
        // Redirect or perform other actions upon successful signup
      } else {
        console.error('Error signing up:', response.statusText);
      }
    } catch (error) {
      console.error('Error signing up:', error.message);
    }
  };

  return (
    <div className='signup-full-wrapper'>
      <div className='signup-container-wrapper'>
        <h1>Create Account</h1>
        <form className='form-wrapper' onSubmit={handleSubmit}>
          <input type='text' name='name' placeholder='Name' value={formData.name} onChange={handleChange} />
          <input type='email' name='email' placeholder='E-mail' value={formData.email} onChange={handleChange} />
          <input type='password' name='password' placeholder='Password' value={formData.password} onChange={handleChange} />
          <input type='password' name='confirmPassword' placeholder='Confirm-Password' value={formData.confirmPassword} onChange={handleChange} />
          <button type='submit'>Signup</button>
        </form>
        <p>Already have an account? <span>Sign In</span></p>
      </div>
    </div>
  );
};

export default SignUp;
