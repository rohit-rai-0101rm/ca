import React from 'react'
import FooterOne from '../common/footer/FooterOne'
import HeaderOne from '../common/header/HeaderOne'
import SEO from '../common/SEO'
import AboutFive from '../component/about/AboutFive'
import AboutFour from '../component/about/AboutFour'
import AboutThree from '../component/about/AboutThree'
import CtaLayoutOne from '../component/cta/CtaLayoutOne'
import Frequently from '../component/Frequently/Frequently'
import IncludedServices from '../component/IncludedServices/IncludedServices'
import ProcessOne from '../component/process/ProcessOne'
import ProcessFollowed from '../component/ProcessFolllowed/ProcessFollowed'
import ProfessionalService from '../component/ProfessionalService/ProfessionalService'
import ResultDriven from '../component/ResultDriven/ResultDriven'
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
            <IncludedServices />
            <ProcessFollowed/>
            <ResultDriven/>
            <Frequently/>
            <CtaLayoutOne/>
            <FooterOne parentClass="" />
        </main>
    </>
  )
}

export default Webdevelopment