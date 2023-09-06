import './Testimonials.css';
import React, { useEffect, useState, useRef } from 'react';

function Testimonials() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const testimonialContainerRef = useRef(null);
  useEffect(() => {
    const interval = setInterval(() => {
      scrollToNextSlide();
    }, 1000); 

    return () => clearInterval(interval);
  }, [currentSlide]);

  const scrollToNextSlide = () => {
    if (testimonialContainerRef.current) {
      const testimonialContainer = testimonialContainerRef.current;
      const slideWidth = testimonialContainer.offsetWidth;
      const totalSlides = testimonialTemplates.length;
      const nextSlide = (currentSlide + 1) % totalSlides;

      testimonialContainer.scrollTo({
        left: slideWidth * nextSlide,
        behavior: 'smooth',
      });

      
    }
  };
  

  const testimonialTemplates = [
    {
      template: (
        <div className="testimonial card">
          <img src="https://i.ibb.co/JcT27q8/about-img.png" alt="" />
          <div className="name">1</div>
          <div className="media-icons">
            <a href="" title="Facebook"><i className='bx bxl-facebook'></i></a>
            <a href="" title="Twitter"><i className='bx bxl-twitter'></i></a>
            <a href="" title="Instagram"><i className='bx bxl-instagram'></i></a>
          </div>
          <p className="profession">
            <i className='bx bxs-quote-left qoutes'></i> Explore my Java-based unit converter
            on GitHub, a versatile tool for converting various measurements and quantities.
            <i className='bx bxs-quote-right qoutes'></i>
          </p>
        </div>
      ),
    },
    {
      template: (
        <div className="testimonial card template-2">
          <img src="https://i.ibb.co/JcT27q8/about-img.png" alt="" />
          <div className="name">2</div>
          <div className="media-icons">
            <a href="" title="Facebook"><i className='bx bxl-facebook'></i></a>
            <a href="" title="Twitter"><i className='bx bxl-twitter'></i></a>
            <a href="" title="Instagram"><i className='bx bxl-instagram'></i></a>
          </div>
          <p className="profession">
            <i className='bx bxs-quote-left qoutes'></i> Explore my Java-based unit converter
            on GitHub, a versatile tool for converting various measurements and quantities.
            <i className='bx bxs-quote-right qoutes'></i>
          </p>
        </div>
      ),
    },
    {
      template: (
        <div className="testimonial card template-4">
          <img src="https://i.ibb.co/JcT27q8/about-img.png" alt="" />
          <div className="name">3</div>
          <div className="media-icons">
            <a href="" title="Facebook"><i className='bx bxl-facebook'></i></a>
            <a href="" title="Twitter"><i className='bx bxl-twitter'></i></a>
            <a href="" title="Instagram"><i className='bx bxl-instagram'></i></a>
          </div>
          <p className="profession">
            <i className='bx bxs-quote-left qoutes'></i> Explore my Java-based unit converter
            on GitHub, a versatile tool for converting various measurements and quantities.
            <i className='bx bxs-quote-right qoutes'></i>
          </p>
        </div>
      ),
    },
    {
      template: (
        <div className="testimonial card template-5">
          <img src="https://i.ibb.co/JcT27q8/about-img.png" alt="" />
          <div className="name">4</div>
          <div className="media-icons">
            <a href="" title="Facebook"><i className='bx bxl-facebook'></i></a>
            <a href="" title="Twitter"><i className='bx bxl-twitter'></i></a>
            <a href="" title="Instagram"><i className='bx bxl-instagram'></i></a>
          </div>
          <p className="profession">
            <i className='bx bxs-quote-left qoutes'></i> Explore my Java-based unit converter
            on GitHub, a versatile tool for converting various measurements and quantities.
            <i className='bx bxs-quote-right qoutes'></i>
          </p>
        </div>
      ),
    },
    {
      template: (
        <div className="testimonial card template-6">
          <img src="https://i.ibb.co/JcT27q8/about-img.png" alt="" />
          <div className="name">5</div>
          <div className="media-icons">
            <a href="" title="Facebook"><i className='bx bxl-facebook'></i></a>
            <a href="" title="Twitter"><i className='bx bxl-twitter'></i></a>
            <a href="" title="Instagram"><i className='bx bxl-instagram'></i></a>
          </div>
          <p className="profession">
            <i className='bx bxs-quote-left qoutes'></i> Explore my Java-based unit converter
            on GitHub, a versatile tool for converting various measurements and quantities.
            <i className='bx bxs-quote-right qoutes'></i>
          </p>
        </div>
      ),
    },
    {
      template: (
        <div className="testimonial card template-7">
          <img src="https://i.ibb.co/JcT27q8/about-img.png" alt="" />
          <div className="name">6</div>
          <div className="media-icons">
            <a href="" title="Facebook"><i className='bx bxl-facebook'></i></a>
            <a href="" title="Twitter"><i className='bx bxl-twitter'></i></a>
            <a href="" title="Instagram"><i className='bx bxl-instagram'></i></a>
          </div>
          <p className="profession">
            <i className='bx bxs-quote-left qoutes'></i> Explore my Java-based unit converter
            on GitHub, a versatile tool for converting various measurements and quantities.
            <i className='bx bxs-quote-right qoutes'></i>
          </p>
        </div>
      ),
    },
    {
      template: (
        <div className="testimonial card template-8">
          <img src="https://i.ibb.co/JcT27q8/about-img.png" alt="" />
          <div className="name">7</div>
          <div className="media-icons">
            <a href="" title="Facebook"><i className='bx bxl-facebook'></i></a>
            <a href="" title="Twitter"><i className='bx bxl-twitter'></i></a>
            <a href="" title="Instagram"><i className='bx bxl-instagram'></i></a>
          </div>
          <p className="profession">
            <i className='bx bxs-quote-left qoutes'></i> Explore my Java-based unit converter
            on GitHub, a versatile tool for converting various measurements and quantities.
            <i className='bx bxs-quote-right qoutes'></i>
          </p>
        </div>
      ),
    },
    {
      template: (
        <div className="testimonial card template-9">
          <img src="https://i.ibb.co/JcT27q8/about-img.png" alt="" />
          <div className="name">8</div>
          <div className="media-icons">
            <a href="" title="Facebook"><i className='bx bxl-facebook'></i></a>
            <a href="" title="Twitter"><i className='bx bxl-twitter'></i></a>
            <a href="" title="Instagram"><i className='bx bxl-instagram'></i></a>
          </div>
          <p className="profession">
            <i className='bx bxs-quote-left qoutes'></i> Explore my Java-based unit converter
            on GitHub, a versatile tool for converting various measurements and quantities.
            <i className='bx bxs-quote-right qoutes'></i>
          </p>
        </div>
      ),
    },
    {
      template: (
        <div className="testimonial card template-10">
          <img src="https://i.ibb.co/JcT27q8/about-img.png" alt="" />
          <div className="name">9</div>
          <div className="media-icons">
            <a href="" title="Facebook"><i className='bx bxl-facebook'></i></a>
            <a href="" title="Twitter"><i className='bx bxl-twitter'></i></a>
            <a href="" title="Instagram"><i className='bx bxl-instagram'></i></a>
          </div>
          <p className="profession">
            <i className='bx bxs-quote-left qoutes'></i> Explore my Java-based unit converter
            on GitHub, a versatile tool for converting various measurements and quantities.
            <i className='bx bxs-quote-right qoutes'></i>
          </p>
        </div>
      ),
    },
  
  ];

  return (
    <section className="testimonials" id="testimonials">
      <h2>Testimo<span>nials</span></h2>
      <div
        className="row-1 testimonial-container container-slide"
        ref={testimonialContainerRef}
      >
        {testimonialTemplates.map((item, index) => (
          <div key={index} className="col">
            {item.template}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Testimonials;
