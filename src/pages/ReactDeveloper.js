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
import HireDevelopersIntro from '../component/HireDevelopers/HireDevelopersIntro'
import PricingOne from '../component/pricing/PricingOne'
import ProjectOne from '../component/project/ProjectOne'
import ReactSection from '../component/ReactSection/ReactSection'
import ServicePropOne from '../component/service/ServicePropOne'
import TestimonialOne from '../component/testimonial/TestimonialOne'
import SectionTitle from '../elements/section-title/SectionTitle'
import ColorSwitcher from '../elements/switcher/ColorSwitcher'

const ReactDeveloper = () => {
  return (
    <>
    <SEO title="Digital Agency"/>
    <ColorSwitcher />
    <main className="main-wrapper">
        <HeaderOne />
        <HireDevelopersIntro />
        <ReactSection/>
        <AdvantageSection/>
        <FrequentlyAsked/>
        <AboutOne />
        <ProjectOne />
        <CounterUpOne />
        <TestimonialOne />
        <div className="section bg-color-light section-padding">
            <div className="container">
                <SectionTitle 
                    subtitle="Pricing Plan"
                    title="We’ve built solutions for..."
                    description="Flexible pricing options for freelancers
                    and design teams."
                    textAlignment=""
                    textColor=""
                />
                <PricingOne />
            </div>
            <ul className="list-unstyled shape-group-3">
                <li className="shape shape-1"><img src={process.env.PUBLIC_URL + "/images/others/line-1.png"} alt="shape" /></li>
                <li className="shape shape-2"><img src={process.env.PUBLIC_URL + "/images/others/bubble-4.png"} alt="shape" /></li>
            </ul>
        </div>
        <BrandOne />
        <BlogOne />
        <CtaLayoutOne /> 
    <FooterOne parentClass="" />
    </main>
    </>
  )
}

export default ReactDeveloper