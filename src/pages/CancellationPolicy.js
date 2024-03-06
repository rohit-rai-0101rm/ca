import React from 'react';
import FooterOne from '../common/footer/FooterOne';
import HeaderOne from '../common/header/HeaderOne';
import CtaLayoutOne from '../component/cta/CtaLayoutOne';
import BreadCrumbOne from '../elements/breadcrumb/BreadCrumbOne';
import ColorSwitcher from '../elements/switcher/ColorSwitcher';
import SEO from '../common/SEO';

const CancellationPolicy = () => {
    return (
        <>
            <SEO title="Cancellation Policy" />
            <ColorSwitcher />
            <main className="main-wrapper">
                <HeaderOne />
                <BreadCrumbOne
                    title="Cancellation Policy"
                    page="Cancellation Policy"
                />
                <div className="section-padding privacy-policy-area">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-10">
                                <div className="privacy-policy-content">
                                    <h4>Domain Name Registration Services:-</h4>
                                    <p className='mb-3'>Once you purchase your Domain Name, you are its owner and it cannot be "cancelled" until the duration of the domain term has expired. Domain names are controlled worldwide by Internet Corporation for Assigned Names and Numbers (ICANN ) organization and we do not have any control over.</p>

                                    <p className='mb-3'>Cancellation of service renewals for on-going website promotion, website hosting or domain registration services must be made at least seven 7 business days prior to the end of the current service period.</p>

                                    <p className='mb-3'>Requests received later than seven 7 business days prior to the end of the current service period will be treated as cancellation of services for the next service period.</p>

                                    <p className='mb-3'>No cancellations are entertained for those services that the Nxgtech Technology had offered on promotional offer / special occasions or Discount period. These are limited occasion offers by the company and hence cancellations are not possible in any conditions.</p>

                                    <p className='mb-3'>Nxgtech Technology also reserves the rights to cancel your account any time without any notice and refund if you are not responding for us.</p>

                                    <p className='mb-3'><strong className='mb-3'>Note:- If Any Payment Issue after finished work.</strong></p>
                                    <p className='mb-3'>FOR ANY INQUIRY & MORE DETAILS:-</p>

                                    <p className='mb-3'>Email: info@nxgtech.io or Call: +91- 8130808751</p>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <CtaLayoutOne />
                <FooterOne parentClass="" />
            </main>
        </>
    )
}

export default CancellationPolicy
