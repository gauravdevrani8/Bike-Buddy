import React from 'react';
import './WhyUs.scss';
import safetyImage from '../../assets/testimonial1.svg';
import freedomImage from '../../assets/testimonial2.svg';
import helmetImage from '../../assets/testimonial3.svg';
import expertImage from '../../assets/testimonial4.svg';

const WhyUs = () => {
  return (
    <section className="why-us">
      <div className="container">
        <h2 className="section-title">Why Choose Bike Buddy?</h2>
        <div className="why-us-elements">
          <div className="why-us-element">
            <img src={safetyImage} alt="Safety" className="why-us-image" />
            <div className="why-us-info">
              <h3 className="why-us-title">Your Safety is Our Priority</h3>
              <p className="why-us-description">
                From sanitizing all bikes before every use to extensive on-ground safety measures,
                your rides with Bike Buddy will always be safe and reliable. We also offer helmets on-demand.
              </p>
            </div>
          </div>
          <div className="why-us-element">
            <img src={freedomImage} alt="Freedom" className="why-us-image" />
            <div className="why-us-info">
              <h3 className="why-us-title">Flexible Rental Plans</h3>
              <p className="why-us-description">
                Enjoy the freedom of owning a two-wheeler without the hefty down-payments, EMIs,
                and paperwork. Now choose from rent-to-own, monthly/quarterly bookings, and even daily plans.
              </p>
            </div>
          </div>
          <div className="why-us-element">
            <img src={helmetImage} alt="Helmets On-Demand" className="why-us-image" />
            <div className="why-us-info">
              <h3 className="why-us-title">Helmets On-Demand</h3>
              <p className="why-us-description">
                Your safety is paramount to us. That's why we offer helmets on-demand for your convenience
                and peace of mind during your rides.
              </p>
            </div>
          </div>
          <div className="why-us-element">
            <img src={expertImage} alt="Expert Support" className="why-us-image" />
            <div className="why-us-info">
              <h3 className="why-us-title">Expert Support</h3>
              <p className="why-us-description">
                Our team of biking enthusiasts is always ready to provide you with expert advice and
                assistance to make your biking adventure unforgettable.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
