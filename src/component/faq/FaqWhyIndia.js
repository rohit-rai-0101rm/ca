import React from "react";
import Accordion from "react-bootstrap/Accordion";
import SectionTitle from "../../elements/section-title/SectionTitle";
import FaqData from "../../data/faq/FaqWhyIndia.json";
import SectionTitle6 from "../../elements/section-title/SectionTitle6";

const allData = FaqData;

const FaqWhyIndia = () => {
  return (
    <div className="section section-padding-equal bg-color-light faq-area">
      <div className="container">
        <div className="row">
        
          <div className="col-lg-12 col-xl-12">
            <center><h3>
                Frequently asked Questions
                
                </h3></center>
            <div className="faq-accordion">
              <Accordion defaultActiveKey="1">
                {allData.map((data) => (
                  <Accordion.Item eventKey={data.id} key={data.id}>
                    <Accordion.Header>{data.title}</Accordion.Header>
                    <Accordion.Body>
                      <p>{data.body}</p>
                      <br />
                      <p>{data.body2}</p>
                      <br />
                      <p>{data.body3}</p>
                      <br />
                      {data.heading1}
                      <br />
                      <p>{data.para1}</p>
                      <br />
                      {data.heading2}
                      <br />
                      <p>{data.para2}</p>
                      <br />
                      {data.heading3}
                      <br />
                      <p>{data.para3}</p>
                      <br />
                      {data.heading4}
                      <br />
                      <p>{data.para4}</p>
                      <br />
                      {data.heading5}
                      <br />
                      <p>{data.para5}</p>
                      <br/>
                      <p>{data.para6}</p>
                    </Accordion.Body>
                  </Accordion.Item>
                ))}
              </Accordion>
            </div>
          </div>
        </div>
      </div>
      <ul className="shape-group-6 list-unstyled">
        <li className="shape shape-1">
          <img
            src={process.env.PUBLIC_URL + "/images/others/bubble-7.png"}
            alt="Bubble"
          />
        </li>
        <li className="shape shape-2">
          <img
            src={process.env.PUBLIC_URL + "/images/others/line-4.png"}
            alt="line"
          />
        </li>
        <li className="shape shape-4">
          <img
            src={process.env.PUBLIC_URL + "/images/others/poses-lady.png"}
            alt="Poses"
          />
        </li>
      </ul>
    </div>
  );
};

export default FaqWhyIndia;