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
import FaqReactNative from '../component/FrequentlyAsked/FaqReactNative'
import FrequentlyAsked from '../component/FrequentlyAsked/FrequentlyAsked'
import HireDevelopersIntro from '../component/HireDevelopers/HireDevelopersIntro'
import ReactNativeIntro from '../component/HireDevelopers/ReactNativeIntro'
import PricingOne from '../component/pricing/PricingOne'
import ProjectOne from '../component/project/ProjectOne'
import ReactBestChoice from '../component/ReactBestChoice/ReactBestChoice'
import ReactImportantSkills from '../component/ReactImportantSkills/ReactImportantSkills'
import ReactNative from '../component/ReactNative/ReactNative'
import ReactNativeBestChoice from '../component/ReactNativeBestChoice/ReactNativeBestChoice'
import ReactProcess from '../component/ReactProcess/ReactProcess'
import ReactSection from '../component/ReactSection/ReactSection'
import ServicePropOne from '../component/service/ServicePropOne'
import TestimonialOne from '../component/testimonial/TestimonialOne'
import SectionTitle from '../elements/section-title/SectionTitle'
import ColorSwitcher from '../elements/switcher/ColorSwitcher'

const ReactNativeDevelopers = () => {
  return (
    <>
    <SEO title="Digital Agency"/>
    <ColorSwitcher />
    <main className="main-wrapper">
        <HeaderOne />
        <ReactNativeIntro />
        <ReactNative/>
     
        <ReactProcess/>
        <AdvantageSection/>
        <ReactNativeBestChoice />
        <FaqReactNative/>
        <CtaLayoutOne /> 
        <FooterOne parentClass="" />
    </main>
    </>
  )
}

export default ReactNativeDevelopers