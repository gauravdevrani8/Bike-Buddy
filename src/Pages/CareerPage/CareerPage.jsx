import React from 'react';
import { FaTools, FaUsers, FaMapMarkedAlt, FaBicycle, FaBullhorn, FaRegChartBar, FaHandsHelping } from 'react-icons/fa';
import './CareerPage.scss';
import SubBanner from '../../Components/SubBanner/SubBanner';

const vacancies = [
  {
    id: 1,
    category: 'ENGINEERING',
    title: 'Senior Backend Developer',
    posted: '2 YEARS AGO',
    location: 'Bangalore Urban',
    salary: '₹7L – ₹10L',
    description: 'We are solving a problem at a huge scale. Experience the journey with its ups and downs as we take on the rental space in India.',
    icon: <FaTools />
  },
  {
    id: 2,
    category: 'ENGINEERING',
    title: 'Senior Fullstack Developer',
    posted: '2 YEARS AGO',
    location: 'Bengaluru',
    salary: '₹6L – ₹9L',
    description: 'We are solving a problem at a huge scale. Experience the journey with its ups and downs as we take on the rental space in India.',
    icon: <FaTools />
  },
  {
    id: 3,
    category: 'ENGINEERING',
    title: 'Senior React Native Developer',
    posted: '1 YEAR AGO',
    location: 'Bangalore Urban',
    salary: '₹6L – ₹8L',
    description: 'We are solving a problem at a huge scale. Experience the journey with its ups and downs as we take on the rental space in India.',
    icon: <FaTools />
  },
  {
    id: 4,
    category: 'MARKETING',
    title: 'Digital Marketing Specialist',
    posted: '1 YEAR AGO',
    location: 'Bengaluru',
    salary: '₹4L – ₹6L',
    description: 'Strategize and implement the marketing strategy for the company. Execute each strategy from A to Z.',
    icon: <FaBullhorn />
  },
  {
    id: 5,
    category: 'OPERATIONS',
    title: 'HR Generalist',
    posted: '2 YEARS AGO',
    location: 'Bengaluru',
    salary: '₹30,000 – ₹35,000 • No equity',
    description: 'Handle employee lifecycle: engagement, queries, performance management, and exit discussions.',
    icon: <FaUsers />
  },
  {
    id: 6,
    category: 'OPERATIONS',
    title: 'Operations Manager - GJ',
    posted: '4 WEEKS AGO',
    location: 'Ahmedabad',
    salary: '₹3L – ₹6L • No equity',
    description: 'Enhance customer experience by implementing feedback and improving store operations and services.',
    icon: <FaRegChartBar />
  },
  {
    id: 7,
    category: 'SALES',
    title: 'Fleet/Sales Executive',
    posted: '1 YEAR AGO',
    location: 'Bengaluru',
    salary: '₹1.64L – ₹1.98L',
    description: 'India\'s Largest & South India\'s First RTO Authorized Self-Ride Bike Rental Service Provider.',
    icon: <FaHandsHelping />
  }
];
  const button = (
      <button className='join-button'>Join Us</button>
  );

const CareerPage = () => {
  return (<>
    <SubBanner button ={button}/>
    <div className="career-page">
      <header>
        <h1>Join Our Team</h1>
        <p>Help Revolutionize Bike Rentals in South India with Royal Brothers</p>
      </header>
      <div className="vacancies">
        {vacancies.map(vacancy => (
          <div key={vacancy.id} className="vacancy">
            <div className="icon">{vacancy.icon}</div>
            <div className="details">
              <h3>{vacancy.title}</h3>
              <p className="category">{vacancy.category}</p>
              <p className="posted">{vacancy.posted}</p>
              <p className="location">{vacancy.location}</p>
              <p className="salary">{vacancy.salary}</p>
              <p className="description">{vacancy.description}</p>
              <div className="buttons">
                <button className="apply-button">Apply Now</button>
                <button className="notify-button">Notify Me</button>
              </div>
            </div>
          </div>
          
        )
      )
        
        
        }
        
      </div>
    </div>
    </>
  );
};

export default CareerPage;
