import React, { useState } from 'react';
import FunctionalTrainingImage from '../../Assets/images/FunctionalTrainer';
import ProductCategory from '../../Components/CoreComponents/Product Category/ProductCategory';
import BrandCategory from './../../Components/CoreComponents/Brand Category/BrandCategory';
import './functionalTrainer.css'; 

const FunctionalTrainer = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const imagesPerPage = 8;

  // Calculate the indices of the images to show on the current page
  const indexOfLastImage = currentPage * imagesPerPage;
  const indexOfFirstImage = indexOfLastImage - imagesPerPage;
  const currentImages = FunctionalTrainingImage.slice(indexOfFirstImage, indexOfLastImage);

  // Handle pagination
  const totalPages = Math.ceil(FunctionalTrainingImage.length / imagesPerPage);
  const handleNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };
  const handlePreviousPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  return (
    <div className='ft-top-container-wrapper'>
      <div className='ft-top-background-wallpaper'>
        <h1>FUNCTIONAL TRAINERS</h1>
      </div>
      <div className='ft-main-container-wrapper'>
        <div className='ft-category-container-wrapper'>
          <div className='ft-product-category-container'>
            <ProductCategory />
          </div>
          <div className='ft-brand-category-container'>
            <BrandCategory />
          </div>
        </div>
        <div className='ft-image-full-outer-wrapper'>
        <div className='ft-image-container-wrapper'>
          {currentImages.map((image, index) => (
            <div key={index} className='ft-image-container'>
              <img src={image.src} alt={image.alt} className="ft-gallery-image" />
              <p className="ft-image-description">{image.description}</p>
              <p className="ft-product-price">{image.price}</p>
              <button className="ft-enquire-button">{image.buttonText}</button>
            </div>
          ))}
        </div>
        <div className="ft-pagination">
          <button onClick={handlePreviousPage} disabled={currentPage === 1}>Previous</button>
          <span>Page {currentPage} of {totalPages}</span>
          <button onClick={handleNextPage} disabled={currentPage === totalPages}>Next</button>
        </div>
        </div>
      </div>
    </div>
  );
};

export default FunctionalTrainer;
