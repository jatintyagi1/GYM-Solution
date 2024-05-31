import React, { useState } from 'react';
import './signup.css';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import axios from 'axios';
import { Link } from 'react-router-dom';

// Define the validation schema
const schema = yup.object().shape({
  username: yup
    .string()
    .required('Username is required'),
  email: yup
    .string().email('Invalid email')
    .required('Email is required'),
  password: yup
    .string()
    .required('Password is required')
    .min(6, 'Password must be at least 6 characters')
    .max(15, 'Password must be at most 15 characters'),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password')], 'Passwords must match')
    .required('Confirm Password is required'),
  mobileNumber: yup
    .string()
    .required('Mobile Number is required')
    .matches(/^\d{10}$/, 'Mobile number must be 10 digits'),
});

const SignUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const onSubmit = async (userData) => {
    try {
      await axios.post('http://localhost:5000/api/auth/signup', userData); 
      console.log('User signed up successfully!');
    } catch (error) {
      if (error.response && error.response.data && error.response.data.message === 'Email already exists') {
        console.error('Email already exists:', error.response.data.message);
        setError('email', { message: 'Email already exists' });
      } else {
        console.error('Error signing up:', error);
      }
    }
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-4">
          <div className="card">
            <div className="card-body">
              <h2 className="card-title text-center mb-4">Sign Up</h2> 
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-group mb-3">
                  <div className="input-group">
                    <span className="input-group-text">
                      <i className="bi bi-person"></i>
                    </span>
                    <input
                      type="text"
                      className={`form-control ${errors.username ? 'is-invalid' : ''}`}
                      {...register('username')}
                      placeholder="Username"
                    />
                    {errors.username && (
                      <div className="invalid-feedback">{errors.username.message}</div>
                    )}
                  </div>
                </div>
                <div className="form-group mb-3">
                  <div className="input-group">
                    <span className="input-group-text">
                      <i className="bi bi-telephone"></i>
                    </span>
                    <input
                      type="tel"
                      className={`form-control ${errors.mobileNumber ? 'is-invalid' : ''}`}
                      {...register('mobileNumber')}
                      placeholder="Mobile Number"
                    />
                    {errors.mobileNumber && (
                      <div className="invalid-feedback">{errors.mobileNumber.message}</div>
                    )}
                  </div>
                </div>
                <div className="form-group mb-3">
                  <div className="input-group">
                    <span className="input-group-text">
                      <i className="bi bi-envelope"></i>
                    </span>
                    <input
                      type="email"
                      className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                      {...register('email')}
                      placeholder="Email"
                    />
                    {errors.email && (
                      <div className="invalid-feedback">{errors.email.message}</div>
                    )}
                  </div>
                </div>
                <div className="form-group mb-3">
                  <div className="input-group">
                    <span className="input-group-text">
                      <i className="bi bi-lock"></i>
                    </span>
                    <input
                      type={showPassword ? 'text' : 'password'}
                      className={`form-control ${errors.password ? 'is-invalid' : ''}`}
                      {...register('password')}
                      placeholder="Password"
                    />
                    <button
                      type="button"
                      className="btn btn-outline-secondary"
                      onClick={togglePasswordVisibility}
                    >
                      <i className={`bi ${showPassword ? 'bi-eye-slash' : 'bi-eye'}`}></i>
                    </button>
                    {errors.password && (
                      <div className="invalid-feedback">{errors.password.message}</div>
                    )}
                  </div>
                </div>
                <div className="form-group mb-3">
                  <div className="input-group">
                    <span className="input-group-text">
                      <i className="bi bi-lock"></i>
                    </span>
                    <input
                      type={showConfirmPassword ? 'text' : 'password'}
                      className={`form-control ${errors.confirmPassword ? 'is-invalid' : ''}`}
                      {...register('confirmPassword')}
                      placeholder="Confirm Password"
                    />
                    <button
                      type="button"
                      className="btn btn-outline-secondary"
                      onClick={toggleConfirmPasswordVisibility}
                    >
                      <i className={`bi ${showConfirmPassword ? 'bi-eye-slash' : 'bi-eye'}`}></i>
                    </button>
                    {errors.confirmPassword && (
                      <div className="invalid-feedback">
                        {errors.confirmPassword.message}
                      </div>
                    )}
                  </div>
                </div>
                <button type="submit" className="btn btn-primary w-100">
                  Sign Up
                </button>
              </form>
            </div>
            <p className="new-user-text">
              Have an Account?<Link to='/Sign-in'><span>SIGN IN</span></Link> 
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SignUp;
