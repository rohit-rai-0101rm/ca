import React from 'react';
import FooterOne from '../../common/footer/FooterOne';
import HeaderOne from '../../common/header/HeaderOne';
import BcrumbBannerOne from '../../elements/breadcrumb/BcrumbBannerOne';
import ColorSwitcher from '../../elements/switcher/ColorSwitcher';
import SEO from '../../common/SEO';
import CtaLayoutOne from '../../component/cta/CtaLayoutOne';
import SectionTitle from '../../elements/section-title/SectionTitle';
import ServiceProp from '../../component/service/ServiceProp';
import ServiceData from "../../data/service/ServiceMain11.json";
import { slugify } from '../../utils';

const allData = ServiceData;


const ServiceDesign10 = () => {


    const developmentData = allData



    return (
        <>
        <SEO title="Service One" />
        <ColorSwitcher />
        <main className="main-wrapper">
            <HeaderOne />
            <BcrumbBannerOne 
                title="Best solutions for your business"
                paragraph ="Give your business a unique logo to stand out from crowd. We’ll create logo specifically for your company.
                "
                styleClass=""
                mainThumb="/images/banner/banner-thumb-4.png"
            />
            <div className="service-scroll-navigation-area">
                <div className="section section-padding bg-color-light" id="section2">
                    <div className="container">
                        <SectionTitle 
                            subtitle="Service"
                            title="Development"
                            description=""
                            textAlignment="heading-left"
                            textColor=""
                        
                        />
                        <div className="row">
                            <ServiceProp colSize="col-lg-4 col-md-6" serviceStyle="service-style-2" serviceData={developmentData}/>
                        </div>
                        
                    </div>
                </div>

               
               


               
            </div>
         
        </main>
        </>
    )
}

export default ServiceDesign10;