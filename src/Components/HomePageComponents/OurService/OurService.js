import React from 'react'
import './ourService.css'
import Service1 from './../../../Assets/logo/Service1.png'
import Service2 from './../../../Assets/logo/Service2.png'
import Service3 from './../../../Assets/logo/Service3.png'
import Service4 from './../../../Assets/logo/Service4.png'
import Service5 from './../../../Assets/logo/Service5.png'
import Service6 from './../../../Assets/logo/Service6.png'
import Service7 from './../../../Assets/logo/Service7.png'
import Service8 from './../../../Assets/logo/Service8.png'

const ServiceImages = [
    {src: Service1, text: 'Commercial Gym & Health Club'},
    {src: Service2, text: 'Hotel & Resort'},
    {src: Service3, text: 'Apartment Complex'},
    {src: Service4, text: 'School & University'},
    {src: Service5, text: 'Sporting Club'},
    {src: Service6, text: 'Emergency Service'},
    {src: Service7, text: 'Aged Care and Retirement'},
    {src: Service8, text: 'Corporate Fitness Center'},
];

const OurService = () => {
  return (
    <div className='our-Service-wrapper'>
        <div className='inner-wrapper'>
            <div className='our-Service-container'>
                <h1>WE SERVICE</h1>
            </div>
            <div className="Service-grid">
                {ServiceImages.map((Service, index) => (
                    <div key={index} className="Service-item">
                        <img src={Service.src} alt={`Brand ${index}`} />
                        <p>{Service.text}</p>
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default OurService;
