import React from 'react'
import HeaderOne from '../common/header/HeaderOne'
import BrandingMatters from '../component/BrandingMatters/BrandingMatters'
import TalentNetwork from '../component/TalentNetwork/TalentNetwork'
import BcrumbBannerOne from '../elements/breadcrumb/BcrumbBannerOne'
import BcrumbDedicatedResources from '../elements/breadcrumb/BcrumbDedicatedResources'

const DedicatedResources = () => {
  return (
    <div>
      <HeaderOne />
      <BcrumbDedicatedResources 
    title="One of the fastest growing agency"
    paragraph ="We design and develop web and mobile applications for our clients worldwide."
    styleClass="thumbnail-4"
    mainThumb="/images/banner/banner-thumb-3.png"
    />
    <TalentNetwork/>
    <BrandingMatters/>
    </div>
  )
}

export default DedicatedResources