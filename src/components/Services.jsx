import './Services.css'
import React from 'react';

function Services(){
  return (
    <section className="services" id="services">
      <h2 className="heading">My <span>Services</span></h2>
      <div className="container-services">
        <div className="services-containter">
          <div className="services-box">
            <i className='bx bx-code-alt'></i>
            <h3>Web Development</h3>
            <p> I have showcased my expertise in creating visually appealing and functional websites. 
              With strong skills in HTML5, CSS, and JavaScript. 
            </p>
            <a href="https://github.com/Snezoh97/Mzamomtsha_Website" title="Websites"><i className='bx bx-link-external' ></i></a>
          </div>

          <div className="services-box">
            <i className='bx bxs-paint' ></i>
            <h3>Software Developer</h3>
            <p>As a software developer experienced in Java, Python, React, Node.js, JavaScript, and C#, I specialize in developing 
              software applications and games.
            </p>
            <a href="https://github.com/Snezoh97/Games_Mzamomtsha" title="Games"><i className='bx bx-link-external' ></i></a>
          </div>

          <div className="services-box">
            <i className='bx bxl-python' ></i>
            <h3>Python Developer</h3>
            <p> A Python developer specializes in programming and software development using the Python language. 
            </p>
            <a href="https://github.com/Snezoh97/Financial_Calculator" title="Calculator"><i className='bx bx-link-external' ></i></a>
          </div>

          <div className="services-box"> 
            <i className='bx bxl-java'></i>
            <h3>Java Developer</h3>
            <p> Java developers use the Java language for programming and software development. Projects are available on 
              GitHub.
            </p>
            <a href="https://github.com/Snezoh97/Unit_Converter" title="Convertor"><i className='bx bx-link-external' ></i></a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
