import React from 'react'
import './refurbishment.css'
import Clean_Service from './../../Assets/images/Clean_Service.png'
import Recondition from './../../Assets/images/Recondition.png'
import Refurbishment_A from './../../Assets/images/Refurbishment_A.png'
import Before_1 from './../../Assets/images/Before_1.png'
import Before_2 from './../../Assets/images/Before_2.png'
import Before_3 from './../../Assets/images/Before_3.png'
import Before_4 from './../../Assets/images/Before_4.png'

import After_1 from './../../Assets/images/After_1.png'
import After_2 from './../../Assets/images/After_2.png'
import After_3 from './../../Assets/images/After_3.png'
import After_4 from './../../Assets/images/After_4.png'


const Refurbishment = () => {
  return (
    <div className='main-wrapper-container'>
      <h1 className='top-upper-text'>REFURBISHMENT</h1>
      <div className='upper-main-container-wrapper'>
        <div className='left-container'>
          <h3 className='our-service-tier-text'>Our Service Tiers Explained</h3>
          <p className='upper-paragraph-text'>Here at Gym Solutions, we have a passion for refurbishing and maintaining equipment so that they’re restored to their original, premium state. Our team of experts have years of experience with refurbishing commercial fitness equipment and we ensure that every piece of commercial gym equipment is not only fully functioning, but has also been beautifully renewed and ready to give you many more years of use.</p>
          <div className='left-container-icons-wrapper-container'>
            <div className='first-icon-container'>
              <img src={Clean_Service} alt=''></img>
              <p>Our certified technicians clean the unit thoroughly and inspect each part to ensure that they are in working order. If there are any worn parts beyond 60% of its expected lifetime, they are replaced and we ensure that there aren’t any mechanical problems that we’re aware of.</p>
            </div>
            <div className='second-icon-container'>
              <img src={Recondition} alt=''></img>
              <p>In our commercial gym equipment maintenance bay, we service, repair and replace components to ensure that the product is fully functional.</p>
            </div>
            <div className='third-icon-container'>
            <img src={Refurbishment_A} alt=''></img>
            <p>To refurbish equipment, we strip the units down to their base components and recondition motors, bearings, brushes, drive belts, decks and running belts as well as powder coat the unit. Upholstery can be changed and the body and plastics can be sprayed and painted to either freshen up or change the colour scheme.</p>
            </div>
  
          </div>
        </div>
        <div className='right-container'>
          <h3>Service Request</h3>
          <form className='form-container'>
            <label for='name'>Name : </label>
            <input type='text' placeholder='Enter your Name' id='name' name='name' required></input>
            <label for='email'>Email : </label>
            <input type='email' placeholder='enter your Email' id='email' name='email' required></input>
            <label for='address'>Address : </label>
            <input type='text' placeholder='enter your Address' id='address' name='address' required></input>
            <label for='city'>City : </label>
            <input type='text' placeholder='enter your City' id='city' name='city' required></input>
            <label for='state'>State : </label>
            <input type='text' placeholder='Enter your state' id='state' name='state' required></input>
            <label for='brand'>Equipment & Brand : </label>
            <input type='text'  id='brand' name='brand' required></input>
            <label for='model'>Model : </label>
            <input type='text' id='model' name='model' required></input>
            <button type='submit'>Submit</button>
          </form>
        </div>
      </div>

     {/* second div start here */}
      <div className='middle-container-wrapper'>
        <h3>Gym Equipment Refurbishment Before</h3>
        <div className='upper-image-grid'>
          <img src={Before_1} alt=''></img>
          <img src={Before_2} alt=''></img>
          <img src={Before_3} alt=''></img>
          <img src={Before_4} alt=''></img>
        </div>
      </div>

      {/* third div start here  */}

      <div className='lower-container-wrapper'>
          <h3>Gym Equipment Refurbishment After</h3>
          <div className='lower-image-grid'>
          <img src={After_1} alt=''></img>
          <img src={After_2} alt=''></img>
          <img src={After_3} alt=''></img>
          <img src={After_4} alt=''></img>
          </div>
      </div>
    </div>
  )
}

export default Refurbishment;