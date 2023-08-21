import React, { useState } from 'react';

function About() {
    const [activeTab, setActiveTab] = useState('education');

    function openTab(tabName, event) {
        const tablinks = document.querySelectorAll('.tab-links');
        const tabcontents = document.querySelectorAll('.tab-contents');

    for (const tablink of tablinks) {
        tablink.classList.remove('active-link');
    }

    for (const tabcontent of tabcontents) {
        tabcontent.classList.remove('active-tab');
    }

    event.currentTarget.classList.add('active-link');
    document.getElementById(tabName).classList.add('active-tab');

    setActiveTab(tabName);
  }

  return (
    <section className="about bg-about" id='about'>
        <div className="container">
            <div className="row">
                <div className="about-col-1">
                    <img src="https://i.ibb.co/xzsjp7N/about.png" alt="about" />
                </div>
                <div className="about-col-2">
                    <h1 className="sub-tittle">About <span>Me</span></h1>
                    <p className="text">As a recent IT graduate specialized in Application Development, I bring technical expertise,
                        innovative thinking, and effective collaboration. Proficient in Java, C#, Python, and JavaScript,
                        I am ready to contribute to organizational success. Committed to continuous learning and staying
                        updated with emerging technologies, I offer a fresh perspective, adaptability, and a strong work
                        ethic in the fast-paced IT industry.
                    </p>
                </div>
            </div>
                    <div className="tab-tittles">
                        <p className={`tab-links ${activeTab === 'education' ? 'active-link' : ''}`} onClick={(event) => openTab('education', event)}>EDUCATION</p>
                        {/* <p className={`tab-links ${activeTab === 'certificates' ? 'active-link' : ''}`} onClick={(event) => openTab('certificates', event)}>CERTIFICATE</p>
                        <p className={`tab-links ${activeTab === 'achievements' ? 'active-link' : ''}`} onClick={(event) => openTab('achievements', event)}>ACHIEVEMENTS</p> */}
                        <p className={`tab-links ${activeTab === 'skills' ? 'active-link' : ''}`} onClick={(event) => openTab('skills', event)}>SKILLS</p>
                        <p className={`tab-links ${activeTab === 'experience' ? 'active-link' : ''}`} onClick={(event) => openTab('experience', event)}>EXPERIENCE</p>
                    </div>

                    <div className={`tab-contents ${activeTab === 'education' ? 'active-tab' : ''}`} id="education">
                        <ul>
                            <li><span>2022</span><br />Advanced Diploma in Information and Communication Diploma in Application Development</li>
                            <li><span>2020</span><br />National Diploma in Information and Communication Technology</li>
                            <li><span>2016</span><br />National Senior Certificate</li>
                        </ul>
                    </div>

                    <div className={`tab-contents ${activeTab === 'skills' ? 'active-tab' : ''}`} id="skills">
                        <ul>
                            <li><span>UX/UI</span><br />Designing Websites for Schools and Applications.</li>
                            <li><span>Software Developer</span><br />Designing Applications using Python, Java, and JavaScript.</li>
                            <li><span>Web Developer</span><br />Developing Websites.</li>
                            <li><span>Multimedia artist</span><br />I specialize in creating visually appealing and engaging content for advertising campaigns.</li>
                        </ul>
                    </div>

                    {/* <div className={`tab-contents ${activeTab === 'certificates' ? 'active-tab' : ''}`} id='certificates'>
                        <ul>
                            <li><span>2023 - Current</span><br />Software Developer Intern at UVU Africa (CapaciTi).</li>
                            <li><span>2022 - 2022</span><br />Merchandiser at Super Spar in Butterworth, Eastern Cape.</li>
                            <li><span>2019 - Currently</span><br />I contribute part-time and co-own CrazY MediA FilM PTY (LTD),
                            a photography and videography company.</li>
                        </ul>
                    </div>

                    <div className={`tab-contents ${activeTab === 'achievements' ? 'active-tab' : ''}`} id='achievements'>
                        <ul>
                            <li><span>UX/UI</span><br />Designing Websites for Schools and Applications.</li>
                            <li><span>Software Developer</span><br />Designing Applications using Python, Java, and JavaScript.</li>
                            <li><span>Web Developer</span><br />Developing Websites.</li>
                            <li><span>Multimedia artist</span><br />I specialize in creating visually appealing and engaging content for advertising campaigns.</li>
                        </ul>
                    </div> */}

                    <div className={`tab-contents ${activeTab === 'experience' ? 'active-tab' : ''}`} id="experience">
                        <ul>
                            <li><span>2023 - Current</span><br />Software Developer Intern at UVU Africa (CapaciTi).</li>
                            <li><span>2022 - 2022</span><br />Merchandiser at Super Spar in Butterworth, Eastern Cape.</li>
                            <li><span>2019 - Currently</span><br />I contribute part-time and co-own CrazY MediA FilM PTY (LTD),
                            a photography and videography company.</li>
                        </ul>
                    </div>

                    <br /><br />
                    <a href="#contact" className="btn" title="Contact Me!">Let's us Chat</a>
                
            
        </div>
    </section>
  );
}

export default About;

