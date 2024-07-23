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

const PricingOne = () => {
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
          <div className="pricing-table pricing-table-new h-100 pricing-borderd">
            <div className="pricing-header">
              <h5 className="title">
                Basic <br />
              </h5>
            </div>
            <div className="pricing-body">
              <center>
                <p className="discription1">
                  Starting from 10,000 INR <br />
                </p>
              </center>
            </div>
          </div>
        </div>
        <div className="col-lg-4 ">
          <div className="pricing-table pricing-table-new h-100 pricing-borderd">
            <div className="pricing-header">
              <h3 className="title">Intermediate</h3>
            </div>
            <div className="pricing-body">
              <p className="discription1">
                <center>Starting from 15,000 INR</center>
              </p>
            </div>
          </div>
        </div>

        <div className="col-lg-4 ">
          <div className="pricing-table-new pricing-table h-100 pricing-borderd">
            <div className="pricing-header">
              <h3 className="title">Advance</h3>
            </div>
            <div className="pricing-body">
              <center>
                <p className="discription1">Based on your requirement.</p>
              </center>
              <center>
                <Link
                  to="/contact"
                  type="submit"
                  className="axil-btn btn-fill-dark btn-fluid  btn-dark btn btn-dark submit-btn-new"
                  name="submit-btn"
                >
                  SUBMIT
                </Link>
              </center>
            </div>
          </div>
        </div>
        <center className="mt-120">
          <p>*All Pricing depends on the customization</p>
        </center>
      </div>
    </>
  );
};

export default PricingOne;
