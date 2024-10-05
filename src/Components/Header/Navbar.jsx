import { useState } from 'react';
import GYM_Solution_Logo from './../../Assets/logo/GYM_Solution_Logo.png';

import { Link } from 'react-router-dom';

import '../../Styles/NavBar.css';


export default function Navbar() {
    const [dropdown, setDropdown] = useState(null);

    const handleMouseEnter = (menu) => {
        setDropdown(menu);
    };

    const handleMouseLeave = () => {
        setDropdown(null);
    };

    return (
        <nav className="navbar">
            <div className="navbar-gym-name">
                <img src={GYM_Solution_Logo} alt="gym-solution" />
            </div>

            <section className="navbar-menu">
                <ul className='navbar-menu-list'>
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
                                <li><Link to='/Product/Weight/barbells'>Barbells</Link></li>
                                <li><Link to='/Product/Weight/bench'>Bench</Link></li>
                                <li><Link to='/Product/weight/olympic-plates'>Olympic Plates</Link></li>
                                <li><Link to='/Product/weight/Kettle-bells'>Kettlebells</Link></li>
                                <li><Link to='/Product/weight/dumbells'>Dumbbells</Link></li>
                                <li><Link to='/Product/weight/storage'>Storage</Link></li>
                                <li><Link to='/Product/weight/accessories'>Accessories</Link></li>
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
                                <li><Link to='/Product/Functional/boxing-equipment'>Boxing Equipment</Link></li>
                                <li><Link to='/Product/Functional/functional-cardio'>Functional Cardio</Link></li>
                                <li><Link to='/Product/Functional/functional-trainer'>Functional Trainers</Link></li>
                                <li><Link to='/Product/Functional/rigs'>Rigs</Link></li>
                                <li><Link to='/Product/Functional/other-equipments'>Other Functional Equipments</Link></li>
                                <li></li>
                            </ul>
                        )}
                    </li>
                    <li><Link to="/Flooring">Flooring</Link></li>
                    <li
                        onMouseEnter={() => handleMouseEnter('Wellness')}
                        onMouseLeave={handleMouseLeave}
                        className='nav-item'
                    >
                        <Link to="/Wellness">Wellness</Link>
                        {dropdown === 'Wellness' && (
                            <ul className='dropdown-menu'>
                                <li><Link to='/Product/Wellness/Saunas'>Saunas</Link></li>
                                <li><Link to='/Product/Wellness/Hot-tubs'>Hot Tubes</Link></li>
                                <li><Link to='/Product/Wellness/cold-plunges'>Cold Plunges</Link></li>
                                <li></li>
                            </ul>
                        )}
                    </li>
                    <li
                        onMouseEnter={() => handleMouseEnter('Service')}
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
            </section>

            <div className="navbar-user-account">
                <button>My Account</button>
            </div>

        </nav>
    )
}