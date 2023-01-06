import React from "react";
import TestimonialData from "../../data/testimonial/TestimonialData.json";

const allData = TestimonialData;

const TestimonialItem = ({ colSize, itemShow }) => {
  return (
    <>
      {allData.slice(0, itemShow).map((data, index) => (
        <div className={`${colSize}`} key={index}>
          <div className="testimonial-grid">
              <img src={process.env.PUBLIC_URL + data.from} alt="Yelp" />
            <div className="testimonialDescription">
              <p>{data.description}</p>
            </div>
            <div className="author-info">
            
              <div className="content">
                <h6 className="name">{data.authorname}</h6>
                <p className="innovate-list-para">
                  <strong>
                  {data.authordesig}
                  </strong>
                 
                  
                  </p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default TestimonialItem;
