import React from "react";
import { Link } from "react-router-dom";
import CountUp from "react-countup";
import TrackVisibility from "react-on-screen";

const StartupHelp = () => {
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
                <p> NXG Tech can provide end-to-end solutions to startups for all their digital solution requirements, saving them time and delivering great value. </p>
              </p></div>
            
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
        <p><b>Empowering startups to deliver innovative products based on cutting-edge technologies
        </b></p>
        
        <p>Startups need to innovate faster to survive the cut-throat competition in the market. They need to embrace new business avenues and build<br/> scalable products with a faster time-to-market.</p>
        <p>By leveraging its domain expertise, Mobile Programming helps startups and small businesses ideate, design, develop, and launch their<br/> innovative ideas while respecting generic startup constraints like cost and timeline. Our organization is capable of supporting technology-driven<br/> startups from the MVP stage to product launch.</p>
        <p>
We understand the need for startups and small businesses to move rapidly to launch, grow, and succeed in the market. Through its agile <br/>methodologies, Mobile Programming delivers applications within targeted time frames.</p>
        
        </center>
       </div>
    </div>
  );
};

export default StartupHelp;
