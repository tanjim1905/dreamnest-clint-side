import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer id="footer" className="footer-1">
            <div className="main-footer widgets-dark typo-light">
                <div className="container">
                    <div className="row">

                        <div className="col-xs-12 col-sm-6 col-md-3">
                            <div className="widget subscribe no-box">
                                <h5 className="widget-title">DreamNest<span></span></h5>
                                <p>We are provides the best quality of service in this city. We determine to fullfill your dream as well as you want.</p>
                            </div>
                        </div>

                        <div className="col-xs-12 col-sm-6 col-md-3">
                            <div className="widget no-box">
                                <h5 className="widget-title">Quick Links<span></span></h5>
                                <ul className="thumbnail-widget">
                                    <li>
                                        <div className="thumb-content"><a href="#.">Get Started</a></div>
                                    </li>
                                    <li>
                                        <div className="thumb-content"><a href="#.">About Us</a></div>
                                    </li>
                                    <li>
                                        <div className="thumb-content"><a href="#.">Contact Us</a></div>
                                    </li>
                                    <li>
                                        <div className="thumb-content"><a href="#.">Event/Tickets</a></div>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-xs-12 col-sm-6 col-md-3">
                            <div className="widget no-box">
                                <h5 className="widget-title">Get Started<span></span></h5>
                                <p>Get access to your full Training and Marketing Suite.</p>
                                <a className="btn" href="https://bit.ly/3m9avif" target="_blank">Subscribe Now</a>
                            </div>
                        </div>

                        <div className="col-xs-12 col-sm-6 col-md-3">

                            <div className="widget no-box">
                                <h5 className="widget-title">Contact Us<span></span></h5>

                                <p><a href="#">info@domain.com</a></p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <div className="footer-copyright">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 text-center">
                            <p>Copyright Tanjim Ahmed © 2021. All rights reserved.</p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;


