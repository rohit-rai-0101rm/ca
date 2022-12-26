import React from 'react'
import FooterOne from '../common/footer/FooterOne'
import HeaderOne from '../common/header/HeaderOne'
import SEO from '../common/SEO'
import AboutOne from '../component/about/AboutOne'
import AdvantageSection from '../component/AdvantageSection/AdvantageSection'
import BlogOne from '../component/blog/BlogOne'
import BrandOne from '../component/brand/BrandOne'
import CounterUpOne from '../component/counterup/CounterUpOne'
import CtaLayoutOne from '../component/cta/CtaLayoutOne'
import DedicatedProgrammatic from '../component/DedicatedProgrammatic/DedicatedProgrammatic'
import FaqReactNative from '../component/FrequentlyAsked/FaqReactNative'
import FaqProgrammaticAdvertising from '../component/FrequentlyAsked/FaqProgrammaticAdvertising'

import FrequentlyAsked from '../component/FrequentlyAsked/FrequentlyAsked'
import HireDevelopersIntro from '../component/HireDevelopers/HireDevelopersIntro'
import ReactNativeIntro from '../component/HireDevelopers/ReactNativeIntro'
import PricingOne from '../component/pricing/PricingOne'
import ProgrammaticAdvertising from '../component/ProgrammaticAdvertising/ProgrammaticAdvertising'
import ProgrammaticSpecialistIntro from '../component/ProgrammaticSpecialist/ProgrammaticSpecialist'
import ProjectOne from '../component/project/ProjectOne'
import ReactBestChoice from '../component/ReactBestChoice/ReactBestChoice'
import ReactImportantSkills from '../component/ReactImportantSkills/ReactImportantSkills'
import ReactNative from '../component/ReactNative/ReactNative'
import ReactNativeBestChoice from '../component/ReactNativeBestChoice/ReactNativeBestChoice'
import ReactProcess from '../component/ReactProcess/ReactProcess'
import ReactSection from '../component/ReactSection/ReactSection'
import ServicePropOne from '../component/service/ServicePropOne'
import TechnicalSkillsProgramaticAd from '../component/TechnicalSkillsProgramaticAd/TechnicalSkillsProgramaticAd'
import TestimonialOne from '../component/testimonial/TestimonialOne'
import SectionTitle from '../elements/section-title/SectionTitle'
import ColorSwitcher from '../elements/switcher/ColorSwitcher'

const ProgrammaticSpecialist = () => {
  return (
    <>
    <SEO title="Digital Agency"/>
    <ColorSwitcher />
    <main className="main-wrapper">
        <HeaderOne />
        <ProgrammaticSpecialistIntro />
        <ReactProcess/>

        <TechnicalSkillsProgramaticAd/>
     
        <AdvantageSection/>
        <DedicatedProgrammatic/>
        <ProgrammaticAdvertising />
        <FaqProgrammaticAdvertising/>
        <CtaLayoutOne /> 
        <FooterOne parentClass="" />
    </main>
    </>
  )
}

export default ProgrammaticSpecialist