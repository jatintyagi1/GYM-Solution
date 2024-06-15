import React from 'react'
import './homeGym.css'
import Home_Gym_A from './../../Assets/images/Home_Gym_A.png'
import Home_Gym_B from './../../Assets/images/Home_Gym_B.png'
import Home_Gym_C from './../../Assets/images/Home_Gym_C.png'
import Home_Gym_D from './../../Assets/images/Home_Gym_D.png'
import Home_Gym_E from './../../Assets/images/Home_Gym_E.png'
import Home_Gym_F from './../../Assets/images/Home_Gym_F.png'
import Home_Gym_G from './../../Assets/images/Home_Gym_G.png'

const HomeImage =[
   {src:Home_Gym_A},
   {src:Home_Gym_B},
   {src:Home_Gym_C},
   {src:Home_Gym_D},
];

const HomeGym = () => {
  return (
    <div className='home-gym-page-full-wrapper'>
      <div className='home-gym-top-background-wrapper'>
        <h1 className='home-gym-top-text-heading'>Home Gym Design</h1>
      </div>
      <div className='home-gym-main-container-wrapper'>
        <p className='home-gym-para-a'>The Shift to working out at home!</p>
        <p className='home-gym-para-b'>Culturally, we know that gyms and recreational activity play a key part in maintaining both mental & physical wellbeing, along side providing a sense of community and social connectivity. Around the world, as the pandemic took hold, medical professionals stressed the importance of maintaining physical activity as individuals were more isolated than ever before. As a result, at-home workouts, and the routine they provide became a valued part of ‘lockdown life’ for many</p>
        <p className='home-gym-para-c'>For many, working out from home is far more inclusive, affordable, and flexible – this shift in accessibility has somewhat democratised the industry, allowing more people to embark on a fitness journey from the comfort of their homes.</p>
        <div className='home-gym-image-top-container'>
          {HomeImage.map((home,index) => (
           <img key={index} src={home.src} alt={`home Design ${index + 1}`} className="home-image-item" />
          ))}
        </div>
        <p className='home-gym-para-d'>There are a lot of perks to working out at home. You’ll save time & money for one. Not to mention you’ll never have to wait to use your favourite piece of equipment again! The right home gym set for you may be a power rack with a chin-up bar, or maybe, you want a multi-gym that replaces eight machines. Whatever you’re after, at Gym Solutions, we’ll figure out the best way to get you the right home workout equipment in the right place. Whether you’re into cardio, weight training, Crossfit or yoga, we’ll design and install the perfect home gym for you.</p>
       <div className='home-gym-image-lower-container'>
        <img src={Home_Gym_E} alt='' className='home-image'></img>
        <img src={Home_Gym_F} alt='' className='home-image'></img>
        <img src={Home_Gym_G} alt='' className='home-image'></img>
       </div>
       <p className='home-gym-para-e'>We’ve been supplying home gym equipment in Sydney and the rest of Australia for many years and we’re the experts at designing a home gym to maximise your space and let you get the most out of your home workouts. With high quality, space saving equipment on offer – you might be surprised what you can achieve in a small space.</p>
      </div>
    </div>
  )
}

export default HomeGym;