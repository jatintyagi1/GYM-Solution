import React from 'react'
import '../../Styles/pages/flooring.css'
import ProductCategory from '../../Components/CoreComponents/Product Category/ProductCategory';
import FlooringImage from '../../Assets/images/Flooring';

const Floorings = () => {
  return (
    <div className='flooring-pages-outer-wrapper'>
      <div className='flooring-top-page-background-wrapper'>
        <h1>Flooring</h1>
      </div>
      <div className='flooring-main-container-wrapper'>
        <div className='flooring-product-category-container'>
          <ProductCategory />
        </div>

        <div className='flooring-left-image-wrapper'>
          <div className='flooring-left-upper-div'>
            <h1 className='floring-top-text-heading'>HIGH QUALITY GYM FLOORING</h1>
            <p>Finding high quality commercial gym flooring or home gym flooring is essential to ensure the safety of gym go-er and the protection of the equipment. Gym Solutions now offers you the highest quality hygienic gym flooring on the market – PaviFLEX gym flooring from Spain.</p>
            <p>We stock premium lifting platforms and rubber tiles that have you covered on all bases – they’re shock absorbent, anti-slip and are specifically designed for commercial and home gym sets. </p>
            <p className='flooring-bold-text'>Comprehensive Installation Services</p>
            <p>As your one-stop shop for all gym equipment needs, we offer complete installation services for gym flooring. Our team ensures a seamless and hassle-free installation process, so you can focus on creating the perfect workout environment.</p>
          </div>
          <div className='Flooring-product-image-container-wrapper'>
            {FlooringImage.map((image, index) => (
              <div key={index} className='flooring-image-container-wrapper'>
                <img src={image.src} alt={image.alt} className="flooring-gallery-image" />
                <p className="flooring-image-description">{image.description}</p>
                <p className="flooring-product-price">{image.price}</p>
                <button className="flooring-enquire-button">{image.buttonText}</button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Floorings;