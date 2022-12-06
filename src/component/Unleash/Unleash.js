import React from "react";
import { Link } from "react-router-dom";
import CountUp from "react-countup";
import TrackVisibility from "react-on-screen";

const Unleash = () => {
  return (
    <div className="section section-padding case-study-featured-area">
      <div className="container">
        <div className="row">
          <div className="col-xl-5 col-lg-5">
            <div className="case-study-featured-thumb text-start">
              <img
                src={process.env.PUBLIC_URL + "/images/designs.png"}
                alt="travel"
              />
            </div>
          </div>
          <div className="col-xl-7 col-lg-7">
            <div className="case-study-featured">
              <div className="section-heading heading-left">
                <h3 className="">
                  A Digital Marketing Firm That <br/> Believes In Unleashing<br/> Limitless
                  Possibilities
                </h3>
                <p className="unleash-para">
                  An effective digital marketing campaign requires strategic
                  planning and <br /> consistent optimization to drive results.
                  Our digital marketing agency <br/> services  have the
                  bandwidth and faculty to execute multiple campaigns with
                  minimal  turnaround time at scale. We chalk out
                  well-defined and focused strategies  in a bid to
                  minimize the time to returns and maximize ROI.
                </p>
                <Link to="#" className="axil-btn btn-fill-primary btn-large">
                Inquire Now
              </Link>
              </div>
         
            
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Unleash;
