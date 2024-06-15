import React from "react";
import "./About.scss"; // Import the CSS file
import Contactinfo from "../../Components/Contactinfo/Contactinfo";
import SubBanner from "../../Components/SubBanner/SubBanner";

const About=()=> {
    const button = (
        <button className='button'>Explore</button>
    );
  
  return (
    <>
    <SubBanner button={button}/>
      <section className="about-page">
      <div className="container">
          <div className="about-main">
            <div className="about-main__text">
              <h2>Welcome to Bike Buddy</h2>
              <p>
                At Bike Buddy, we believe that every ride should be an
                adventure. Whether you're a seasoned cyclist or just starting
                out, we have the perfect ride for you. Our mission is to
                provide top-quality bikes and exceptional service to make your
                biking experience unforgettable.
              </p>
              <div className="about-main__text__icons">
                <div className="about-main__text__icons__box">
                  <span>
                    <h4>50+</h4>
                    <p>Bike Models</p>
                  </span>
                </div>
                <div className="about-main__text__icons__box">
                  <span>
                    <h4>100+</h4>
                    <p>Rental Locations</p>
                  </span>
                </div>
                <div className="about-main__text__icons__box">
                  <span>
                    <h4>24/7</h4>
                    <p>Customer Support</p>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Contactinfo/>
    </>
  );
}

export default About;
