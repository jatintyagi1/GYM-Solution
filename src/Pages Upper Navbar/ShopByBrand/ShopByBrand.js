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
];



const ShopByBrand = () => {
    return (
        <div className='full-page-wrapper'> 
         <div className="image-grid">
             {images.map((image, index) => (
                 <a href={image.link} key={index} target="_blank" rel="noopener noreferrer">
                    <div className='real-image'>
                     <img src={image.url} alt={`image-${index + 1}`} className="grid-image" />
                     </div>
                 </a>
            ))}
          </div>
   </div>
    )
}

export default ShopByBrand;