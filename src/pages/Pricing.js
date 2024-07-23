import React from "react";
import FooterOne from "../common/footer/FooterOne";
import HeaderOne from "../common/header/HeaderOne";
import AboutFive from "../component/about/AboutFive";
import AboutFour from "../component/about/AboutFour";
import AboutThree from "../component/about/AboutThree";
import BrandOne from "../component/brand/BrandOne";
import BuiltDignifyd from "../component/BuiltDignifyd/BuiltDignifyd";
import CounterUpOne from "../component/counterup/CounterUpOne";
import CtaLayoutOne from "../component/cta/CtaLayoutOne";
import JobOpenings from "../component/JobOpenings/JobOpenings";
import Mission from "../component/Mission/Mission";
import ProcessOne from "../component/process/ProcessOne";
import ServicePropHome from "../component/service/ServicePropHome";
import ServicePropOne from "../component/service/ServicePropOne";
import Success from "../component/Success/Success";
import TeamDetails from "../component/team/TeamDetails";
import TeamOne from "../component/team/TeamOne";
import BcrumbBannerOne from "../elements/breadcrumb/BcrumbBannerOne";
import SectionTitle from "../elements/section-title/SectionTitle";
import ServiceData from "../data/service/ServiceMain.json";
import PricingTable from "./PricingTable";

const Pricing = () => {
  return (
    <main className="main-wrapper">
      <HeaderOne />
      <BcrumbBannerOne
        title="One of the fastest growing agency"
        paragraph="We design and develop web and mobile applications for our clients worldwide."
        styleClass="thumbnail-4"
        mainThumb="/images/banner/banner-thumb-3.png"
      />
      <BuiltDignifyd />
      <PricingTable />
      {/*
              <CounterUpOne />

        */}

      <div className="section section-padding-2 bg-color-dark">
        <div className="container">
          <div className="row">
            <center>
              <h4 className="titleServicesHeading">
                {" "}
                Services that get you results
              </h4>
            </center>

            <ServicePropHome
              colSize="col-xl-4 col-md-6"
              serviceStyle=""
              itemShow="6"
              serviceData={ServiceData}
            />
          </div>
        </div>
        <ul className="list-unstyled shape-group-10">
          <li className="shape shape-1">
            <img
              src={process.env.PUBLIC_URL + "/images/others/line-9.png"}
              alt="Circle"
            />
          </li>
          <li className="shape shape-2">
            <img
              src={process.env.PUBLIC_URL + "/images/others/bubble-42.png"}
              alt="Circle"
            />
          </li>
          <li className="shape shape-3">
            <img
              src={process.env.PUBLIC_URL + "/images/others/bubble-43.png"}
              alt="Circle"
            />
          </li>
        </ul>
      </div>
      <Success />
      <Mission />

      <JobOpenings />
      <CtaLayoutOne />

      <FooterOne parentClass="" />
    </main>
  );
};

export default Pricing;
