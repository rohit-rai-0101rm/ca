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
import Logo from "../../elements/logo/Logo";

const getServiceData = ServiceData;

const FooterOne = ({ parentClass }) => {
  return (
    <footer className={`footer-area ${parentClass}`}>
      <div className="container mt--20">
        <div className="footer-top">
          <div className="footer-social-link">
            <ul className="list-unstyled">
              <li>
                <a
                  target="_blank"
                  href="https://www.linkedin.com/company/nxgtechae/about/"
                >
                  <FaFacebookF />
                </a>
              </li>

              <li>
                <a
                  target="_blank"
                  href="https://www.linkedin.com/company/nxgtechae/about/"
                >
                  <FaLinkedin />
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  href="https://www.linkedin.com/company/nxgtechae/about/"
                >
                  <FaInstagram />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-main">
          <div className="row">
            <div className="col-xl-6 col-lg-5">
              <div className="footer-widget border-end">
                <img className="" src="/images/nxg.png" />
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
                            <Link>{data.title}</Link>
                          </li>
                        ))}
                        <a
                          href="https://algotrading.nxgtech.io/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="list-unstyled text-dark"
                        >
                          Algo Trading
                        </a>
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
                              info@nxgtech.io{" "}
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
                              +918130808751{" "}
                            </div>{" "}
                          </Link>
                        </li>
                        <li>
                          <div className="d-flex flex-row">
                            <img
                              className="px-2 footerContact"
                              src="/images/contact/website.svg"
                            />
                            <a href="" target="blank">
                              www.nxgtech.io
                            </a>{" "}
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
                  <a href="https://nxgtech.io/" target="blank">
                    <strong>NXG TECH AND CONSULTING PRIVATE LIMITED</strong>.
                  </a>
                </span>
              </div>
            </div>
            <div className="col-md-6">
              <div className="footer-bottom-link">
                <ul className="list-unstyled" style={{ fontSize: "14px" }}>
                  <li className="px-2">
                    <Link to={process.env.PUBLIC_URL + "/privacy-policy"}>
                      Privacy Policy
                    </Link>
                  </li>
                  <li className="px-2">
                    <Link to={process.env.PUBLIC_URL + "/terms-use"}>
                      Terms of Use
                    </Link>
                  </li>
                  <li className="px-2">
                    <Link to={process.env.PUBLIC_URL + "/refund-policy"}>
                      Refund Policy
                    </Link>
                  </li>
                  <li className="px-2">
                    <Link to={process.env.PUBLIC_URL + "/cancellation-policy"}>
                      Cancellation Policy
                    </Link>
                  </li>
                  <li className="px-2">
                    <Link to={process.env.PUBLIC_URL + "/shipping-policy"}>
                      Shipping Policy
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
