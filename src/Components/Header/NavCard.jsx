import '../../Styles/NavCard.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faSearch, faPhone } from '@fortawesome/free-solid-svg-icons';

import { Link } from 'react-router-dom';


export default function NavCard() {
    return (
        <nav className="navCard">
            <div className="navCard-right">
                <FontAwesomeIcon icon={faPhone} className='phone-icon' />
                <p className='mobile-number'>Call now 123 456 789</p>
            </div>

            <section className="navCard-menu">
                <ul className="navCard-menu-list">
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
            </section>

            <div className="navCard-left">
                <FontAwesomeIcon icon={faSearch} className='search-icon' />
                <FontAwesomeIcon icon={faShoppingCart} className='cart-icon' />
            </div>
        </nav>
    )
}