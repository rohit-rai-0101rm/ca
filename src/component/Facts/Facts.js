import React from "react";
import { Link } from "react-router-dom";
import TeamData from "../../data/team/facts.json";
import { slugify } from "../../utils";

const allData = TeamData;

const Facts = () => {
  return (
    <div className="section section-padding mt--120 bg-dark">
      <div className="container">
        <div className="section-heading heading-light">
          <h4 className="title  mt-120">
          Facts at a glance
          </h4>
       
        </div>
        <div className="row">
          
            <div className="col-xl-3 col-sm-6" >
              <div className="">
                <div className="thumbnail">
                  <Link
                 
                  >
                    <img
                      src="/images/facts/microsoft-logo.png"
                      alt={"img"}
                    />
                     <p className="innovate-list-para2 mt--20">
                   
                     20% of Engineers in Microsoft are Indians                
               </p>
                  </Link>
                </div>
                    
                 
                 
                <div className="">
                
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-sm-6" >
              <div className="">
                <div className="thumbnail">
                  <Link
                 
                  >
                    <img
                      src="/images/facts/google-logo.png"
                      alt={"img"}
                    />
                     <p className="innovate-list-para2 mt--20">
                   
                     Around 30% of engineers in Google are Asians (most of which are Indians!)                
               </p>
                  </Link>
                </div>
                    
                 
                 
                <div className="">
                
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-sm-6" >
              <div className="">
                <div className="thumbnail">
                  <Link
                 
                  >
                    <img
                      src="/images/facts/facebook-logo.png"
                      alt={"img"}
                    />
                     <p className="innovate-list-para2 mt--20">
                   
                     Facebook has 12000 Indians both who work in the U.S and remotely from India.                
               </p>
                  </Link>
                </div>
                    
                 
                 
                <div className="">
                
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-sm-6" >
              <div className="">
                <div className="thumbnail">
                  <Link
                 
                  >
                    <img
                      src="/images/facts/apple-logo.png"
                      alt={"img"}
                    />
                     <p className="innovate-list-para2 mt--20">
                   
                     1 out of every 3 Engineers is an Indian in Apple, another tech giant.                
               </p>
                  </Link>
                </div>
                    
                 
                 
                <div className="">
                
                </div>
              </div>
            </div>
        </div>
      </div>
   
    </div>
  );
};

export default Facts;
