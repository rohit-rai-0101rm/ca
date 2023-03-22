import React from "react";
import { Link } from "react-router-dom";
import CountUp from "react-countup";
import TrackVisibility from "react-on-screen";

const PharmaHelp = () => {
  return (
    <div className="section section-padding case-study-featured-area">
      <div className="container">
        <div className="row">
          <div className="col-xl-7 col-lg-6">
            <div className="case-study-featured-thumb text-start">
              <img
                src={process.env.PUBLIC_URL + "/images/designs.png"}
                alt="travel"
              />
            </div>
          </div>
          <div className="col-xl-5 col-lg-6">
            <div className="case-study-featured">
              <div className="section-heading heading-left">
                <h3 className="titleUnique">
                How Can NXG
                  <br />
                  Tech <strong className="uniqueBold"> Help?</strong>{" "}
                </h3>
                <p className="innovate-list-para">
                We are leaders in developing cloud-based digital solutions for achieving operational excellence. Many Fortune 500 Banking, Finance, Service, Insurance companies rely on our services to optimize their customer touchpoints across various channels. Mobile Programming can help increase customer acquisition, activation, and retention as well as enhance user experience.
                </p>
              </div>
            
            </div>
          </div>
       
        </div>
      </div>
      <div>
          <center>
              <Link to="/contact" className="axil-btn btn-fill-primary btn-large">
                Request a Free Counsultation
              </Link>
        </center>
        </div>
        <br/>
        <div>
        <center>
        <p>The healthcare industry faces numerous challenges in the form of poor cost margins, skyrocketing R&D expenses,<br/> fragmented supply chains, and strict compliance policies. That is why there is a need for new-age digital technologies that <br/>can automate processes, enable data-driven decisions, and expand innovation. Companies need to act quickly and build <br/>core internal digital capabilities.
        </p>
        
       
        </center>
       </div>
    </div>
  );
};

export default PharmaHelp;
