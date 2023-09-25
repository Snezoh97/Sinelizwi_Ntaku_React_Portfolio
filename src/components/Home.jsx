import React, { useEffect } from "react";
import "./Home.css";
import Typed from "typed.js";
import { motion, AnimatePresence } from "framer-motion";
import "boxicons/css/boxicons.min.css";

function Home() {
  useEffect(() => {
    console.log("Home component mounted");
    const typed = new Typed(".multiple-text", {
      strings: [
        "Junior Software Developer",
        "MERN Stack Developer",
        "Java Developer",
        "Photographer",
        "Videographer",
      ],
      typeSpeed: 200,
      backSpeed: 100,
      backDelay: 1000,
      loop: true,
    });

    return () => {
      console.log("Home component unmounted");
      typed.destroy();
    };
  }, []);

  return (
    <motion.section
      className="home"
      id="home"
      initial={{ opacity: 0, y: -50 }} // Initial animation values
      animate={{ opacity: 1, y: 0 }} // Animation values to animate to
      transition={{ duration: 1 }} // Animation duration
    >
      <div className="home-content">
        <motion.h3
          initial={{ x: -50, opacity: 0 }} // Initial animation values
          animate={{ x: 0, opacity: 1 }} // Animation values to animate to
          transition={{ duration: 1 }} // Animation duration
        >
          Hello, It's Me!
        </motion.h3>
        <motion.h1
          initial={{ opacity: 0 }} // Initial animation values
          animate={{ opacity: 1 }} // Animation values to animate to
          transition={{ duration: 1 }} // Animation duration
        >
          Sinelizwi Ntaku
        </motion.h1>
        <motion.h3
          initial={{ x: 50, opacity: 0 }} // Initial animation values
          animate={{ x: 0, opacity: 1 }} // Animation values to animate to
          transition={{ duration: 1 }} // Animation duration
        >
          And I'm a <span className="multiple-text"></span>
        </motion.h3>
  
        <motion.div
          initial={{ x: 50, opacity: 0 }} // Initial animation values
          animate={{ x: 0, opacity: 1 }} // Animation values to animate to
          transition={{ duration: 1 }} // Animation duration
        >
          <AnimatePresence>
            <motion.p
              key="paragraph"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
            >
              As a highly skilled web developer with expertise in HTML, CSS,
          JavaScript, and Node.js, I have a strong foundation in creating
          responsive and engaging websites. I am also the shareholder of CrazY
          MediA FilM PTY (LTD), a photography and videography company that
          specializes in capturing memorable moments for clients.
            </motion.p>
          </AnimatePresence>
        </motion.div>

        <motion.div
          className="social-media"
          initial={{ y: 50, opacity: 0 }} // Initial animation values
          animate={{ y: 0, opacity: 1 }} // Animation values to animate to
          transition={{ delay: 0.5 }} // Animation delay
        >
          <a href="https://www.linkedin.com/in/sinelizwintaku" title="Linkedin">
            <i className="bx bxl-linkedin"></i>
          </a>
          <a
            href="https://twitter.com/SCnezoh?t=HX2WChSCX51FW1XzThWggw&s=09"
            title="Twitter"
          >
            <i className="bx bxl-twitter"></i>
          </a>
          <a
            href="https://instagram.com/snezohh?igshid=MzNlNGNkZWQ4Mg=="
            title="Instagram"
          >
            <i className="bx bxl-instagram"></i>
          </a>
          <a href="https://github.com/Snezoh97" title="GitHub">
            <i className="bx bxl-github"></i>
          </a>
        </motion.div>

        <motion.div
          className="home-btn"
          initial={{ x: -50, opacity: 0 }} // Initial animation values
          animate={{ x: 0, opacity: 1 }} // Animation values to animate to
          transition={{ delay: 1.3 }} // Animation delay
        >
          <a href="#contact" className="btn-home btn">
            <span>Let's Chat!</span>
            <span>Hello!</span>
          </a>
        </motion.div>
      </div>

      <motion.div
        className="home-img"
        initial={{ opacity: 0, x: 50 }} // Initial animation values
        animate={{ opacity: 1, x: 0 }} // Animation values to animate to
        transition={{ duration: 1 }} // Animation duration
      >
        <img src="https://i.ibb.co/JcT27q8/about-img.png" alt="about-img" />
      </motion.div>
    </motion.section>
  );
}

export default Home;
