import React from "react";
import { Link } from "react-router-dom";
import CountUp from "react-countup";
import TrackVisibility from "react-on-screen";

const Provider = () => {
  return (
    <div className="section section-padding case-study-featured-area">
      <div className="container">
        <div className="row">
          <div className="col-xl-7 col-lg-6">
            <div className="case-study-featured-thumb text-start">
              <img
                src={process.env.PUBLIC_URL + "/images/designs.png"}
                alt="travel"
              />
            </div>
          </div>
          <div className="col-xl-5 col-lg-6">
            <div className="case-study-featured">
              <div className="section-heading heading-left">
                <h2 className="">
                Managed Service
                  <br />
                  Provider
                </h2>
                <p className="">
                Managed services are responsible for hosting and then managing servers, specialized applications, and networks for clients. Mostly, MSPs own the entire physical back-end infrastructure and also provide resources to their client
                </p>
              </div>
              <div className="col-md-12 col-sm-6 mb--30">
                <ul className="list-style">
                  <li>
                  24/7/365 Network Monitoring
                  </li>
                  <li>
                  Comprehensive Reporting
                  </li>
                  <li>
                  Improved Security
                  </li> 
                  <li>
                  Cost Effective
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Provider;
