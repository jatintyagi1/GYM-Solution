import React from 'react'
import '../Styles/NavCardPage/about.css';
import About_Us from '../Assets/images/About_Us.png'

const Aboutus = () => {
  return (
    <div className='whole-page-wrapper'>
      <div className='about-us-text-wrapper'>
        <h1>ABOUT US</h1>
        </div>
        <div className='image-wrapper'>
          <img src={About_Us} alt=''></img>
        </div>
     
     <h1 className='about-company-text'>ABOUT GYM SOLUTION</h1>

     <div className='about-text-wrapper'>
      <p className='text'>What do you need to know about Gym Solutions? We are India’s leading supplier of used, new and remanufactured fitness equipment and commercial gym equipment. Our Banksmeadow factory is located at 18 McPherson St, Banksmeadow, NSW. The closest cross street is Exell Street and we have plenty of parking onsite. We have an extensive product range of all the top quality commercial brands and models of fitness and gym solutions from around the world. Our commercial strength and cardio equipment is suited to health clubs, schools, personal training studios, home gyms, residential apartments, hotels and corporate fitness centres.</p>
      <p className='text'>Gym Solutions can supply you used and refurbished commercial fitness equipment at unbeatable prices, we can save you thousands instead of buying brand new gym equipment. Every piece of commercial gym equipment is fully functioning, has been beautifully renewed and is ready to give you years more of use. So if you’re looking for commercial cardio in treadmills, cross trainers, upright bikes, recumbent bikes, steppers, arc trainers, spin bikes and summit trainers we will help you find the right choice to suit your requirements and also save you loads. We also sell the top brands such as TuffStuff Fitness International, Gym Rax and Aktiv Solutions.</p>
     <p className='text'>Jason has been around the fitness industry all his life; he was a pro champion power lifter and body builder in the UK. His life’s passion for fitness equipment gives him pride in the refurbishment of the fitness equipment he buys. He has years of experience to offer full Gym Designs and Fitouts for large to small gyms, studios and even home gyms. Working with our trusted partners we can project manage the complete fitout bringing together everything you need – flooring, bathrooms, kitchens, office space as well as the best prices on top equipment. Nothing is to too big, too small or too difficult.</p>
     <p className='text'>We ship to Delhi, Mumbai, Kolkata, Chennai, Bangalore, Kerala, Tamil Nadu, Hydrabad, Gujrat, Madhya Pradesh, Indore, Bhopal, Himalchal Pradesh and we are also currently shipping containers overseas to Poland, Singapore, UK and Dubai.</p>
     <p className='text'>Remember, we don’t just sell commercial gym fitness equipment, we also buy your used equipment in India.</p>
     <p className='text'>We work with India’s only dedicated gym equipment finance broker. They understand the financial requirements of the fitness industry and they can find you the right solution regardless of your size.</p>
     <p className='text'>Make an appointment to visit us at 18 McPherson St, Banksmeadow by calling 02 9008 1481 or email at info@gymsolutions.com.au to see the quality of our products with your own eyes or jump online and take a look at just of a sample of what we have in our 2,000 square metre warehouse in Delhi.</p>
     </div>
      
    </div>
  )
}

export default Aboutus;