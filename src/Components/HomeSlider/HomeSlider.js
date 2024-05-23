import React, { useState, useEffect } from 'react';
import './homeSlider.css';
import Slider1 from './../../Assets/images/Slider1.png';
import Slider2 from './../../Assets/images/Slider2.png';
import Slider3 from './../../Assets/images/Slider3.png';
import Slider4 from './../../Assets/images/Slider4.png';

const images = [
  { src: Slider1, text: '' },
  { src: Slider2, text: '' },
  { src: Slider3, text: '' },
  { src: Slider4, text: '' }
];

const HomeSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <div className="carousel-container">
      <div className="carousel-wrapper" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {images.map((image, index) => (
          <div key={index} className="carousel-slide">
            <img src={image.src} alt={`Slide ${index + 1}`} className="carousel-image" />
            <div className="carousel-text">{image.text}</div>
          </div>
        ))}
      </div>
      <div className="arrow left-arrow" onClick={handlePrev}>‹</div>
      <div className="arrow right-arrow" onClick={handleNext}>›</div>
    </div>
  );
};

export default HomeSlider;
