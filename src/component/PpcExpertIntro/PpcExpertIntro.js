import React from "react";
import { AnimationOnScroll } from "react-animation-on-scroll";
import { Link } from "react-router-dom";

const PpcExpertIntro = () => {
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
                  <h1 className="title">
                    Hire Dedicated Paid Marketers from <br /> 
                    
                    <span className="themeText">
                    India's Top Talent
                    Network
                    </span>
                  
                  </h1>
                  <h2 >
                  Inquire, Interview and Hire within the next 7 days.

                  </h2>
                  <p className="innovate-list-para">
                  We have a talent network of SEM experts and PPC specialists who understand PPC and Social Media advertisements’ anatomy. With strategic planning and a dream-team at your disposal – success is bound to happen. Onboard pre-vetted professionals to start your journey of growth.
                  </p>

                  <Link
                    to={process.env.PUBLIC_URL + "/contact"}
                    className="axil-btn btn-fill-primary btn-large"
                  >
                    Hire a PPC Expert
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

export default PpcExpertIntro;
