import React from "react";
import { Link } from "react-router-dom";

const Success = () => {
  return (
    <div className="section section-padding case-study-featured-area">
      <div className="container">
        <div className="row">
          <div className="col-xl-5 col-lg-6">
            <div className="case-study-featured">
              <div className="section-heading heading-left">
                
                <p className="innovate-list-para">
                We combine the latest technological developments and applications to help organizations adopt new digital business models.
                </p>
                <p className="innovate-list-para" >
                We help organizations stay ahead of the curve with the latest banking technologies and help them gain an edge in the digital economy.
                </p>
              </div>
           
              
            </div>
          </div>
          <div className="col-xl-2 col-lg-3"></div>
          <div className="col-xl-5 col-lg-3">
            <div className="case-study-featured-thumb text-start">
              <img
                src={process.env.PUBLIC_URL + "/images/success.png"}
                alt="travel"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Success;
