import React from "react";
import FooterOne from "../../common/footer/FooterOne";
import HeaderOne from "../../common/header/HeaderOne";
import SEO from "../../common/SEO";
import AboutOne from "../../component/about/AboutOne";
import AdvantageSection from "../../component/AdvantageSection/AdvantageSection";
import AngularSection from "../../component/AngularSection/AngularSection";
import BlogOne from "../../component/blog/BlogOne";
import BrandOne from "../../component/brand/BrandOne";
import CounterUpOne from "../../component/counterup/CounterUpOne";
import CtaLayoutOne from "../../component/cta/CtaLayoutOne";
import DotNetBestChoice from "../../component/DotNetBestChoice/DotNetBestChoice";
import DotNetDevelopersSectionHire from "../../component/DotNetDeveloperSectionHire/DotNetDevelopersSectionHire";
import FaqDotNet from "../../component/FrequentlyAsked/FaqDotNet";
import FrequentlyAsked from "../../component/FrequentlyAsked/FrequentlyAsked";
import FrequentlyAsked2 from "../../component/FrequentlyAsked/FrequentlyAsked2";
import FrequentlyAsked3 from "../../component/FrequentlyAsked/FrequentlyAsked3";
import DotNetDevelopersIntro from "../../component/HireDevelopers/DotNetDevelopersIntro";
import HireAngularDeveloperIntro from "../../component/HireDevelopers/HireAngularDeveloperIntro";
import HireDevelopersIntro from "../../component/HireDevelopers/HireDevelopersIntro";
import HireNodeDeveloperIntro from "../../component/HireDevelopers/HireNodeDeveloperIntro";
import NodeBestChoice from "../../component/NodeBestChoice/NodeBestChoice";
import NodeSection from "../../component/NodeSection/NodeSection";
import PricingOne from "../../component/pricing/PricingOne";
import ProjectOne from "../../component/project/ProjectOne";
import ReactProcess from "../../component/ReactProcess/ReactProcess";
import ReactSection from "../../component/ReactSection/ReactSection";
import ServicePropOne from "../../component/service/ServicePropOne";
import TestimonialOne from "../../component/testimonial/TestimonialOne";
import SectionTitle from "../../elements/section-title/SectionTitle";
import ColorSwitcher from "../../elements/switcher/ColorSwitcher";
import EnpoweringBuisness from "../EnpoweringBuisness";
import FaqPython from "../FrequentlyAsked/FaqPython";
import PythonDevelopersIntro from "../HireDevelopers/PythonDevelopersIntro";
import PythonAdvantage from "../PythonAdvantage/PythonAdvantage";
import PythonBestChoice from "../PythonBestChoice/PythonBestChoice";
import PythonProcess from "../PythonProcess/PythonProcess";
import SeoSpider from "../SeoSpider/SeoSpider";
import AccessTalentPython from "../team/AccessTalent";
import TeamDetails from "../team/TeamDetails";

const PythonDevelopoers = () => {
  return (
    <>
      <SEO title="Digital Agency" />
      <ColorSwitcher />
      <main className="main-wrapper">
        <HeaderOne />
        <PythonDevelopersIntro />
       <EnpoweringBuisness />
        <PythonProcess />
        <PythonAdvantage />

        
        <PythonBestChoice />
        <AccessTalentPython />

        <FaqPython />
        <CtaLayoutOne />
        <FooterOne/>
      </main>
    </>
  );
};

export default PythonDevelopoers;
