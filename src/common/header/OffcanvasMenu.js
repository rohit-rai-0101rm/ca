import React from 'react';
import { Link } from 'react-router-dom';
import Offcanvas from 'react-bootstrap/Offcanvas'
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaBehance, FaPhone, FaFax, FaInstagram, FaEnvelope } from "react-icons/fa";


const OffcanvasMenu = ({offcanvasShow, offcanvasHide}) => {
    return (
        <Offcanvas show={offcanvasShow} onHide={offcanvasHide} placement="end" className="header-offcanvasmenu">
            <Offcanvas.Header closeButton></Offcanvas.Header>
            <Offcanvas.Body>
                <form action="#" className="side-nav-search-form">
                    <div className="form-group">
                        <input type="text" className="search-field" name="search-field" placeholder="Search..." />
                        <button className="side-nav-search-btn"><i className="fas fa-search"></i></button>
                    </div>
                </form>
                <div className="row ">
                    <div className="col-lg-5 col-xl-6">
                        <ul className="main-navigation list-unstyled">
                            <li><Link to={process.env.PUBLIC_URL + "/digital-agency"}>Digital Agency</Link></li>
                            <li><Link to={process.env.PUBLIC_URL + "/creative-agency"}>Creative Agency</Link></li>
                            <li><Link to={process.env.PUBLIC_URL + "/personal-portfolio"}>Personal Portfolio</Link></li>
                            <li><Link to={process.env.PUBLIC_URL + "/home-startup"}>Home Startup</Link></li>
                            <li><Link to={process.env.PUBLIC_URL + "/corporate-agency"}>Corporate Agency</Link></li>
                        </ul>
                    </div>
                    <div className="col-lg-7 col-xl-6">
                        <div className="contact-info-wrap">
                            <div className="contact-inner">
                                <address className="address">
                                    <h4 className="title">Contact Information</h4>
                                    <p className=''>Level 3, Convention Tower<br /> World Trade Center, UAE </p>
                                </address>
                                <address className="address">
                                    <span className='innovate-list-para'>We're Available 24/7. Call Now.</span>
                                    <a href="tel:8884562790" className="tel"><FaPhone /> +971-501-599-266</a>
                                    <a href="mailto:hello@dignifyd.ae" className="tel"><FaEnvelope /> hello@dignifyd.ae</a>
                                </address>
                            </div>
                            <div className="contact-inner">
                                <h5 className="title">Find us here</h5>
                                <div className="contact-social-share">
                                    <ul className="social-share list-unstyled">
                                        <li>
                                            <a target="_blank" href="https://www.instagram.com/dignifyd/?hl=en"><FaFacebookF /></a>
                                        </li>

                                        <li>
                                            <a target="_blank" href=""><FaInstagram /></a>
                                        </li>
                                        <li>
                                            <a target="_blank" href="https://in.linkedin.com/company/dignifyd
"><FaLinkedinIn /></a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Offcanvas.Body>
        </Offcanvas>
    )
}

export default OffcanvasMenu;
