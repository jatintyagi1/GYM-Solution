import React from 'react'
import './gymDesign.css'
import Service_A from './../../Assets/images/Service_A.png'
import Service_B from './../../Assets/images/Service_B.png'
import Service_C from './../../Assets/images/Service_C.png'
import Service_D from './../../Assets/images/Service_D.png'
import Service_E from './../../Assets/images/Service_E.png'
import Service_F from './../../Assets/images/Service_F.png'
import Service_G from './../../Assets/images/Service_G.png'

const GymDesign = () => {
  return (
    <div className='gym-design-page-full-wrapper'>
        <div className='gym-design-page-top-background-wrapper'>
           <h1 className='gym-design-top-heading'>3D Gym Design</h1>
        </div>
        <div className='gym-design-main-container-wrapper'>
            <p className='gym-design-para-a'>Design your facility with complete confidence and accuracy at Gym Solutions. We offer our clients high-resolution 3D gym designs across various environments, from large commercial gyms, hotels, sports clubs, and personal training studios to home gyms for clients wanting a private gym in their homes or garage. No matter the size of your commercial fit-out, the gym designers at Gym Solutions will help you bring your dream facility to life!</p>
            <div className='gym-design-top-image-container'>
                <img src={Service_A} alt=''></img>
                <img src={Service_B} alt=''></img>
            </div>
            <p className='gym-design-para-b'>Here at Gym Solutions, our expert team of gym designers will not only help in the design process for your home and commercial gym fit-out, but we’ll also supply you with some of the world’s leading brands in the fitness industry, while coordinating, delivering, and installing your entire gym from start to finish.With a multitude of equipment options and design possibilities available, plus the fitness market constantly improving and becoming more competitive, it’s vital that your commercial gym fit-out leaves a long-lasting initial impression.</p>
          <div className='gym-design-middle-image-container'>
            <img src={Service_C} alt=''></img>
            <img src={Service_D} alt=''></img>
            <img src={Service_E} alt=''></img>
          </div>
          <p className='gym-design-para-c'>How does it work? It’s simple! We use the latest interior design software to plan, create and visualise your home or commercial gym fit-out. Using real-life scales to maximise usage of the gym floor, we are able to determine exactly what will fit into your space.</p>
         <p className='gym-design-para-d'>Whether you are looking for Remanufactured, Second-hand gym equipment or New Commercial Gym Equipment, our gym designers can put together a total solution that is right for you.</p>
         <p className='gym-design-para-e'>We promise you exceptional service throughout the entire gym design and installation process.</p>
        <div className='gym-design-lower-image-container'>
            <img src={Service_F} alt=''></img>
            <img src={Service_G} alt=''></img>
        </div>     
        </div>
    </div>
  )
}

export default GymDesign;