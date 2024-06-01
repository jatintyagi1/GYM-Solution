import React from 'react';
import './sale.css'
import SaleImage from '../../Assets/images/Sale';

const Sale = () => {
  return (
    <div className="Sale-full-page-wrapper">
      <div className='sale-upper-text-wrapper'>
         <h1 className='sale-top-text'>Special on Equipment</h1>
      </div>  
      <p className='sale-top-para'>Looking for a bargain on premium commercial and home gym equipment? Shop our latest specials and last chance deals on our range brand new and used gym equipment! In our Specials range, we have a few cardio and strength machines, free weights and gym sets for sale at an affordable price, so be quick and snatch up a great deal!</p>   
      <div className="sale-image-grid">
        {SaleImage.map((image, index) => (
          <div className="sale-grid-item" key={index}>
            <img src={image.src} alt={image.alt} className="sale-grid-image" />
            <div className="sale-image-description">
              <p>{image.description}</p>
              <p className="sale-price">
                <span className="sale-current-price">{image.currentPrice}</span>
                <span className="sale-original-price">{image.originalPrice}</span>
                <span className="sale-discount-price">{image.discountPrice}</span>
              </p>
              <button>{image.buttonText}</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sale;
