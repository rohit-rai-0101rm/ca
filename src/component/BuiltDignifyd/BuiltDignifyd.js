import React from "react";
import { Link } from "react-router-dom";

const BuiltDignifyd = () => {
  return (
    <div className="section section-padding case-study-featured-area">
      <div className="container">
        <div className="row">
          <div className="col-xl-5 col-lg-6">
            <div className="case-study-featured">
              <div className="section-heading heading-left">
                <h2 className="titleUnique">
                  We’ve built <strong className="uniqueBold">Dignifyd</strong> to bring businesses{" "}
                  <strong className="uniqueBold">Digitally Ahead.</strong>
                </h2>
              </div>
            </div>
          </div>
          <div className="col-xl-2 col-lg-3"></div>
          <div className="col-xl-5 col-lg-3">
            <div className="case-study-featured-thumb text-start">
              <p className="innovate-list-para">
                Our core business is to provide clients all over the world with
                scalable, dependable, and inexpensive eCommerce, Digital
                Solutions, Marketing, and Development services.
              </p>
            </div>
            <div className="case-study-featured-thumb text-start">
              <p className="innovate-list-para">
                Our innovative methods and trained personnel have enabled us to
                complete projects on time and within budget, allowing us to
                become the technology partner of choice for numerous businesses
                throughout the Middle East, Europe, the United States & India.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuiltDignifyd;
