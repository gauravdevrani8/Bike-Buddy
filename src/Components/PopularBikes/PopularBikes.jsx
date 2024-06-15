import React from 'react';
import './PopularBikes.scss';

const bikes = [
  {
    id: 1,
    name: 'Royal Enfield Classic 350',
    image: 'https://i.ibb.co/D8P2cps/re.jpg',
    description: 'A classic and robust bike perfect for long rides.',
  },
  {
    id: 2,
    name: 'Honda Activa 6G',
    image: 'https://i.ibb.co/KyZpsrg/honda.jpg',
    description: 'A popular scooter known for its comfort and reliability.',
  },
  {
    id: 3,
    name: 'Yamaha R15 V3',
    image: 'https://i.ibb.co/0YPX4FG/r15.jpg',
    description: 'A sporty bike with excellent performance and style.',
  },
  {
    id: 4,
    name: 'Kawasaki Ninja 650',
    image: 'https://i.ibb.co/TwbHf0J/wp7170714-ninja-250-2020-wallpapers.jpg',
    description: 'A powerful and agile sports bike designed for thrill-seekers.',
  },
  {
    id: 5,
    name: 'Suzuki Hayabusa',
    image: 'https://i.ibb.co/86MqSNm/wp8994182-suzuki-2021-wallpapers.jpg',
    description: 'An iconic hyperbike known for its speed and performance.',
  },
];

const PopularBikes = () => {
  return (
    <div className="popular-bikes">
      <h2>Popular Bikes</h2>
      <div className="bikes-list">
        {bikes.map((bike) => (
          <div key={bike.id} className="bike-card">
            <img src={bike.image} alt={bike.name} />
            <h3>{bike.name}</h3>
            <p>{bike.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularBikes;
