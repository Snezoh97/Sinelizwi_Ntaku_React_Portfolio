import './Testimonials.css'
import React, { useEffect } from 'react';
import Swiper from 'swiper';
// import "swiper/swiper-bundle.min.css";


function Testimonials() {
  useEffect(() => {
    new Swiper('.swiper-container', {
      loop: true,
      direction: 'horizontal',
      autoplay: {
        delay: 5000,
      },
      breakpoints: {
        1024: {
          slidesPerView: 3,
        },
        768: {
          slidesPerView: 2,
        },
        320: {
          slidesPerView: 1,
        },
      },
    });
  }, []);

  return (
    <section className="testimonials" id="testimonials">
      <h2>Testimo<span>nials</span></h2>
      <div className="border"></div>
          <div className="row-1">
            <div className="col">
              <div className="testimonial card">
                <img src="https://i.ibb.co/JcT27q8/about-img.png" alt="" />
                <div className="name">Sinelizwi Ntaku</div>
                <div className="media-icons">
                  <a href="" title="Facebook"><i className='bx bxl-facebook'></i></a>
                  <a href="" title="Twitter"><i className='bx bxl-twitter'></i></a>
                  <a href="" title="Instagram"><i className='bx bxl-instagram' ></i></a>
                </div>
                <p className="profession"><i className='bx bxs-quote-left qoutes'></i> Explore my Java-based unit converter on GitHub, a versatile tool for converting various measurements and quantities. <i className='bx bxs-quote-right qoutes'></i></p>
              </div>
            </div>

            <div className="col">
              <div className="testimonial">
                <img src="https://i.ibb.co/JcT27q8/about-img.png" alt="" />
                <div className="name">Sinelizwi Ntaku</div>
                <div className="media-icons">
                  <a href="" title="Facebook"><i className='bx bxl-facebook'></i></a>
                  <a href="" title="Twitter"><i className='bx bxl-twitter'></i></a>
                  <a href="" title="Instagram"><i className='bx bxl-instagram' ></i></a>
                </div>
                <p className="profession"><i className='bx bxs-quote-left qoutes'></i> Explore my Java-based unit converter on GitHub, a versatile tool for converting various measurements and quantities. <i className='bx bxs-quote-right qoutes'></i></p>
              </div>
            </div>

            <div className="col">
              <div className="testimonial">
                <img src="https://i.ibb.co/JcT27q8/about-img.png" alt="test-image"/>
                <h4 className="name">Sinelizwi Ntaku</h4>
                <div className="media-icons">
                  <a href="" title="Facebook"><i className='bx bxl-facebook'></i></a>
                  <a href="" title="Twitter"><i className='bx bxl-twitter'></i></a>
                  <a href="" title="Instagram"><i className='bx bxl-instagram' ></i></a>
                </div>
                <p className="profession"><i className='bx bxs-quote-left qoutes'></i> Explore my Java-based unit converter on GitHub, a versatile tool for converting various measurements and quantities. <i className='bx bxs-quote-right qoutes'></i></p>
              </div>
            </div>
          </div>
          <div classNamme="swiper-pagination"></div>
    </section>
  );
}

export default Testimonials;
