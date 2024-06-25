import React from 'react'
import ProductCategory from './../../Components/CoreComponents/Product Category/ProductCategory'
import BrandCategory from './../../Components/CoreComponents/Brand Category/BrandCategory'
import BoxEquipmentImage from '../../Assets/ImageArray/boxEquipment'
import './functionalTrainer.css';

const BoxingEquipment = () => {
  return (
    <div className='functional-cardio-full-page-wrapper'>
    <div className='functional-cardio-top-background-wallpaper'>
      <h1>FUNCTIONAL CARDIO</h1>
    </div>
    <div className='functional-cardio-bottom-main-container'>
      <div className='functional-cardio-category-container-wrapper'>
        <div>
          <ProductCategory />
        </div>
        <div>
          <BrandCategory />
        </div>
      </div>
      <div className='functional-cardio-image-item-container'>
        <div className='functional-cardio-image-item-outer-wrapper'>
          {BoxEquipmentImage.map((image, index) => (
            <div key={index} className='functional-cardio-image-item-conatiner'>
              <img src={image.src} alt={image.alt} className="functional-cardio-gallery-image" />
              <p className="functional-cardio-image-description">{image.description}</p>
              <p className="functional-cardio-product-price">{image.price}</p>
              <button className="rigs-enquire-button">{image.buttonText}</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
  )
}

export default BoxingEquipment;