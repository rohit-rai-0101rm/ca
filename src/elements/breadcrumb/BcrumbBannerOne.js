import React from "react";
import Tilty from "react-tilty";

const BcrumbBannerOne = ({ title, paragraph, styleClass, mainThumb }) => {
  return (
    <div className="breadcrum-area breadcrumb-banner">
      <div className="container">
        <div className="section-heading heading-left">
          <center>
            
          </center>
          <h1 className="title h2">
            An overnight success, <strong>5-years</strong><br/><strong>in the making</strong> 
          </h1>
          <p className="innovate-list-para">A partner for all your digital needs, we offer a technology-driven
approach to all our projects.</p>
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
  );
};

export default BcrumbBannerOne;
