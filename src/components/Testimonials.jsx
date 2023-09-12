import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Import carousel styles
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
          interval={5000} // Adjust the interval as needed (in milliseconds)
          showStatus={false}
          showThumbs={true} // Set this to true to display thumbnail navigation
          dynamicHeight={false} // Ensure the height is consistent for all items
          showArrows={true} // Display navigation arrows
          swipeable={true} // Allow swipe navigation on touch devices
          emulateTouch={true} // Emulate touch behavior for non-touch devices
          centerMode={true} // Center the currently displayed items
          centerSlidePercentage={33} // Set the percentage for centering items
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
