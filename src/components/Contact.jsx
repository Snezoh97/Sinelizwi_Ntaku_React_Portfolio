const Contact = () => {
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
                      <form className="contact-form">
                          <div class="input-box">
                            <input required="" type="text" name="text" placeholder="Full Name" autocomplete="off" id="name"/>
                            <input type="email" placeholder="Email Address" autocomplete="off" id="email"/>
                          </div>
                          <div class="input-box">
                            <input type="number" placeholder="Mobile Number" autocomplete="off" id="mobile"/>
                            <input type="text" placeholder="Subject" autocomplete="off" id="subject"/>
                          </div>
                          <textarea name="" id="message" cols="30" rows="10" placeholder="Your Message" autocomplete="off"></textarea>
                      </form>
                      <div className="contact-button">
                      <a href="https://pdfhost.io/v/A2KyXfMoh_Untitled" className="custom-btn btn-12"><span>Send Message!</span><span>Send Message!</span></a>
                      </div>
                </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
