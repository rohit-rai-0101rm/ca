import React from "react";
import FooterOne from "../common/footer/FooterOne";
import HeaderOne from "../common/header/HeaderOne";
import SEO from "../common/SEO";
import AboutOne from "../component/about/AboutOne";
import AdvantageSection from "../component/AdvantageSection/AdvantageSection";
import AngularSection from "../component/AngularSection/AngularSection";
import BlogOne from "../component/blog/BlogOne";
import BrandOne from "../component/brand/BrandOne";
import CounterUpOne from "../component/counterup/CounterUpOne";
import CtaLayoutOne from "../component/cta/CtaLayoutOne";
import FrequentlyAsked from "../component/FrequentlyAsked/FrequentlyAsked";
import FrequentlyAsked2 from "../component/FrequentlyAsked/FrequentlyAsked2";
import FrequentlyAsked3 from "../component/FrequentlyAsked/FrequentlyAsked3";
import FrequentlyAsked4 from "../component/FrequentlyAsked/FrequentlyAsked4";
import FrequentlyAsked5 from "../component/FrequentlyAsked/FrequentlyAsked5";
import HireAngularDeveloperIntro from "../component/HireDevelopers/HireAngularDeveloperIntro";
import HireDevelopersIntro from "../component/HireDevelopers/HireDevelopersIntro";
import HireLaravelDeveloperIntro from "../component/HireDevelopers/HireLaravelDeveloperIntro";
import HireNodeDeveloperIntro from "../component/HireDevelopers/HireNodeDeveloperIntro";
import HireWordPressDeveloperIntro from "../component/HireDevelopers/HireWordPressDeveloperIntro";
import LaravelBestChoice from "../component/LaravelBestChoice/LaravelBestChoice";
import LaravelInterview from "../component/LaravelInterview/LaravelInterview";
import LaravelSection from "../component/LaravelSection/LaravelSection";
import NodeBestChoice from "../component/NodeBestChoice/NodeBestChoice";
import NodeSection from "../component/NodeSection/NodeSection";
import PricingOne from "../component/pricing/PricingOne";
import ProjectOne from "../component/project/ProjectOne";
import ReactProcess from "../component/ReactProcess/ReactProcess";
import ReactSection from "../component/ReactSection/ReactSection";
import SeoExpertIntro from "../component/SeoExpertIntro/SeoExpertIntro";
import SeoExpertService from "../component/SeoExpertService/SeoExpertService";
import SeoServices from "../component/SeoServices/SeoServices";
import ServicePropOne from "../component/service/ServicePropOne";
import TestimonialOne from "../component/testimonial/TestimonialOne";
import WordPressSection from "../component/WordPressSection/WordPressSection";
import SectionTitle from "../elements/section-title/SectionTitle";
import ColorSwitcher from "../elements/switcher/ColorSwitcher";
import ServiceData from "../data/service/PharmaData.json";
import ServicePropSeo from "../component/service/ServicePropSeo";
import SeoAdvantage from "../component/SeoAdvantage/SeoAdvantage";
import SeoExpertsBestChoice from "../component/SeoExpertsBestChoice/SeoExpertsBestChoice";
import FaqSeoExperts from "../component/FrequentlyAsked/FaqSeo";
import FrequentlyAskedQuestionSeoExperts from "../component/FrequentlyAsked/FaqSeo";
import StepsToHire3 from "../component/StepsToHire/StepsToHire3";
import HireSeoExpert from "../component/StepsToHire/HireSeoExpert";
import SeoSection from "../component/Sales2Section/SeoSection";
import GoogleAdProcess from "../component/GoogleAdProcess/GoogleAdProcess";
import AccessTalent from "../component/AccessTalent/AccessTalent";
import BankingIntro from "../component/bankingintro/BankingIntro";
import BankingDesc from "../component/bankingDesc/BankingDesc";
import BankingProps from "../component/service/BankingProps";
import BankingBlog from "../component/bankingintro/BankingHelp";
import PharmaIntro from "../component/pharma/PharmaIntro";
import HowHelpNxg from "../component/bankingintro/BankingHelp";
import PharmaHelp from "../component/pharma/PharmaHelp";
const allData = ServiceData;
const Pharma = () => {
  return (
    <>
      <SEO title="Digital Agency" />
      <ColorSwitcher />
      <main className="main-wrapper">
        <HeaderOne />
        <PharmaIntro />
        
      
        <div className="section section-padding" id="section1">
          <div className="container">
          

            <div className="row">
              <BankingProps
                colSize="col-lg-4 col-md-6"
                serviceStyle="service-style-2"
                serviceData={allData}
              />
            </div>
          </div>
        </div>
      <PharmaHelp/>

        <CtaLayoutOne />
        <FooterOne parentClass="" />
      </main>
    </>
  );
};

export default Pharma;