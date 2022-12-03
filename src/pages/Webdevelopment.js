import React from 'react'
import FooterOne from '../common/footer/FooterOne'
import HeaderOne from '../common/header/HeaderOne'
import SEO from '../common/SEO'
import AboutFive from '../component/about/AboutFive'
import AboutFour from '../component/about/AboutFour'
import AboutThree from '../component/about/AboutThree'
import CtaLayoutOne from '../component/cta/CtaLayoutOne'
import ProcessOne from '../component/process/ProcessOne'
import ProfessionalService from '../component/ProfessionalService/ProfessionalService'
import WebdevIntro from '../component/WebdevIntro/WebdevIntro'
import BcrumbBannerOne from '../elements/breadcrumb/BcrumbBannerOne'
import ColorSwitcher from '../elements/switcher/ColorSwitcher'

const Webdevelopment = () => {
  return (
    <>
    <SEO title="About us" />
    <ColorSwitcher />
        <main className="main-wrapper">
            <HeaderOne />
            <WebdevIntro/>
            <ProfessionalService/>
            <AboutFour />
            <AboutThree />
            <AboutFive/>
            <ProcessOne />
            <CtaLayoutOne />
            <FooterOne parentClass="" />
        </main>
    </>
  )
}

export default Webdevelopment