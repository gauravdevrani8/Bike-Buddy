// Home.jsx
import React from 'react';
import './Home.scss';
 import TypewriterComponent from '../../Components/Typewritter/Typewritter';
import Banner from '../../Components/Banner/Banner';
import BikeBooking from '../../Components/BikeBooking/BikeBooking';
import Share from '../../Components/Share/Share';
import Fleet from '../../Components/Fleet/Fleet';
import Testimonials from '../../Components/Testimonials/Testimonials';
import WhyUs from '../../Components/WhyUs/Whyus';
import Contactinfo from '../../Components/Contactinfo/Contactinfo';
import PopularBikes from '../../Components/PopularBikes/PopularBikes';


const Home = () => {
  const words = [
    "FLEXIBLE OWNERSHIP: RENT NOW, PURCHASE LATER",
    "NEED A BIKE FOR AN EXTENDED PERIOD?",
    "WANT TO UPGRADE YOUR RIDE DURING YOUR RENTAL PERIOD?"
  ];


  return (
    <>
      <div className="home-container">
      <Banner  />
      <div className="text-container">
          <h1 className="headline">
            HERE'S <span className="highlight">BIKE BUDDY</span>
          </h1>
          <TypewriterComponent words={words} />
        </div>
        <BikeBooking/>
        <Share/>
      </div>
      <Fleet/>
      <WhyUs/>
      <PopularBikes/>
      <Testimonials/>
      <Contactinfo/>
    </>
  );
};

export default Home;
