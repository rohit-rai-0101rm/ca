import React from 'react';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import { Link } from 'react-router-dom';


const HIreSalesIntro = () => {
    return (
        <div className="banner banner-style-1">
            <div className="container">
                <div className="row align-items-end align-items-xl-start">
                    <div className="col-lg-12">
                        <div className="banner-content">
                            <AnimationOnScroll animateIn="fadeInUp" animateOnce={true} delay={100}>
                            <center>
                                <h1 className="title">Hire Salesforce Developers from <span className='purple_head'>India’s Top Talent Network</span></h1>
                                <h3>You've chosen the world's no. 1 CRM. Let's make the most of it.</h3>
                                <p className='innovate-list-paraABC'>Finding the right-fit Salesforce developer with advanced knowledge of application, data, and infrastructure architecture disciplines can be a hassle. For all your Salesforce customization needs, we provide the perfect-fit talent to design and prototype solutions on the Salesforce platform.</p>
                               
                                <Link to={process.env.PUBLIC_URL + "/contact"} className="axil-btn btn-fill-primary btn-large">Hire a Salesforce Developer</Link>
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

export default HIreSalesIntro;