import React from 'react'
import '../../Styles/pages/service.css';
import ServiceImage from '../../Assets/images/Service';

const Service = () => {
  return (
    <div className='service-full-wrapper'>
      <div className='service-top-wrapper'>
        <h1 className='service-top-text-heading'>OUR SERVICES</h1>
      </div>
      <p className='service-top-para-text'>At Gym Solutions, we are your one-stop-shop in the fitness industry! We fit out, service & sell to all gyms all over India and other parts of World. With a wide range of services, industry experience and extensive range of equipment, our staff will work with you to coordinate & design the gym of your dreams.</p>
      <div className='service-image-grid'>
        {ServiceImage.map((image,index) => (
         <div className='service-grid-item' key={index}>
          <img src={image.src} alt={image.alt} className='service-grid-image'></img>
          <div className='service-image-description'>
            <p className='image-title'>{image.title}</p>
            <p className='image-description'>{image.description}</p>
          </div>
         </div> 
        ))}
    </div>
    </div>
  )
}

export default Service;