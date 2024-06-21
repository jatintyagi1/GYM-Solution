import React from 'react'
import  './rigs.css'
import ProductCategory from '../../Components/CoreComponents/Product Category/ProductCategory';
import BrandCategory from '../../Components/CoreComponents/Brand Category/BrandCategory';
import RigsImage from '../../Assets/images/Rigs';

const Rigs = () => {
  return (
    <div className='rigs-top-container-wrapper'>
    <div className='rigs-top-background-wallpaper'>
      <h1>RIGS</h1>
    </div>
    <div className='rigs-main-container-wrapper'>
      <div className='rigs-category-container-wrapper'>
        <div className='rigs-product-category-container'>
          <ProductCategory />
        </div>
        <div className='rigs-brand-category-container'>
          <BrandCategory />
        </div>
      </div>
      <div className='rigs-image-container-wrapper'>
        {RigsImage.map((image, index) => (
          <div key={index} className='rigs-image-container-wrapper'>
            <img src={image.src} alt={image.alt} className="rigs-gallery-image" />
            <p className="rigs-image-description">{image.description}</p>
            <p className="rigs-product-price">{image.price}</p>
            <button className="rigs-enquire-button">{image.buttonText}</button>
          </div>
        ))}
      </div>
    </div>
  </div>
  )
}

export default Rigs;