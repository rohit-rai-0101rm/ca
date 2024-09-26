import React from "react";
import { Link } from "react-router-dom";
import './paywith.css' 

const PayWithCta = () => {
  return (
    <div className="section call-to-action-area cta-two" style={{backgroundColor:"#5956E9"}}>
      <div className="container">
        <div className="call-to-action">
          <div className="section-heading heading-light">
            <h2 className="title">Pay Now.</h2>
            <a href="https://nxgtech.io/amount.php" className="axil-btn btn-large btn-fill-white me-2">  Pay with Phonepe</a>
       
            <a href="https://nxgtech.io/sabpaisa/" className="axil-btn btn-large btn-fill-white">
              Pay With Sabpaisa
            </a>
          </div>
      
        </div>
      </div>
      <ul className="list-unstyled shape-group-9">
        <li className="shape shape-1">
          <img
            src={process.env.PUBLIC_URL + "/images/others/bubble-12.png"}
            alt="Comments"
          />
        </li>
        <li className="shape shape-2">
          <img
            src={process.env.PUBLIC_URL + "/images/others/bubble-16.png"}
            alt="Comments"
          />
        </li>
        <li className="shape shape-3">
          <img
            src={process.env.PUBLIC_URL + "/images/others/bubble-13.png"}
            alt="Comments"
          />
        </li>
        <li className="shape shape-4">
          <img
            src={process.env.PUBLIC_URL + "/images/others/bubble-14.png"}
            alt="Comments"
          />
        </li>
        <li className="shape shape-5">
          <img
            src={process.env.PUBLIC_URL + "/images/others/bubble-16.png"}
            alt="Comments"
          />
        </li>
        <li className="shape shape-6">
          <img
            src={process.env.PUBLIC_URL + "/images/others/bubble-15.png"}
            alt="Comments"
          />
        </li>
        <li className="shape shape-7">
          <img
            src={process.env.PUBLIC_URL + "/images/others/bubble-16.png"}
            alt="Comments"
          />
        </li>
      </ul>
    </div>
  );
};

export default PayWithCta;
