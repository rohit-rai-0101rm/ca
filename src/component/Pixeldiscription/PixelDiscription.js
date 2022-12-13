import React from "react";
import { Link } from "react-router-dom";
import CountUp from "react-countup";
import TrackVisibility from "react-on-screen";

const PixelDiscription = () => {
  return (
    <div className="section section-padding-pixel case-study-featured-area mt--60">
      <div className="container ">
        <div className="row">
          <div className="col-xl-5 col-lg-6 ">
            <div className="case-study-featured-thumb text-start">
              <img
                src={process.env.PUBLIC_URL + "/images/pixelPerfect.png"}
                alt="travel"
              />
            </div>
          </div>
          <div className="col-xl-7 col-lg-6">
            <div className="case-study-featured">
              <div className="section-heading heading-left">
                <h4 className="title mt--20">
                A Graphic Design Company That is Pixel Perfect
                </h4>
                <p className="innovate-list-para">
                A Graphic Design Company That is Pixel Perfect
                  Dignifyd is one of the preferred design agencies across 52+ nations owing to our quick TAT records, quality-standards, and great experience. We have been working over bulk design production requirements as well as creative design requirements from scratch. These include – websites, landing pages, display banners, email templates, blogs, infographics, eBooks, etc.
                </p>
                <p className="innovate-list-para">
              Our people are our core strength in delivering a stress-free and superior quality working experience to our partners’. Whether you want us to develop a design from scratch or adapt your design and produce the rest of the pages based on it, we have the team strength and the right talent to get your work done seamlessly
                </p>
              </div>
            
             
              <Link to="#" className="axil-btn btn-fill-primary btn-large">
               Inquire Now
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PixelDiscription;
