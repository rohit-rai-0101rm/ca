import React from 'react';
import FooterOne from '../common/footer/FooterOne';
import HeaderOne from '../common/header/HeaderOne';
import CtaLayoutOne from '../component/cta/CtaLayoutOne';
import BreadCrumbOne from '../elements/breadcrumb/BreadCrumbOne';
import ColorSwitcher from '../elements/switcher/ColorSwitcher';
import SEO from '../common/SEO';
const RefundPolicy = () => {
    return (
        <>
            <SEO title="Refund Policy" />
            <ColorSwitcher />
            <main className="main-wrapper">
                <HeaderOne />
                <BreadCrumbOne
                    title="Refund Policy"
                    page="Refund Policy"
                />
                <div className="section-padding privacy-policy-area">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-10">
                                <div className="privacy-policy-content">


                                    <p className='mb-3'>We will try our level best to offer quality services that matches for our clients.</p>

                                    <p className='mb-3'>In case, any client is not completely satisfied with our services we can provide a refund. All refunds will take maximum of 7 working days to process and it will be refunded in your account either by Account Credits or direct deposit in your bank account.</p>

                                    <p className='mb-3'>Refund will be applicable when work progress under 30% below, if working progress 30% to 70 % refundable amount will be 20% of total money of project. If more than 70% work completed there will be no refund.</p>

                                    <p className='mb-3'>If paid by credit card, refunds will be issued to the original credit card provided at the time of purchase and in case of Payment Gateway Name payments refund will be made to the same Bank account.</p>

                                    <p className='mb-3'>Domain Name Registration / Domain Transfer or other domain related services is NOT refundable. Once you purchase your Domain Name, you are its owner and it cannot be "returned" until the duration of the domain term has expired.</p>

                                    <p className='mb-3'>Only first-time accounts are eligible for a refund. For example, if you've had an account with us before, canceled and signed up again, you will not be eligible for a refund or if you have opened a second account with us.</p>

                                    <p className='mb-3'>There are no refunds on dedicated servers, administrative fees, install fees for custom software, or domain name purchases. Refund requests for shared and reseller accounts after the initial 30 days non-conditional money back period will be refunded on a prorated basis of any unused time.</p>

                                    <p className='mb-3'>Taxes can't be refunded by us as they are deposited directly at the end of each month, however it might be possible to reclaim those directly from the government.</p>

                                    <p className='mb-3'>After completion of project. If demand for new requirements or services then need to pay extra charges for that. If not agreed for extra charges and asks for refund then refund will be not applicable.</p>

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

export default RefundPolicy
