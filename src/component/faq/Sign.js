import React from "react";
import Accordion from "react-bootstrap/Accordion";
import SectionTitle from "../../elements/section-title/SectionTitle";
import FaqData from "../../data/faq/faqSigns.json";
import SectionTitle6 from "../../elements/section-title/SectionTitle6";

const allData = FaqData;

const Sign = () => {
  return (
    <div className="section section-padding-equal bg-white  faq-area">
      <div className="container">
        <div className="row">
          <div className="col-lg-5 col-xl-4">
            <SectionTitle6 />
          </div>
          <div className="col-lg-12 col-xl-12">
            <center></center>
            <div className="faq-accordion">
              <Accordion defaultActiveKey="1">
              
                {allData.map((data) => (
                  
                  <Accordion.Item eventKey={data.id} key={data.id}>
                    <Accordion.Header>
                   <h4 className="subheadingDigitalMarketing">
                    <center>
                    {data.title}

                    </center>

                      </h4>
                  
                   
                    </Accordion.Header>
                    <Accordion.Body>
                      <p className="innovate-list-para">{data.body}</p>
                      <br />
                      <p className="innovate-list-para">{data.body2}</p>
                      <br />
                      <p className="innovate-list-para">{data.body3}</p>
                      <br />
                      <h5 className="titleSigns">{data.heading1}</h5>
                      <br />
                      <p className="innovate-list-para">{data.para1}</p>
                      <br />
                      <h5 className="titleSigns"> {data.heading2}</h5>

                      <br />
                      <p className="innovate-list-para">{data.para2}</p>
                      <br />
                      <h5 className="titleSigns">{data.heading3}</h5>
                      <br />
                      <p className="innovate-list-para">{data.para3}</p>
                      <br />
                      <h5 className="titleSigns">{data.heading4}</h5>
                      <br />
                      <p className="innovate-list-para">{data.para4}</p>
                      <br />
                      <h5 className="titleSigns">
                      {data.heading5}
                      </h5>
                      
                      <br />
                      <p className="innovate-list-para">{data.para5}</p>
                      <br />
                      <p className="innovate-list-para">{data.para6}</p>
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
      </ul>
    </div>
  );
};

export default Sign;
