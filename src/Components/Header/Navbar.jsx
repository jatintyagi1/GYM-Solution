import { useState } from 'react';
import GYM_Solution_Logo from './../../Assets/logo/GYM_Solution_Logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import '../../Styles/NavBar.css';

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    const [userdata] = useState(() => {
        const savedData = localStorage.getItem('userData');
        return savedData ? JSON.parse(savedData) : { name: '', email: '', mobileNumber: '' };
    });

    // Check if user is logged in
    const isLoggedIn = () => {
        const userData = localStorage.getItem('userData');
        return userData !== null; // Check if user data exists
    };



    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <nav className="navbar">
            <div className="navbar-gym-name">
                <Link to="/"><img src={GYM_Solution_Logo} alt="gym-solution" /></Link>
            </div>

            <section className={`navbar-menu ${menuOpen ? 'open' : ''}`}>
                <ul className={`navbar-menu-list ${menuOpen ? 'open' : ''}`}>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/Cardio">Cardio</Link></li>
                    <li><Link to="/Strength">Strength</Link></li>
                    <li><Link to="/Weight">Weight</Link></li>
                    <li><Link to="/Functional">Functional</Link></li>
                    <li><Link to="/Flooring">Flooring</Link></li>
                    <li><Link to="/Wellness">Wellness</Link></li>
                    <li><Link to="/Service">Services</Link></li>
                    <li><Link to="/Sale">Sale</Link></li>
                </ul>
            </section>

            <div className="navbar-user-account">
                <Link to={isLoggedIn() ? '/profile' : '/login'}>
                    {isLoggedIn ? <button>{userdata.name}</button> : <button>My Account</button>}
                </Link>
                <FontAwesomeIcon
                    icon={faBars}
                    className="icon hamburger-icon-navbar"
                    onClick={toggleMenu}
                />
            </div>
        </nav>
    );
}
