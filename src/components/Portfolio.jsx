import React from 'react';

const Portfolio = () => {
  return (
    <section className="portfolio" id="portfolio">
      <h2 className="heading">Latest <span>Projects</span></h2>
      <div className="portfolio-container">
        <div className="portfolio-box">
          <img src="https://i.ibb.co/qkjfyYX/fcalc.png" alt="" />
          <div className="portfolio-layer">
            <h4>Finance Calculator</h4>
            <p>I have developed a Python-based finance calculator available on my GitHub. 
              Feel free to explore the project on my GitHub for the code and details. 
            </p>
            <a href="https://github.com/Snezoh97/Financial_Calculator" title="Financial Calculator on GitHub"><i className='bx bx-link-external' ></i></a>
          </div>
        </div>
        <div className="portfolio-box">
          <img src="images/nexus.png" alt="" />
          <div className="portfolio-layer">
            <h4>Financial Banking App</h4>
            <p>I have a Python-based financial banking app, available on my GitHub profile. 
              It provides secure banking features, and intuitive user interfaces for a streamlined banking experience. 
            </p>
            <a href="https://i.ibb.co/RvGMq7Z/bank-app.png" title="Financial Banking App on GitHub"><i className='bx bx-link-external' ></i></a>
          </div>
        </div>
        <div className="portfolio-box">
          <img src="images/bank_app.png" alt="" />
          <div className="portfolio-layer">
            <h4>Nexus Banking App</h4>
            <p>Python-based banking app on my GitHub profile for seamless financial transactions, including transfers, balance inquiries, and transaction history. 
              Experience its power by exploring the code and functionalities. 
            </p>
            <a href="https://github.com/Snezoh97/Bank_App" title="Bank App on GitHub"><i className='bx bx-link-external' ></i></a>
          </div>
        </div>
        <div className="portfolio-box">
          <img src="images/school.png" alt="" />
          <div className="portfolio-layer">
            <h4>School Website</h4>
            <p>I have developed a school website using HTML, CSS, and JavaScript, available on my GitHub. 
              It offers essential information, and a visually appealing design for an engaging user experience. 
            </p>
            <a href="https://github.com/Snezoh97/Mzamomtsha_Website" title="School website on GitHub"><i className='bx bx-link-external' ></i></a>
          </div>
        </div>
        <div className="portfolio-box">
          <img src="images/unit_app.png" alt="" />
          <div className="portfolio-layer">
            <h4>Unit Converter</h4>
            <p>Explore my Java-based unit converter on GitHub, a versatile tool for converting various measurements and quantities. 
              Simplify conversions and enhance productivity with this open-source project. 
            </p>
            <a href="https://github.com/Snezoh97/Unit_Converter" title="Unit Converter on GitHub"><i className='bx bx-link-external' ></i></a>
          </div>
        </div>
        <div className="portfolio-box">
          <img src="images/game.png" alt="" />
          <div className="portfolio-layer">
            <h4>Mzamomtsha Games</h4>
            <p>Embark on exciting adventures with a collection of captivating games developed using HTML, CSS, and JavaScript. 
              Explore my GitHub profile to discover the immersive gameplay and innovative designs. 
            </p>
            <a href="https://github.com/Snezoh97/Games_Mzamomtsha" title="Games on GitHub"><i className='bx bx-link-external' ></i></a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
