import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import PricingData from "../../data/pricing/PricingData.json";
import { FaCheck } from "react-icons/fa";
import PricingOne from "../pricing/PricingOne";
import WebDevServices from "../pricing/WebDevServices";

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

const IncludedServices = () => {
  const [isActive, setActive] = useState("");

  useEffect(() => {
    setActive(billed[0].label.toLowerCase());
  }, []);

  const handleChange = (e) => {
    setActive(e.target.textContent.toLowerCase());
  };

  return (
    <>
       <div className="section bg-color-light section-padding">
          <div className="container">
          Our Web Development Services include

            <WebDevServices />
          </div>
          <ul className="list-unstyled shape-group-3">
            <li className="shape shape-1">
              <img
                src={process.env.PUBLIC_URL + "/images/others/line-1.png"}
                alt="shape"
              />
            </li>
            <li className="shape shape-2">
              <img
                src={process.env.PUBLIC_URL + "/images/others/bubble-4.png"}
                alt="shape"
              />
            </li>
          </ul>
        </div>
    </>
  );
};

export default IncludedServices;
