import React from "react";
import Tilty from "react-tilty";

const BcrumbBannerDedicatedResources = () => {
  return (
    <div className="breadcrum-area breadcrumb-banner">
      <div className="container">
        <div className=" heading-left">
          <center>
            {" "}
            <h1 className="title h2">
            Hire India’s top remote talent

              <br />
            </h1>
            <p>
            A hiring platform that helps remote-first companies hire 10X faster & more efficiently.<br/>

A network of 50,000+ talents, pre-vetted against their technical capabilities, language <br/> proficiency and behavioral skills.
            </p>
          </center>
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

export default BcrumbBannerDedicatedResources;
