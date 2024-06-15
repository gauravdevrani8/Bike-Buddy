import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './SubBanner.scss';
import bannerImage from '../../assets/r15.jpg';

const SubBanner = ({button}) => {
  return (
    <div className="banner">
      <img src={bannerImage} alt="Bike Buddy Banner" />
      <div className="overlay"></div>
      <div className="content">
        <h2>Welcome to Bike Buddy</h2>
        <p>Discover the joy of riding with Bike Buddy. Rent your dream bike today!</p>
        <Link to="/"> {/* Link to the home page */}
          <button className='btn'>{button}</button>;
        </Link>
      </div>
    </div>
  );
};

export default SubBanner;
