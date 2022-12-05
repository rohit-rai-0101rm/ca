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
                <h2 className="">
                  the foundation to your <strong>success.</strong>
                </h2>
                <p className="success-text">
                  We care about more than just tech, we
                  <br /> care about creating value and want <br /> your business
                  to succeed. Making <br /> sure to deliver excellence and{" "}
                  <br /> professional service.
                </p>
                <p>
                  Our goal is to help you make the right <br/> decisions for your
                  business.
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
