import React from 'react'
import './shopByBrand.css'
import Brand_1 from './../../Assets/images/Brand_1.png'
import Brand_2 from './../../Assets/images/Brand_2.png'
import Brand_3 from './../../Assets/images/Brand_3.png'
import Brand_4 from './../../Assets/images/Brand_4.png'
import Brand_5 from './../../Assets/images/Brand_5.png'
import Brand_6 from './../../Assets/images/Brand_6.png'
import Brand_7 from './../../Assets/images/Brand_7.png'
import Brand_8 from './../../Assets/images/Brand_8.png'
import Brand_9 from './../../Assets/images/Brand_9.png'
import Brand_10 from './../../Assets/images/Brand_10.png'
import Brand_11 from './../../Assets/images/Brand_11.png'
import Brand_12 from './../../Assets/images/Brand_12.png'
import Brand_13 from './../../Assets/images/Brand_13.png'
import Brand_14 from './../../Assets/images/Brand_14.png'
import Brand_15 from './../../Assets/images/Brand_15.png'
import Brand_16 from './../../Assets/images/Brand_16.png'
import Brand_17 from './../../Assets/images/Brand_17.png'
import Brand_18 from './../../Assets/images/Brand_18.png'
import Brand_19 from './../../Assets/images/Brand_19.png'
import Brand_20 from './../../Assets/images/Brand_20.png'
import Brand_21 from './../../Assets/images/Brand_21.png'
import Brand_22 from './../../Assets/images/Brand_22.png'
import Brand_23 from './../../Assets/images/Brand_23.png'
import Brand_24 from './../../Assets/images/Brand_24.png'
import Brand_25 from './../../Assets/images/Brand_25.png'
import Brand_26 from './../../Assets/images/Brand_26.png'
import Brand_27 from './../../Assets/images/Brand_27.png'

const images = [
    { url: Brand_1, link: 'https://link1.com' },
    { url: Brand_2, link: 'https://link2.com' },
    { url: Brand_3, link: 'https://link3.com' },
    { url: Brand_4, link: 'https://link4.com' },
    { url: Brand_5, link: 'https://link5.com' },
    { url: Brand_6, link: 'https://link6.com' },
    { url: Brand_7, link: 'https://link7.com' },
    { url: Brand_8, link: 'https://link8.com' },
    { url: Brand_9, link: 'https://link9.com' },
    { url: Brand_10, link: 'https://link10.com' },
    { url: Brand_11, link: 'https://link11.com' },
    { url: Brand_12, link: 'https://link12.com' },
    { url: Brand_13, link: 'https://link13.com' },
    { url: Brand_14, link: 'https://link14.com' },
    { url: Brand_15, link: 'https://link15.com' },
    { url: Brand_16, link: 'https://link16.com' },
    { url: Brand_17, link: 'https://link17.com' },
    { url: Brand_18, link: 'https://link18.com' },
    { url: Brand_19, link: 'https://link19.com' },
    { url: Brand_20, link: 'https://link20.com' },
    { url: Brand_21, link: 'https://link21.com' },
    { url: Brand_22, link: 'https://link22.com' },
    { url: Brand_23, link: 'https://link23.com' },
    { url: Brand_24, link: 'https://link24.com' },
    { url: Brand_25, link: 'https://link25.com' },
    { url: Brand_26, link: 'https://link26.com' },
    { url: Brand_27, link: 'https://link27.com' },
];



const ShopByBrand = () => {
    return (
        <div className='full-page-wrapper'> 
         <div className="image-grid">
             {images.map((image, index) => (
                 <a href={image.link} key={index} target="_blank" rel="noopener noreferrer">
                    <div className='real-image'>
                     <img src={image.url} alt={`${index + 1}`} className="grid-image" />
                     </div>
                 </a>
            ))}
          </div>
   </div>
    )
}

export default ShopByBrand;