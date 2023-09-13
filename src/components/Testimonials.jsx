import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import './Testimonials.css';

function Testimonials() {
  return (
    <section className="testimonials" id="testimonials">
      <h2>Testimo<span>nials</span></h2>
      <div className="testimonial-container">
        <Carousel
          autoPlay
          infiniteLoop
          interval={5000} 
          showStatus={false}
          showThumbs={true} 
          dynamicHeight={false} 
          showArrows={true} 
          swipeable={true}
          emulateTouch={true}
          centerMode={true}
          centerSlidePercentage={33} 
        >
          <div className="col">
            <div className="testimonial-card">
                  <img src="https://i.ibb.co/JcT27q8/about-img.png" alt="" />
                  <div className="name">Sinelizwi Ntaku</div>
                  <div className="media-icons">
                    <a href="" title="Facebook"><i className='bx bxl-facebook'></i></a>
                    <a href="" title="Twitter"><i className='bx bxl-twitter'></i></a>
                    <a href="" title="Instagram"><i className='bx bxl-instagram' ></i></a>
                  </div>
                  <p className="profession"><i className='bx bxs-quote-left quotes'></i> Explore my Java-based unit converter
                    on GitHub, a versatile tool for converting various measurements and quantities. <i className='bx bxs-quote-right quotes'></i></p>
            </div>
          </div>
          <div className="col">
            <div className="testimonial-card">
            <img src="https://i.ibb.co/JcT27q8/about-img.png" alt="" />
                  <div className="name">1</div>
                  <div className="media-icons">
                    <a href="" title="Facebook"><i className='bx bxl-facebook'></i></a>
                    <a href="" title="Twitter"><i className='bx bxl-twitter'></i></a>
                    <a href="" title="Instagram"><i className='bx bxl-instagram' ></i></a>
                  </div>
                  <p className="profession"><i className='bx bxs-quote-left quotes'></i> Explore my Java-based unit converter
                    on GitHub, a versatile tool for converting various measurements and quantities. <i className='bx bxs-quote-right quotes'></i></p>
            </div>
          </div>
          <div className="col">
            <div className="testimonial-card">
            <img src="https://i.ibb.co/JcT27q8/about-img.png" alt="" />
                  <div className="name">2</div>
                  <div className="media-icons">
                    <a href="" title="Facebook"><i className='bx bxl-facebook'></i></a>
                    <a href="" title="Twitter"><i className='bx bxl-twitter'></i></a>
                    <a href="" title="Instagram"><i className='bx bxl-instagram' ></i></a>
                  </div>
                  <p className="profession"><i className='bx bxs-quote-left quotes'></i> Explore my Java-based unit converter
                    on GitHub, a versatile tool for converting various measurements and quantities. <i className='bx bxs-quote-right quotes'></i></p>
            </div>
          </div>
          
        </Carousel>
      </div>
    </section>
  );
}

export default Testimonials;
