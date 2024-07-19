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
                  We’ve built{" "}
                  <strong className="uniqueBold">NXG Technologies</strong> to
                  provide customized tech and
                  <strong className="uniqueBold"> Software Solutions.</strong>
                </h2>
              </div>
            </div>
          </div>
          <div className="col-xl-2 col-lg-3"></div>
          <div className="col-xl-5 col-lg-3">
            <div className="case-study-featured-thumb text-start">
              <p className="innovate-list-para">
                At NXG TECH AND CONSULTING PRIVATE LIMITED, we pride ourselves
                on tailoring our services to meet the unique needs of each
                client. As a result, none of our services have a fixed price.
                Our offerings are extremely diverse, from software development
                to user guides, even domain and website design.
              </p>
            </div>
            <div className="case-study-featured-thumb text-start">
              <p className="innovate-list-para">
                We want to understand your specific needs and scope of work in
                detail in order to give you the right quote. Please share more
                information about your needs, and we will prepare a customized
                one for you.
              </p>
            </div>
            <div className="case-study-featured-thumb text-start">
              <p className="innovate-list-para">
                We look forward to partnering with you and providing a solution
                that perfectly matches your goals.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuiltDignifyd;
