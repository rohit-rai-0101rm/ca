import React from "react";
import { Link } from "react-router-dom";
import CountUp from "react-countup";
import TrackVisibility from "react-on-screen";

const SeoSpider = () => {
  return (
    <div className="section section-padding-spider case-study-featured-area">
      <div className="container">
        <div className="row">
          <div className="col-xl-7 col-lg-6">
            <div className="case-study-featured-thumb text-start">
              <img
                src={process.env.PUBLIC_URL + "/images/justSpiders.png"}
                alt="travel"
              />
            </div>
          </div>
          <div className="col-xl-5 col-lg-6">
            <div className="case-study-featured">
              <div className="section-heading heading-left">
                <h4 className="">
                  We help your business to be discovered by the people and not
                  just spiders
                </h4>
                <p className="innovate-list-para">
                From in-depth analysis of user and keyword trends to drafting killer strategies for your custom needs – we do it all. The only difference is – we as an affordable SEO Services company, do it in a much cooler way! Our fine-tuned professional Search Engine Optimization services embrace everything from local strategy setup, expanding your business capabilities, cracking the Google search rankings to setting the right KPIs. The real game starts from here. We eavesdrop on your target audience to help them find where you are.
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
                Inquire Now
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SeoSpider;
