import React from 'react'
import './navbar.css'
import GYM_Solution_Logo from './../../../Assets/logo/GYM_Solution_Logo.png'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart, faSearch , faPhone } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {

    const [showSearch, setShowSearch] = useState(false);
  
    const handleSearchToggle = () => {
        setShowSearch(!showSearch); 
    };

    return (
        <div className='navbar-wrapper'>
            <div className='navbar-wrapper-upper-container'>
                <div className='navbar-upper-left-container'>
                    <FontAwesomeIcon icon={faPhone} className='phone-icon'/>
                    <p className='mobile-number'>Call now 123 456 789</p>
                    
                </div>
                <div className='navbar-upper-middle-container'>
                    <ul className='navbar-upper-list'>
                        <li><Link to='/Shop-By-Brand'>Shop by Brand</Link></li>
                        <li><Link to='/Refurbishment'>Refurbishment</Link></li>
                        <li><Link to='/Project'>Project</Link></li>
                        <li><Link to='/Video'>Video</Link></li>
                        <li><Link to='/Finance'>Finance</Link></li>
                        <li><Link to='/Warranty'>Warranty</Link></li>
                        <li><Link to='/Return-Policy'>return Policy</Link></li>
                        <li><Link to='/FAQs'>FAQs</Link></li>
                        <li><Link to='/About-us'>About us</Link></li>
                        <li><Link to='blog-News'>blog/News</Link></li>
                        <li><Link to='Contact-us'>Contact us</Link></li>
                    </ul>
                </div>
                <div className='navbar-upper-right-container'>
                <FontAwesomeIcon icon={faSearch} className='search-icon' onClick={handleSearchToggle} />
                    {showSearch && (
                        <div className="search-box">
                            <input type="text" placeholder="Search item..." />
                            <button><FontAwesomeIcon icon={faSearch} /></button>
                        </div>
                    )}
                    <Link to='cart'><FontAwesomeIcon icon={faShoppingCart} className='cart-icon' /></Link>
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
                        <li><Link to="/Weight">Weight</Link></li>
                        <li><Link to="/Functional">Functional</Link></li> 
                        <li><Link to="/Flooring">Flooring</Link></li>
                        <li><Link to="/Wellness">Wellnes</Link></li>
                        <li><Link to="/Service">Services</Link></li>
                        <li><Link to="/Sale">Sale</Link></li>
                    </ul>
                </div>
                <div className='navbar-lower-right container'>   
                    <Link to='/Signup'> <button className='signup-button'>My Account</button></Link>       
                </div>
            </div>






        </div>
    )
}

export default Navbar;

