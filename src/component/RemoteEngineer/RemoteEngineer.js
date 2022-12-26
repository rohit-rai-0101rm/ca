import React from "react";
import { Link } from "react-router-dom";
import TeamData from "../../data/team/topSkills.json";
import { slugify } from "../../utils";

const allData = TeamData;

const RemoteEngineer = () => {
  return (
    <div className="section section-padding  pb--70 pb_lg--20 pb_md--0">
      <div className="container">
        <div className="section-heading heading-light">
          <h3 className="title mb--50 skillsHeading">Land India’s top remote engineers with Dignifyd</h3>
          <p className="innovate-list-paraABC">Access the talent pool of 50,000+ skilled professionals with knowledge of more than 20 tech stacks</p>
        </div>
        <div className="row">
          {allData.map((data) => (
            <div className="col-xl-3 col-sm-6" key={data.id}>
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
              
                 <p className="innovate-list-para">{data.designation}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
     <center> <Link
              to={process.env.PUBLIC_URL + "/contact"}
              className="axil-btn btn-large btn-fill-white"
            >
              Get in Touch
            </Link></center> 
    
    </div>
  );
};

export default RemoteEngineer;