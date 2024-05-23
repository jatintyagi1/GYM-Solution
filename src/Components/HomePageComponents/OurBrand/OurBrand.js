import React from 'react'
import './ourBrand.css'
import Brand1 from './../../../Assets/logo/Brand1.png'
import Brand2 from './../../../Assets/logo/Brand2.png'
import Brand3 from './../../../Assets/logo/Brand3.png'
import Brand4 from './../../../Assets/logo/Brand4.png'
import Brand5 from './../../../Assets/logo/Brand5.png'
import Brand6 from './../../../Assets/logo/Brand6.png'
import Brand7 from './../../../Assets/logo/Brand7.png'
import Brand8 from './../../../Assets/logo/Brand8.png'


const BrandImages = [Brand1, Brand2, Brand3, Brand4, Brand5, Brand6, Brand7, Brand8];

const OurBrand = () => {
  return (
    <div className='our-brand-wrapper'>
        <div className='inner-wrapper'>
        <div className='our-brand-container'>
           <h1>OUR BRANDS</h1> 
        </div>   
        <div className="brand-grid">
        {BrandImages.map((brand, index) => (
          <img key={index} src={brand} alt={`Brand ${index}`} className="brand-item" />
        ))}
      </div>
      </div>
    </div>
  )
}

export default OurBrand;