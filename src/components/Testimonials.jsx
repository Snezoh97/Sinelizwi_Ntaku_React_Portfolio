import './Testimonials.css';
import React, { useEffect, useState, useRef } from 'react';

function Testimonials() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const testimonialContainerRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      scrollToNextSlide();
    }, 3000); // Adjust the interval time as needed (e.g., every 3 seconds).

    // Clear the interval when the component unmounts
    return () => clearInterval(interval);
  }, [currentSlide]);

  const scrollToNextSlide = () => {
    if (testimonialContainerRef.current) {
      const testimonialContainer = testimonialContainerRef.current;
      const slideWidth = testimonialContainer.offsetWidth;
      const nextSlide = (currentSlide + 1) % 6; // Assuming you have 6 testimonials
      testimonialContainer.scrollTo({
        left: slideWidth * nextSlide,
        behavior: 'smooth',
      });
      setCurrentSlide(nextSlide);
    }
  };

  return (
    <section className="testimonials" id="testimonials">
      <h2>Testimo<span>nials</span></h2>
      <div
        className="row-1 testimonial-container container-slide"
        ref={testimonialContainerRef}
      >
        {[...Array(6)].map((_, index) => (
          <TestimonialSlide key={index} />
        ))}
      </div>
    </section>
  );
}

function TestimonialSlide() {
  return (
    <div className="col">
      <div className="testimonial card">
        <img src="https://i.ibb.co/JcT27q8/about-img.png" alt="" />
        <div className="name">Sinelizwi Ntaku</div>
        <div className="media-icons">
          <a href="" title="Facebook"><i className='bx bxl-facebook'></i></a>
          <a href="" title="Twitter"><i className='bx bxl-twitter'></i></a>
          <a href="" title="Instagram"><i className='bx bxl-instagram' ></i></a>
        </div>
        <p className="profession">
          <i className='bx bxs-quote-left qoutes'></i> Explore my Java-based unit converter
          on GitHub, a versatile tool for converting various measurements and quantities.
          <i className='bx bxs-quote-right qoutes'></i>
        </p>
      </div>
    </div>
  );
}

export default Testimonials;
