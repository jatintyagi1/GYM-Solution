import React  from 'react'
import './navbar.css'
import GYM_Solution_Logo from './../../../Assets/logo/GYM_Solution_Logo.png'
import SignUp from '../../Signup/signup'
import { useState } from 'react'

const Navbar = () => {

        const [showSignUp, setShowSignUp] = useState(false);

        const toggleSignUp = (e) => {
            e.preventDefault();
            // setShowSignUp(!showSignUp);
            setShowSignUp(!showSignUp);
        };
        const closeSignUp = () => {
            setShowSignUp(false);
          };


    return (
        <div className='navbar-wrapper'>
            <div className='navbar-wrapper-upper-container'>
                <div className='navbar-upper-left-container'>
                    <p>Call now 123 456 789</p>
              </div>
                <div className='navbar-upper-middle-container'>
                    <ul className='navbar-upper-list'>
                        <li>Shop by Brand</li>
                        <li>Refurbishment</li>
                        <li>Project</li>
                        <li>Video</li>
                        <li>Finance</li>
                        <li>Warranty</li>
                        <li>return Policy</li>
                        <li>FAQs</li>
                        <li>About us</li>
                        <li>blog/News</li>
                        <li>Contact us</li>
                    </ul>
                </div>
                <div className='navbar-upper-right-container'>
                    <p>cart</p>
                    <p>Search</p>
                </div>
            </div>
            <div className='navbar-wrapper-lower-container'>
                <div className='navbar-lower-left-container'>
                <img src={GYM_Solution_Logo} alt='Logo'></img>
                </div>
                <div className='navbar-lower-middle-container'>
                    <ul className='navbar-lower-list'>
                        <li>Home</li>
                        <li>Cardio</li>
                        <li>Strength</li>
                        <li>Free Weight</li>
                        <li>Functional</li>
                        <li>Flooring</li>
                        <li>Wellness</li>
                        <li>Service</li>
                        <li>Sale</li>
                    </ul>
                </div>
                <div className='navbar-lower-right container'>
                {showSignUp ? (
                     <div className="signup-overlay">
                     <div className="signup-overlay-content">
                     <button className="close-btn" onClick={closeSignUp}>X</button>
                        <SignUp />
                        </div>
                        </div>
                    ) : (
                        <button className='signup-button' onClick={toggleSignUp}>SIGN IN</button>
                    )}   
                </div>
            </div>
        </div>
    )
}

export default Navbar;

