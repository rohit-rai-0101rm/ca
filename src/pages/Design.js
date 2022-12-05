import React from 'react'
import FooterOne from "../common/footer/FooterOne";
import HeaderOne from "../common/header/HeaderOne";
import SEO from "../common/SEO";
import AboutFour from "../component/about/AboutFour";
import AboutOne from "../component/about/AboutOne";
import BannerOne from "../component/banner/BannerOne";
import BannerDesign from '../component/BannerDesign/BannerDesign';
import BlogOne from "../component/blog/BlogOne";
import BrandOne from "../component/brand/BrandOne";
import CaseStudyProp from "../component/casestudy/CaseStudyProp";
import Content from "../component/content/Content";
import CounterUpOne from "../component/counterup/CounterUpOne";
import CtaLayoutOne from "../component/cta/CtaLayoutOne";
import Innovate from "../component/Innovate/Innovate";
import PricingOne from "../component/pricing/PricingOne";
import ProjectOne from "../component/project/ProjectOne";
import ServicePropOne from "../component/service/ServicePropOne";
import TeamOne from "../component/team/TeamOne";
import TestimonialOne from "../component/testimonial/TestimonialOne";
import SectionTitle from "../elements/section-title/SectionTitle";
import ColorSwitcher from "../elements/switcher/ColorSwitcher";
import Testimonials from "./Testimonials";
const Design = () => {
  return (
    <>
    <SEO title="Digital Agency" />
    <ColorSwitcher />
    <main className="main-wrapper">
      <HeaderOne />
      <BannerDesign/>

      <BrandOne />
      <div className="section bg-color-light section-padding">
        <div className="container">
          <h3 class>
            creating something truly
            <strong> unique!</strong>
          </h3>
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
      <AboutFour />
      <Innovate />
      <Content />
      <CounterUpOne />
      <TeamOne />
      <CtaLayoutOne />

      <FooterOne parentClass="" />
    </main>
  </>
  )
}

export default Design