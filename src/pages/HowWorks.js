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
import RediculousEasy from "../component/RediculousEasy/RediculousEasy";
import ServicePropOne from "../component/service/ServicePropOne";
import Success from "../component/Success/Success";
import TeamDetails from "../component/team/TeamDetails";
import TeamOne from "../component/team/TeamOne";
import BcrumbBannerHowWorks from "../elements/breadcrumb/BcrumbBannerHowWorks";
import BcrumbBannerOne from "../elements/breadcrumb/BcrumbBannerOne";
import SectionTitle from "../elements/section-title/SectionTitle";
import ColorSwitcher from "../elements/switcher/ColorSwitcher";

const HowWorks = () => {
  return (
    <main className="main-wrapper">
      <HeaderOne />
      <ColorSwitcher />

      <BcrumbBannerHowWorks
        title="One of the fastest growing agency"
        paragraph="We design and develop web and mobile applications for our clients worldwide."
        styleClass="thumbnail-4"
        mainThumb="/images/banner/banner-thumb-3.png"
      />
      <HiringProcess />
      <GetstartedForm />
      <CtaLayoutOne />

      <FooterOne parentClass="" />
    </main>
  );
};

export default HowWorks;
