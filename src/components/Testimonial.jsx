import React, { useEffect } from 'react';
import Swiper from 'swiper';


function Testimonials(){
  useEffect(() => {
    const swiper = new Swiper(".mySwiper", {
      slidesPerView: 3,
      spaceBetween: 30,
      loop: true,
      loopedSlides: 3,
      centerSlide: true,
      fade: true,
      grabCursor: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
        type: "bullets",
        dynamicBullets: 3, 
      },
      navigation: false,
      autoplay: {
        delay: 2000,
        disableOnInteraction: false,
      },
      breakpoints: {
        0: {
          slidesPerView: 1,
          navigation: {
            nextEl: null, 
            prevEl: null, 
          },
        },
        520: {
          slidesPerView: 2,
        },
        950: {
          slidesPerView: 3,
        },
      },
    });
  }, []);

  return (
    <section className="testimonials" id="testimonials">
      <h2>Testimo<span>nials</span></h2>
      <div className="swiper mySwiper container">
        <div className="swiper-wrapper content">
          <div className="swiper-slide card">
            <div className="card-content">
              <div className="image">
                <img src="images/about-img.png" alt="" /> 
              </div>
              <div className="media-icons">
                <a href="" title="Facebook"><i className="fab fa-linkedin"></i></a>
                <a href="" title="Twitter"><i className="fab fa-twitter"></i></a>
                <a href="" title="Instagram"><i className="fab fa-instagram"></i></a>
              </div>
              <div className="name-profession">
                <span className="name">Sinelizwi Ntaku</span>
                <p><i className='bx bxs-quote-left qoutes'></i> Explore my Java-based unit converter on GitHub, a versatile tool for converting various measurements and quantities.
                  <i className='bx bxs-quote-right qoutes'></i></p>
              </div>
            </div>
          </div>
          {/* Repeat similar structure for other testimonials */}
        </div>
        <div className="swiper-pagination"></div>
      </div>
    </section>
  );
}

export default Testimonials;
