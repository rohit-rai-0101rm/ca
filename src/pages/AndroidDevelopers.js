import React from 'react'
import FooterOne from '../common/footer/FooterOne'
import HeaderOne from '../common/header/HeaderOne'
import SEO from '../common/SEO'
import AboutOne from '../component/about/AboutOne'
import AdvantageSection from '../component/AdvantageSection/AdvantageSection'
import Android2Section from '../component/Android2Section/Android2Section'
import AndroidSkills from '../component/AndroidSkills/AndroidSkills'
import BlogOne from '../component/blog/BlogOne'
import BrandOne from '../component/brand/BrandOne'
import CounterUpOne from '../component/counterup/CounterUpOne'
import CtaLayoutOne from '../component/cta/CtaLayoutOne'
import FrequentlyAsked from '../component/FrequentlyAsked/FrequentlyAsked'
import FrequentlyAsked16 from '../component/FrequentlyAsked/FrequentlyAsked16'
import FrequentlyAsked17 from '../component/FrequentlyAsked/FrequentlyAsked17'
import HireAndroidIntro from '../component/HireDevelopers/HireAndroidIntro'
import HireDevelopersIntro from '../component/HireDevelopers/HireDevelopersIntro'
import HireIosDevelopersIntro from '../component/HireDevelopers/HireIosDevelopersIntro'
import Ios2Section from '../component/Ios2Section/Ios2Section'
import IosSkills from '../component/IosSkills/IosSkills'
import PricingOne from '../component/pricing/PricingOne'
import ProjectOne from '../component/project/ProjectOne'
import ReactBestChoice from '../component/ReactBestChoice/ReactBestChoice'
import ReactImportantSkills from '../component/ReactImportantSkills/ReactImportantSkills'
import ReactProcess from '../component/ReactProcess/ReactProcess'
import ReactSection from '../component/ReactSection/ReactSection'
import RemoteEngineer from '../component/RemoteEngineer/RemoteEngineer'
import ServicePropOne from '../component/service/ServicePropOne'
import StepsToHire6 from '../component/StepsToHire/StepsToHire6'
import TestimonialOne from '../component/testimonial/TestimonialOne'
import SectionTitle from '../elements/section-title/SectionTitle'
import ColorSwitcher from '../elements/switcher/ColorSwitcher'

const  AndroidDevelopers = () => {
  return (
    <>
    <SEO title="Digital Agency"/>
    <ColorSwitcher />
    <main className="main-wrapper">
        <HeaderOne />
       
        <HireAndroidIntro />
        <StepsToHire6/>
        <ReactProcess/>
        <Android2Section/>
        <AndroidSkills/>
       <RemoteEngineer/>
       <FrequentlyAsked17/>
        <CtaLayoutOne /> 
        <FooterOne parentClass="" />
    </main>
    </>
  )
}

export default AndroidDevelopers