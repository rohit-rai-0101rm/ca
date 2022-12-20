import React from "react";
import { AnimationOnScroll } from "react-animation-on-scroll";
import { Link } from "react-router-dom";

const DotNetDevelopersIntro = () => {
  return (
    <div className="banner banner-style-1 mb--30">
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
                  <h1 className="uniqueTitle">
                    Tech Hiring Made Easy -<br />
                    Hire Top-rated .NET Developers from Uplers
                  </h1>
                  <p className="innovate-list-para">
                    Looking to hire reliable and skilled .NET Developers? But
                    unable to find them? Stop wasting time and money to source
                    the right <br/> ones for your on-demand needs. Our .NET developers
                    can create phenomenal web apps, intuitive mobile apps and
                    robust enterprise apps.
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

export default DotNetDevelopersIntro;
