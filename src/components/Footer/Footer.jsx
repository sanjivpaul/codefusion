import React from 'react';
import "./Footer.css";
import { FaRegCopyright, FaSquareFacebook, FaSquareTwitter } from 'react-icons/fa6';
import { RiInstagramFill } from 'react-icons/ri';
import { IoLogoDiscord } from 'react-icons/io5';
import { FaGithubSquare, FaLinkedin } from 'react-icons/fa';

function Footer() {
    return (
        <div className="section-4">
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
        </div>
    )
}

export default Footer;