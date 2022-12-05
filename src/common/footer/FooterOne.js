import React from "react";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaTwitter,
  FaPinterestP,
  FaLinkedin,
  FaInstagram,
  FaVimeoV,
  FaDribbble,
  FaBehance,
  FaEnvelopeOpen,
} from "react-icons/fa";
import ServiceData from "../../data/service/ServiceMain.json";
import { slugify } from "../../utils";

const getServiceData = ServiceData;

const FooterOne = ({ parentClass }) => {
  return (
    <footer className={`footer-area ${parentClass}`}>
      <div className="container">
        <div className="footer-top">
          <div className="footer-social-link">
            <ul className="list-unstyled">
              <li>
                <a target="_blank" href="https://www.facebook.com/dignifydsolutions/">
                  <FaFacebookF />
                </a>
              </li>
              <li>
                <a target="_blank" href="https://www.facebook.com/dignifydsolutions/">
                  <FaTwitter />
                </a>
              </li>
              <li>
                <a target="_blank" href="https://www.facebook.com/dignifydsolutions/">
                  <FaPinterestP />
                </a>
              </li>
              <li>
                <a target="_blank" href="https://in.linkedin.com/company/dignifyd">
                  <FaLinkedin />
                </a>
              </li>
              <li>
                <a target="_blank" href="https://www.facebook.com/dignifydsolutions/">
                  <FaInstagram />
                </a>
              </li>
              <li>
                <a target="_blank" href="https://www.facebook.com/dignifydsolutions/">
                  <FaVimeoV />
                </a>
              </li>
              <li>
                <Link target="_blank" href="https://www.facebook.com/dignifydsolutions/">
                  <FaDribbble />
                </Link>
              </li>
              <li>
                <a target="_blank" href="https://www.facebook.com/dignifydsolutions/">
                  <FaBehance />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-main">
          <div className="row">
            <div className="col-xl-6 col-lg-5">
              <div className="footer-widget border-end">
                <div className="footer-newsletter">
                  <h2 className="title">Get in touch!</h2>

                  <form>
                    <div className="input-group">
                      <span className="mail-icon">
                        <FaEnvelopeOpen />{" "}
                      </span>
                      <input
                        type="email"
                        className="form-control"
                        placeholder="Email address"
                      />
                      <button className="subscribe-btn" type="submit">
                        Subscribe
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-7">
              <div className="row">
                <div className="col-sm-6">
                  <div className="footer-widget">
                    <h6 className="widget-title">Services</h6>
                    <div className="footer-menu-link">
                      <ul className="list-unstyled">
                        {getServiceData.slice(0, 6).map((data, index) => (
                          <li key={index}>
                            <Link
                              
                            >
                              {data.title}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="footer-widget">
                    <h6 className="widget-title">Contact</h6>
                    <div className="footer-menu-link">
                      <ul className="list-unstyled">
                        <li>
                          <Link to={process.env.PUBLIC_URL + "/blog-grid"}>
                            <div className="d-flex flex-row">
                              <img
                                className="px-2 footerContact"
                                src="/images/contact/email.svg"
                              />
                              hello@dignifyd.ae
                            </div>
                          </Link>
                        </li>
                        <li>
                          {" "}
                          <Link to={process.env.PUBLIC_URL + "/case-study"}>
                            <div className="d-flex flex-row">
                              <img
                                className="px-2 footerContact"
                                src="/images/contact/tele.svg"
                              />
                              +971-501-599-266{" "}
                            </div>{" "}
                          </Link>
                        </li>
                        <li>
                         
                            <div className="d-flex flex-row">
                              <img
                                className="px-2 footerContact"
                                src="/images/contact/website.svg"
                              />
                              <a href="https://in.linkedin.com/company/dignifyd"  target="blank">
                              www.dignifyd.ae
                              </a>
                              {" "}
                            </div>{" "}
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="row">
            <div className="col-md-6">
              <div className="footer-copyright">
                <span className="copyright-text">
                  © {new Date().getFullYear()}. All rights reserved by{" "}
                  <a href="https://in.linkedin.com/company/dignifyd"  target="blank">
                  <strong>Dignifyd</strong> Digital Solutions.
                              </a>
                </span>
              </div>
            </div>
            <div className="col-md-6">
              <div className="footer-bottom-link">
                <ul className="list-unstyled">
                  <li>
                    <Link to={process.env.PUBLIC_URL + "/privacy-policy"}>
                      Privacy Policy
                    </Link>
                  </li>
                  <li>
                    <Link to={process.env.PUBLIC_URL + "/terms-use"}>
                      Terms of Use
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterOne;
