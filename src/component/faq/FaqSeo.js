import React from "react";
import Accordion from "react-bootstrap/Accordion";
import SectionTitle from "../../elements/section-title/SectionTitle";
import FaqData from "../../data/faq/FaqSeo.json";
import SectionTitle6 from "../../elements/section-title/SectionTitle6";

const allData = FaqData;

const FaqSeo = () => {
  return (
    <div className="section section-padding-equal bg-color-light faq-area">
      <div className="container">
        <div className="row">
          <div className="col-lg-5 col-xl-4">
            <SectionTitle6 />
          </div>
          <div className="col-lg-12 col-xl-12">
            <center></center>
            <div className="col-lg-12 col-xl-12">
                        <div className="faq-accordion">
                            <Accordion defaultActiveKey="1">
                                {allData.map((data) => (
                                    <Accordion.Item eventKey={data.id} key={data.id}>
                                        <Accordion.Header><span className="title">{`${data.id}.`}</span>{data.title}</Accordion.Header>
                                        <Accordion.Body><p>{data.body}</p></Accordion.Body>
                                    </Accordion.Item>
                                ))}
                            </Accordion>
                        </div>
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

export default FaqSeo;
