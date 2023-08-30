import React from 'react';
import './Portfolio.css'

function Portfolio (){
  return (
    <section className="portfolio" id="portfolio">
      <h2 className="heading">Latest <span>Projects</span></h2>
      <div className="portfolio-container">
        <div className="portfolio-box">
          <img src="https://i.ibb.co/qkjfyYX/fcalc.png" alt="fcal" />
          <div className="portfolio-layer">
            <h4 className='boxHeading'>Finance Calculator</h4>
            <p className='boxParagraph'>I have developed a Python-based finance calculator available on my GitHub. 
              Feel free to explore the project on my GitHub for the code and details. 
            </p>
            <a href="https://github.com/Snezoh97/Financial_Calculator" title="Financial Calculator on GitHub"><i className='bx bx-link-external link' ></i></a>
          </div>
        </div>
        <div className="portfolio-box">
          <img src="https://i.ibb.co/8mj1PWv/nexus.png" alt="nexus"/>
          <div className="portfolio-layer">
            <h4 className='boxHeading'>Banking App</h4>
            <p className='boxParagraph'>I have a Python-based financial banking app, available on my GitHub profile. 
              It provides secure banking features, and intuitive user interfaces. 
            </p>
            <a href="https://i.ibb.co/RvGMq7Z/bank-app.png" title="Financial Banking App on GitHub"><i className='bx bx-link-external link' ></i></a>
          </div>
        </div>
        <div className="portfolio-box">
          <img src="https://i.ibb.co/RvGMq7Z/bank-app.png" alt="bank-app" />
          <div className="portfolio-layer">
            <h4 className='boxHeading'>Nexus App</h4>
            <p className='boxParagraph'>Python-based banking app on my GitHub profile for seamless financial transactions, including transfers, balance inquiries, and transaction history. 
            </p>
            <a href="https://github.com/Snezoh97/Bank_App" title="Bank App on GitHub"><i className='bx bx-link-external link' ></i></a>
          </div>
        </div>
        <div className="portfolio-box">
          <img src="https://i.ibb.co/HqpJnW2/school.png" alt="school" />
          <div className="portfolio-layer">
            <h4 className='boxHeading'>School Website</h4>
            <p className='boxParagraph'>I have developed a school website using HTML, CSS, and JavaScript, available on my GitHub. 
              It offers essential information. 
            </p>
            <a href="https://github.com/Snezoh97/Mzamomtsha_Website" title="School website on GitHub"><i className='bx bx-link-external link' ></i></a>
          </div>
        </div>
        <div className="portfolio-box">
          <img src="https://i.ibb.co/2Y6scdT/unit-app.png" alt="unit-app" />
          <div className="portfolio-layer">
            <h4 className='boxHeading'>Unit Converter</h4>
            <p className='boxParagraph'>Explore my Java-based unit converter on GitHub, a versatile tool for converting various measurements and quantities. 
            </p>
            <a href="https://github.com/Snezoh97/Unit_Converter" title="Unit Converter on GitHub"><i className='bx bx-link-external link' ></i></a>
          </div>
        </div>
        <div className="portfolio-box">
          <img src="https://i.ibb.co/Twxy2Xj/game.png" alt="game"/>
          <div className="portfolio-layer">
            <h4 className='boxHeading'>School Games</h4>
            <p className='boxParagraph'>Embark on exciting adventures with a collection of captivating games developed using HTML, CSS, and JavaScript. 
            </p>
            <a href="https://github.com/Snezoh97/Games_Mzamomtsha" title="Games on GitHub"><i className='bx bx-link-external link' ></i></a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
