import React from 'react';
import emailjs from 'emailjs-com'; 
import './Contact.css'

function Contact() {
  const sendEmail = (e) => {
    e.preventDefault();

    let name = e.target.name.value;
    let email = e.target.email.value;
    let contact = e.target.mobile.value;
    let subject = e.target.subject.value;
    let message = e.target.message.value;

    let body = "<br/>Name: " + name + "<br/> Email Address: " + email + "<br/> Contact Number: " + contact + "<br/> Subject: " + subject + "<br/> Message: " + message;

    let emailSubject = "Hi Sinelizwi Ntaku, you have received a new email from: " + name;

    emailjs.send("default_service", "template_id", {
      SecureToken: "7124848f-5e5e-4efa-bdb9-7a3e2401b901",
      To: 'sinelizwintaku@gmail.com',
      From: "sinelizwintaku@gmail.com",
      Subject: emailSubject,
      Body: body
    }).then(
      (result) => {
        console.log('Email sent successfully:', result.text);
        alert('Email sent successfully');
      },
      (error) => {
        console.error('Email sending failed:', error);
        alert('Email sending failed');
      }
    );

    e.target.reset();
  };

    return (
      <section id="contact" className="contact">
        <h2>Contact<span> Me!</span></h2>
        <div className="container">
          <div className="row">
            <div className='get'>
                <div className="col-md-5 touch-text">
                  <div className="title-box-2 pt-4 pt-md-0">
                    <h5 className="title-left active-link">
                      Get in <span>Touch</span>
                    </h5>
                  </div>
                      <div className="more-info">
                        <p className="lead">
                        Welcome to our website! We're excited to connect with you. 
                        If you have any questions, comments, or would like to get in touch, 
                        feel free to reach out to us.
                        </p>
                        <div className="list-ico">
                          <li><span className="bx bx-current-location"></span> 10 Kosmos St, Bellville South, Cape Town 7530</li>
                          <li><span className="bx bx-phone-call"></span> 076 814 9268 / 084 845 0813</li>
                          <li><span className="bx bx-envelope"></span> sinelizwintaku@gmail.com</li>
                        </div>
                      </div>
                        
                </div>
                
                      <div className="col-md-7 contact-text">
                        <div className="title-box-2">
                          <h5 className="title-left active-link">
                            Send <span>Message Us</span>
                          </h5>
                        </div>
                        <form className="contact-form" >
                            <div className="input-box">
                              <input required="" type="text" name="text" placeholder="Full Name"  id="name"/>
                              <input type="email" placeholder=" Email Address"  id="email"/>
                            </div>
                            <div className="input-box">
                              <input type="number" placeholder="Mobile Number"  id="mobile"/>
                              <input type="text" placeholder="Subject"  id="subject"/>
                            </div>
                            <textarea name="" id="message" cols="30" rows="10" placeholder="Your Message" ></textarea>
                        </form>
                        <div className="contact-button">
                        <button type="submit" className="contact-btn btn-contact" onSubmit={sendEmail}><span>Send Message!</span><span>Send Message!</span></button>
                        </div>
                  </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
  
  export default Contact;
  