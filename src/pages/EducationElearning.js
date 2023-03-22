import React from 'react'
import FooterOne from '../common/footer/FooterOne'
import HeaderOne from '../common/header/HeaderOne'
import SEO from '../common/SEO'
import AboutOne from '../component/about/AboutOne'
import AdvantageSection from '../component/AdvantageSection/AdvantageSection'
import AutomobileTechnology from '../component/AdvantageSection/AutomobileTechnology'
import EducationSection from '../component/AdvantageSection/EducationSection'
import BannerConsultation from '../component/banner/BannerConsultation'
import BannerEducation from '../component/banner/BannerEducation'
import BlogOne from '../component/blog/BlogOne'
import BrandOne from '../component/brand/BrandOne'
import CounterUpOne from '../component/counterup/CounterUpOne'
import CtaLayoutOne from '../component/cta/CtaLayoutOne'
import FrequentlyAsked from '../component/FrequentlyAsked/FrequentlyAsked'
import Automobilelogisticsintro from '../component/HireDevelopers/Automobilelogisticsintro'
import Automobilelogisticsintro2 from '../component/HireDevelopers/Automobilelogisticsintro2'
import EducationElearningIntro from '../component/HireDevelopers/EducationElearningIntro'
import HireDevelopersIntro from '../component/HireDevelopers/HireDevelopersIntro'
import PricingOne from '../component/pricing/PricingOne'
import ProjectOne from '../component/project/ProjectOne'
import Automobilebestchoice from '../component/ReactBestChoice/Automobilebestchoice'
import EducationCostumSolution from '../component/ReactBestChoice/EducationCostumSolution'
import ReactBestChoice from '../component/ReactBestChoice/ReactBestChoice'
import ReactImportantSkills from '../component/ReactImportantSkills/ReactImportantSkills'
import ReactProcess from '../component/ReactProcess/ReactProcess'
import ReactSection from '../component/ReactSection/ReactSection'
import ServicePropOne from '../component/service/ServicePropOne'
import TestimonialOne from '../component/testimonial/TestimonialOne'
import SectionTitle from '../elements/section-title/SectionTitle'
import ColorSwitcher from '../elements/switcher/ColorSwitcher'


const EducationElearning = () => {
  return (
    <>
    <SEO title="Digital Agency"/>
    <ColorSwitcher />
    <main className="main-wrapper">
        <HeaderOne />
        <EducationElearningIntro />
        <EducationSection/>
        <BannerEducation/>
        <EducationCostumSolution/>
        <CtaLayoutOne /> 
        <FooterOne parentClass="" />
    </main>
    </>
  )
}

export default EducationElearning