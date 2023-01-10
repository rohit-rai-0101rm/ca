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
import FrequentlyAsked from '../component/FrequentlyAsked/FrequentlyAsked'
import FrequentlyAsked15 from '../component/FrequentlyAsked/FrequentlyAsked15'
import HireDevelopersIntro from '../component/HireDevelopers/HireDevelopersIntro'
import HireJavaDeveloperIntro from '../component/HireDevelopers/HireJavaDeveloperIntro'
import PricingOne from '../component/pricing/PricingOne'
import ProjectOne from '../component/project/ProjectOne'
import ReactBestChoice from '../component/ReactBestChoice/ReactBestChoice'
import ReactImportantSkills from '../component/ReactImportantSkills/ReactImportantSkills'
import ReactProcess from '../component/ReactProcess/ReactProcess'
import ReactSection from '../component/ReactSection/ReactSection'
import ServicePropOne from '../component/service/ServicePropOne'
import TestimonialOne from '../component/testimonial/TestimonialOne'
import SectionTitle from '../elements/section-title/SectionTitle'
import ColorSwitcher from '../elements/switcher/ColorSwitcher'

const JavaDevelopers = () => {
  return (
    <>
    <SEO title="Digital Agency"/>
    <ColorSwitcher />
    <main className="main-wrapper">
        <HeaderOne />
        <HireJavaDeveloperIntro />
        
     
        <ReactProcess/>
        <ReactSection/>
        <AdvantageSection/>
        <ReactBestChoice/>
        <ReactImportantSkills/>
        <FrequentlyAsked15/>
        <CtaLayoutOne /> 
        <FooterOne parentClass="" />
    </main>
    </>
  )
}

export default JavaDevelopers