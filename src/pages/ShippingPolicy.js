import React from 'react';
import FooterOne from '../common/footer/FooterOne';
import HeaderOne from '../common/header/HeaderOne';
import CtaLayoutOne from '../component/cta/CtaLayoutOne';
import BreadCrumbOne from '../elements/breadcrumb/BreadCrumbOne';
import ColorSwitcher from '../elements/switcher/ColorSwitcher';
import SEO from '../common/SEO';


const ShippingPolicy = () => {

    return (
        <>
            <SEO title="Shipping Policy" />
            <ColorSwitcher />
            <main className="main-wrapper">
                <HeaderOne />
                <BreadCrumbOne
                    title="Shipping Policy"
                    page="Shipping Policy"
                />
                <div className="section-padding privacy-policy-area">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-10">
                                <div className="privacy-policy-content">
                                    <h4>NXG Technologies Shipping Policy</h4>
                                    <h5>Effective Date: March, 2024</h5>
                                    <p className='mb-4'>This Shipping Policy outlines the methods, timelines, and costs associated with NXG Technologies' order deliveries, including both physical and digital products. Please review this Policy thoroughly before placing an order.
                                    </p>
                                    <h4>Order Processing</h4>
                                    <p className='mb-4'>We process all orders within 0-1 business day (excluding weekends and holidays) upon receiving your confirmed order.</p>
                                    <h4>Delivery Methods</h4>
                                    <p className='mb-0'>NXG Technologies offers delivery for both physical and digital products:</p>
                                    <ul>
                                        <li><b>Physical Products: </b>We offer shipping to various countries. The specific shipping methods and costs applicable to your order will depend on factors like order value, destination, and chosen method (e.g., Standard Shipping, Expedited Shipping).</li>

                                        <li><b>Digital Products:</b> Digital products will be delivered electronically via download or access link provided through email.</li>
                                    </ul>
                                    <h4>Delivery Information</h4>

                                    <ul><li><b>Physical Products:</b> Delivery timelines for physical products are estimates and may vary due to circumstances beyond our control, such as customs clearance procedures or delays with the shipping carrier. NXG Technologies is not liable for any such delays.</li>
                                        <ul>
                                            <li><b>Risk of Loss:</b> The risk of loss for purchased physical items passes to you upon our delivery to the carrier. In simpler terms, once we hand off your order to the shipping company, ownership and responsibility for any loss or damage during transit shift to you.</li>

                                            <li><b>Title Transfer:</b> The title to the purchased physical items passes to you upon our delivery to the carrier. This means legal ownership of the product transfers to you at the point of shipment.</li>

                                            <li><b>Duties and Taxes:</b> NXG Technologies is not liable for any duties, taxes, or other fees imposed by your local customs authorities. These fees, if applicable, are the recipient's responsibility. You are solely responsible for complying with all applicable laws and regulations of the country to which the order is shipped.</li>

                                            <li><b>Address Changes: </b>Once your physical order ships, we cannot modify the delivery address. If you need to change the address, please contact us immediately after placing your order.</li>
                                        </ul>
                                        <li>
                                            <b>Digital Products:</b> Delivery of digital products typically occurs within a few hours or one day maximum (excluding weekends and holidays) upon order confirmation. You will receive a download link or access instructions via email.
                                        </li>
                                    </ul>
                                    <h4>Tracking Your Order</h4>
                                    <ul>
                                        <li><b>Physical Products: </b>Upon processing and shipment of your physical order, you'll receive a shipping confirmation email containing a tracking number. This number allows you to track your delivery's progress on the carrier's website.</li>

                                        <li><b>Digital Products:</b> Since there's no physical shipment involved, tracking information won't be applicable for digital products.</li>
                                    </ul>
                                    <h4> Contact Us</h4>

                                    <p className='mb-4'>For any inquiries regarding our Shipping Policy or your order's delivery status, please contact us through the following methods:</p>
                                    <ul>
                                        <li><b>Email: </b>info@nxgtech.io</li>
                                        <li><b>Phone: </b>+91 8130808751</li>
                                    </ul>
                                    <p>We strive to deliver exceptional customer service and will address your inquiries promptly.</p>
                                    <h4>
                                        Policy Revisions
                                    </h4>
                                    <p>
                                        We reserve the right to revise this Shipping Policy at any time. The revised Shipping Policy will be effective immediately upon posting on our website.
                                    </p>
                                    <p className='mb-4'><b>Governing Law and Jurisdiction:</b> This Shipping Policy shall be governed by and construed in accordance with the laws of the country. Any dispute arising out of or relating to this Shipping Policy shall be subject to the exclusive jurisdiction of the courts of the respective country.</p>

                                    <p className='mb-4'><b>Entire Agreement:</b> This Shipping Policy constitutes the entire agreement between you and NXG Technologies with respect to the subject matter hereof and supersedes all prior or contemporaneous communications, representations, or agreements, whether oral or written.</p>

                                    <p className='mb-4'><b>Severability:</b> If any provision of this Shipping Policy is held to be invalid or unenforceable, such provision shall be struck and the remaining provisions shall remain in full force and effect.</p>

                                    <p className='mb-4'><b>Waiver:</b> No waiver by NXG Technologies of any breach of any provision of this Shipping Policy shall be deemed a waiver of any subsequent breach.</p>

                                    <p className='mb-4'><b>NXG Technologies</b></p>
                                    <p className='mb-4'><b>Email:</b>  info@nxgtech.io</p>
                                    <p className='mb-4'><b>Phone: </b> +91 8130808751</p>

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

export default ShippingPolicy;