import React from 'react'
import './otherEquip.css'
import BrandCategory from '../../Components/CoreComponents/Brand Category/BrandCategory';
import ProductCategory from '../../Components/CoreComponents/Product Category/ProductCategory';

const OtherEquipments = () => {
  return (
    <div className='other-eqipment-top-container-wrapper'>
      <div className='other-equip-top-background-wallpaper'>
        <h1>Other Equipment</h1>
      </div>
      <div className='other-eqipment-main-container-wrapper'>
        <div className='other-equipment-category-container-wrapper'>
        <div>
          <ProductCategory />
        </div>
        <div>
          <BrandCategory />
          </div>
        </div>

        <div><h1>Hello</h1></div>
      </div>

    </div>
  )
}

export default OtherEquipments;