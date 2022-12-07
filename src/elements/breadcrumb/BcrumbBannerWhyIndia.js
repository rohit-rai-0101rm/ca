import React from "react";
import Tilty from "react-tilty";

const BcrumbBannerWhyIndia = () => {
  return (
    <div className="breadcrum-area breadcrumb-banner">
      <div className="container">
        <div className=" heading-left">
          <center>
            {" "}
            <h1 className="title h2">
            Resourceful. Resilient. Adaptive.
              <br />
            </h1>
            <p>
            Indians are the first choice for tech giants around the world.


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

export default BcrumbBannerWhyIndia;
