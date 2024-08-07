import React from "react";
import { Link } from "react-router-dom";
import TeamData from "../../data/team/topSkills.json";
import { slugify } from "../../utils";

const allData = TeamData;

const TopSkills2 = () => {
  return (
    <div className="section section-padding  pb--70  pb_md--0">
      <div className="container">
        <div className="section-heading heading-light">
          <h3 className="title mb--50 skillsHeading">Technologies we use to create Web Applications:

</h3>
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
    
    </div>
  );
};

export default TopSkills2;
