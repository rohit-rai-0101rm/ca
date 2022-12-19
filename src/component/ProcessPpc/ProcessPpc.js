import React from "react";
import SectionTitle from "../../elements/section-title/SectionTitle";
import ProcesstData from "../../data/process/Processppc.json";
import Tilty from "react-tilty";

const getProcesstData = ProcesstData;

const ProcessPpc = () => {
  return (
    <div className="section section-padding bg-color-light pb--70">
        <center>
        <h5>
        Would you like to hire a dedicated PPC Expert who is both brilliant and
        culturally fit?
      </h5>
      <p className="innovate-list-para">

50,000+ talents have been screened for their technical skills, language proficiency, and behavioral aspects - so you get the best one for your company.
      </p>
        </center>
     
      <div className="container">
        {getProcesstData.map((data) => (
          <div
            key={data.id}
            className={`process-work ${
              data.id % 2 === 0 ? "content-reverse" : ""
            }`}
          >
            <Tilty perspective={2000}>
              <div className="thumbnail">
                <img
                  src={process.env.PUBLIC_URL + data.thumb}
                  alt="Thumbnail"
                />
              </div>
            </Tilty>
            <div className="content">
              <span className="subtitle">{data.subtitle}</span>
              <h3 className="title">{data.title}</h3>
              <p>{data.paragraph}</p>
            </div>
          </div>
        ))}
      </div>
      <ul className="shape-group-17 list-unstyled">
        <li className="shape shape-1">
          <img
            src={process.env.PUBLIC_URL + "/images/others/bubble-24.png"}
            alt="Bubble"
          />
        </li>
        <li className="shape shape-2">
          <img
            src={process.env.PUBLIC_URL + "/images/others/bubble-23.png"}
            alt="Bubble"
          />
        </li>
        <li className="shape shape-3">
          <img
            src={process.env.PUBLIC_URL + "/images/others/line-4.png"}
            alt="Line"
          />
        </li>
        <li className="shape shape-4">
          <img
            src={process.env.PUBLIC_URL + "/images/others/line-5.png"}
            alt="Line"
          />
        </li>
        <li className="shape shape-5">
          <img
            src={process.env.PUBLIC_URL + "/images/others/line-4.png"}
            alt="Line"
          />
        </li>
        <li className="shape shape-6">
          <img
            src={process.env.PUBLIC_URL + "/images/others/line-5.png"}
            alt="Line"
          />
        </li>
      </ul>
    </div>
  );
};

export default ProcessPpc;
