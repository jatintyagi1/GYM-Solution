import React from 'react'
import './otherEquip.css'
import BrandCategory from '../../Components/CoreComponents/Brand Category/BrandCategory';
import ProductCategory from '../../Components/CoreComponents/Product Category/ProductCategory';
import OtherEquipImage from './../../Assets/images/OtherEquipment'

const OtherEquipments = () => {
  return (
    <div className='other-eqipment-top-container-wrapper'>
      <div className='other-equip-top-background-wallpaper'>
        <h1>Other Equipment</h1>
      </div>
      <div className='other-eqipment-main-container-wrapper'>
        <div className='other-equipment-category-container-wrapper'>
          <div className='otherequip-product-category-container'>
            <ProductCategory />
          </div>
          <div className='otherequip-brand-category-container'>
            <BrandCategory />
          </div>
        </div>
        <div className='otherequip-image-container-wrapper'>
          {OtherEquipImage.map((image, index) => (
            <div key={index} className='otherequip-image-container-wrapper'>
              <img src={image.src} alt={image.alt} className="otherequip-gallery-image" />
              <p className="otherequip-image-description">{image.description}</p>
              <p className="otherequip-product-price">{image.price}</p>
              <button className="otherequip-enquire-button">{image.buttonText}</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default OtherEquipments;