import React from "react";
import FooterOne from "../common/footer/FooterOne";
import HeaderOne from "../common/header/HeaderOne";
import AboutFive from "../component/about/AboutFive";
import AboutFour from "../component/about/AboutFour";
import AboutThree from "../component/about/AboutThree";
import BrandOne from "../component/brand/BrandOne";
import BuiltDignifyd from "../component/BuiltDignifyd/BuiltDignifyd";
import CaseStudyProp from "../component/casestudy/CaseStudyProp";
import CounterUpOne from "../component/counterup/CounterUpOne";
import CtaLayoutOne from "../component/cta/CtaLayoutOne";
import Facts from "../component/Facts/Facts";
import FaqWhyIndia from "../component/faq/FaqWhyIndia";
import HireFromIndia from "../component/HireFromIndia/HireFromIndia";
import HireTalent from "../component/HireTalent/HireTalent";
import HiringProcess from "../component/HiringProcess/HiringProcess";
import JobOpenings from "../component/JobOpenings/JobOpenings";
import Mission from "../component/Mission/Mission";
import ProcessOne from "../component/process/ProcessOne";
import RediculousEasy from "../component/RediculousEasy/RediculousEasy";
import ServicePropOne from "../component/service/ServicePropOne";
import Success from "../component/Success/Success";
import Talent from "../component/team/Talent";
import TeamDetails from "../component/team/TeamDetails";
import TeamOne from "../component/team/TeamOne";
import TopChoice from "../component/TopChoice/TopChoice";
import TopSkills from "../component/TopSkills/TopSkills";
import BcrumbBannerHowWorks from "../elements/breadcrumb/BcrumbBannerHowWorks";
import BcrumbBannerOne from "../elements/breadcrumb/BcrumbBannerOne";
import BcrumbBannerWhyIndia from "../elements/breadcrumb/BcrumbBannerWhyIndia";
import SectionTitle from "../elements/section-title/SectionTitle";
import ColorSwitcher from "../elements/switcher/ColorSwitcher";
import Tilty from "react-tilty";
import GetstartedForm from "../component/GetstartedForm/GetstartedForm";

const WhyIndia = () => {
  return (
    <main className="main-wrapper">
      <HeaderOne />
      <ColorSwitcher />

      <BcrumbBannerWhyIndia
        title="One of the fastest growing agency"
        paragraph="We design and develop web and mobile applications for our clients worldwide."
        styleClass="thumbnail-4"
        mainThumb="/images/banner/banner-thumb-3.png"
      />
      <Talent />

      <div className="section bg-color-dark">
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
      


      <TopChoice />
      <Facts />
      <HireFromIndia />

      <RediculousEasy />
      <TopSkills />
     

      <GetstartedForm />

      <FaqWhyIndia />

      <CtaLayoutOne />

      <FooterOne parentClass="" />
    </main>
  );
};

export default WhyIndia;
