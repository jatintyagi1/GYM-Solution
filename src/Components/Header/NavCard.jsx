import '../../Styles/NavCard.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faSearch, faPhone, faBars } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function NavCard() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <nav className="navCard">
            {/* Right Section */}
            <div className="navCard-right">
                <FontAwesomeIcon icon={faPhone} className="icon phone-icon" />
                <p className="mobile-number">Call now 123 456 789</p>
            </div>

            {/* Menu Section */}
            <section className={`navCard-menu ${menuOpen ? 'open' : ''}`}>
                <ul className="navCard-menu-list">
                    <li><Link to="/Shop-By-Brand">Shop by Brand</Link></li>
                    <li><Link to="/Refurbishment">Refurbishment</Link></li>
                    <li><Link to="/Project">Project</Link></li>
                    <li><Link to="/Video">Video</Link></li>
                    <li><Link to="/Finance">Finance</Link></li>
                    <li><Link to="/Warranty">Warranty</Link></li>
                    <li><Link to="/Return-Policy">Return Policy</Link></li>
                    <li><Link to="/FAQs">FAQs</Link></li>
                    <li><Link to="/About-us">About us</Link></li>
                    <li><Link to="/blog-News">Blog/News</Link></li>
                    <li><Link to="/Contact-us">Contact us</Link></li>
                </ul>
            </section>

            {/* Left Section */}
            <div className="navCard-left">
                <FontAwesomeIcon icon={faSearch} className="icon search-icon" onClick={() => alert('Search clicked!')} />
                <div className="cart-icon-wrapper">
                    <FontAwesomeIcon icon={faShoppingCart} className="icon cart-icon" />
                    <span className="cart-badge">3</span>
                </div>

                {/* Hamburger Menu Icon for Small Screens */}
                <FontAwesomeIcon 
                    icon={faBars} 
                    className="icon hamburger-icon" 
                    onClick={toggleMenu} 
                />
            </div>
        </nav>
    );
}
