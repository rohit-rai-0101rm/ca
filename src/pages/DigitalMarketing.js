import React from 'react'
import FooterOne from '../common/footer/FooterOne'
import HeaderOne from '../common/header/HeaderOne'
import SEO from '../common/SEO'
import AboutFive from '../component/about/AboutFive'
import AboutFour from '../component/about/AboutFour'
import AboutThree from '../component/about/AboutThree'
import BannerOne from '../component/banner/BannerOne'
import BrandOne from '../component/brand/BrandOne'
import Content from '../component/content/Content'
import CounterUpOne from '../component/counterup/CounterUpOne'
import CtaLayoutOne from '../component/cta/CtaLayoutOne'
import DigitalMarketingIntro from '../component/DigitalMarketingIntro/DigitalMarketingIntro'
import DigitalMarketingServices from '../component/DIgitalMarketingServices/DigitalMarketingServices'
import Innovate from '../component/Innovate/Innovate'
import PricingOne from '../component/pricing/PricingOne'
import ProcessOne from '../component/process/ProcessOne'
import ServicePropOne from '../component/service/ServicePropOne'
import TeamOne from '../component/team/TeamOne'
import Unleash from '../component/Unleash/Unleash'
import WhyChooseUs from '../component/WhyChooseUs/WhyChooseUs'
import SectionTitle from '../elements/section-title/SectionTitle'
import ColorSwitcher from '../elements/switcher/ColorSwitcher'
import ServiceOne from './ServiceOne'

const DigitalMarketing = () => {
  return (
    <>
    <SEO title="Digital Agency" />
    <ColorSwitcher />
    <main className="main-wrapper">
      <HeaderOne />

      <DigitalMarketingIntro />
         <Unleash />
      <DigitalMarketingServices />
      <WhyChooseUs />
      <CtaLayoutOne />

      <FooterOne parentClass="" />
    </main>
  </>
  )
}

export default DigitalMarketing