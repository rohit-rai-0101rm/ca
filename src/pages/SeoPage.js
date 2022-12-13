import React from "react";

import AboutFive from "../component/about/AboutFive";
import AboutFour from "../component/about/AboutFour";
import AboutThree from "../component/about/AboutThree";
import CtaLayoutOne from "../component/cta/CtaLayoutOne";
import Frequently from "../component/Frequently/Frequently";
import IncludedServices from "../component/IncludedServices/IncludedServices";
import PricingOne from "../component/pricing/PricingOne";
import PricingSeo from "../component/pricing/PricingSeo";
import ProcessOne from "../component/process/ProcessOne";
import ProcessFollowed from "../component/ProcessFolllowed/ProcessFollowed";
import ProfessionalService from "../component/ProfessionalService/ProfessionalService";
import ResultDriven from "../component/ResultDriven/ResultDriven";
import SeoIntro from "../component/SeoIntro/SeoIntro";
import SeoServices from "../component/SeoServices/SeoServices";
import SeoSpider from "../component/SeoSpider/SeoSpider";
import WebdevIntro from "../component/WebdevIntro/WebdevIntro";
import BcrumbBannerOne from "../elements/breadcrumb/BcrumbBannerOne";
import ColorSwitcher from "../elements/switcher/ColorSwitcher";
import BannerOne from "../component/banner/BannerOne";
import BrandOne from "../component/brand/BrandOne";
import SectionTitle from "../elements/section-title/SectionTitle";
import Innovate from "../component/Innovate/Innovate";
import ServicePropOne from "../component/service/ServicePropOne";
import TestimonialOne from "../component/testimonial/TestimonialOne";
import CounterUpOne from "../component/counterup/CounterUpOne";
import TeamOne from "../component/team/TeamOne";
import SEO from "../common/SEO";
import HeaderOne from "../common/header/HeaderOne";
import FooterOne from "../common/footer/FooterOne";
import SeoExperts from "../component/SeoExperts/SeoExperts";
import FaqSeo from "../component/faq/FaqSeo";
import ServicePropSeo from "../component/service/ServicePropSeo";
import ServiceData from "../data/service/ServiceSeo.json";
const allData = ServiceData;

const SeoPage = () => {
  return (
    <>
      <SEO title="Digital Agency" />
      <ColorSwitcher />
      <main className="main-wrapper">
        <HeaderOne />

        <SeoIntro />

        <SeoSpider />
        <div className="section section-padding" id="section1">
                    <div className="container">
                      <center>
                      <h4 className="unique">SEO Services We Deliver

</h4>
                      </center>
  
                        <div className="row">
                            <ServicePropSeo colSize="col-lg-4 col-md-6" serviceStyle="service-style-2" serviceData={allData}/>
                        </div>
                    </div>
                </div>

        <SeoExperts />
        <FaqSeo />
        <CtaLayoutOne />

        <FooterOne parentClass="" />
      </main>
    </>
  );
};

export default SeoPage;
