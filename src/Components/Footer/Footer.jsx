import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../Styles/Footer.css';

import GYM_Solution_logo from './../../Assets/logo/GYM_Solution_Logo.png';
import Instagram from './../../Assets/images/Instagram.png';
import Facebook from './../../Assets/images/Facebook.png';
import Youtube from './../../Assets/images/Youtube.png';

export default function Footer() {
    return (
        <footer className="bg-dark text-light py-5">
            {/* Upper Footer */}
            <section className="container mb-4">
                <div className="row g-4">
                    {/* Gym Logo and Address */}
                    <div className="col-lg-3 col-md-6">
                        <div className="mb-3">
                            <img src={GYM_Solution_logo} alt="Gym Solution" className="img-fluid" style={{ width: '150px' }} />
                        </div>
                        <div>
                            <h5>Gym Solution India</h5>
                            <p className="mb-1">18 Mac Person</p>
                            <p className="mb-1">New Delhi</p>
                            <p>India</p>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="col-lg-3 col-md-6">
                        <h5>We are available in whole India</h5>
                        <ul className="list-unstyled">
                            <li><Link to="/contact-us" className="text-light text-decoration-none">Contact Us</Link></li>
                            <li><Link to="/about-us" className="text-light text-decoration-none">About Us</Link></li>
                            <li><Link to="/New-Delhi" className="text-light text-decoration-none">New Delhi</Link></li>
                            <li><Link to="/Mumbai" className="text-light text-decoration-none">Mumbai</Link></li>
                        </ul>
                    </div>

                    {/* Follow Us */}
                    <div className="col-lg-3 col-md-6">
                        <h5>Follow Us</h5>
                        <div className="d-flex gap-3 align-items-center">
                            <img src={Instagram} alt="Instagram" className="img-fluid" style={{ width: '30px', cursor: 'pointer' }} />
                            <img src={Facebook} alt="Facebook" className="img-fluid" style={{ width: '30px', cursor: 'pointer' }} />
                            <img src={Youtube} alt="Youtube" className="img-fluid" style={{ width: '30px', cursor: 'pointer' }} />
                        </div>
                    </div>

                    {/* Mailing List */}
                    <div className="col-lg-3 col-md-6">
                        <h5>Sign Up to Our Mailing List</h5>
                        <form>
                            <div className="mb-2">
                                <input
                                    type="email"
                                    className="form-control"
                                    placeholder="Enter your email"
                                />
                            </div>
                            <button type="submit" className="btn btn-danger w-100">
                                Subscribe
                            </button>
                        </form>
                    </div>
                </div>
            </section>

            {/* Lower Footer */}
            <section className="bg-dark text-center py-3">
                <div className="container">
                    <p className="mb-0">
                        Made by <span className="text-danger">Jatin Tyagi</span>
                    </p>
                    <p className="mb-0">© {new Date().getFullYear()} Gym Solution. All rights reserved.</p>
                </div>
            </section>
        </footer>
    );
}
