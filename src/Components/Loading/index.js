import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const LoadingSpinner = () => {
    return (
        <div className="d-flex flex-column justify-content-center align-items-center vh-100">
            <div className="spinner-border text-primary" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
            {/* Visible Loading Text */}
            <p className="mt-3 text-primary">Loading...</p>
        </div>
    );
};

export default LoadingSpinner;
