import React, { useState, useEffect, Suspense, lazy } from 'react';
import bikeImage1 from '../../assets/bike1.jpg';
import bikeImage2 from '../../assets/bike2.jpg';
import bikeImage3 from '../../assets/bike3.jpg';
import bikeImage5 from '../../assets/bike5.jpg';
import bikeImage7 from '../../assets/bike7.jpg';
import bikeImage8 from '../../assets/bike8.jpg';
import './Banner.scss';

const Banner = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const images = [ bikeImage1, bikeImage2, bikeImage3, bikeImage5,bikeImage7,bikeImage8];
  
    useEffect(() => {
      const intervalId = setInterval(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, 3000);
  
      return () => clearInterval(intervalId);
    }, [images.length]);
  
    return (
      <>
      <div className="home-container">
        <div className="background-image-container">
          {images.map((image, index) => (
            <img
              key={index}
              className={`background-image ${index === currentImageIndex ? 'visible' : ''}`}
              src={image}
              alt="Bike"
              loading="lazy" // Lazy loading the images
            />
          ))}
          <div className="overlay"></div>
        </div>
        </div>
  </>
)
}

export default Banner