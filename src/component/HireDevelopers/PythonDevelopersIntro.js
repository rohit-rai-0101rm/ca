import React from "react";
import { AnimationOnScroll } from "react-animation-on-scroll";
import { Link } from "react-router-dom";

const PythonDevelopersIntro = () => {
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
                  Hire Python Developers from India's
Largest and Top Talent Network
                  </h1>
                  <h4 >
                  Inquire, Interview and Hire within the next 7 days.

                  </h4>
                  <p className="innovate-list-para">
                  Are you hiring the next A-lister? Look no further! We have already picked the top talent from the lot so that you can hire your star Python Programmer 10x faster and more efficiently than ever before
                  </p>


                  <p className="innovate-list-para">
                  Let us not just help you save your time but also your hiring budget, i.e., by at least 40%.

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

export default PythonDevelopersIntro;
