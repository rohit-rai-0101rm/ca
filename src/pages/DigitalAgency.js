import React from "react";
import FooterOne from "../common/footer/FooterOne";
import HeaderOne from "../common/header/HeaderOne";
import SEO from "../common/SEO";
import AboutFour from "../component/about/AboutFour";
import AboutOne from "../component/about/AboutOne";
import BannerOne from "../component/banner/BannerOne";
import BlogOne from "../component/blog/BlogOne";
import BrandOne from "../component/brand/BrandOne";
import CaseStudyProp from "../component/casestudy/CaseStudyProp";
import Content from "../component/content/Content";
import CounterUpOne from "../component/counterup/CounterUpOne";
import CtaLayoutOne from "../component/cta/CtaLayoutOne";
import Innovate from "../component/Innovate/Innovate";
import PricingOne from "../component/pricing/PricingOne";
import ProjectOne from "../component/project/ProjectOne";
import ServicePropHome from "../component/service/ServicePropHome";
import ServicePropOne from "../component/service/ServicePropOne";
import TeamOne from "../component/team/TeamOne";
import TestimonialOne from "../component/testimonial/TestimonialOne";
import SectionTitle from "../elements/section-title/SectionTitle";
import ColorSwitcher from "../elements/switcher/ColorSwitcher";
import Testimonials from "./Testimonials";
import ServiceData from "../data/service/ServiceMain.json";

const DigitalAgency = () => {
  return (
    <>
      <SEO title="Digital Agency" />
      <ColorSwitcher />
      <main className="main-wrapper">
        <HeaderOne />
        <BannerOne />

        <BrandOne />
        <div className="section bg-color-light section-padding">
          <div className="container">
            <center>
              <h3 className="titleUnique">
                creating something truly
                <strong className="uniqueBold"> unique!</strong>
              </h3>
            </center>

            <PricingOne />
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
        <AboutFour />
        <Innovate />
        <TestimonialOne />
        <CounterUpOne />
        <TeamOne />
        <CtaLayoutOne />

        <FooterOne parentClass="" />
      </main>
    </>
  );
};

export default DigitalAgency;
