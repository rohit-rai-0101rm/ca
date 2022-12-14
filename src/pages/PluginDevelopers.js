import React from 'react'
import FooterOne from '../common/footer/FooterOne'
import HeaderOne from '../common/header/HeaderOne'
import SEO from '../common/SEO'
import AboutOne from '../component/about/AboutOne'
import AdvantageSection from '../component/AdvantageSection/AdvantageSection'
import AngularSection from '../component/AngularSection/AngularSection'
import BlogOne from '../component/blog/BlogOne'
import BrandOne from '../component/brand/BrandOne'
import CounterUpOne from '../component/counterup/CounterUpOne'
import CtaLayoutOne from '../component/cta/CtaLayoutOne'
import FrequentlyAsked from '../component/FrequentlyAsked/FrequentlyAsked'
import FrequentlyAsked2 from '../component/FrequentlyAsked/FrequentlyAsked2'
import FrequentlyAsked3 from '../component/FrequentlyAsked/FrequentlyAsked3'
import FrequentlyAsked4 from '../component/FrequentlyAsked/FrequentlyAsked4'
import FrequentlyAsked5 from '../component/FrequentlyAsked/FrequentlyAsked5'
import FrequentlyAsked6 from '../component/FrequentlyAsked/FrequentlyAsked6'
import FrequentlyAsked7 from '../component/FrequentlyAsked/FrequentlyAsked7'
import HireAngularDeveloperIntro from '../component/HireDevelopers/HireAngularDeveloperIntro'
import HireDevelopersIntro from '../component/HireDevelopers/HireDevelopersIntro'
import HireLaravelDeveloperIntro from '../component/HireDevelopers/HireLaravelDeveloperIntro'
import HireNodeDeveloperIntro from '../component/HireDevelopers/HireNodeDeveloperIntro'
import HirePHPDeveloperIntro from '../component/HireDevelopers/HirePHPDeveloperIntro'
import HirePluginDevelopersIntro from '../component/HireDevelopers/HirePluginDevelopersIntro'
import HireWordPressDeveloperIntro from '../component/HireDevelopers/HireWordPressDeveloperIntro'
import LaravelSection from '../component/LaravelSection/LaravelSection'
import NodeSection from '../component/NodeSection/NodeSection'
import PHPSection from '../component/PHPSection/PHPSection'
import PluginSection from '../component/PluginSection/PluginSection'
import PricingOne from '../component/pricing/PricingOne'
import ProjectOne from '../component/project/ProjectOne'
import ReactSection from '../component/ReactSection/ReactSection'
import ServicePropOne from '../component/service/ServicePropOne'
import TestimonialOne from '../component/testimonial/TestimonialOne'
import WordPressSection from '../component/WordPressSection/WordPressSection'
import SectionTitle from '../elements/section-title/SectionTitle'
import ColorSwitcher from '../elements/switcher/ColorSwitcher'

const PluginDevelopers = () => {
  return (
    <>
    <SEO title="Digital Agency"/>
    <ColorSwitcher />
    <main className="main-wrapper">
        <HeaderOne />
        <HirePluginDevelopersIntro/>
        <PluginSection/>
        <AdvantageSection/>
        <FrequentlyAsked7/>
        <CtaLayoutOne /> 
        <FooterOne parentClass="" />
    </main>
    </>
  )
}

export default PluginDevelopers