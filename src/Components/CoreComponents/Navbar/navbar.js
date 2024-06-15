import React, { useState } from 'react';
import './navbar.css';
import GYM_Solution_Logo from './../../../Assets/logo/GYM_Solution_Logo.png';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faSearch, faPhone } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  const [showSearch, setShowSearch] = useState(false);
  const [dropdown, setDropdown] = useState(null);

  const handleSearchToggle = () => {
    setShowSearch(!showSearch);
  };

  const handleMouseEnter = (menu) => {
    setDropdown(menu);
  };

  const handleMouseLeave = () => {
    setDropdown(null);
  };

  return (
    <div className='navbar-wrapper'>
      <div className='navbar-wrapper-upper-container'>
        <div className='navbar-upper-left-container'>
          <FontAwesomeIcon icon={faPhone} className='phone-icon' />
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
            <li><Link to='/Return-Policy'>Return Policy</Link></li>
            <li><Link to='/FAQs'>FAQs</Link></li>
            <li><Link to='/About-us'>About us</Link></li>
            <li><Link to='blog-News'>Blog/News</Link></li>
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
          <img src={GYM_Solution_Logo} alt='Logo' />
        </div>
        <div className='navbar-lower-middle-container'>
          <ul className='navbar-lower-list'>
            <li><Link to="/">Home</Link></li>
            <li
              onMouseEnter={() => handleMouseEnter('Cardio')}
              onMouseLeave={handleMouseLeave}
              className='nav-item'
            >
              <Link to="/Cardio">Cardio</Link>
              {dropdown === 'Cardio' && (
                <ul className='dropdown-menu'>
                  <li>Climber</li>
                  <li>Cross Trainer</li>
                  <li>Recumbent Bikes</li>
                  <li>Rower</li>
                  <li>Spin Bikes</li>
                  <li>Treadmills</li>
                  <li>Upright Bikes</li>
                  <li>Cardio Package</li>
                  <li>Other Cardio</li>
                  <li></li>
                </ul>
              )}
            </li>
            <li
              onMouseEnter={() => handleMouseEnter('Strength')}
              onMouseLeave={handleMouseLeave}
              className='nav-item'
            >
              <Link to="/Strength">Strength</Link>
              {dropdown === 'Strength' && (
                <ul className='dropdown-menu'>
                  <li><Link to="/Strength/Benches">Plate Loaded</Link></li>
                  <li><Link to="/Strength/Racks">Pin Loaded</Link></li>
                  <li>Strength Package</li>
                  <li></li>
                </ul>
              )}
            </li>
            <li
              onMouseEnter={() => handleMouseEnter('Weight')}
              onMouseLeave={handleMouseLeave}
              className='nav-item'
            >
              <Link to="/Weight">Weight</Link>
              {dropdown === 'Weight' && (
                <ul className='dropdown-menu'>
                  <li><Link to="/Weight/Dumbbells">Barbells</Link></li>
                  <li><Link to="/Weight/Plates">Bench</Link></li>
                  <li>Olympic Plates</li>
                  <li>Kettlebells</li>
                  <li>Dumbbells</li>
                  <li>Storage</li>
                  <li>Accessories</li>
                  <li></li>
                </ul>
              )}
            </li>
            <li
             onMouseEnter={() => handleMouseEnter('Functional')}
             onMouseLeave={handleMouseLeave}
             className='nav-item'
            >
            <Link to="/Functional">Functional</Link>
            {dropdown === 'Functional' && (
                <ul className='dropdown-menu'>
                   <li>Boxing Equipment</li>
                   <li>Functional Cardio</li>
                   <li>Functional Trainers</li>
                   <li>Rigs</li>
                   <li>Other Functional Equipments</li>
                   <li></li>
                </ul>
            )}
            </li>
            <li><Link to="/Flooring">Flooring</Link></li> 
            <li
              onMouseEnter={()=> handleMouseEnter('Wellness')}
              onMouseLeave={handleMouseLeave}
              className='nav-item'
            >
            <Link to="/Wellness">Wellness</Link>
            {dropdown === 'Wellness' && (
                <ul className='dropdown-menu'>
                    <li><Link to='/Product/Wellness/Saunas'>Saunas</Link></li>
                    <li>Hot Tubes</li>
                    <li>Cold plunges</li>
                    <li></li>
                </ul>
            )}
            </li>
            <li
             onMouseEnter={()=> handleMouseEnter('Service')}
             onMouseLeave={handleMouseLeave}
             className='nav-item'
            >
            <Link to="/Service">Services</Link>
           {dropdown === 'Service' && (
             <ul className='dropdown-menu'>
             <li><Link to='/Service/3d-Gym-Design'>3D Gym Design</Link></li>
             <li><Link to='/Service/commercial-health-club'>Commercial Health Club</Link></li>
             <li><Link to='/Service/hotel-&-apartment'>Hotel & Apartment</Link></li>
             <li><Link to='/Service/school-gym'>School Gym</Link></li>
             <li><Link to='/Service/home-gym'>Home Gym</Link></li>
             <li></li>
         </ul>
           )}
            </li>
            <li><Link to="/Sale">Sale</Link></li>
          </ul>
        </div>
        <div className='navbar-lower-right-container'>
          <Link to='/Signup'><button className='signup-button'>My Account</button></Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
