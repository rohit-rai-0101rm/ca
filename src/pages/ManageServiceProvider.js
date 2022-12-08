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
import DifferentServices from "../component/DifferentServices/DifferentServices";
import Innovate from "../component/Innovate/Innovate";
import PricingOne from "../component/pricing/PricingOne";
import ProjectOne from "../component/project/ProjectOne";
import Provider from "../component/Provider/Provider";
import ServicePropOne from "../component/service/ServicePropOne";
import TeamOne from "../component/team/TeamOne";
import TestimonialOne from "../component/testimonial/TestimonialOne";
import SectionTitle from "../elements/section-title/SectionTitle";
import ColorSwitcher from "../elements/switcher/ColorSwitcher";
import Testimonials from "./Testimonials";

const ManageServiceProvider = () => {
  return (
    <>
      <SEO title="Digital Agency" />
      <ColorSwitcher />
      <main className="main-wrapper">
      <Provider />
      <DifferentServices/>
      <HeaderOne />
      <CtaLayoutOne />
      <FooterOne parentClass="" />
      </main>
    </>
  );
};

export default ManageServiceProvider;
