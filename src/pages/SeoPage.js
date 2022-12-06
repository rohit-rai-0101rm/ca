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

const SeoPage = () => {
  return (
    <>
      <SEO title="Digital Agency" />
      <ColorSwitcher />
      <main className="main-wrapper">
        <HeaderOne />

        <SeoIntro />

        <SeoSpider />
        <SeoServices/>
        <SeoExperts/>
<FaqSeo/>
        <CtaLayoutOne />

        <FooterOne parentClass="" />
      </main>
    </>
  );
};

export default SeoPage;
