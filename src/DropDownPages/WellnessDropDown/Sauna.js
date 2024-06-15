import React from 'react'
import './sauna.css'
import ProductCategory from '../../Components/CoreComponents/Product Category/ProductCategory'
import SaunaImage from '../../Assets/images/Sauna'

const Sauna = () => {
  return (
    <div className='saunas-main-full-wrapper'>
    <div className='saunas-top-background-wallpaper'>
      <h1>SAUNAS</h1>
    </div>

    <div className='saunas-bottom-grid-div'>
      <div className='saunas-product-category-container'>
        <ProductCategory />
      </div>

      <hr className='saunas-seprating-line' />

      <div className='saunas-main-container-wrapper'>  
        {SaunaImage.map((image, index) => (
          <div key={index} className='saunas-image-container'>
            <img src={image.src} alt={image.alt} className="sauna-gallery-image" />
            <p className="sauna-image-description">{image.description}</p>
            <button className="sauna-enquire-button">{image.buttonText}</button>
          </div>
        ))}
      </div>
    </div>
  </div>
  )
}

export default Sauna;