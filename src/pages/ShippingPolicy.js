import React from "react";
import FooterOne from "../common/footer/FooterOne";
import HeaderOne from "../common/header/HeaderOne";
import CtaLayoutOne from "../component/cta/CtaLayoutOne";
import BreadCrumbOne from "../elements/breadcrumb/BreadCrumbOne";
import ColorSwitcher from "../elements/switcher/ColorSwitcher";
import SEO from "../common/SEO";

const ShippingPolicy = () => {
  return (
    <>
      <SEO title="Shipping Policy" />
      <ColorSwitcher />
      <main className="main-wrapper">
        <HeaderOne />
        <BreadCrumbOne title="Shipping Policy" page="Shipping Policy" />
        <div className="section-padding privacy-policy-area">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-10">
                <div className="privacy-policy-content">
                  <h4>NXG Technologies Shipping Policy</h4>
                  <h5>Effective Date: March, 2024</h5>
                  <p className="mb-4">
                    This Shipping Policy outlines the methods, timelines, and
                    costs associated with NXG Technologies' order deliveries,
                    including both physical and digital products. Please review
                    this Policy thoroughly before placing an order.
                  </p>
                  <h4>Order Processing</h4>
                  <p className="mb-4">
                    We process all orders within 0-1 business day (excluding
                    weekends and holidays) upon receiving your confirmed order.
                  </p>
                  <h4>Delivery Methods</h4>
                  <p className="mb-0">
                    NXG Technologies offers delivery for digital products:
                  </p>
                  <ul>
                    <li>
                      <b>Digital Products:</b> Digital products will be
                      delivered electronically via download or access link
                      provided through email.
                    </li>
                  </ul>
                  <h4>Delivery Information</h4>

                  <ul>
                    <li>
                      <b>Digital Products:</b> Delivery of digital products
                      typically occurs within a few hours or one day maximum
                      (excluding weekends and holidays) upon order confirmation.
                      You will receive a download link or access instructions
                      via email.
                    </li>
                  </ul>
                  <h4>Tracking Your Order</h4>
                  <ul>
                    <li>
                      <b>Digital Products:</b> Since there's no physical
                      shipment involved, tracking information won't be
                      applicable for digital products.
                    </li>
                  </ul>
                  <h4> Contact Us</h4>

                  <p className="mb-4">
                    For any inquiries regarding our Shipping Policy or your
                    order's delivery status, please contact us through the
                    following methods:
                  </p>
                  <ul>
                    <li>
                      <b>Email: </b>info@nxgtech.io
                    </li>
                    <li>
                      <b>Phone: </b>+91 8130808751
                    </li>
                  </ul>
                  <p>
                    We strive to deliver exceptional customer service and will
                    address your inquiries promptly.
                  </p>

                  <p className="mb-4">
                    <b>NXG Technologies</b>
                  </p>
                  <p className="mb-4">
                    <b>Email:</b> info@nxgtech.io
                  </p>
                  <p className="mb-4">
                    <b>Phone: </b> +91 8130808751
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <CtaLayoutOne />
        <FooterOne parentClass="" />
      </main>
    </>
  );
};

export default ShippingPolicy;
