import React from 'react'
import './wellness.css'
import ProductCategory from '../../Components/CoreComponents/Product Category/ProductCategory';
import WellnesImage from '../../Assets/images/Wellnes';

const Wellnes = () => {
  return (
    <div className='wellnes-main-full-wrapper'>
      <div className='wellnes-top-background-wallpaper'>
        <h1>WELLNESS</h1>
      </div>

      <div className='wellnes-bottom-grid-div'>
        <div className='wellness-product-category-container'>
          <ProductCategory />
        </div>

        <hr className='wellness-seprating-line' />

        <div className='wellnes-main-container-wrapper'>  
          {WellnesImage.map((image, index) => (
            <div key={index} className='wellnes-image-container'>
              <img src={image.src} alt={image.alt} className="wellnes-gallery-image" />
              <p className="wellnes-image-description">{image.description}</p>
              <button className="wellnes-enquire-button">{image.buttonText}</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Wellnes;