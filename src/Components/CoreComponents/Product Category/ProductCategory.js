import React from 'react'
import './productCategory.css'
import { Link } from 'react-router-dom';

const ProductCategory = () => {
  return (
    <div className='product-category-main-wrapper'>
        <div className='product-category-main-item-container'>
            <p>PRODUCT CATEGORIES</p>
            <Link className='product-category-main-links'>Accessories</Link>
            <Link className='product-category-main-links'>Barbels</Link>
            <Link className='product-category-main-links'>Benches</Link>
            <Link className='product-category-main-links'>Boxing Equipments</Link>
            <Link className='product-category-main-links'>Cardio</Link>
            <Link className='product-category-main-links'>Cardio Package</Link>
            <Link className='product-category-main-links'>Cold Plunge</Link>
            <Link className='product-category-main-links'>Cross Fit Equipment</Link>
            <Link className='product-category-main-links'>Cross Trainers</Link>
            <Link className='product-category-main-links'>Dumbbells</Link>
            <Link className='product-category-main-links'>Ergometer</Link>
            <Link to='/Flooring'  className='product-category-main-links'>Flooring</Link>
            <Link className='product-category-main-links'>Free Weight</Link>
            <Link className='product-category-main-links'>Free Weight Accessories</Link>
            <Link className='product-category-main-links'>Functional - Other</Link>
            <Link className='product-category-main-links'>Functional Cardio</Link>
            <Link className='product-category-main-links'>Functional Trainers</Link>
            <Link className='product-category-main-links'>Functional Training</Link>
            <Link className='product-category-main-links'>Grinder</Link>
            <Link className='product-category-main-links'>Kettlebells</Link>
            <Link className='product-category-main-links'>Multi Gyms</Link>
            <Link className='product-category-main-links'>New Equipment</Link>
            <Link className='product-category-main-links'>Olympic Plates</Link>
            <Link className='product-category-main-links'>Other Cardio</Link>
            <Link className='product-category-main-links'>Out of Stock</Link>
            <Link className='product-category-main-links'>Package</Link>
            <Link className='product-category-main-links'>Pin Loaded</Link>
            <Link className='product-category-main-links'>Plate Loaded</Link>
            <Link className='product-category-main-links'>Pure Force Strength</Link>
            <Link className='product-category-main-links'>Racks</Link>
            <Link className='product-category-main-links'>Recumbant Bikes</Link>
            <Link className='product-category-main-links'>Rigs</Link>
            <Link className='product-category-main-links'>Rowers</Link>
            <Link to='/Product/Wellness/Saunas' className='product-category-main-links'>Saunas</Link>
            <Link className='product-category-main-links'>Special</Link>
            <Link className='product-category-main-links'>Spin Bikes</Link>
            <Link className='product-category-main-links'>Stair Climber</Link>
            <Link className='product-category-main-links'>Steppers</Link>
            <Link className='product-category-main-links'>Storage</Link>
            <Link className='product-category-main-links'>Strength Equipment</Link>
            <Link className='product-category-main-links'>Strength Package</Link>
            <Link className='product-category-main-links'>Treadmill</Link>
            <Link className='product-category-main-links'>Uncategorised</Link>
            <Link className='product-category-main-links'>Upright Bikes</Link>
            <Link className='product-category-main-links'>Used Equipment</Link>
            <Link className='product-category-main-links'>Wellnes</Link>
        </div> 
    </div>
  )
}

export default ProductCategory;