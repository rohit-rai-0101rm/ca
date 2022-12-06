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

const SeoServices = () => {
  const [isActive, setActive] = useState("");

  useEffect(() => {
    setActive(billed[0].label.toLowerCase());
  }, []);

  const handleChange = (e) => {
    setActive(e.target.textContent.toLowerCase());
  };

  return (
    <>
      <div className="row row-services">
        <h3></h3>
        <div className="col-lg-4">
          <div className="pricing-table pricing-borderd">
            <div className="pricing-header">
              <div className="centerimage">
                <div className="image-rezising">
                  <img
                    src="/images/web/web3.svg"
                    className="image-sizing"
                  ></img>
                </div>
              </div>
              <h3 className="title">Full Suit Seo</h3>
              <div className="price-wrap">
              Our full suite professional Search Engine Optimization services are everything you might need. From targeted keyword research, setting up Google Analytics, metadata descriptions, SEO audits, link building and the list gets longer.
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="pricing-table pricing-borderd">
            <div className="pricing-header">
              <div className="centerimage">
                <div className="image-rezising">
                  <img
                    src="/images/web/web1.svg"
                    className="image-sizing"
                  ></img>
                </div>
              </div>
              <h3 className="title">Local SEO Services</h3>
              <div className="price-wrap">
                Create a custom page that perfectly matches your branding and
                goals with help from our Web Development Experts. You can expect
                an increase in your website's conversion rate and overall
                performance.
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="pricing-table pricing-borderd">
            <div className="pricing-header">
              <div className="centerimage">
                <div className="image-rezising">
                  <img
                    src="/images/web/web2.svg"
                    className="image-sizing"
                  ></img>
                </div>
              </div>
              <h3 className="title">Google Analytics Configuration</h3>
              <div className="price-wrap">
                With a detailed understanding of databases, back-end logic,
                APIs, architecture, and servers, we ensure that your website
                performs correctly. We are committed to providing our clients
                with the best possible services, including a well-functioning
                back-end.
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="pricing-table pricing-borderd">
            <div className="pricing-header">
              <div className="centerimage">
                <div className="image-rezising">
                  <img
                    src="/images/web/web2.svg"
                    className="image-sizing"
                  ></img>
                </div>
              </div>
              <h3 className="title">Link Building</h3>
              <div className="price-wrap">
                With a detailed understanding of databases, back-end logic,
                APIs, architecture, and servers, we ensure that your website
                performs correctly. We are committed to providing our clients
                with the best possible services, including a well-functioning
                back-end.
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="pricing-table pricing-borderd">
            <div className="pricing-header">
              <div className="centerimage">
                <div className="image-rezising">
                  <img
                    src="/images/web/web2.svg"
                    className="image-sizing"
                  ></img>
                </div>
              </div>
              <h3 className="title">Seo Audits</h3>
              <div className="price-wrap">
                With a detailed understanding of databases, back-end logic,
                APIs, architecture, and servers, we ensure that your website
                performs correctly. We are committed to providing our clients
                with the best possible services, including a well-functioning
                back-end.
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="pricing-table pricing-borderd">
            <div className="pricing-header">
              <div className="centerimage">
                <div className="image-rezising">
                  <img
                    src="/images/web/web2.svg"
                    className="image-sizing"
                  ></img>
                </div>
              </div>
              <h3 className="title">Ecommerce SEO</h3>
              <div className="price-wrap">
                With a detailed understanding of databases, back-end logic,
                APIs, architecture, and servers, we ensure that your website
                performs correctly. We are committed to providing our clients
                with the best possible services, including a well-functioning
                back-end.
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SeoServices;
