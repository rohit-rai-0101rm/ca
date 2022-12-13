import React from "react";
import Accordion from "react-bootstrap/Accordion";
import SectionTitle from "../../elements/section-title/SectionTitle";
import { FaCompress, FaCode, FaGlobe } from "react-icons/fa";

const HireFromIndia = () => {
  return (
    <div className="section-padding bg-color-light">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="why-choose-us">
              <h2 className="title">Why Companies hire from India</h2>
              <Accordion defaultActiveKey="1">
                <Accordion.Item eventKey="1">
                  <Accordion.Header>
                    <FaCompress /> Talent Powerhouse
                  </Accordion.Header>
                  <Accordion.Body>
                    <ul className="list-style">
                      <li className="">
                        There’s an acute shortage of talent in all the major
                        countries of the world, as the demand is rapidly
                        increasing.
                      </li>
                      <li>
                        Companies are left with no choice but to look for skills
                        outside their geographical locations.
                      </li>
                      <li>
                        India has a surplus of talents and its friendly
                        relations with other countries make it the safest and
                        most obvious choice for companies to choose from.
                      </li>
                    </ul>{" "}
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                  <Accordion.Header>
                    <FaCode /> Quality Talent
                  </Accordion.Header>
                  <Accordion.Body>
                    <ul className="list-style">
                      <li>
                        Remote culture has opened up opportunities for companies
                        to hire highly skilled and experienced talents from
                        around the world without the need to move from one
                        country to another.
                      </li>
                      <li>
                        Indian Talents are already running some of the world's
                        biggest tech giants like Google, IBM, Adobe, Chanel,
                        Vimeo, Microsoft, HubSpot, FedEx, and more. which makes
                        them the top preference to hire in the talent war.
                      </li>
                      <li>
                        They are known as resourceful, resilient, and adaptive -
                        which makes them thrive wherever they work. This makes
                        them the first choice when it comes to hiring the best
                        talent.
                      </li>
                    </ul>{" "}
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                  <Accordion.Header>
                    <FaGlobe /> Cost Advantage
                  </Accordion.Header>
                  <Accordion.Body>
                    <ul className="list-style">
                      <li>
                        The talent war is all about retaining and attracting
                        talents, which are already limited.
                      </li>
                      <li>
                        This forces the companies to offer higher packages,
                        attractive bonuses, and additional perks & benefits.
                        Which has become so common, that it no longer gives any
                        competitive edge to companies.
                      </li>
                      <li>
                        India having surplus talents and being a developing
                        country, offers talents in way too affordable salaries
                        as compared to developed countries. This makes India
                        talent heaven for such companies to hire at affordable
                        compensation.
                      </li>
                    </ul>{" "}
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HireFromIndia;
