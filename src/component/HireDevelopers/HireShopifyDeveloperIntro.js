import React from 'react';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import { Link } from 'react-router-dom';


const HireShopifyDeveloperIntro = () => {
    return (
        <div className="banner banner-style-1">
            <div className="container">
                <div className="row align-items-end align-items-xl-start">
                    <div className="col-lg-12">
                        <div className="banner-content">
                            <AnimationOnScroll animateIn="fadeInUp" animateOnce={true} delay={100}>
                            <center>
                                <h1 className="title">Hire Shopify Experts from India’s Largest and Top Talent Network</h1>
                                <h3>Inquire, Interview and Hire within the next 7 days.</h3>
                                <span className="subtitle">Through our platform, companies have been able to hire 10X faster & more efficiently than they did before. Our expert Shopify developers have been hired by more than 350+ agencies and businesses across the globe.</span>
                               
                                <Link to={process.env.PUBLIC_URL + "/contact"} className="axil-btn btn-fill-primary btn-large">Share your Requirements</Link>
                            </center>
                            </AnimationOnScroll>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="banner-thumbnail">
                           
                        </div>
                    </div>
                </div>
            </div>
         
        </div>
    )
}

export default HireShopifyDeveloperIntro;