import React from 'react'
import './commHealthClub.css'
import Gym_Comm_Health from './../../Assets/Videos/Gym_Comm_Health.mp4'
import Comm_A from './../../Assets/images/Comm_A.png'
import Comm_B from './../../Assets/images/Comm_B.png'
import Comm_C from './../../Assets/images/Comm_C.png'

const CommHealthClub = () => {

  return (
    <div className='health-club-page-full-wrapper'>
      <div className='health-club-top-video-wrapper'>
        <video className='video-element' autoPlay muted loop controls>
        <source src={Gym_Comm_Health} type="video/mp4"></source>
        </video>
      </div>
      <div className='health-club-main-wrapper'>
        <h1 className='main-wrapper-top-text'>Commercial Gym</h1>
        <p className='health-club-para-a'>Not only are we suppliers of some of the best gym equipment in the world, but we are also reputable gym designers and installers, making us a one stop shop for gyms! We can also customise your equipment to suit your brand colours and aesthetic.</p>
       <p className='health-club-para-b'>We use an innovative 3D gym design software during the design process of a gym, so that you can visualise the space you want before we build it. Our complete gym design and installation service includes everything from rubber gym flooring, lighting, renovation, painting through to the installation of our superior equipment.</p>
       <p className='health-club-para-c'>Having extensive experience in designing a variety of gyms ranging from commercial, boutique, hotel and school gyms, we understand that each gym has their own needs and preferences.</p>
       <div className='health-club-top-image-container'>
       <img src={Comm_A} alt=''></img>
       <img src={Comm_B} alt=''></img> 
       </div>
       <p className='health-club-para-d'>We’ve helped many gym owners create a gym space that reflects their brand and their passion for fitness. Not only can we help you design a functional space that is welcoming for your members, but we can also customise your machines and equipment to suit your brand colours and make your gym stand out. Whether you’re creating a small boutique studio or a large training facility, we’ll help with the design of the gym, all the way to the installation of our top notch equipment and everything in between!</p>
       <div className='health-club-lower-image-container'>
        <img src={Comm_C} alt=''></img>
       </div>
      </div>
    </div>
  )
}

export default CommHealthClub;