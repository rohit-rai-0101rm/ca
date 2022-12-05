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
import AboutThree from "../component/about/AboutThree";
import AboutFour from "../component/about/AboutFour";
import AboutFive from "../component/about/AboutFive";
import BcrumbBannerOne from "../elements/breadcrumb/BcrumbBannerOne";
import ProcessOne from "../component/process/ProcessOne";
import BcrumbBannerContact from "../elements/breadcrumb/BcrumbBannerContact";
import BcrumbBannerTouch from "../elements/breadcrumb/BcrumbBannerTouch";

const Contact = () => {
  return (
    <>
      <SEO title="About us" />
      <ColorSwitcher />
      <main className="main-wrapper">
        <HeaderOne />
        <BcrumbBannerContact
          title="One of the fastest growing agency"
          paragraph="We design and develop web and mobile applications for our clients worldwide."
          styleClass="thumbnail-4"
          mainThumb="/images/banner/banner-thumb-3.png"
        />
        <div className="section section-padding-innovate">
          <div className="container">
            <center>
              <h3 className="title">
                Get in Touch
              </h3>
              <h6>Get in touch with the right people at Dignifyd, we’re here to help.</h6>
            </center>

            <div className="row">
              <div className="col-xl-6 col-lg-6">
                <img src="/images/contact.webp" />
              </div>

              <div className="col-xl-6 col-lg-6">
                <div className="contact-form-box shadow-box">
                  <FormFour />
                </div>
              </div>
            </div>
          </div>
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
        </div>

        <CtaLayoutOne />
        <FooterOne parentClass="" />
      </main>
    </>
  );
};

export default Contact;
