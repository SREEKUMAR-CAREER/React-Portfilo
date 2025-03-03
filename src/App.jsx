import './App.css'
import { FaBehance } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io5";
import { FaFlickr } from "react-icons/fa";
import { IoLogoBitbucket } from "react-icons/io5";
import { PiDribbbleLogoFill } from "react-icons/pi";
import { PiAirplay } from "react-icons/pi";
import { PiBankFill } from "react-icons/pi";
import { useEffect } from "react";
import landingImg from "./assets/landing-image-1.jpg";
import gallery1 from "./assets/gallery-image-1.jpg";
import gallery2 from "./assets/gallery-image-2.jpg";
import gallery3 from "./assets/gallery-image-3.jpg";
import gallery4 from "./assets/gallery-image-4.jpg";
import gallery5 from "./assets/gallery-image-5.jpg";
import myimg from "./assets/my-img.jpg";
import cv from "../public/MY_CV.pdf";

function App() {
    useEffect(() => {
        const navToggle = document.querySelector(".nav-toggle");
        const nav = document.querySelector("nav");

        const toggleNav = () => {
            if (nav) {
                nav.classList.toggle("active");
            }
        };

        if (navToggle) {
            navToggle.addEventListener("click", toggleNav);
        }

        return () => {
            if (navToggle) {
                navToggle.removeEventListener("click", toggleNav);
            }
        };
    }, []);

    return (
        <>
            <header>
                <div className="container">
                    <div className="logo">SREEKUMAR</div>
                    <button className="nav-toggle">☰</button>
                    <nav>
                        <a href="#education">EDUCATION</a>
                        <a href="#skills">SKILLS</a>
                        <a href="#experience">EXPERIENCE</a>
                        <a href="#portfolio">PORTFOLIO</a>
                        <a href="#clients">CLIENTS</a>
                        <a href="#contact">CONTACT</a>
                    </nav>
                </div>
            </header>

            <main>
                <img src={landingImg}
                    alt="A person sitting on a wooden dock facing a lake with mountains in the background" />
                <div className="hero-text">
                    <h1>HI<span>,</span> I AM<br />SREEKUMAR<span>.</span></h1>
                    <p>STUDENT</p>
                    <a href={cv} download="My_CV.pdf"><button>Download Resume</button></a>

                </div>
            </main>

            <section id="about">
                <div className="container">
                    <h1>ABOUT ME</h1>
                    <div className="about-content">
                        <div className="about-text">
                            <p className="intro">I am a  Student.</p>
                            <p>Consectetur an adipisci elita, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam quis nostrud.</p>
                            <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur...</p>
                            <hr />
                            <div className="contact-info">
                                <div>
                                    <p>Phone</p>
                                    <p>+91 7200021788</p>
                                </div>
                                <div>
                                    <p>Email</p>
                                    <p>sreekumar.career@gmail.com</p>
                                </div>
                                <div>
                                    <p>Website</p>
                                    <p>www.mysite.com</p>
                                </div>
                            </div>
                        </div>
                        <div className="about-image">
                            <div className="image-wrapper">
                                <img src={myimg}
                                    alt="Portrait of a woman with long hair" />
                                <div className="social-links">
                                    <a href="#"><i className="fab fa-facebook-f"></i></a>
                                    <a href="#"><PiDribbbleLogoFill /></a>
                                    <a href="#"><i className="fab fa-twitter"></i></a>
                                    <a href="https://www.linkedin.com/in/sreekumar-career/"><i className="fab fa-linkedin-in"></i></a>
                                    <a href="#"><i className="fab fa-instagram"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="education">
                <div className="container">
                    <h2>EDUCATION</h2>
                    <div className="education-content">
                        <div className="education-item">
                            <div className="timeline-dot"></div>
                            <div className="timeline-line"></div>
                            <div className="education-details">
                                <p>2021 - 2023</p>
                                <p>COMPUTER SCIENCE</p>
                                <p>ZION MATRICULATION HIGHER SECONDARY SCHOOL</p>
                                <p>Chennai, India</p>
                                <p>Duis aute irure dolor in reprehenderit in vol patate velit esse cillum dolore eu fugiat nulla pari. Excepteur sint occana inna tecat cupidatat non proident.</p>
                            </div>
                        </div>
                        <div className="education-item">
                            <div className="timeline-dot"></div>
                            <div className="timeline-line"></div>
                            <div className="education-details">
                                <p>2023 - 2027</p>
                                <p>B.TECH (AI & ML)</p>
                                <p>SAVEETHA ENGINEERING COLLEGE</p>
                                <p>Chennai, India</p>
                                <p>Duis aute irure dolor in reprehenderit in vol patate velit esse cillum dolore eu fugiat nulla pari. Excepteur sint occana inna tecat cupidatat non proident.</p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            <section id="skills">
                <div className="container">
                    <h2>SKILLS</h2>
                    <div className="skills-grid">
                        <div className="skill-item">
                            <div className="skill-header">
                                <span>PHYTHON</span>
                                <span>70%</span>
                            </div>
                            <div className="progress-bar">
                                <div className="progress" style={{ width: "80%" }}></div>
                            </div>
                        </div>
                        <div className="skill-item">
                            <div className="skill-header">
                                <span>C</span>
                                <span>70%</span>
                            </div>
                            <div className="progress-bar">
                                <div className="progress" style={{ width: "70%" }}></div>
                            </div>
                        </div>
                        <div className="skill-item">
                            <div className="skill-header">
                                <span>UNITY</span>
                                <span>85%</span>
                            </div>
                            <div className="progress-bar">
                                <div className="progress" style={{ width: "85%" }}></div>
                            </div>
                        </div>
                        <div className="skill-item">
                            <div className="skill-header">
                                <span>C#</span>
                                <span>75%</span>
                            </div>
                            <div className="progress-bar">
                                <div className="progress" style={{ width: "75%" }}></div>
                            </div>
                        </div>
                        <div className="skill-item">
                            <div className="skill-header">
                                <span>SWIFT</span>
                                <span>50%</span>
                            </div>
                            <div className="progress-bar">
                                <div className="progress" style={{ width: "50%" }}></div>
                            </div>
                        </div>
                        <div className="skill-item">
                            <div className="skill-header">
                                <span>COMMUNICATION</span>
                                <span>90%</span>
                            </div>
                            <div className="progress-bar">
                                <div className="progress" style={{ width: "90%" }}></div>
                            </div>
                        </div>
                        <div className="skill-item">
                            <div className="skill-header">
                                <span>SKETCH</span>
                                <span>90%</span>
                            </div>
                            <div className="progress-bar">
                                <div className="progress" style={{ width: "90%" }}></div>
                            </div>
                        </div>
                        <div className="skill-item">
                            <div className="skill-header">
                                <span>CREATIVITY</span>
                                <span>90%</span>
                            </div>
                            <div className="progress-bar">
                                <div className="progress" style={{ width: "90%" }}></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="experience">
                <div className="container">
                    <h1>EXPERIENCE</h1>
                    <div className="experience-content">
                        <div className="experience-column left">
                            <div className="experience-item">
                                <div className="timeline-dot"></div>
                                <div className="date">2024 - Present</div>
                                <h2>GAME DEVELOPER</h2>
                                <p>Chennai, India</p>
                                <p>Duis aute irure dolor in reprehenderit in vol patate velit esse cillum dolore eu fugiat nulla pari. Excepteur sint occaecat inna tecat cupidatat non proident.</p>
                            </div>

                            <div className="experience-item">
                                <div className="timeline-dot"></div>
                                <div className="date">2023 - 2024</div>
                                <h2>PYTHON PRACTIONER</h2>
                                <p>Chennai, India</p>
                                <p>Duis aute irure dolor in reprehenderit in vol patate velit esse cillum dolore eu fugiat nulla pari. Excepteur sint occaecat inna tecat cupidatat non proident.</p>
                            </div>
                        </div>
                        <div className="experience-column right">

                            <div className="experience-item">
                                <div className="timeline-dot"></div>
                                <div className="date">2024 - 2024</div>
                                <h2>DATA SCIENCE TRAINEE</h2>
                                <p>Computational Intelligence Research Foundation</p>
                                <p>Chennai, India</p>
                                <p>Duis aute irure dolor in reprehenderit in vol patate velit esse cillum dolore eu fugiat nulla pari. Excepteur sint occaecat inna tecat cupidatat non proident.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="profiles">
                <div className="container">
                    <h1>PROFILES</h1>
                    <div className="profiles-grid">
                        <div><PiAirplay /><p>Air Play</p></div>
                        <div><PiDribbbleLogoFill /><p>Dribbble</p></div>
                        <div><FaBehance /><p>Behance</p></div>
                        <div><IoLogoGithub /><p>Github</p></div>
                        <div><FaFlickr /><p>FlickR</p></div>
                        <div><PiBankFill /><p>BankFill</p></div>
                        <div><IoLogoBitbucket /><p>BitBucket</p></div>
                    </div>
                </div>
            </section>

            <section id="portfolio">
                <div className="container">
                    <h1>PORTFOLIO</h1>
                    <div className="portfolio-grid">
                        <div>
                            <img alt="Interior design of a modern living room" src={gallery1} />
                        </div>
                        <div>
                            <img alt="Modern architectural building" src={gallery2} />
                        </div>
                        <div className="tall">
                            <img alt="Modern high-rise building" src={gallery3} />
                        </div>
                        <div>
                            <img alt="Dining area with a round table"src={gallery4} />
                        </div>
                        <div>
                            <img alt="Set of modern white ceramic containers" src={gallery5} />
                        </div>
                    </div>
                </div>
            </section>

            <section id="clients">
                <div className="container">
                    <h2>CLIENTS</h2>
                    <div className="clients-list">

                        <PiAirplay />
                        <PiDribbbleLogoFill />
                        <PiBankFill />
                        <IoLogoBitbucket />
                    </div>
                </div>
            </section>

            <section id="contact">
                <div className="container">
                    <h1>CONTACT ME</h1>
                    <div className="contact-content">
                        <div className="contact-form">
                            <form>
                                <div>
                                    <input type="text" placeholder="Name*" />
                                </div>
                                <div>
                                    <input type="email" placeholder="Email*" />
                                </div>
                                <div>
                                    <input type="text" placeholder="Subject" />
                                </div>
                                <div>
                                    <textarea placeholder="Message"></textarea>
                                </div>
                                <div>
                                    <button type="submit">Submit</button>
                                </div>
                            </form>
                        </div>
                        <div className="contact-details">
                            <h2>SREEKUMAR S</h2>

                            <p><strong>Phone</strong></p>
                            <p>+91 7200021788</p>
                            <p><strong>Email</strong></p>
                            <p>sreekumar.career@gmail.com</p>
                            <p><strong>Website</strong></p>
                            <p>www.mysite.com</p>
                            <div className="social-links">
                                <a href="#"><i className="fab fa-dribbble"></i></a>
                                <a href="#"><i className="fab fa-twitter"></i></a>
                                <a href="https://www.linkedin.com/in/sreekumar-career/"><i className="fab fa-linkedin"></i></a>
                                <a href="#"><i className="fab fa-instagram"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default App
