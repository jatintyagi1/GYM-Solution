import React from 'react'
import './navbar.css'
import GYM_Solution_Logo from './../../../Assets/logo/GYM_Solution_Logo.png'
import SignUp from '../../Signup/signup'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart, faSearch } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {

    const [showSignUp, setShowSignUp] = useState(false);
    const [showSearch, setShowSearch] = useState(false);

    const toggleSignUp = (e) => {
        e.preventDefault();
        setShowSignUp(!showSignUp);
    };
    const closeSignUp = () => {
        setShowSignUp(false);
    };

    const handleSearchToggle = () => {
        setShowSearch(!showSearch); // 
    };


    return (
        <div className='navbar-wrapper'>
            <div className='navbar-wrapper-upper-container'>
                <div className='navbar-upper-left-container'>
                    <p>Call now 123 456 789</p>
                </div>
                <div className='navbar-upper-middle-container'>
                    <ul className='navbar-upper-list'>
                        <li><Link to='Shop-By-Brand'>Shop by Brand</Link></li>
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
                    <FontAwesomeIcon icon={faShoppingCart} className='cart-icon' />
                    <FontAwesomeIcon icon={faSearch} className='search-icon' onClick={handleSearchToggle} />
                    {showSearch && ( // Render search input only if showSearch is true
                        <div className="search-box">
                            <input type="text" placeholder="Search..." />
                            <button><FontAwesomeIcon icon={faSearch} /></button>
                        </div>
                    )}
                </div>
            </div>
            <div className='navbar-wrapper-lower-container'>
                <div className='navbar-lower-left-container'>
                    <img src={GYM_Solution_Logo} alt='Logo'></img>
                </div>
                <div className='navbar-lower-middle-container'>
                    <ul className='navbar-lower-list'>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/Cardio">Cardio</Link></li>
                        <li><Link to="/Strength">Strength</Link></li>
                        <li><Link to="/Free-Weight">Free Weight</Link></li>
                        <li><Link to="/Functional">Functional</Link></li>
                        <li><Link to="/Flooring">Flooring</Link></li>
                        <li><Link to="/Wellness">Wellnes</Link></li>
                        <li><Link to="/Service">Services</Link></li>
                        <li><Link to="/Sale">Sale</Link></li>
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

