import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLock, faUser, faMobileAlt } from '@fortawesome/free-solid-svg-icons';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';


const SignUp = () => {

    const navigate = useNavigate();
    // Form validation schema
    const validationSchema = Yup.object().shape({
        name: Yup.string().required('Name is required'),
        email: Yup.string().email('Invalid email').required('Email is required'),
        password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
        confirmPassword: Yup.string()
            .oneOf([Yup.ref('password'), null], 'Passwords must match')
            .required('Confirm Password is required'),
        mobileNumber: Yup.string()
            .matches(/^[0-9]{10}$/, 'Mobile number must be 10 digits')
            .required('Mobile number is required')
    });

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm({
        resolver: yupResolver(validationSchema)
    });

    const onSubmit = (data) => {
        localStorage.setItem('userData', JSON.stringify(data));

        if (data) {
            toast.success('Signup Successfully!', {
                position: 'top-center',
                autoClose: 3000
            })
            setTimeout(() => navigate('/'), 4000)
        } else {
            toast.error('some Error happen', {
                position: 'top-center',
                autoClose: 3000
            })
        }

    };

    return (
        <>
            <ToastContainer />
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-group">
                    <div className="input-group">
                        <div className="input-group-prepend">
                            <span className="input-group-text">
                                <FontAwesomeIcon icon={faUser} />
                            </span>
                        </div>
                        <input
                            type="text"
                            className={`form-control ${errors.name ? 'is-invalid' : ''}`}
                            placeholder="Name"
                            {...register('name')}
                        />
                    </div>
                    <div className="invalid-feedback">{errors.name?.message}</div>
                </div>

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
                                <FontAwesomeIcon icon={faMobileAlt} />
                            </span>
                        </div>
                        <input
                            type="text"
                            className={`form-control ${errors.mobileNumber ? 'is-invalid' : ''}`}
                            placeholder="Mobile Number"
                            {...register('mobileNumber')}
                        />
                    </div>
                    <div className="invalid-feedback">{errors.mobileNumber?.message}</div>
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

                <div className="form-group">
                    <div className="input-group">
                        <div className="input-group-prepend">
                            <span className="input-group-text">
                                <FontAwesomeIcon icon={faLock} />
                            </span>
                        </div>
                        <input
                            type="password"
                            className={`form-control ${errors.confirmPassword ? 'is-invalid' : ''}`}
                            placeholder="Confirm Password"
                            {...register('confirmPassword')}
                        />
                    </div>
                    <div className="invalid-feedback">{errors.confirmPassword?.message}</div>
                </div>

                <button type="submit" className="btn btn-signup">Sign Up</button>

                <div className="login-text">
                    Already have an account? <a href="/login">Login</a>
                </div>
            </form>
        </>
    );
};

export default SignUp;
