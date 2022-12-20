import React from "react";
import { AnimationOnScroll } from "react-animation-on-scroll";
import { Link } from "react-router-dom";

const ReactNativeIntro = () => {
  return (
    <div className="banner banner-style-1">
      <div className="container">
        <div className="row align-items-end align-items-xl-start">
          <div className="col-lg-12">
            <div className="banner-content">
              <AnimationOnScroll
                animateIn="fadeInUp"
                animateOnce={true}
                delay={100}
              >
                <center>
                  <h1 className="title">
                    Hire React Native Developers to build gen-next Mobile Apps
                  </h1>
                  <p className="innovate-list-para">
                    Don't make the mistake of hiring the wrong candidate just
                    because you are running out of time. We have an
                    eye-of-the-tiger when it comes to finding the right React
                    Native Developers for your business needs. Hire on-demand
                    professionals in the next 48 hours.
                  </p>
                  <Link
                    to={process.env.PUBLIC_URL + "/contact"}
                    className="axil-btn btn-fill-primary btn-large"
                  >
                    Share your Requirements
                  </Link>
                </center>
              </AnimationOnScroll>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="banner-thumbnail"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReactNativeIntro;
