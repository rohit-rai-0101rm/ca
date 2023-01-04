import React from "react";
import { Link } from "react-router-dom";
import Offcanvas from "react-bootstrap/Offcanvas";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaBehance,
  FaPhone,
  FaFax,
  FaAngleDown,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa";

const OffcanvasMenu = ({ offcanvasShow, offcanvasHide }) => {
  return (
    <Offcanvas
      show={offcanvasShow}
      onHide={offcanvasHide}
      placement="end"
      className="header-offcanvasmenu"
    >
      <Offcanvas.Header closeButton></Offcanvas.Header>
      <Offcanvas.Body>
        <nav className="mainmenu-nav">
        <h4 className="title">Phone</h4>
                  <p>
                    Our customer care is open from Mon-Fri, 10:00 am to 6:00 pm
                  </p>
                  <h4 className="phone-number">
                    <a href="tel:+971-501-599-266">+971-501-599-266</a>
                  </h4>
          <ul className="mainmenu">
            <li className="menu-item-has-children">
              <Link to="/">Home </Link>
            </li>
            <li className="menu-item-has-children">
              <Link to="#">
                Why Dignifyd <FaAngleDown />
              </Link>
              <ul className="axil-submenu">
                <li>
                  <Link to={process.env.PUBLIC_URL + "/about"}>About</Link>
                </li>
                <li>
                  <Link to="/how-it-works">How it works</Link>
                </li>
                <li>
                  <Link to="/why-india">Why India</Link>
                </li>
                <li>
                  <Link>Pricing</Link>
                </li>
              </ul>
            </li>

            <li className="menu-item-has-children">
              <Link to="#">
                Services
                <FaAngleDown />
              </Link>
              <ul className="axil-submenu">
                <li>
                  <Link to="/services/digital-marketing">
                    Digital Marketing
                  </Link>
                </li>
                <li>
                  <Link to="/services/seo">SEO</Link>
                </li>
                <li>
                  <Link to="/services/web-development">Web Development</Link>
                </li>
                <li>
                  <Link to="/services/design">Design</Link>
                </li>
              </ul>
            </li>

            <li>
              <Link to={process.env.PUBLIC_URL + "/contact"}>Contact</Link>
            </li>
          </ul>
        </nav>
        <div className="footer-top mt--100">
          <div className="footer-social-link">
            <ul className="list-unstyled">
              <li>
                <a target="_blank" href="https://www.facebook.com/dignifydsolutions/">
                  <FaFacebookF />
                </a>
              </li>
           
             
              <li>
                <a target="_blank" href="https://in.linkedin.com/company/dignifyd">
                  <FaLinkedin />
                </a>
              </li>
              <li>
                <a target="_blank" href="https://www.instagram.com/dignifyd/?hl=en">
                  <FaInstagram />
                </a>
              </li>
             
          
            
            </ul>
          </div>
        </div>
      </Offcanvas.Body>
    </Offcanvas>
  );
};

export default OffcanvasMenu;