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

const WebDevServices = () => {
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
          <div className="pricing-table-webdev-services pricing-borderd">
            <div className="pricing-header">
              <img src="/images/unique/stunning.png" />
              <h3 className="title">
              Ecommerce Web Development Services
              </h3>
            </div>
            <div className="pricing-body">
              <center>
                <p className="discription1">
                  We develop stunningone-of-a-kind digital designs that catches
                  people’s eye and brings your brand to life online.
                </p>
              </center>
            </div>
          </div>
        </div>
        <div className="col-lg-4 ">
          <div className="pricing-table pricing-borderd">
            <div className="pricing-header">
              <img src="/images/unique/revol.png" />
              <h3 className="title">Landing Pages Development Services</h3>
            </div>
            <div className="pricing-body">
              <p className="discription1">
                <center>
                  Tailor-made solutions that resonate with your customers and
                  drives them to act in return increasing your
                  <strong> MMR.</strong>
                </center>
              </p>
            </div>
          </div>
        </div>

        <div className="col-lg-4 ">
          <div className="pricing-table pricing-borderd">
            <div className="pricing-header">
              <img src="/images/unique/fp.png" />
              <h4 className="title">
              Backend Web Development Services
              </h4>
            </div>
            <div className="pricing-body">
              <center>
                <p className="discription1">
                  We create websites and apps that are beautiful yet functional.
                </p>
              </center>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WebDevServices;
