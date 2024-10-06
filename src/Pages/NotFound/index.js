import React from 'react';
import { Link } from 'react-router-dom';
import '../../Styles/NotFoundPage.css';

const NotFoundPage = () => {
    return (
        <div className="not-found-container">
            <div className="error-content">
                <h1 className="error-title">404</h1>
                <h2 className="error-subtitle">Page Not Found</h2>
                <p className="error-description">
                    Oops! The page you are looking for doesn’t exist or has been moved.
                </p>
                <Link to="/" className="home-button">
                    Go Home
                </Link>
            </div>
            <div className="error-illustration">
                <img src="https://undraw.co/static/images/undraw_not_found_60pq.svg" alt="404 Illustration" />
            </div>
        </div>
    );
};

export default NotFoundPage;
