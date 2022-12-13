import React from "react";
import FooterOne from "../common/footer/FooterOne";
import HeaderOne from "../common/header/HeaderOne";
import SEO from "../common/SEO";
import AboutFour from "../component/about/AboutFour";
import AboutOne from "../component/about/AboutOne";
import BannerOne from "../component/banner/BannerOne";
import BannerDesign from "../component/BannerDesign/BannerDesign";
import BlogOne from "../component/blog/BlogOne";
import BrandOne from "../component/brand/BrandOne";
import BrandingService from "../component/BrandingService/BrandingService";
import CaseStudyProp from "../component/casestudy/CaseStudyProp";
import Content from "../component/content/Content";
import CounterUpOne from "../component/counterup/CounterUpOne";
import CtaLayoutOne from "../component/cta/CtaLayoutOne";
import FaqDesign from "../component/faq/FaqDesignn";
import FormGraphics from "../component/FormGraphics/FormGraphics";
import Innovate from "../component/Innovate/Innovate";
import LifeCycle from "../component/LifeCycle/LifeCycle";
import PixelDiscription from "../component/Pixeldiscription/PixelDiscription";
import PricingOne from "../component/pricing/PricingOne";
import ProjectOne from "../component/project/ProjectOne";
import ServicePropDesign from "../component/service/ServicePropDesign";
import ServicePropOne from "../component/service/ServicePropOne";
import TeamOne from "../component/team/TeamOne";
import TestimonialOne from "../component/testimonial/TestimonialOne";
import SectionTitle from "../elements/section-title/SectionTitle";
import ColorSwitcher from "../elements/switcher/ColorSwitcher";
import Testimonials from "./Testimonials";
import Typography from "./Typography";
import ServiceData from "../data/service/ServiceMainDesign.json";
const allData = ServiceData;

const Design = () => {
  return (
    <>
      <SEO title="Digital Agency" />
      <ColorSwitcher />
      <main className="main-wrapper">
        <HeaderOne />
        <BannerDesign />

        <PixelDiscription />
        <div className="section section-padding" id="section2">
          <div className="container">
            <center>
              <h4>Our Graphic Design and Branding Services Include</h4>
            </center>
            <div className="row">
              <ServicePropDesign
                colSize="col-lg-4 col-md-6"
                serviceStyle="service-style-2"
                serviceData={allData}
              />
            </div>
          </div>
        </div>
        <LifeCycle />
        <Typography />

        <FormGraphics />
        <FaqDesign />



        <CtaLayoutOne />

        <FooterOne parentClass="" />
      </main>
    </>
  );
};

export default Design;
