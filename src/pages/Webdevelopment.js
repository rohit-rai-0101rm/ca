import React from "react";
import FooterOne from "../common/footer/FooterOne";
import HeaderOne from "../common/header/HeaderOne";
import SEO from "../common/SEO";
import AboutFive from "../component/about/AboutFive";
import AboutFour from "../component/about/AboutFour";
import AboutThree from "../component/about/AboutThree";
import CtaLayoutOne from "../component/cta/CtaLayoutOne";
import Frequently from "../component/Frequently/Frequently";
import IncludedServices from "../component/IncludedServices/IncludedServices";
import ProcessOne from "../component/process/ProcessOne";
import ProcessFollowed from "../component/ProcessFolllowed/ProcessFollowed";
import ProfessionalService from "../component/ProfessionalService/ProfessionalService";
import ResultDriven from "../component/ResultDriven/ResultDriven";
import ServicePropSeo from "../component/service/ServicePropSeo";
import ServicePropWebDev from "../component/service/ServicePropWebDev";
import WebdevIntro from "../component/WebdevIntro/WebdevIntro";
import BcrumbBannerOne from "../elements/breadcrumb/BcrumbBannerOne";
import SectionTitle4 from "../elements/section-title/SectionTitle4";
import ColorSwitcher from "../elements/switcher/ColorSwitcher";
import ServiceData from "../data/service/ServiceWebDev.json";
const allData = ServiceData;
const Webdevelopment = () => {
  return (
    <>
      <SEO title="About us" />
      <ColorSwitcher />
      <main className="main-wrapper">
        <HeaderOne />
        <WebdevIntro />
        <ProfessionalService />
        <div className="section section-padding bg-color-light" id="section2">
          <div className="container">
            <center>
              <h4 className="unique">Our Web Development Services include
              </h4>


            </center>
            <div className="row">
              <ServicePropWebDev
                colSize="col-lg-4 col-md-6"
                serviceStyle="service-style-2"
                serviceData={allData}
              />
            </div>
          </div>
        </div>
        <ProcessFollowed />
        <ResultDriven />
        <Frequently />
        <CtaLayoutOne />
        <FooterOne parentClass="" />
      </main>
    </>
  );
};

export default Webdevelopment;
