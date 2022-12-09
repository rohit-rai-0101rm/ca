import React from "react";
import { Link } from "react-router-dom";
import CountUp from "react-countup";
import TrackVisibility from "react-on-screen";

const AboutFour = () => {
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
                <h2 className="titleUnique">
                  designs that
                  <br />
                  convert<strong className="uniqueBold"> faster</strong>{" "}
                </h2>
                <p className="innovate-list-para">
                  Crafting responsive, friendly designs with instant impact,
                  impressing users, and effectively portraying your brand.
                </p>
              </div>
              <div className="col-md-12 col-sm-6 mb--30">
                <ul className="list-style">
                  <li className="innovate-list">
                    Deliver a tailor-made experience to your customers to
                    attract them.
                  </li>
                  <li className="innovate-list">
                    We study user behavourial patterns to ensure highly
                    interactive & friendly designs.
                  </li>
                  <li className="innovate-list">
                    Using the power of Psychology, we make sure to be
                    aesthetically pleasing for first time interactions.
                  </li>
                </ul>
              </div>
              <Link to="#" className="axil-btn btn-fill-primary btn-large">
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutFour;
