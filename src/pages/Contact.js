import React from "react";
import SEO from "../common/SEO";
import ColorSwitcher from "../elements/switcher/ColorSwitcher";
import FooterOne from "../common/footer/FooterOne";
import HeaderOne from "../common/header/HeaderOne";
import BreadCrumbOne from "../elements/breadcrumb/BreadCrumbOne";
import FormTwo from "../component/contact/FormTwo";
import SectionTitle from "../elements/section-title/SectionTitle";
import ContactLocation from "../component/contact/ContactLocation";
import CtaLayoutOne from "../component/cta/CtaLayoutOne";
import PricingOne from "../component/pricing/PricingOne";
import Talk from "../component/talk/Talk";
import FormFour from "../component/contact/FormFour";

const Contact = () => {
  return (
    <>
      <SEO title="Blog Grid" />
      <ColorSwitcher />
      <HeaderOne />
      <div className="section bg-color-light section-padding">
        <div className="container">
          <h3 class>
            <center>
              {" "}
              <strong>need a human?</strong> <br /> Let’s talk.
            </center>
          </h3>
          <Talk />
        </div>
        <ul className="list-unstyled shape-group-3">
          <li className="shape shape-1">
            <img
              src={process.env.PUBLIC_URL + "/images/others/line-1.png"}
              alt="shape"
            />
          </li>
          <li className="shape shape-2">
            <img
              src={process.env.PUBLIC_URL + "/images/others/bubble-4.png"}
              alt="shape"
            />
          </li>
        </ul>
      </div>
      <div className="section section-padding">
        <div className="container">
          

          <div className="row">
            <div className="col-xl-6 col-lg-6">
              <img src="/images/unique/revol.png" />
            </div>

            <div className="col-xl-6 col-lg-6">
              <div className="contact-form-box shadow-box mb--30">
                <FormFour />
              </div>
            </div>
          </div>
        </div>
        <ul className="list-unstyled shape-group-12">
          <li className="shape shape-1">
            <img
              src={process.env.PUBLIC_URL + "/images/others/bubble-2.png"}
              alt="Bubble"
            />
          </li>
          <li className="shape shape-2">
            <img
              src={process.env.PUBLIC_URL + "/images/others/bubble-1.png"}
              alt="Bubble"
            />
          </li>
          <li className="shape shape-3">
            <img
              src={process.env.PUBLIC_URL + "/images/others/circle-3.png"}
              alt="Circle"
            />
          </li>
        </ul>
      </div>
      <div className="section section-padding-amazing   overflow-hidden">
        <div className="container">
          <div className={`section-heading`}>
            <div className="subtitle"></div>
            <h2 className="titleAmazing">
              we serve <strong>amazing</strong> coffee... Let's Meet?
            </h2>
            <p></p>
          </div>
          <div className="row">
            <ContactLocation />
          </div>
        </div>
        <ul className="shape-group-11 list-unstyled">
          <li className="shape shape-1">
            <img
              src={process.env.PUBLIC_URL + "/images/others/line-6.png"}
              alt="line"
            />
          </li>
          <li className="shape shape-2">
            <img
              src={process.env.PUBLIC_URL + "/images/others/circle-3.png"}
              alt="line"
            />
          </li>
        </ul>
      </div>
      <CtaLayoutOne />
      <FooterOne parentClass="pt--150 pt_lg--100 pt_md--80 pt_sm--60" />
    </>
  );
};

export default Contact;
