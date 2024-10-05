import '../../Styles/Footer.css';

import GYM_Solution_logo from './../../Assets/logo/GYM_Solution_Logo.png'
import Instagram from './../../Assets/images/Instagram.png'
import Facebook from './../../Assets/images/Facebook.png'
import Youtube from './../../Assets/images/Youtube.png'

import { Link } from 'react-router-dom'

export default function Footer() {
    return (
        <footer className="footer">
            {/* Upper Footer   */}
            <section className="footer-upper-section">
                <div className="footer-one">
                    <div className='footer-gym-logo'>
                        <img src={GYM_Solution_logo} alt='Gym Solution' />
                    </div>
                    <div className='footer-gym-address'>
                        <h4>Gym Solution India</h4>
                        <p>18 Mac Person</p>
                        <p>New Delhi</p>
                        <p>India</p>
                    </div>
                </div>

                <div className='footer-two'>
                    <h4>We are available in whole India</h4>
                    <ul>
                        <li><Link to='/contact-us'>Contact us</Link></li>
                        <li><Link to='/about-us'>About Us</Link></li>
                        <li><Link to='/New-Delhi'>New Delhi</Link></li>
                        <li><Link to='/Mumbai'>Mumbai</Link></li>
                    </ul>
                </div>

                <div className='footer-three'>
                    <div className='follow-wrapper-container'>
                        <h4>Follow us</h4>
                    </div>
                    <img src={Instagram} alt='instagram-logo'></img>
                    <img src={Facebook} alt='facebook-logo'></img>
                    <img src={Youtube} alt='youtube-logo' ></img>
                </div>

                <div className='footer-four'>
                    <h4>SIGN UP TO OUR MAILING LIST</h4>
                    <input type='email'></input>
                    <button>Subscribe</button>
                </div>

            </section>
            {/* Lower Footer   */}
            <section className="footer-lower-section">
                <div className='footer-lower-container'>
                    <p>Made by <span>Jatin Tyagi</span></p>
                    <p>© {new Date().getFullYear()} Gym Solution. All rights reserved.</p>
                </div>
            </section>
        </footer>
    )
}