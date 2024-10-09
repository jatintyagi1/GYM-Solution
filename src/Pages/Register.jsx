import React from 'react';
import SignUp from "../Components/Signup/Signup";
import '../Styles/User/Signup.css';

const RegisterPage = () => {
    return (
        <div className="signup-page">
            <div className="signup-wrapper">
                <h1>Sign Up</h1>
                <SignUp />
            </div>
        </div>
    );
};

export default RegisterPage;
