import './Testimonials.css';
import React, { useEffect, useState } from 'react';

function Testimonials() {
  const [isSliding, setIsSliding] = useState(false);

  useEffect(() => {
    // Automatically add the animation class after a delay (e.g., 2 seconds)
    const delay = setTimeout(() => {
      setIsSliding(true);
    }, 2000); // Adjust the delay as needed (in milliseconds)

    // Clean up the timeout when the component unmounts
    return () => clearTimeout(delay);
  }, []);

  return (
    <section className="testimonials" id="testimonials">
      <h2>Testimo<span>nials</span></h2>
      <div className="border"></div>
      <div className={`row-1 ${isSliding ? 'slide-left' : ''}`}>
        <div className="col">
          <div className="testimonial card">
            <img src="https://i.ibb.co/JcT27q8/about-img.png" alt="" />
            <div className="name">Sinelizwi Ntaku</div>
            <div className="media-icons">
                  <a href="" title="Facebook"><i className='bx bxl-facebook'></i></a>
                  <a href="" title="Twitter"><i className='bx bxl-twitter'></i></a>
                  <a href="" title="Instagram"><i className='bx bxl-instagram' ></i></a>
                </div>
                <p className="profession"><i className='bx bxs-quote-left qoutes'></i> Explore my Java-based unit converter 
                on GitHub, a versatile tool for converting various measurements and quantities.<i className='bx bxs-quote-right qoutes'></i></p>
          </div>
        </div>

        <div className="col">
          <div className="testimonial card">
            <img src="https://i.ibb.co/JcT27q8/about-img.png" alt="" />
            <div className="name">Sinelizwi Ntaku</div>
            <div className="media-icons">
                  <a href="" title="Facebook"><i className='bx bxl-facebook'></i></a>
                  <a href="" title="Twitter"><i className='bx bxl-twitter'></i></a>
                  <a href="" title="Instagram"><i className='bx bxl-instagram' ></i></a>
                </div>
                <p className="profession"><i className='bx bxs-quote-left qoutes'></i> Explore my Java-based unit converter 
                on GitHub, a versatile tool for converting various measurements and quantities.<i className='bx bxs-quote-right qoutes'></i></p>
          </div>
        </div>

        <div className="col">
          <div className="testimonial card">
            <img src="https://i.ibb.co/JcT27q8/about-img.png" alt="" />
            <div className="name">Sinelizwi Ntaku</div>
            <div className="media-icons">
                  <a href="" title="Facebook"><i className='bx bxl-facebook'></i></a>
                  <a href="" title="Twitter"><i className='bx bxl-twitter'></i></a>
                  <a href="" title="Instagram"><i className='bx bxl-instagram' ></i></a>
                </div>
                <p className="profession"><i className='bx bxs-quote-left qoutes'></i> Explore my Java-based unit converter 
                on GitHub, a versatile tool for converting various measurements and quantities.<i className='bx bxs-quote-right qoutes'></i></p>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Testimonials;
