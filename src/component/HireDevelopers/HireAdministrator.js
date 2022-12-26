import React from 'react';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import { Link } from 'react-router-dom';


const HireAdministrator = () => {
    return (
        <div className="banner banner-style-1">
            <div className="container">
                <div className="row align-items-end align-items-xl-start">
                    <div className="col-lg-12">
                        <div className="banner-content">
                            <AnimationOnScroll animateIn="fadeInUp" animateOnce={true} delay={100}>
                            <center>
                                <h1 className="title">Hire the best Salesforce Administrators from  <span className='purple_head'>India's Top Talent Network </span> </h1>
                                <h3>We handpick the perfect-match to help you crack the tough nut like Salesforce</h3>
                                <p className='innovate-list-paraABC'>Our crackerjack Salesforce Admins who possess in-depth knowledge of Salesforce products, their functionalities, administration and maintenance of Salesforce systems, and extensive experience in performing upgrades. With us, you access India’s largest talent pool of 50,000+ professionals for your well-defined needs.</p>
                               
                                <Link to={process.env.PUBLIC_URL + "/contact"} className="axil-btn btn-fill-primary btn-large">Hire a Salesforce Administrator</Link>
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

export default HireAdministrator;