import React from 'react';
import { Link } from 'react-router-dom';
import Offcanvas from 'react-bootstrap/Offcanvas'
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaBehance, FaPhone, FaFax, FaInstagram, FaEnvelope } from "react-icons/fa";


const OffcanvasMenu = ({ offcanvasShow, offcanvasHide }) => {
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

                    <div className="col-lg-7 col-xl-12">
                        <div className="contact-info-wrap">
                            <div className="contact-inner">
                                <address className="">
                                    <h2 className="title">Contact Information</h2>
                                    <p className='innovate-list-para'>1209, Burlington Tower<br /> Buisness Bay, Dubai <br />UAE </p>
                                </address>
                                <address className="address">
                                    <h5 className=''>We're Available 24/7. Call Now.</h5>
                                    <a href="tel:8884562790" className="tel innovate-list-para"><FaPhone /> +971-501-599-266</a>
                                    <a href="mailto:hello@NXG.ae" className="tel innovate-list-para"><FaEnvelope /> info@nxgtech.io</a>
                                </address>
                            </div>
                            <div className="contact-inner">
                                <h5 className="title">Find us here</h5>
                                <div className="contact-social-share">
                                    <ul className="social-share list-unstyled">
                                        <li>
                                            <a target="_blank" href="https://www.linkedin.com/company/nxgtechae/about/"><FaFacebookF /></a>
                                        </li>

                                        <li>
                                            <a target="_blank" href="https://www.linkedin.com/company/nxgtechae/about/"><FaInstagram /></a>
                                        </li>
                                        <li>
                                            <a target="_blank" href="https://www.linkedin.com/company/nxgtechae/about/"
                                            ><FaLinkedinIn /></a>
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
