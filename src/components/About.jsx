import React, { useState } from 'react';

function About (props) {
  const [activeTab, setActiveTab] = useState('skills');

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  return (
    <section id="about">
      <div className="container">
        <div className="row">
          <div className="about-col-1">
            <img src="https://i.ibb.co/xzsjp7N/about.png" alt="About Me" />
          </div>
          <div className="about-col-2">
            <h1 className="sub-tittle">About <span>Me</span></h1>
            <p className="text">
              As a recent IT graduate specialized in Application Development, I bring technical expertise,
              innovative thinking, and effective collaboration. Proficient in Java, C#, Python, and JavaScript,
              I am ready to contribute to organizational success. Committed to continuous learning and staying
              updated with emerging technologies, I offer a fresh perspective, adaptability, and a strong work
              ethic in the fast-paced IT industry.
            </p>

            {/* ---------- Tab Links --------  */}

            <div className="tab-tittles">
              <p
                className={`tab-links ${activeTab === 'skills' ? 'active-link' : ''}`}
                onClick={() => handleTabClick('skills')}
              >
                Skills
              </p>
              <p
                className={`tab-links ${activeTab === 'experience' ? 'active-link' : ''}`}
                onClick={() => handleTabClick('experience')}
              >
                Experience
              </p>
              <p
                className={`tab-links ${activeTab === 'education' ? 'active-link' : ''}`}
                onClick={() => handleTabClick('education')}
              >
                Education
              </p>
            </div>

            {/* ---------- Tab Contents -----------  */}

            <div className={`tab-contents ${activeTab === 'skills' ? 'active-tab' : ''}`} id="skills">
              <ul>
                <li><span>UX/UI</span><br />Designing Websites for Schools and Applications.</li>
                <li><span>Software Developer</span><br />Designing Applications using Python, Java, and JavaScript.</li>
                <li><span>Web Developer</span><br />Developing Websites.</li>
                <li><span>Multimedia artist</span><br />I specialize in creating visually appealing and engaging content for advertising campaigns.</li>
              </ul>
            </div>

            {/* -------- Experience -------  */}

            <div className={`tab-contents ${activeTab === 'experience' ? 'active-tab' : ''}`} id="experience">
              <ul>
                <li><span>2023 - Current</span><br />Software Developer Intern at UVU Africa (CapaciTi).</li>
                <li><span>2022 - 2022</span><br />Merchandiser at Super Spar in Butterworth, Eastern Cape.</li>
                <li><span>2019 - Currently</span><br />I contribute part-time and co-own CrazY MediA FilM PTY (LTD), a photography and videography company.</li>
              </ul>
            </div>

            {/* -------- Education -------  */}

            <div className={`tab-contents ${activeTab === 'education' ? 'active-tab' : ''}`} id="education">
              <ul>
                <li><span>2022</span><br />Advanced Diploma in Information and Communication Diploma in Application Development</li>
                <li><span>2020</span><br />National Diploma in Information and Communication Technology</li>
                <li><span>2016</span><br />National Senior Certificate</li>
              </ul>
            </div>
            <br /><br />
            <a href="https://pdfhost.io/v/A2KyXfMoh_Untitled" className="custom-btn btn-12"><span>Click!</span><span>Download Cv</span></a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
