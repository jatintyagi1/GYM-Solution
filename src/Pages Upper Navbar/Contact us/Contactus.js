import React from 'react'
import './contactus.css'

const Contactus = () => {
  return (
    <div className='full-page-wrapper'>
      <div className='left-page-wrapper'>
        <div className='upper-left-container'>
          <h1 className='contact-us-heading'>CONTACT US</h1>
          <h3 className='phone-heading'>Phone : 123456789</h3>
          <h3 className='opening-hour-heading'>Opening Hour:</h3>
          <p className='week-text'>Monday – Friday: 8am – 4.30pm</p>
          <p className='saturday-text'>Saturday: By Appointment – please call 9008 1481</p>
        </div>
        <div className='lower-left-container'>
          <p className='lower-left-text'>You can check out our range of Used, Remanufactured and New Commercial Gym Equipment in person! Contact Us to come down and visit our huge 2,000 square metre factory and showroom at 18 McPherson St, Banksmeadow, NSW 2019. The closest cross street is Exell Street. We have plenty of parking onsite and pick up is welcomed.</p>
          <p className='lower-left-text'>We can organise shipping anywhere just contact us via email or phone and we can work out the shipping for your items. We are happy to help  you organise freight anywhere in Australia or overseas. However, please note  we take no responsibility for delivery issues or damages to equipment whilst in transit.</p>
        </div>
      </div>
      <div className='right-page-wrapper'>
        <h1>Fill out our contact form to get in touch:</h1>
       <form>
        <label for='name'>Name : </label>
        <input type='text' placeholder='Enter your Name' id='name' name='name' required></input>
        <label for='email' >Email : </label>
        <input type='email' placeholder='Enter Your Email' id='email' name='email' required ></input>
        <label for='phone'>Phone : </label>
        <input type='mobile' placeholder='Enter Mobile Number' id='mobile' name='mobile-number' required></input>
        <label for='interest'>I am interested in : </label>
        <select id="interest">
        <option value="option1">Home Gym Use</option>
        <option value="option2">Bussiness Gym Use</option>  
      </select>
      <label for='motive'>I am : </label>
        <select id="motive">
        <option value="option1">Buying Gym Equipment</option>
        <option value="option2">Selling Gym Equipment</option>
        </select> 
        <label for='product'>What Product are you interested in : </label>
        <input type='text' id='product' name='product'></input> 
       <label for='post-code'>Post Code</label>
       <input type='text' id='post-code' name='post-code'></input>
       <label for='country'>Country</label>
      <input type='text' id='country' name='country'></input>
      <button type='submit' className='submit-button'>Submit</button>  
       </form>
      </div>
    </div>
  )
}

export default Contactus;