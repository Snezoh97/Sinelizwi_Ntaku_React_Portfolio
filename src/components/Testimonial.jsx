import React from 'react';


function Testimonials(){
  return (
    <section className="testimonials" id="testimonials">
      <h2>Testimo<span>nials</span></h2>
      <div className="border"></div>
          <div className="row-1">
            <div className="col">
              <div className="testimonial card">
                <img src="https://i.ibb.co/JcT27q8/about-img.png" alt="" />
                <div className="name">Sinelizwi Ntaku</div>
                  <div className="stars">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                  </div>
                <p className="profession"><i className='bx bxs-quote-left qoutes'></i> Explore my Java-based unit converter on GitHub, a versatile tool for converting various measurements and quantities.
                <i className='bx bxs-quote-right qoutes'></i></p>
              </div>
            </div>

            <div className="col">
              <div className="testimonial">
                <img src="https://i.ibb.co/JcT27q8/about-img.png" alt="" />
                <div className="name">Sinelizwi Ntaku</div>
                <div className="stars">
                  <i className="fab fa-star"></i>
                  <i className="fab fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="far fa-star"></i>
                </div>
                <p className="profession">Explore my Java-based unit converter on GitHub, a versatile tool for converting various measurements and quantities.</p>
              </div>
            </div>

            <div className="col">
              <div className="testimonial">
                <img src="https://i.ibb.co/JcT27q8/about-img.png" alt="" />
                <div className="name">Sinelizwi Ntaku</div>
                <div class="media-icons">
                  <a href="" title="Facebook"><i className="fab fa-linkedin"></i></a>
                  <a href="" title="Twitter"><i className="fab fa-twitter"></i></a>
                  <a href="" title="Instagram"><i className="fab fa-instagram"></i></a>
                </div>
                <p className="profession">Explore my Java-based unit converter on GitHub, a versatile tool for converting various measurements and quantities.</p>
              </div>
            </div>
          </div>
    </section>
  );
}

export default Testimonials;
