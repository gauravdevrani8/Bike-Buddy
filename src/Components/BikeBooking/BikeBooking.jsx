import React, { useState } from 'react';
import { FaCalendarAlt, FaClock, FaBicycle, FaMapMarkerAlt } from 'react-icons/fa';
import './BikeBooking.scss';

const BikeBooking = () => {
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [condition, setCondition] = useState('');
  const [bike, setBike] = useState('');
  const [location, setLocation] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Booking Details:\nDate: ${date}\nTime: ${time}\nCondition: ${condition}\nBike: ${bike}\nLocation: ${location}`);
  };

  return (
    <div className="bike-booking">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="date">
            <FaCalendarAlt className="icon" />
            DATE:
          </label>
          <input
            type="date"
            id="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="time">
            <FaClock className="icon" />
            TIME/HOURS:
          </label>
          <input
            type="time"
            id="time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="condition">
            <FaBicycle className="icon" />
            CONDITION:
          </label>
          <select
            id="condition"
            value={condition}
            onChange={(e) => setCondition(e.target.value)}
            required
          >
            <option value="">Select</option>
            <option value="new">New</option>
            <option value="used">Used</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="bike">
            <FaBicycle className="icon" />
            BIKE:
          </label>
          <select
            id="bike"
            value={bike}
            onChange={(e) => setBike(e.target.value)}
            required
          >
            <option value="">Select</option>
            <option value="honda">Honda</option>
            <option value="yamaha">Yamaha</option>
            <option value="suzuki">Suzuki</option>
            <option value="kawasaki">Kawasaki</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="location">
            <FaMapMarkerAlt className="icon" />
            LOCATION:
          </label>
          <select
            id="location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            required
          >
            <option value="">Select</option>
            <option value="delhi">Delhi</option>
            <option value="faridabad">Faridabad</option>
            <option value="mumbai">Mumbai</option>
            <option value="kolkata">Kolkata</option>
          </select>
        </div>
        <button type="submit" className="submit-button">Book Now</button>
      </form>
    </div>
  );
};

export default BikeBooking;
