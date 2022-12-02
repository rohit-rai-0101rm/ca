import React from "react";
import { Link } from "react-router-dom";
import CounterUp from "../counterup/CounterUp";

const JobOpenings = () => {
  return (
    <div>
      <div className="section section-padding expert-counterup-area">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-10">
              <div className="section-heading heading-left">
                <h2>Join our growing team of doers.</h2>
              </div>
            </div>
            <div className="col-lg-2 py-4">
              <div className="section-heading heading-left">
                <Link
                  to={process.env.PUBLIC_URL + "/contact"}
                  className="axil-btn btn-large"
                >
                  View All Jobs
                </Link>
              </div>
            </div>
            <br />
          </div>
        </div>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-10">
              <div className="section-heading heading-left">
                <h4>Interface Designer</h4>
                <p>Remote - Part Time</p>
              </div>
            </div>
            <div className="col-lg-2 py-4">
              <div className="section-heading heading-left">
                <Link
                  to={process.env.PUBLIC_URL + "/contact"}
                  className="axil-btn btn-large btn-fill-primary"
                >
                  Apply Now
                </Link>
              </div>
            </div>
            <br />
          </div>
          <hr />
        </div>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-10">
              <div className="section-heading heading-left">
                <h4>Junior Frontend Developer</h4>
                <p>Hybrid - Full Time</p>
              </div>
            </div>
            <div className="col-lg-2 py-4">
              <div className="section-heading heading-left">
                <Link
                  to={process.env.PUBLIC_URL + "/contact"}
                  className="axil-btn btn-large btn-fill-primary"
                >
                  Apply Now
                </Link>
              </div>
            </div>
            <br />
          </div>
          <hr />
        </div>{" "}
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-10">
              <div className="section-heading heading-left">
                <h4>UI/UX Designer</h4>
                <p>On Site - Full Time</p>
              </div>
            </div>
            <div className="col-lg-2 py-4">
              <div className="section-heading heading-left">
                <Link
                  to={process.env.PUBLIC_URL + "/contact"}
                  className="axil-btn btn-large btn-fill-primary"
                >
                  Apply Now
                </Link>
              </div>
            </div>
            <br />
          </div>
          <hr />
        </div>{" "}
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-10">
              <div className="col-lg-10">
                <div className="section-heading heading-left">
                  <h4>Software Engineer</h4>
                  <p>Hybrid - Full Time</p>
                </div>
              </div>
            </div>
            <div className="col-lg-2 py-4">
              <div className="section-heading heading-left">
                <Link
                  to={process.env.PUBLIC_URL + "/contact"}
                  className="axil-btn btn-large btn-fill-primary"
                >
                  Apply Now
                </Link>
              </div>
            </div>
            <br />
          </div>
          <hr />
        </div>{" "}
      
      </div>
    </div>
  );
};

export default JobOpenings;
