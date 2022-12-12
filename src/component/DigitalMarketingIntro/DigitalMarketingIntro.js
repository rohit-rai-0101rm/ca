import React from "react";
import { Link } from "react-router-dom";
import DigitalMarketingForm from "../contact/DigitalMarketingForm";
import FormTwo from "../contact/FormTwo";

const DigitalMarketingIntro = () => {
  return (
    <div className="section section-padding-proffessional mt--120 ">
      <div className="container ">
        <div className="row">
          <div className="col-xl-7 col-lg-6 ">
            <div className="color-light   mt_md--0 mt--60 ">
              <h1 className="titleDigitalMarketing">
                Build A Formidable Brand Identity With Our Digital Marketing
                Services
              </h1>
              <h4 className="subheadingDigitalMarketing">
                Skyrocket your visibility, foster lasting customer
                relationships, and soar ahead of your <br/> competitors.
              </h4>
              <p className="innovate-list-para">
                Be it garnering new leads, consolidating your brand’s online
                footprint, or maximizing your revenue, digital marketing helps
                lend a competitive edge to your business. As a leading digital
                marketing firm, we help you achieve all these goals and more.
                Powered by our skilled technicians and customer-first ideology,
                our digital marketing services are sure to elevate your brand’s
                growth to the next level.
              </p>
              <Link to={process.env.PUBLIC_URL + "/contact"} className="axil-btn btn-fill-primary btn-large mt--20">
                           <bold>EXPLORE DIGITAL MARKETING PACKAGES</bold>         </Link>
            </div>
         
          </div>

          <div className="col-xl-5 col-lg-6">
            <div className="contact-form-box mb--30">
              <h3 className="title">
                Want to kickstart your first Digital Marketing Campaign?
              </h3>
              <DigitalMarketingForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DigitalMarketingIntro;
