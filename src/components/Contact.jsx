import React, { useRef, useState } from 'react';
import ReCAPTCHA from "react-google-recaptcha";
import emailjs from 'emailjs-com';
import './Contact.css';

function Contact() {
  const recaptchaRef = useRef();
  const [recaptchaValue, setRecaptchaValue] = useState(null);
  const [toSend, setToSend] = useState({
    name: '',
    email: '',
    mobile: '',
    subject: '',
    message: '',
  });

  const handleRecaptchaChange = (value) => {
    setRecaptchaValue(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();


    if (!recaptchaValue) {
      // reCAPTCHA not completed, prevent form submission
      alert('Please complete the reCAPTCHA');
      return;
    }
    // Create a new object with the input values
    const formData = {
      name: toSend.name,
      email: toSend.email,
      mobile: toSend.mobile,
      subject: toSend.subject,
      message: toSend.message,
    };

    // Replace these with your Email.js service and template IDs
    const serviceID = 'service_kcnxfnk';
    const templateID = 'template_0s91zz5';

    emailjs
      .send(serviceID, templateID, formData, 'gTz3774DkoMfmeYW2')
      .then(
        (result) => {
          console.log('Email sent successfully:', result.text);
        },
        (error) => {
          console.log('Email send error:', error.text);
        }
      );
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setToSend({ ...toSend, [name]: value });
  };

  return (
    <section id="contact" className="contact">
      <h2>Contact<span> Me!</span></h2>
      <div className="container">
        <div className="row">
          <div className="get">
            <div className="col-md-5 touch-text">
              {/* ... Rest of your component code ... */}
            </div>
            <div className="col-md-7 contact-text">
              <div className="title-box-2">
                <h5 className="title-left active-link">
                  Send <span>Message Us</span>
                </h5>
              </div>
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="input-box">
                  <input required="" type="text" name="name" onChange={handleChange} placeholder="Full Name" id="name" />
                  <input type="email" name="email" onChange={handleChange} placeholder="Email Address" id="email" />
                </div>
                <div className="input-box">
                  <input type="number" name="mobile" onChange={handleChange} placeholder="Mobile Number" id="mobile" />
                  <input type="text" name="subject" onChange={handleChange} placeholder="Subject" id="subject" />
                </div>
                <textarea name="message" onChange={handleChange} id="message" cols="30" rows="10" placeholder="Your Message"></textarea>
                <div className="contact-button">
                <ReCAPTCHA
                    sitekey="6LfurQMoAAAAAMePe2X8M4MMRp3d3OWk4_zJX1VA"
                    onChange={handleRecaptchaChange}
                  />
                  <button type='submit'>
                    <div className="svg-wrapper-1">
                      <div className="svg-wrapper">
                        <svg height="24" width="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path d="M0 0h24v24H0z" fill="none"></path>
                          <path d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z" fill="currentColor"></path>
                        </svg>
                      </div>
                    </div>
                    <span>Send</span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;

