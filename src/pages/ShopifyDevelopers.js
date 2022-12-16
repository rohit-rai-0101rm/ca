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
import FrequentlyAsked9 from '../component/FrequentlyAsked/FrequentlyAsked9'
import HireAngularDeveloperIntro from '../component/HireDevelopers/HireAngularDeveloperIntro'
import HireDevelopersIntro from '../component/HireDevelopers/HireDevelopersIntro'
import HireNodeDeveloperIntro from '../component/HireDevelopers/HireNodeDeveloperIntro'
import HireShopifyDeveloperIntro from '../component/HireDevelopers/HireShopifyDeveloperIntro'
import HireWordPressDeveloperIntro from '../component/HireDevelopers/HireWordPressDeveloperIntro'
import NodeSection from '../component/NodeSection/NodeSection'
import PricingOne from '../component/pricing/PricingOne'
import ProjectOne from '../component/project/ProjectOne'
import ReactSection from '../component/ReactSection/ReactSection'
import RemoteEngineer from '../component/RemoteEngineer/RemoteEngineer'
import ServicePropOne from '../component/service/ServicePropOne'
import ServiceDesign10 from '../component/ServiceDesign10/ServiceDesign10'
import StepsToHire from '../component/StepsToHire/StepsToHire'
import TeamONE from '../component/TeamONE/TeamONE'
import TestimonialOne from '../component/testimonial/TestimonialOne'
import WordPressSection from '../component/WordPressSection/WordPressSection'
import SectionTitle from '../elements/section-title/SectionTitle'
import ColorSwitcher from '../elements/switcher/ColorSwitcher'

const ShopifyDevelopers = () => {
  return (
    <>
    <SEO title="Digital Agency"/>
    <ColorSwitcher />
    <main className="main-wrapper">
        <HeaderOne />
        <HireShopifyDeveloperIntro />
        <StepsToHire/>
        <TeamONE/>
        <RemoteEngineer/>
        <FrequentlyAsked9/>
        <CtaLayoutOne /> 
        <FooterOne parentClass="" />
    </main>
    </>
  )
}

export default ShopifyDevelopers