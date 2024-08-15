import React from "react";
import banner from "../../assets/banner/banner.png";
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

function HomePage() {
  return (
    <div className="home-container">
      <div className="banner">
        <img src={banner} />
      </div>
      <section className="section-1">
        <div className="start-learning">
          <div className="start-learning-btn">
            <p>Start Learning Now</p>
            <FaArrowRightLong size={20} color="#ffffff" />
          </div>
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
          <h5>Students</h5>
        </div>
        <div className="small-card">
          <h3>12K+</h3>
          <h5>Students</h5>
        </div>
        <div className="small-card">
          <h3>12K+</h3>
          <h5>Students</h5>
        </div>
        <div className="small-card">
          <h3>12K+</h3>
          <h5>Students</h5>
        </div>
        <div className="small-card">
          <h3>12K+</h3>
          <h5>Students</h5>
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
          <h3>Recommended for you</h3>
          <div className="s3-card-container">
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
                <h2>Reasoning</h2>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-4">
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
      </section>
    </div>
  );
}

export default HomePage;
