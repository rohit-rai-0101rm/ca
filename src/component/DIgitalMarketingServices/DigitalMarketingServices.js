import React from "react";
import FooterOne from "../../common/footer/FooterOne";
import HeaderOne from "../../common/header/HeaderOne";
import BcrumbBannerOne from "../../elements/breadcrumb/BcrumbBannerOne";
import ColorSwitcher from "../../elements/switcher/ColorSwitcher";
import SEO from "../../common/SEO";
import CtaLayoutOne from "../../component/cta/CtaLayoutOne";
import SectionTitle from "../../elements/section-title/SectionTitle";
import ServiceProp from "../../component/service/ServiceProp";
import ServiceData from "../../data/service/Service2.json";
import { slugify } from "../../utils";
import ServiceProp3 from "../service/ServiceProp3";
import SectionTitle2 from "../../elements/section-title/SectionTitle2";

const allData = ServiceData;

const DigitalMarketingServices = () => {
  const designData = allData
  return (
    <>
      <main className="main-wrapper">
       
          {/* Service Nav */}

       
          <div className="section section-padding" id="section1">
            <div className="container">
              <SectionTitle2
                subtitle="Service"
                title="Design"
                description=""
                textAlignment="heading-left"
                textColor=""
              />
              <div className="row">
                <ServiceProp3
                  colSize="col-lg-4 col-md-6"
                  serviceStyle="service-style-2"
                  serviceData={designData}
                />
              </div>
            </div>
          </div>


      

        
       

    
      </main>
    </>
  );
};

export default DigitalMarketingServices;
