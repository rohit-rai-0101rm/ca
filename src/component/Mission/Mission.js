import React from "react";
import { Link } from "react-router-dom";
import CountUp from "react-countup";
import TrackVisibility from "react-on-screen";
import { AnimationOnScroll } from "react-animation-on-scroll";

const Mission = () => {
  return (
    <div className="section section-padding-mission case-study-featured-area">
      <div className="container">
        <div className="row">
          <div className="col-xl-12 col-lg-6 mission">
            <div className="section-heading heading-right">
           
              <h3 className="">
                providing the simplest solutions <br/> for the most complex problems
              </h3>
             
            </div>
            
          </div>
          <div className="row">
          <div className="col-xl-8 col-lg-8 mission">
            <div className="section-heading heading-right">
           
           
              <Link
                to="#"
                className="axil-btn text-right btn-fill-primary btn-large"
              >
                Our Mission
              </Link>
              <img
                src={process.env.PUBLIC_URL + "/images/designs.png"}
                alt="travel"
              />
            </div>
            </div>
            <div className="col-xl-4 col-lg-4 mission">
            <div className="banner-content">
                            
                                <h3 className="title">integrity.<br/>excellence.<br/>innovation.</h3>

                            

                                <p >Dignifyd, strives to meet its customers’ needs in order to build a long-term, successful business relationship with them.</p>
                                <br/>
                                <p>We believe in excellent customer service and that all of our customers deserve our best efforts to further serve them.</p>
                                <br/>
                                <p className="subtitle">We hope you will join us as we build a tradition of excellence and professional excellence.</p>
                               





                        </div>
            </div>
            <div className="col-xl-6 col-lg-6 case-study-featured-thumb text-start">
             
            </div>
         
          </div>
         
          </div>
    
       
      </div>
    </div>
  );
};

export default Mission;
