import React from 'react';
import './help.css';
import Gym_Design from './../../../Assets/images/Gym_Design.png';
import Home_Design from './../../../Assets/images/Home_Design.png';
import Service_Repair from './../../../Assets/images/Service_Repair.png';
import Purchase from './../../../Assets/images/Purchase.png';

const HelpImage = [
  { src: Gym_Design, text: 'Gym Design' },
  { src: Home_Design, text: 'Home-Design' },
  { src: Service_Repair, text: 'Service and repair' },
  { src: Purchase, text: 'We Purchase your used Equipment' },
];

const Help = () => {
  return (
    <div className='outer-wrapper'>
      <h1>WE CAN HELP WITH</h1>
      <div className='text-top-wrapper'>
        <div className='text-items'>
        <p className='upper-text'>As one of India’s leading gym equipment suppliers, we have a wide range of high-quality gym equipment</p>
        <p className='lower-text'>for sale from a variety of industry-leading brands. We also offer:</p>
        </div>
        <div className="image-grid">
          {HelpImage.map((item, index) => (
            <div key={index} className="image-container">
              <img src={item.src} alt={item.text} />
              <div className="image-overlay">
                <p>{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Help;
