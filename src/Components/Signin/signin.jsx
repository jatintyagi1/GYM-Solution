import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLock, faUser, faMobileAlt } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

import '../../Styles/User/Signup.css'


const validationSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Email is required'),
    password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
});

export default function SignIn() {
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm({
        resolver: yupResolver(validationSchema)
    });

    const onSubmit = (data) => {
        console.log(data);
    }
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-group">
                <div className="input-group">
                    <div className="input-group-prepend">
                        <span className="input-group-text">
                            <FontAwesomeIcon icon={faEnvelope} />
                        </span>
                    </div>
                    <input
                        type="email"
                        className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                        placeholder="Email"
                        {...register('email')}
                    />
                </div>
                <div className="invalid-feedback">{errors.email?.message}</div>
            </div>

            <div className="form-group">
                <div className="input-group">
                    <div className="input-group-prepend">
                        <span className="input-group-text">
                            <FontAwesomeIcon icon={faLock} />
                        </span>
                    </div>
                    <input
                        type="password"
                        className={`form-control ${errors.password ? 'is-invalid' : ''}`}
                        placeholder="Password"
                        {...register('password')}
                    />
                </div>
                <div className="invalid-feedback">{errors.password?.message}</div>
            </div>
            <div className='login-forgot'>
               <Link to='/forgot-password'><p>Forgot Password ?</p></Link> 
            </div>
            <button type="submit" className="btn btn-signup">Login In</button>
        <div className='login-text'>
            New Customer ? <a href='/register'>Signup</a>
        </div>
        </form>
    )
}