import React from "react";
import Tilty from "react-tilty";
import Talk from "../../component/talk/Talk";

const BcrumbBannerContact = ({ title, paragraph, styleClass, mainThumb }) => {
  return (
    <div className="breadcrum-area breadcrumb-banner">
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

          <Talk/>
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

export default BcrumbBannerContact;
