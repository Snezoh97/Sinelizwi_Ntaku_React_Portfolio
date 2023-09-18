import "./About.css";
import React, { useState } from "react";

function About(props) {
  const [activeTab, setActiveTab] = useState("education");

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  return (
    <section className="about" id="about">
      <div className="container">
        <div className="row">
          <div className="about-col-1">
            <img src="https://i.ibb.co/xzsjp7N/about.png" alt="About Me" />
          </div>
          <div className="about-col-2">
            <h1 className="sub-tittle">
              About <span>Me</span>
            </h1>
            <p className="text">
              As a recent IT graduate specialized in Application Development, I
              bring technical expertise, innovative thinking, and effective
              collaboration. Proficient in Java, C#, Python, and JavaScript, I
              am ready to contribute to organizational success. Committed to
              continuous learning and staying updated with emerging
              technologies, I offer a fresh perspective, adaptability, and a
              strong work ethic in the fast-paced IT industry.
            </p>

            {/* ---------- Tab Links --------  */}
            <div className="container-tab">
              <div className="tab-tittles">
                <p
                  className={`tab-links ${
                    activeTab === "education" ? "active-link" : ""
                  }`}
                  onClick={() => handleTabClick("education")}
                >
                  Education
                </p>
                <p
                  className={`tab-links ${
                    activeTab === "skills" ? "active-link" : ""
                  }`}
                  onClick={() => handleTabClick("skills")}
                >
                  Skills
                </p>

                <p
                  className={`tab-links ${
                    activeTab === "certificates" ? "active-link" : ""
                  }`}
                  onClick={() => handleTabClick("certificates")}
                >
                  Certificates
                </p>
                {/* <p
                  className={`tab-links ${activeTab === 'achievements' ? 'active-link' : ''}`}
                  onClick={() => handleTabClick('achievements')}
                >
                  Achievements
                </p> */}
                <p
                  className={`tab-links ${
                    activeTab === "experience" ? "active-link" : ""
                  }`}
                  onClick={() => handleTabClick("experience")}
                >
                  Experience
                </p>
              </div>

              {/* ---------- Tab Contents -----------  */}

              <div
                className={`tab-contents ${
                  activeTab === "skills" ? "active-tab" : ""
                }`}
                id="skills"
              >
                <ul>
                  <li>
                    <span>UX/UI</span>
                    <br />
                    Designing Websites for Schools and Applications.
                  </li>
                  <li>
                    <span>Software Developer</span>
                    <br />
                    Designing Applications using Python, Java, and JavaScript.
                  </li>
                  <li>
                    <span>Web Developer</span>
                    <br />
                    Developing Websites using HTML, CSS, JavaScript and
                    Frameworks such React JS, Node JS, Express JS, and Vite as a
                    building tool.
                  </li>
                  <li>
                    <span>Multimedia artist</span>
                    <br />I specialize in creating visually appealing and
                    engaging content for advertising campaigns.
                  </li>
                </ul>
              </div>

              <div
                className={`tab-contents ${
                  activeTab === "certificates" ? "active-tab" : ""
                }`}
                id="certificates"
              >
                <ul>
                  <li>
                    <span>Introduction to HTML & CSS</span>
                    <br />
                    Learning the basics of HTML and CSS from SoloLean
                  </li>
                  <li>
                    <span>Intermediate to Java</span>
                    <br />I was doing java codes from SoloLearn
                  </li>
                  <li>
                    <span>Figma</span>
                    <br />I was learning how to design prototype from Coursera
                  </li>
                </ul>
              </div>

              {/* -------- Experience -------  */}

              <div
                className={`tab-contents ${
                  activeTab === "experience" ? "active-tab" : ""
                }`}
                id="experience"
              >
                <ul>
                  <li>
                    <span>July|2023 - Current</span>
                    <br />
                    Junior Software Developer at Younglings Africa.
                  </li>
                  <li>
                    <span>Feb|2023 - July|2023</span>
                    <br />
                    Software Developer Intern at UVU Africa.
                  </li>
                  <li>
                    <span>2022 - 2022</span>
                    <br />
                    Merchandiser at Super Spar in Butterworth, Eastern Cape.
                  </li>
                  <li>
                    <span>2019 - Currently</span>
                    <br />I contribute part-time and co-owner at CrazY MediA
                    FilM PTY (LTD), a photography and videography company.
                  </li>
                </ul>
              </div>

              {/* -------- Education -------  */}

              <div
                className={`tab-contents ${
                  activeTab === "education" ? "active-tab" : ""
                }`}
                id="education"
              >
                <ul>
                  <li>
                    <span>May</span>|<span>2022</span>
                    <br />
                    Advanced Diploma in Information and Communication Diploma in
                    Application Development
                  </li>
                  <li>
                    <span>May</span>|<span>2020</span>
                    <br />
                    National Diploma in Information and Communication Technology
                    in Software Develoment
                  </li>
                  <li>
                    <span>November</span>|<span>2016</span>
                    <br />
                    National Senior Certificate
                  </li>
                </ul>
              </div>
            </div>
            <br />
            <br />
            <a
              href="https://www.canva.com/design/DAFh4mdtWYg/MzOakSlpk0fybt_ymU-XqQ/view?utm_content=DAFh4mdtWYg&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink"
              className="custom-btn btn-12"
            >
              <span>Hire Me!</span>
              <span>Download Cv</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
