import React from "react";
import { Link } from "react-router-dom";
import CountUp from "react-countup";
import TrackVisibility from "react-on-screen";

const EnpoweringBuisness = () => {
  return (
    <div className="section section-padding-spider">
      <div className="container">
        <div className="row">
          <div className="col-xl-6 col-lg-6">
            <div className="">
              <div className="">
                <h4 className="title">Empowering Businesses</h4>

                <h3 className="title">
                  Why Global Brands prefer hiring talent from NXG
                </h3>
           
              </div>
              <div className="col-md-12 col-sm-6 mb--30">
                <ul className="list-style">
                  <li className="innovate-list-para">
                   
India's largest Talent Network of 50,000+ Tech
Professionals
                  </li>
                  <li className="innovate-list-para">
                 
Worked with more than 7000+ Global Clients
                  </li>
                  <li className="innovate-list-para">
                  Behold an industry experience of over a decade
                  </li>
                </ul>
              </div>
              <Link to="#" className="axil-btn btn-fill-primary btn-large">
                Hire Python Developers
              </Link>
            </div>
          </div>
          <div className="col-xl-6 col-lg-6">
            <div className="text-start">
              <img
                src={process.env.PUBLIC_URL + "/images/justSpiders.png"}
                alt="travel"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnpoweringBuisness;
