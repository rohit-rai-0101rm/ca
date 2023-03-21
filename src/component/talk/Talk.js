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
      <div className="row mt-10">
        <div className="col-lg-4 ">
          <div className="pricing-table-enquiry pricing-borderd">
            <div className="pricing-header">
              <img className="enquiry" src="/images/enquiry/sales.svg" />
              <center>
              <h6 className="title">Sales & Inquiries</h6>

              </center>
            </div>
            <hr />
            <center>
              {" "}
              <h6 className="title">sales@NXG.ae</h6>
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
              <center>
              <h6 className="title">Help & Support</h6>

              </center>            </div>
            <hr />
            <center>
              {" "}
              <h6 className="title">support@NXG.in</h6>
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
              <center>
              <h6 className="title">Media & Press</h6>

              </center>            </div>
            <hr />
            <center>
              {" "}
              <h6 className="title">corporate@NXG.in</h6>
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
