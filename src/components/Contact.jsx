import React from 'react';

const ContactForm = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          {/* First code block */}
          <div className="title-box-2 pt-4 pt-md-0">
            <h5 className="title-left">Get in Touch</h5>
          </div>
          <div className="more-info">
            <p className="lead">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Facilis dolorum dolorem soluta quidem expedita aperiam
              aliquid at. Totam magni ipsum suscipit amet? Autem nemo
              esse laboriosam ratione nobis mollitia inventore?
            </p>
            <ul className="list-ico">
              <li>
                <span className="bi bi-geo-alt"></span> 329 WASHINGTON ST BOSTON, MA 02108
              </li>
              <li>
                <span className="bi bi-phone"></span> (617) 557-0089
              </li>
              <li>
                <span className="bi bi-envelope"></span> contact@example.com
              </li>
            </ul>
          </div>
          <div className="socials">
            <ul>
              <li>
                <a href="">
                  <span className="ico-circle">
                    <i className="bi bi-facebook"></i>
                  </span>
                </a>
              </li>
              {/* Add other social media links here */}
            </ul>
          </div>
        </div>
        <div className="col-md-6">
          {/* Second code block */}
          <section className="contact" id="contact">
            <h2 className="heading">Contact <span>Me!</span></h2>
            <form>
              <div className="input-box">
                <input required type="text" name="text" placeholder="Full Name" autoComplete="off" id="name" />
                <input type="email" placeholder="Email Address" autoComplete="off" id="email" />
              </div>
              <div className="input-box">
                <input type="number" placeholder="Mobile Number" autoComplete="off" id="mobile" />
                <input type="text" placeholder="Email Subject" autoComplete="off" id="subject" />
              </div>
              <textarea name="" id="message" cols="30" rows="10" placeholder="Your Message" autoComplete="off"></textarea>
              <input type="button" onClick={SendEmail} value="Send Message" className="btn" />
            </form>
          </section>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
