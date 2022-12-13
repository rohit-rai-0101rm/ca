import React from "react";
import { Link } from "react-router-dom";
import TeamData from "../../data/team/Talent.json";
import { slugify } from "../../utils";

const allData = TeamData;

const Talent = () => {
  return (
    <div className="section section-padding-team">
      <div className="container">
        <div className="section-heading heading-light">
          <h4 className="title  mt-120">
            India is full of talented individuals already shaping the world{" "}
          </h4>
          <p className="innovate-list-para">
            Some of the world’s biggest companies are currently being run by
            Indians, here are a few examples.
          </p>
        </div>
        <div className="row">
          {allData.map((data) => (
            <div className="col-xl-4 col-sm-6" key={data.id}>
              <div className="team-grid">
                <div className="thumbnail">
                  <Link
                    to={
                      process.env.PUBLIC_URL +
                      `/team-details/${slugify(data.title)}`
                    }
                  >
                    <img
                      src={process.env.PUBLIC_URL + data.thumb}
                      alt={data.title}
                    />
                  </Link>
                </div>
                <div className="content">
                  <h4 className="title">
                    <Link
                      to={
                        process.env.PUBLIC_URL +
                        `/team-details/${slugify(data.title)}`
                      }
                    >
                      {data.title}
                    </Link>
                  </h4>
                  <span
                    className="designation"
                    dangerouslySetInnerHTML={{ __html: data.designation }}
                  ></span>
                </div>
                <div className="">
                  <Link
                    to={
                      process.env.PUBLIC_URL +
                      `/team-details/${slugify(data.title)}`
                    }
                  >
                    <img
                      src={process.env.PUBLIC_URL + data.company}
                      alt={data.company}
                    />
                  </Link>
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

export default Talent;
