import React from "react";
import Tilty from "react-tilty";

const BcrumbBannerHowWorks = () => {
  return (
    <div className="breadcrum-area breadcrumb-banner">
      <div className="container">
        <div className=" heading-left">
          <center>
            {" "}
            <h3 className="title h2">
              How it works?
              <br />
            </h3>
            <p className="innovate-list-para">
              Right Matchmaking is at the core of everything that Dignifyd does,
              hence, we put in <br/> a great deal of time and effort to ensure that
              the first shortlisted talent matches <br/> your requirements.
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

export default BcrumbBannerHowWorks;
