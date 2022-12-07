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
import GetstartedForm from "../component/GetstartedForm/GetstartedForm";
import HiringProcess from "../component/HiringProcess/HiringProcess";
import JobOpenings from "../component/JobOpenings/JobOpenings";
import Mission from "../component/Mission/Mission";
import ProcessOne from "../component/process/ProcessOne";
import ServicePropOne from "../component/service/ServicePropOne";
import Success from "../component/Success/Success";
import TeamDetails from "../component/team/TeamDetails";
import TeamOne from "../component/team/TeamOne";
import BcrumbBannerDedicatedResources from "../elements/breadcrumb/BcrumbBannerDedicatedResources";
import BcrumbBannerHowWorks from "../elements/breadcrumb/BcrumbBannerHowWorks";
import BcrumbBannerOne from "../elements/breadcrumb/BcrumbBannerOne";
import SectionTitle from "../elements/section-title/SectionTitle";

const DedicatedResource = () => {
  return (
    <main className="main-wrapper">
      <HeaderOne />

      <BcrumbBannerDedicatedResources
        title="One of the fastest growing agency"
        paragraph="We design and develop web and mobile applications for our clients worldwide."
        styleClass="thumbnail-4"
        mainThumb="/images/banner/banner-thumb-3.png"
      />
      <HiringProcess />
      <GetstartedForm/>
      <CounterUpOne />

      <div className="section section-padding-2 bg-color-dark">
        <div className="container">
          <SectionTitle
            subtitle="What We Can Do For You"
            title="services that get you results"
            description="Transform how your business works. We brainstorm together, develop strategies & build brands that guarantee business."
            textAlignment="heading-light-left"
            textColor=""
          />
          <div className="row">
            <ServicePropOne
              colSize="col-xl-4 col-md-6"
              serviceStyle=""
              itemShow="18"
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

      <TeamDetails />
      <JobOpenings />
      <CtaLayoutOne />

      <FooterOne parentClass="" />
    </main>
  );
};

export default DedicatedResource;
