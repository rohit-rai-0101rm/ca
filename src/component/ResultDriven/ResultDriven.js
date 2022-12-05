import React from 'react';
import BreadCrumbOne from '../../elements/breadcrumb/BreadCrumbOne';
import SEO from '../../common/SEO';
import FooterOne from '../../common/footer/FooterOne';
import HeaderOne from '../../common/header/HeaderOne';
import BlogGridOne from '../blog/BlogGridOne';
import BlogSidebar from '../blog/BlogSidebar';
import CtaLayoutOne from '../cta/CtaLayoutOne';
import ColorSwitcher from '../../elements/switcher/ColorSwitcher';


const ResultDriven = () => {

    return (
        <>
            <SEO title="Blog Grid" />
            <ColorSwitcher />
            <main className="main-wrapper">
                <HeaderOne />
            
                <div className="section-padding-equal">
                    <div className="container">
                       <div className="row row-40">
                            <div className="col-lg-12">
                                <BlogGridOne />
                            </div>
                         
                       </div>
                    </div>
                </div>
            </main>
        </>
    )
}

export default ResultDriven;