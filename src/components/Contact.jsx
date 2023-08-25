import React from 'react';

const Contact = () => {
  return (
    <div className="contact-section" id='contact'>
      <h4 className="contact-me">
        <span className="span">Contact Me!</span>
      </h4>
      <div className="overlap-19">
        <div className="overlap-20">
          <p className="send-message-us">
            <span className="span">Send Message Us</span>
            
          </p>
          <img
            className="line"
            alt="Line"
            src="https://anima-uploads.s3.amazonaws.com/projects/64db63fd116bd307b5539415/releases/64e880527704051b825b4cee/img/line-2@2x.png"
          />
        </div>
        <div className="div-wrapper">
          <input className="contact-name" required="" type="text" name="text" placeholder="Full Name" autocomplete="off" id="name"></input>
        </div>
        <div className="overlap-21">
          {/* <input className="text-wrapper-24">Mobile number</input> */}
        </div>
        <div className="overlap-22">
          <p className="get-in-touc">Get 
             <span className="head-con"> In Touch</span>
          </p>
          <img
            className="line-2"
            alt="Line"
            src="https://anima-uploads.s3.amazonaws.com/projects/64db63fd116bd307b5539415/releases/64e880527704051b825b4cee/img/line-1@2x.png"
          />
        </div>
        <p className="welcome-to-our">
          Welcome to our website! We're excited to connect with you. If you have any questions, comments, or
          would like to get in touch, feel free to reach out to us.
        </p>
        <img
          className="location-icon"
          alt="Location icon"
          src="https://anima-uploads.s3.amazonaws.com/projects/64db63fd116bd307b5539415/releases/64e880527704051b825b4cee/img/location-icon.gif"
        />
        <p className="text-wrapper-25">10 Kosmos St, Bellville South, Cape Town 7530</p>
        <p className="text-wrapper-26">076 814 9268 / 084 845 0813</p>
        <div className="text-wrapper-27">sinelizwintaku@gmail.com</div>
        <img
          className="phone-icon"
          alt="Phone icon"
          src="https://anima-uploads.s3.amazonaws.com/projects/64db63fd116bd307b5539415/releases/64e880527704051b825b4cee/img/phone-icon.gif"
        />
        <img
          className="email-icon"
          alt="Email icon"
          src="https://anima-uploads.s3.amazonaws.com/projects/64db63fd116bd307b5539415/releases/64e880527704051b825b4cee/img/email-icon.gif"
        />
        <div className="overlap-group-4">
          <div className="text-wrapper-28">Your Message</div>
        </div>
        <div className="overlap-23">
          <div className="text-wrapper-29">Subject</div>
        </div>
        <div className="overlap-24">
          <div className="text-wrapper-30">Email address</div>
        </div>
        <div className="overlap-25">
          <div className="text-wrapper-31">Send Message</div>
          <img
            className="linked-in-3"
            alt="LinkedIn"
            src="https://anima-uploads.s3.amazonaws.com/projects/64db63fd116bd307b5539415/releases/64e880527704051b825b4cee/img/linkedin-3.gif"
          />
        </div>
      </div>
    </div>
  );
};

export default Contact;
