import React from "react";
import Accordion from "react-bootstrap/Accordion";
import SectionTitle from "../../elements/section-title/SectionTitle";
import { FaCompress, FaCode, FaGlobe } from "react-icons/fa";

const SeoExperts = () => {
  return (
    <div className="section-padding bg-color-light">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="why-choose-us">
             <h4>
             What’s so special about our SEO Experts?
             </h4>
              <Accordion defaultActiveKey="1">
                <Accordion.Item eventKey="1">
                  <Accordion.Header>
                    <FaCompress /> Have been at that road
                  </Accordion.Header>
                  <Accordion.Body>
                    
SEO is a permutation and combination of tried and tested methodologies to make a place and name for your brand. Been there - Done That!
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                  <Accordion.Header>
                    <FaCode /> A NO-NO to SEO malpractice
                  </Accordion.Header>
                  <Accordion.Body>
                   
With years of profound experience, one of the most important things that we learned was - do not mess with SEO techniques and Search Engine Algorithms. We stand by that.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                  <Accordion.Header>
                    <FaGlobe /> SEO demands patience
                  </Accordion.Header>
                  <Accordion.Body>
                  Having worked as a leading SEO marketing company, we understand the complexities SEO campaigns involve. It's competitive, intense, research-hungry and demands a high level of patience.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="4">
                  <Accordion.Header>
                    <FaGlobe /> We meet expectations
                  </Accordion.Header>
                  <Accordion.Body>
                  We have niche skills, real-time insights, competitive analysis and a humane approach that set us apart and live up to your client’s expectations.
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </div>
          </div>
          <div className="col-xl-5 col-lg-6 offset-xl-1">
            <div className="why-choose-us mb--30">
              <div className="why-choose-thumb">
                <img
                  src={process.env.PUBLIC_URL + "/images/seoExperts.png"}
                  alt="Office"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SeoExperts;
