import React from 'react'
import Github from '../../assets/github.png';
import Instagram from '../../assets/instagram.png';
import LinkedIn from '../../assets/linkedin.png';
import logo from '../../assets/logo.png';
import './Footer.scss';
function Footer() {
    return (
        <div className="footer-container">
            <hr />
            <div className="footer">
                <div className="social">
                    <img src={Github} alt="" />
                    <img src={Instagram} alt="" />
                    <img src={LinkedIn} alt="" />
                </div>
                <div className="logo-footer">
                    <img src={logo} alt="" />
                </div>
            </div>
            <div className="blur footer-blur1"></div>
            <div className="blur footer-blur2"></div>
        </div>
    )
}

export default Footer