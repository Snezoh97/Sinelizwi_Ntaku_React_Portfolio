import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import "./Testimonials.css";

function Testimonials() {
  const options = {
    autoPlay: true,
    infiniteLoop: true,
    interval: 3000,
    showStatus: false,
    showThumbs: true,
    dynamicHeight: false,
    showArrows: true,
    swipeable: true,
    emulateTouch: true,
    centerMode: true,
  };


  return (
    <section className="testimonials" id="testimonials">
      <h2>
        Testimo<span>nials</span>
      </h2>
      <div className="testimonial-container">
        <Carousel 
         
          {...options}
        >
          <div className="testmonials-slider" id='testimonials-slider'>
            <div className="testimonial-card">
              <div className="testimonial-content">
                <img
                  src="https://i.ibb.co/JcT27q8/about-img.png"
                  alt="Sinelizwi Ntaku"
                />
                <div className="name">Andisiwe Ntsimbi</div>
                <div className="media-icons">
                  <a href="" title="Facebook">
                    <i className="bx bxl-facebook"></i>
                  </a>
                  <a href="" title="Twitter">
                    <i className="bx bxl-twitter"></i>
                  </a>
                  <a href="" title="Instagram">
                    <i className="bx bxl-instagram"></i>
                  </a>
                </div>
                <p className="profession">
                  <i className="bx bxs-quote-left quotes"></i> Explore my
                  Java-based unit converter on GitHub, a versatile tool for
                  converting various measurements and quantities.
                  <i className="bx bxs-quote-right quotes"></i>
                </p>
              </div>
            </div>
          </div>
          <div className="testmonials-slider">
            <div className="testimonial-card">
              <div className="testimonial-content">
                <img
                  src="https://i.ibb.co/JcT27q8/about-img.png"
                  alt="Dr. S Kasana"
                />
                <div className="name">Dr. S Kasana</div>
                <div className="media-icons">
                  <a href="" title="Facebook">
                    <i className="bx bxl-facebook"></i>
                  </a>
                  <a href="" title="Twitter">
                    <i className="bx bxl-twitter"></i>
                  </a>
                  <a href="" title="Instagram">
                    <i className="bx bxl-instagram"></i>
                  </a>
                </div>
                <p className="profession">
                  <i className="bx bxs-quote-left quotes"></i> Explore my
                  Java-based unit converter on GitHub, a versatile tool for
                  converting various measurements and quantities.
                  <i className="bx bxs-quote-right quotes"></i>
                </p>
              </div>
            </div>
          </div>

          <div className="testmonials-slider">
            <div className="testimonial-card">
              <div className="testimonial-content">
              <img
                  src="https://i.ibb.co/JcT27q8/about-img.png"
                  alt="Dr. S Kasana"
                />
                <div className="name">Sinobomi Bazana</div>
                <div className="media-icons">
                  <a href="" title="Facebook">
                    <i className="bx bxl-facebook"></i>
                  </a>
                  <a href="" title="Twitter">
                    <i className="bx bxl-twitter"></i>
                  </a>
                  <a href="" title="Instagram">
                    <i className="bx bxl-instagram"></i>
                  </a>
                </div>
                <p className="profession">
                  <i className="bx bxs-quote-left quotes"></i> Explore my
                  Java-based unit converter on GitHub, a versatile tool for
                  converting various measurements and quantities.
                  <i className="bx bxs-quote-right quotes"></i>
                </p>
              </div>
            </div>
          </div>
          <div className="testmonials-slider">
            <div className="testimonial-card">
              <div className="testimonial-content">
              <img
                  src="https://i.ibb.co/JcT27q8/about-img.png"
                  alt="Dr. S Kasana"
                />
                <div className="name">Sikelela Pangomso</div>
                <div className="media-icons">
                  <a href="" title="Facebook">
                    <i className="bx bxl-facebook"></i>
                  </a>
                  <a href="" title="Twitter">
                    <i className="bx bxl-twitter"></i>
                  </a>
                  <a href="" title="Instagram">
                    <i className="bx bxl-instagram"></i>
                  </a>
                </div>
                <p className="profession">
                  <i className="bx bxs-quote-left quotes"></i> Explore my
                  Java-based unit converter on GitHub, a versatile tool for
                  converting various measurements and quantities.
                  <i className="bx bxs-quote-right quotes"></i>
                </p>
              </div>
            </div>
          </div>

          <div className="testmonials-slider">
            <div className="testimonial-card">
              <div className="testimonial-content">
              <img
                  src="https://i.ibb.co/JcT27q8/about-img.png"
                  alt="Dr. S Kasana"
                />
                <div className="name">Dyantyi Lwazi</div>
                <div className="media-icons">
                  <a href="" title="Facebook">
                    <i className="bx bxl-facebook"></i>
                  </a>
                  <a href="" title="Twitter">
                    <i className="bx bxl-twitter"></i>
                  </a>
                  <a href="" title="Instagram">
                    <i className="bx bxl-instagram"></i>
                  </a>
                </div>
                <p className="profession">
                  <i className="bx bxs-quote-left quotes"></i> Explore my
                  Java-based unit converter on GitHub, a versatile tool for
                  converting various measurements and quantities.
                  <i className="bx bxs-quote-right quotes"></i>
                </p>
              </div>
            </div>
          </div>
          <div className="testmonials-slider">
            <div className="testimonial-card">
              <div className="testimonial-content">
              <img
                  src="https://i.ibb.co/JcT27q8/about-img.png"
                  alt="Dr. S Kasana"
                />
                <div className="name">Anganathi Zingca</div>
                <div className="media-icons">
                  <a href="" title="Facebook">
                    <i className="bx bxl-facebook"></i>
                  </a>
                  <a href="" title="Twitter">
                    <i className="bx bxl-twitter"></i>
                  </a>
                  <a href="" title="Instagram">
                    <i className="bx bxl-instagram"></i>
                  </a>
                </div>
                <p className="profession">
                  <i className="bx bxs-quote-left quotes"></i> Explore my
                  Java-based unit converter on GitHub, a versatile tool for
                  converting various measurements and quantities.
                  <i className="bx bxs-quote-right quotes"></i>
                </p>
              </div>
            </div>
          </div>
        </Carousel>
      </div>
    </section>
  );
}

export default Testimonials;
