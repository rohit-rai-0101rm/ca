import React from "react";
import { Link } from "react-router-dom";
import CountUp from "react-countup";
import TrackVisibility from "react-on-screen";
import { AnimationOnScroll } from "react-animation-on-scroll";

const Mission = () => {
  return (
    <div className="section section-padding-mission ">
      <div className="container">
        <div className="row">
          <div className="col-xl-12 col-lg-6 mission">
            <div className="section-heading heading-right">
              <h3 className="">
                providing the simplest solutions <br /> for the most complex
                problems
              </h3>
            </div>
          </div>
          <div className="row">
          
            <div className="col-xl-6 col-lg-6">
                <h3 className="title">
                  integrity.
                  <br />
                  excellence.
                  <br />
                  innovation.
                </h3>

                <p className="innovate-list-para" >
                  Dignifyd, strives to meet its customers’ needs in order to
                  build a long-term, successful business relationship with them.<br/>
                  <br/>
                  We believe in excellent customer service and that all of our
                  customers deserve our best efforts to further serve them.<br/>
                  <br/>
                  We hope you will join us as we build a tradition of excellence
                  and professional excellence.
                </p>
              
                
                
            </div>
             
         
            <div className="col-xl-6 col-lg-6 ">
           
              <div className="section-heading heading-right">
                <img
                  src={process.env.PUBLIC_URL + "/images/solutions.webp"}
                  alt="travel"
                />
              </div>
            </div>
         
            <div className="col-xl-6 col-lg-6 case-study-featured-thumb text-start"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mission;
