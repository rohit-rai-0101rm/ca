import React from "react";
import { AnimationOnScroll } from "react-animation-on-scroll";
import { Link } from "react-router-dom";

const ProgrammaticSpecialistIntro = () => {
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
                    Target the right audience at the right time
                  </h1>
                  <h5 className="themeText">
                    Partner with NXG - a leading Programmatic Advertising
                    Agency
                  </h5>
                  <p className="innovate-list-para">
                    NXG isn’t just another Programmatic Advertising Agency;
                    we help you hire skilled talent - who are both culturally
                    and technically fit.
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

export default ProgrammaticSpecialistIntro;
