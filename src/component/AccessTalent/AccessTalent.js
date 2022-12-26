import React from "react";
import { Link } from "react-router-dom";
import TeamData from "../../data/team/AccessTalent.json";
import { slugify } from "../../utils";

const allData = TeamData;

const AccessTalent = () => {
  return (
    <div className="section section-padding bg-color-dark pb--70 pb_lg--20 pb_md--0">
      <div className="container">
        <div className="section-heading heading-light">
          <h3 className="title mt--80">
            Land India’s top remote talent with Uplers
          </h3>
          <p className="innovate-list-para">
            Access the talent network of 50,000+ skilled experts with 100+ skill
            sets
          </p>
        </div>
        <div className="row">
          {allData.map((data) => (
            <div className="col-xl-2 col-md-2 col-sm-6" key={data.id}>
              <div className="">
                <div className="thumbnail3">
                  <img
                    src={process.env.PUBLIC_URL + data.thumb}
                    alt={data.title}
                  />
                </div>
                <div className="">
                    <p className="innovate-list-para2"> {data.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <ul className="list-unstyled shape-group-10">
        <li className="shape shape-1">
          <img
            src={process.env.PUBLIC_URL + "/images/others/circle-1.png"}
            alt="Circle"
          />
        </li>
        <li className="shape shape-2">
          <img
            src={process.env.PUBLIC_URL + "/images/others/line-3.png"}
            alt="Circle"
          />
        </li>
        <li className="shape shape-3">
          <img
            src={process.env.PUBLIC_URL + "/images/others/bubble-5.png"}
            alt="Circle"
          />
        </li>
      </ul>
    </div>
  );
};

export default AccessTalent;
