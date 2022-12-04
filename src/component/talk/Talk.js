import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import PricingData from "../../data/pricing/PricingData.json";
import { FaCheck } from "react-icons/fa";

const getPriceingData = PricingData;

const billed = [
  {
    id: 1,
    label: "Billed Yearly",
  },
  {
    id: 2,
    label: "Billed Monthly",
  },
];

const Talk = () => {
  const [isActive, setActive] = useState("");

  useEffect(() => {
    setActive(billed[0].label.toLowerCase());
  }, []);

  const handleChange = (e) => {
    setActive(e.target.textContent.toLowerCase());
  };

  return (
    <>
      <div className="row">
        <div className="col-lg-4 ">
          <div className="pricing-table-enquiry pricing-borderd">
            <div className="pricing-header">
              <img className="enquiry" src="/images/enquiry/sales.svg" />
              <h3 className="title">Sales & Inquiries</h3>
            </div>
            <hr />
            <center>
              {" "}
              <h6 className="title">sales@dignifyd.ae</h6>
            </center>

            <div className="pricing-body">
              <center>
                {" "}
                <h6 className="title">+971-501599266</h6>
              </center>
            </div>
          </div>
        </div>
        <div className="col-lg-4 ">
          <div className="pricing-table-enquiry pricing-borderd">
            <div className="pricing-header">
              <img className="enquiry" src="/images/enquiry/help.svg" />
              <h3 className="title">Help & Support</h3>
            </div>
            <hr />
            <center>
              {" "}
              <h6 className="title">support@dignifyd.in</h6>
            </center>
            <div className="pricing-body">
              <center>
                {" "}
                <h6 className="title">+9192666 29666</h6>
              </center>
            </div>
          </div>
        </div>

        <div className="col-lg-4 ">
          <div className="pricing-table-enquiry pricing-borderd">
            <div className="pricing-header">
              <img className="enquiry" src="/images/enquiry/media.svg" />
              <h3 className="title">Media & Press</h3>
            </div>
            <hr />
            <center>
              {" "}
              <h6 className="title">corporate@dignifyd.in</h6>
            </center>
            <div className="pricing-body">
              <center>
                {" "}
                <h6 className="title">+9192666 29666</h6>
              </center>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Talk;
