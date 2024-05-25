import React from 'react'
import './Footer.css'
import GYM_Solution_logo from './../../../Assets/logo/GYM_Solution_Logo.png'
import Instagram from './../../../Assets/images/Instagram.png'
import Facebook from './../../../Assets/images/Facebook.png'
import Youtube from './../../../Assets/images/Youtube.png'


const Footer = () => {
  return (
    <div className='footer-main-wrapper'>
        <div className='footer-upper-wrapper'>
            <div className='upper-one-container'>
                <div className='gym-logo'>
                    <img src={GYM_Solution_logo} alt=''></img>
                </div>
                <div className='gym-address-container'>
                    <h4>Gym Solution India</h4>
                    <p>18 Mac Person</p>
                    <p>New Delhi</p>
                    <p>India</p>
                </div>
            </div>
            <div className='upper-second-container'>
                <h4>We are available in whole India</h4>
                <ul>
                    <li>Contact us</li>
                    <li>New Delhi</li>
                    <li>Mumbai</li>
                    <li>Chennai</li>
                    <li>Kolkata</li>
                </ul>
            </div>
            <div className='upper-third-container'>
                <div className='follow-wrapper-container'>
                  <h4>Follow us</h4>  
                </div>
                <img src={Instagram} alt='instagram-logo'></img>
                <img src={Facebook} alt='facebook-logo'></img>
                <img src={Youtube} alt='youtube-logo' ></img>
            </div>
            <div className='upper-fourth-container'>
                <h4>SIGN UP TO OUR MAILING LIST</h4>
                <input type='email'></input>
                <button>Subscribe</button>
            </div>
        </div>
        <div className='footer-lower-wrapper'>
            <div className='footer-lower-container-wrapper'>
                <p>Made with love by <span>Jatin Tyagi</span></p>
                <p>Copyright - GYM-SOLUTION-2024</p>
            </div>
        </div>
    </div>
  )
}

export default Footer;