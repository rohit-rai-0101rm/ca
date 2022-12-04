import React from "react";
import Tilty from "react-tilty";
import FormFour from "../../component/contact/FormFour";
import Talk from "../../component/talk/Talk";

const BcrumbBannerTouch = ({ title, paragraph, styleClass, mainThumb }) => {
  return (
    <div className="breadcrum-area-talk breadcrumb-banner">
      <div className="container">
        <div className="section-heading heading-left">
          <center>
              <h1 className="title h2">
                <strong>
                  need a human?
                  <br />
                  Let's Talk
                </strong>{" "}
            </h1>
          </center>

        
        </div>
      </div>
     
        <div/>
        <div className="section section-padding">
        <div className="container">
          

          <div className="row">
            <div className="col-xl-6 col-lg-6">
              <img src="/images/unique/revol.png" />
            </div>

            <div className="col-xl-6 col-lg-6">
              <div className="contact-form-box shadow-box">
                <FormFour />
              </div>
            </div>
          </div>
        </div>
              <ul className="shape-group-8 list-unstyled">
        <li className="shape shape-1">
          <img
            src={process.env.PUBLIC_URL + "/images/others/bubble-9.png"}
            alt="Bubble"
          />
        </li>
        <li className="shape shape-2">
          <img
            src={process.env.PUBLIC_URL + "/images/others/bubble-21.png"}
            alt="Bubble"
          />
        </li>
        <li className="shape shape-3">
          <img
            src={process.env.PUBLIC_URL + "/images/others/line-4.png"}
            alt="Line"
          />
        </li>
      </ul>
    </div>
    </div>
  );
};

export default BcrumbBannerTouch;
