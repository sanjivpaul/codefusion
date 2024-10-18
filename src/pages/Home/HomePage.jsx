import React, { useEffect, useState } from "react";
// import banner from "../../assets/banner/banner.png";
import banner from "../../assets/banner/banner4.png";
import "./HomePage.css";
import {
  FaAngleDoubleDown,
  FaGithubSquare,
  FaLinkedin,
  FaRegCopyright,
} from "react-icons/fa";
import {
  FaArrowRightLong,
  FaSquareFacebook,
  FaSquareTwitter,
} from "react-icons/fa6";
import { RiInstagramFill } from "react-icons/ri";
import { IoLogoDiscord } from "react-icons/io5";
// import { FaArrowRightLong } from "react-icons/fa6";
import { TbBulb } from "react-icons/tb";
import DSA from "../../assets/images/DSA.png";
import apptitude from "../../assets/images/apptitude.png";
import ai from "../../assets/images/ai.png";
import Typewriter from "../../components/Typewriter/Typewriter";
import laptop from "../../assets/icons/gears.png";
import time from "../../assets/icons/time-adn-date.png";
import bulb from "../../assets/icons/bulb.png";
import pencil from "../../assets/icons/color-pencil.png";
import { useNavigate} from "react-router-dom";
import Footer from "../../components/Footer/Footer";

const testimonials = [
  {
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto similique amet tempore magni quia repellendus quod, illum aut veritatis nostrum quibusdam, expedita incidunt saepe esse corporis odit nisi explicabo fugiat.",
    name: "Sanjiv",
    role: "Author",
    image:
      "https://user-images.githubusercontent.com/13468728/234031693-6bbaba7d-632c-4d7d-965f-75a76a549ce2.jpg",
  },
  {
    text: "Another testimonial text goes here. You can add more testimonials as needed.",
    name: "Alex",
    role: "Developer",
    image:
      "https://user-images.githubusercontent.com/13468728/234031617-2dfb19ea-01d0-4370-b63b-bb6bdfb4f78e.jpg",
  },
  {
    text: "Another testimonial text goes here. You can add more testimonials as needed.",
    name: "Alex",
    role: "Developer",
    image:
      "https://user-images.githubusercontent.com/13468728/234031646-10533999-39e5-4c7b-ab54-d0299b13ce74.jpg",
  },
  // Add more testimonials here
];

