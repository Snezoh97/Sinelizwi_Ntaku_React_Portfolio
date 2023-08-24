import React, { useEffect } from 'react';
import Typed from 'typed.js'; 
import ScrollReveal from 'scrollreveal';
import 'boxicons/css/boxicons.min.css';

function Home() {
  useEffect(() => {
    console.log('Home component mounted');

    const typed = new Typed('.multiple-text', {
      strings: ['Frontend Developer', 'Software Developer', 'Java Developer', 'Mobile Developer', 'Photographer', 'Videographer'],
      typeSpeed: 200,
      backSpeed: 100,
      backDelay: 1000,
      loop: true,
    });

    ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
    ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form', { origin: 'bottom' });
    ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
    ScrollReveal().reveal('.home-content p, .about-content, .testimonials', { origin: 'right' });

   
    return () => {
      console.log('Home component unmounted');
      typed.destroy();
    };
  }, []);

    return (
        <section className="home bg-image" id="home">
            <div className="home-content">
                <h3>Hello, It's Me!</h3>
                <h1>Sinelizwi Ntaku</h1>
                <h3>
                And I'm a <span className="multiple-text"></span>
                </h3>
                <p>
                As a highly skilled web developer with expertise in HTML, CSS, JavaScript, and Node.js, I have a strong
                foundation in creating responsive and engaging websites. I am also the shareholder of CrazY MediA FilM PTY
                (LTD), a photography and videography company that specializes in capturing memorable moments for clients.
                </p>
                <div className="social-media">
                    <a href="https://www.facebook.com/sinelizwitaku.cnera?mibextid=ZbWKwL" title="Facebook"><i className='bx bxl-facebook'></i></a>
                    <a href="https://twitter.com/SCnezoh?t=HX2WChSCX51FW1XzThWggw&s=09" title="Twitter"><i className='bx bxl-twitter'></i></a>
                    <a href="https://instagram.com/snezohh?igshid=MzNlNGNkZWQ4Mg==" title="Instagram"><i className='bx bxl-instagram' ></i></a>
                    <a href="https://www.linkedin.com/in/sinelizwintaku" title="Linkedin"><i className='bx bxl-linkedin' ></i></a>
                    <a href="https://github.com/Snezoh97" title="GitHub"><i className='bx bxl-github'></i></a>
                    <a href="https://wa.me/message/HP4CKPENLFHKD1" title="WhatsApp"><i className='bx bxl-whatsapp' ></i></a>
                </div>
                {/* <a href="https://pdfhost.io/v/A2KyXfMoh_Untitled" className="btn" title="Download Resume">
                Hire Me
                </a> */}
                <a href="#contact" className="custom-btn btn-12"><span>Click!</span><span>Let's Chat!</span></a>
            </div>
            <div className="home-img">
                <img src="https://i.ibb.co/JcT27q8/about-img.png" alt="about-img"/>
            </div>
        </section>
    );
}

export default Home;
