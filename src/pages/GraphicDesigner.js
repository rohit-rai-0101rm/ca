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
import DesignerSection from '../component/DesignerSection/DesignerSection'
import FrequentlyAsked from '../component/FrequentlyAsked/FrequentlyAsked'
import FrequentlyAsked10 from '../component/FrequentlyAsked/FrequentlyAsked10'
import FrequentlyAsked2 from '../component/FrequentlyAsked/FrequentlyAsked2'
import FrequentlyAsked3 from '../component/FrequentlyAsked/FrequentlyAsked3'
import FrequentlyAsked4 from '../component/FrequentlyAsked/FrequentlyAsked4'
import FrequentlyAsked9 from '../component/FrequentlyAsked/FrequentlyAsked9'
import GraphicDesignerInterview from '../component/GraaphicDesignerInterview/GraphicDesignerInterview'
import Graphics2Section from '../component/Graphics2Section/Graphics2Section'
import HireAngularDeveloperIntro from '../component/HireDevelopers/HireAngularDeveloperIntro'
import HireDevelopersIntro from '../component/HireDevelopers/HireDevelopersIntro'
import HireGraphicDesigner from '../component/HireDevelopers/HireGraphicDesigner'
import HireNodeDeveloperIntro from '../component/HireDevelopers/HireNodeDeveloperIntro'
import HireShopifyDeveloperIntro from '../component/HireDevelopers/HireShopifyDeveloperIntro'
import HireWordPressDeveloperIntro from '../component/HireDevelopers/HireWordPressDeveloperIntro'
import NodeSection from '../component/NodeSection/NodeSection'
import PricingOne from '../component/pricing/PricingOne'
import ProjectOne from '../component/project/ProjectOne'
import ReactSection from '../component/ReactSection/ReactSection'
import RemoteEngineer from '../component/RemoteEngineer/RemoteEngineer'
import GraphicDesignerSection from '../component/Sales2Section/GraphicDesignerSection'
import SeoSection from '../component/Sales2Section/SeoSection'
import ServicePropOne from '../component/service/ServicePropOne'
import ServiceDesign10 from '../component/ServiceDesign10/ServiceDesign10'
import StepsToHire from '../component/StepsToHire/StepsToHire'
import StepsToHire1 from '../component/StepsToHire/StepsToHire1'
import TeamONE from '../component/TeamONE/TeamONE'
import TestimonialOne from '../component/testimonial/TestimonialOne'
import WordPressSection from '../component/WordPressSection/WordPressSection'
import SectionTitle from '../elements/section-title/SectionTitle'
import ColorSwitcher from '../elements/switcher/ColorSwitcher'

const GraphicDesigner = () => {
  return (
    <>
    <SEO title="Digital Agency"/>
    <ColorSwitcher />
    <main className="main-wrapper">
        <HeaderOne />
        <HireGraphicDesigner/>
        <StepsToHire1/>
        <GraphicDesignerSection />

        <Graphics2Section/>
        <GraphicDesignerInterview/>
        <RemoteEngineer/>
        <FrequentlyAsked10/>
        <CtaLayoutOne /> 
        <FooterOne parentClass="" />
    </main>
    </>
  )
}

export default GraphicDesigner