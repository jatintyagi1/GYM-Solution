import React from 'react'
import './distributors.css'
import BH_Fitness from './../../../Assets/images/BH_Fitness.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTruck, faHome, faHeart, faPhone } from '@fortawesome/free-solid-svg-icons';


const Distributor = () => {
    return (
        <div className='outer-container-wrapper'>
            <div className='upper-container-wrapper'>
                <h1 className='top-text'>EXCLUSIVE All INDIA DISTRIBUTOR</h1>
                <div className='image container'>
                   <img src={BH_Fitness} alt=''></img>   
                </div>     
            </div>
            <div className='lower-container-wrapper'>
                <div className='lower-container'>
                    <div className='container1'>
                        <FontAwesomeIcon icon={faTruck} className='icons' />
                        <h3>ALL INDIA DELEVERY</h3>
                        <p>we organise delivery</p>
                        <p>in ALL INDIA.</p>
                    </div>
                    <div className='container2'>
                        <FontAwesomeIcon icon={faHome} className='icons' />
                        <h3>WAREHOUSE PICK-UP</h3>
                        <p>You may also choose to pick-up</p>
                        <p>directly from our delhi</p>
                        <p>Warehouse.</p>
                    </div>
                    <div className='container3'>
                        <FontAwesomeIcon icon={faHeart} className='icons' />
                        <h3>5 Star Review</h3>
                        <p>Read our 5 star Google Review</p>
                        <p>and Hear from our Loyal</p>
                        <p>Customer</p>
                    </div>
                    <div className='container4'>
                        <FontAwesomeIcon icon={faPhone} className='icons' />
                        <h3>CUSTOMER SUPPORT</h3>
                        <p>We will se you through the whole</p>
                        <p>process of setting up your gym</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Distributor;