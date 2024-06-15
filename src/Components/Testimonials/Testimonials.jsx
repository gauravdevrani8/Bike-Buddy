import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import "./Testimonials.scss"
import { testimonialData } from "../../Data/Data";

const Testimonials = () => {
  return (
    <Carousel
      showArrows={true}
      infiniteLoop={true}
      showThumbs={false}
      showStatus={false}
      autoPlay={true}
      interval={6100}
    >
      {testimonialData.map((testimonial, index) => (
        <div key={index}>
                    <div className="myCarousel">

          <img src={testimonial.image} alt="customer" />
            <h3>{testimonial.name}</h3>
            <h4>Rented for: {testimonial.duration}</h4>
            <p>{testimonial.feedback}</p>
          </div>
        </div>
      ))}
    </Carousel>
  );
};

export default Testimonials;