function HomePage() {
  const navigate = useNavigate();
  const [currentSlide, setCurrentSlide] = useState(0);

  const goToSlide = (index) => {
    if (index >= 0 && index < testimonials.length) {
      setCurrentSlide(index);
    }
  };

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prevSlide) => (prevSlide - 1 + testimonials.length) % testimonials.length
    );
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 3000); // Change slide every 3 seconds
    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [nextSlide]);

  const itemCount = 5;
  const keyframes = `
    @keyframes scrollUp {
      ${Array.from(
        { length: itemCount - 1 },
        (_, i) => `
        ${(i + 1) * 25 - 10}% {
          transform: translateY(${(-100 / itemCount) * (i + 1)}%);
        }
        ${(i + 1) * 25}% {
          transform: translateY(${(-100 / itemCount) * (i + 1)}%);
        }
      `
      ).join("")}
    }
  `;

  // Create a style element for keyframes
  const style = document.createElement("style");
  style.appendChild(document.createTextNode(keyframes));
  document.head.appendChild(style);

  return (
    <div className="home-container">
      <div className="banner">
        <img src={banner} />
        <div className="scrolling-words-container">
          <div className="scrolling-words-box">
            <ul>
              <li style={{ color: "#ea4335" }}>Code</li>
              <li style={{ color: "#4285f4" }}>Build</li>
              <li style={{ color: "#34a853" }}>Learn</li>
              <li style={{ color: "#fbbc04" }}>Succeed</li>
              <li style={{ color: "#ea4335" }}>Code</li>
            </ul>
          </div>
          <span className="for-everyone">for everyone</span>
        </div>
        {/* <div className="typewriter">
          <Typewriter
            phrases={[
              "Hi, I'm Si.",
              "I am Creative.",
              "I Love Design.",
              "I Love to Develop.",
            ]}
            period={2000}
          />
        </div> */}
        <button className="learning-btn"> Start Learning Now</button>
      </div>

      <section className="section-1">
        <div className="start-learning">
          {/* <div className="start-learning-btn">
            <p>Start Learning Now</p>
            <FaArrowRightLong size={20} color="#ffffff" />
          </div> */}
        </div>

        <div className="scroll-down">
          <h4>Scroll Down</h4>
          <div className="arrow-bounce">
            <FaAngleDoubleDown size={24} />
          </div>
        </div>
      </section>

      <section className="analytics">
        <div className="small-card">
          <h3>12K+</h3>
          <h5>Students</h5>
        </div>
        <div className="small-card">
          <h3>12K+</h3>
          <h5>Course</h5>
        </div>
        <div className="small-card">
          <h3>10K+</h3>
          <h5>Notes</h5>
        </div>
        <div className="small-card">
          <h3>2k+</h3>
          <h5>Tutor's</h5>
        </div>
        <div className="small-card">
          <h3>1K+</h3>
          <h5>Videos</h5>
        </div>
        <div className="small-card">
          <h3>11K+</h3>
          <h5>Review</h5>
        </div>
      </section>

      <section className="section-3">
        <div className="s3-greeting">
          <h3>Welcome !</h3>
          <p>Where Education meets real-world needs</p>
          <div className="s3-explore-btn">
            <h4>Explore</h4>
            <FaArrowRightLong size={20} color="#ffffff" />
          </div>
        </div>
        <div className="s3-cources">
          {/* <h3 >Recommended for you</h3> */}
          {/* <div className="s3-card-container">
            <div className="s3-card">
              <div className="s3-card-top">
                <h2>DSA</h2>
              </div>
            </div>

            <div className="s3-card">
              <div className="s3-card-top">
                <h2>Apptitude</h2>
              </div>
            </div>

            <div className="s3-card">
              <div className="s3-card-top">
                <h2>Interview</h2>
              </div>
            </div>
          </div> */}
        </div>
      </section>

      {/* section-7 */}

      {/* <section className="section-7">
        <div className="sec-7-container">
          <div className="sec-7-heading">
            <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Quibusdam, corrupti?
            </p>

            <button className="sec-7-view-more">View more</button>
          </div>

          <div className="sec-7-cards">
            <div className="sec-7-card-img">
              <img src="https://images.unsplash.com/photo-1500160503851-c04cefe545a9?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
            </div>
            <div className="sec-7-card-details">
              <h3>Google cybersecurity</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptates fuga fugit enim
              </p>
            </div>
          </div>

          <div className="sec-7-cards">
            <div className="sec-7-card-img">
              <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2942&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
            </div>
            <div className="sec-7-card-details">
              <h3>Google cybersecurity</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptates fuga fugit enim
              </p>
            </div>
          </div>

          <div className="sec-7-cards">
            <div className="sec-7-card-img">
              <img src="https://images.unsplash.com/photo-1677594332295-affd04f83115?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
            </div>
            <div className="sec-7-card-details">
              <h3>Google cybersecurity</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptates fuga fugit enim
              </p>
            </div>
          </div>
        </div>
      </section> */}

      {/* secionn advertiser */}

      <section id="advertisers" className="advertisers-service-sec">
        <div className="container-advertisers">
          <div className="row-advertiser">
            <div className="section-header">
              <h2>
                Recommended for
                <span style={{ color: "#FF1783" }}> you </span>
              </h2>
            </div>
          </div>

          <div className="row-advertiser-cards">
            <div
              className="card-advertiser"
              onClick={() => {
                // alert("dsa");
                navigate("/cource/topics");
              }}
            >
              <div className="service-card">
                <div className="icon-wrapper">
                  {/* <i className="fa-solid fa-chart-line"></i> */}
                  <img className="icon-wrapper-img" src={DSA} alt="DSA" />
                </div>
                <h3>Data Structures & Algorithm</h3>
                <p>
                  Data structures and algorithms optimize data organization,
                  enhancing efficiency in programming tasks.
                </p>
              </div>
            </div>

            <div className="card-advertiser">
              <div className="service-card">
                <div className="icon-wrapper">
                  {/* <i className="fa-solid fa-chart-line"></i> */}
                  <img className="icon-wrapper-img" src={apptitude} alt="DSA" />
                </div>
                <h3>Apptitude & Reasoning</h3>
                <p>
                  Aptitude and reasoning skills assess problem-solving abilities
                  and critical thinking in situations.
                </p>
              </div>
            </div>

            <div className="card-advertiser">
              <div className="service-card">
                <div className="icon-wrapper">
                  {/* <i className="fa-solid fa-chart-line"></i> */}
                  <img className="icon-wrapper-img" src={ai} alt="DSA" />
                </div>
                <h3>AI Interview</h3>
                <p>
                  AI interviews assess candidate skills, including
                  problem-solving, coding, and system design capabilities.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-6">
        <div className="s6-title">
          <h1>Bests Are here!</h1>
        </div>
        <div className="editor-container">
          <div className="editor-card">
            <div className="editor-card-inner">
              <div className="editor-box">
                <div className="editor-img-box">
                  <img
                    // src="https://images.unsplash.com/photo-1493723843671-1d655e66ac1c?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQg81Xy8LPaUs1dNrPHSeiY8jmkwZqLfxaoqA&s"
                    alt=""
                  />
                </div>
                <div className="editor-icon">
                  <span>
                    <a href="#">
                      {/* <i class="fa-solid fa-arrow-right"></i> */}
                      <FaArrowRightLong size={25} color="#ffffff" />
                    </a>
                  </span>
                </div>
              </div>
            </div>

            <div class="editor-content">
              <h3>Java Programming</h3>
              <p>
                Fill out the form and the algorithm will offer the right team of
                experts
              </p>
            </div>
          </div>

          <div className="editor-card">
            <div className="editor-card-inner">
              <div className="editor-box">
                <div className="editor-img-box">
                  <img
                    // src="https://images.unsplash.com/photo-1601049676869-702ea24cfd58?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfM33SfOtT_RKZneGSjVTmi74DisWdFFiRZw&s"
                    alt=""
                  />
                </div>
                <div className="editor-icon">
                  <span>
                    <a href="#">
                      {/* <i class="fa-solid fa-arrow-right"></i> */}
                      <FaArrowRightLong size={25} color="#ffffff" />
                    </a>
                  </span>
                </div>
              </div>
            </div>

            <div class="editor-content">
              <h3>C Programming</h3>
              <p>
                Fill out the form and the algorithm will offer the right team of
                experts
              </p>
            </div>
          </div>

          <div className="editor-card">
            <div className="editor-card-inner">
              <div className="editor-box">
                <div className="editor-img-box">
                  <img
                    // src="https://images.unsplash.com/photo-1601049676869-702ea24cfd58?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    src="https://www.makeintern.com/courses/admin/images/course_cover/5ec2bc890cf248ccb19c5755_scaled_cover.jpg"
                    alt=""
                  />
                </div>
                <div className="editor-icon">
                  <span>
                    <a href="#">
                      {/* <i class="fa-solid fa-arrow-right"></i> */}
                      <FaArrowRightLong size={25} color="#ffffff" />
                    </a>
                  </span>
                </div>
              </div>
            </div>

            <div class="editor-content">
              <h3>Python Programming</h3>
              <p>
                Fill out the form and the algorithm will offer the right team of
                experts
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="features-section-main">
        <div className="features-title">
          <h1>About website learner</h1>
        </div>
        <div className="features-section">
          <div className="features-item">
            <div className="features-icon">
              <img
                style={{ height: 60, widows: 60, marginTop: 10 }}
                src={time}
                alt=""
              />
              {/* <svg
                class="features-vector"
                viewBox="0 0 512 512"
                width="100"
                fill="#fff"
              >
                <path d="M290.74 93.24l128.02 128.02-277.99 277.99-114.14 12.6C11.35 513.54-1.56 500.62.14 485.34l12.7-114.22 277.9-277.88zm207.2-19.06l-60.11-60.11c-18.75-18.75-49.16-18.75-67.91 0l-56.55 56.55 128.02 128.02 56.55-56.55c18.75-18.76 18.75-49.16 0-67.91z" />
              </svg> */}
            </div>

            <h3 className="features title">Webbdesign</h3>
            <p className="features-text">
              "Our platform consolidates everything you need in one place,
              eliminating the hassle of switching between different tools.
              Learn, code, and practice seamlessly within the same platform,
              saving you time and boosting your productivity."
            </p>
          </div>

          <div className="features-item">
            <div className="features-icon">
              {/* <div
                class="features-vector"
                viewBox="0 0 512 512"
                width="100"
                fill="#fff"
              >
                <span>
                  <TbBulb color="#ffffff" size={50} />
                </span>
              </div> */}
              <img style={{ height: 60, widows: 60 }} src={bulb} alt="" />
            </div>

            <h3 className="features title">Webbdesign</h3>
            <p className="features-text">
              "Enhance your skills by coding in three different languages with
              three integrated code editors. Whether you're practicing interview
              questions or working on projects, our platform allows you to
              sharpen your coding skills effectively in a dynamic environment."
            </p>
          </div>

          <div className="features-item">
            <div className="features-icon">
              <img style={{ height: 60, widows: 60 }} src={pencil} alt="" />
              {/* <svg
                class="features-vector"
                viewBox="0 0 512 512"
                width="100"
                fill="#fff"
              >
                <path d="M290.74 93.24l128.02 128.02-277.99 277.99-114.14 12.6C11.35 513.54-1.56 500.62.14 485.34l12.7-114.22 277.9-277.88zm207.2-19.06l-60.11-60.11c-18.75-18.75-49.16-18.75-67.91 0l-56.55 56.55 128.02 128.02 56.55-56.55c18.75-18.76 18.75-49.16 0-67.91z" />
              </svg> */}
            </div>

            <h3 className="features title">Webbdesign</h3>
            <p className="features-text">
              "Gain access to course videos, related notes, and a wide range of
              practice questions tailored to your learning goals. From mastering
              concepts to preparing for real-world interviews, our platform
              offers the resources to ensure you're fully prepared."
            </p>
          </div>
        </div>
      </section>

      <section className="section-5">
        <main>
          <h1 className="feed-title">What Learner's are Saying...</h1>
          <div className="slider">
            <div
              className="slide-row"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div className="slide-col" key={index}>
                  <div className="content">
                    <p>{testimonial.text}</p>
                    <h2>{testimonial.name}</h2>
                    <p>{testimonial.role}</p>
                  </div>
                  <div className="hero">
                    <img src={testimonial.image} alt="avatar" />
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="indicator">
            {testimonials.map((_, index) => (
              <span
                key={index}
                className={`btn ${currentSlide === index ? "active" : ""}`}
                onClick={() => goToSlide(index)}
              />
            ))}
          </div>
          {/* <button className="prev" onClick={prevSlide}>Prev</button>
        <button className="next" onClick={nextSlide}>Next</button> */}
        </main>
      </section>

      {/* <section className="section-4">
        <div className="s4-footer">
          <div className="s4-copy-right">
            <FaRegCopyright />
            <p>2024 CodeFusion. All Rights Reserved</p>
          </div>

          <div className="s4-footer-social">
            <div className="footer-social-icon">
              <FaSquareFacebook size={30} />
            </div>
            <div className="footer-social-icon">
              <RiInstagramFill size={30} />
            </div>
            <div className="footer-social-icon">
              <IoLogoDiscord size={30} />
            </div>

            <div className="footer-social-icon">
              <FaLinkedin size={30} />
            </div>
            <div className="footer-social-icon">
              <FaGithubSquare size={30} />
            </div>

            <div className="footer-social-icon">
              <FaSquareTwitter size={30} />
            </div>
          </div>
        </div>
      </section> */}

      <Footer/>
    </div>
  );
}

export default HomePage;
