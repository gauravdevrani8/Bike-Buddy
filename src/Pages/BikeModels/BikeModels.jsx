import React from 'react';
import { FaStar, FaBiking } from 'react-icons/fa';
import { MdLocalOffer } from 'react-icons/md';
import "./BikeModels.scss";
import { bikes } from '../../Data/Data';
import Contactinfo from '../../Components/Contactinfo/Contactinfo';
import SubBanner from '../../Components/SubBanner/SubBanner';
import Modal from '../../Components/PopupForm/PopupForm';
import { Link } from 'react-router-dom';

const BikeModels = () => {
  const button = (
    <Link to="/">
      <button className='button'>Rent Now</button>
    </Link>
  );

  return (<>
<SubBanner button= {button}/>
    <div className="fleet-container">
      <h1>Fleet</h1>
      <div className="bikes-grid">
        {bikes.map((bike) => (
          <div className="bike-card" key={bike.id}>
            <img src={bike.image_url} alt={bike.name} className="bike-image" />
            <div className="bike-details">
              <h3 className="bike-name">{bike.name}</h3>
              <p className="bike-description">{bike.description}</p>
              <div className="bike-info">
                <p className="bike-category"><MdLocalOffer /> {bike.category}</p>
                <p className="bike-price">${bike.price.toFixed(2)}</p>
                <p className="bike-rating"><FaStar /> {bike.rating} stars</p>
              </div>
             <Modal> <button className="book-now-button">Book Now <FaBiking /></button></Modal>
            </div>
          </div>
        ))}
      </div>
    </div>
    <Contactinfo/>
    </>
  )
}

export default BikeModels;
