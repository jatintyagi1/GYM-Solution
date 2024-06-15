import React, { useState } from 'react';
import './signin.css';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import axios from 'axios';
import { Link } from 'react-router-dom';

const schema = yup.object().shape({
    email: yup.string().email('Invalid email').required('Email is required'),
    password: yup.string().required('Password is required').min(6, 'Password must be at least 6 characters').max(15, 'Password must be at most 15 characters'),
});

const SignIn = () => {
    const { register, handleSubmit, formState: { errors }, setError } = useForm({
        resolver: yupResolver(schema),
    });

    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const onSubmit = async (data) => {
        try {
            const response = await axios.post('http://localhost:5000/api/signin', data);
            console.log('User signed in successfully!', response.data);
        } catch (error) {
            if (error.response && error.response.data && error.response.data.message === 'Invalid credentials') {
                setError('email', { message: 'Invalid credentials' });
                setError('password', { message: 'Invalid credentials' });
            } else {
                console.error('Error signing in:', error);
            }
        }
    };

    return (
        <div className="container mt-5 mv-5">
            <div className="row justify-content-center mb-5">
                <div className="col-md-4">
                    <div className="card">
                        <div className="card-body">
                            <h2 className="card-title text-center mb-4">Sign In</h2>
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <div className="form-group mb-3">
                                    <div className="input-group">
                                        <span className="input-group-text"><i className="bi bi-envelope"></i></span>
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
                                        <span className="input-group-text"><i className="bi bi-lock"></i></span>
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
                                    <Link className='d-block mt-2 mb-2'>Forgot Password?</Link>
                                </div>
                                <button type="submit" className="btn btn-primary w-100" >Sign In</button>
                            </form>
                        </div>
                        <p className="new-user-text">
                            Don't have an account? <Link to='/signup'><span>Sign Up</span></Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignIn;
