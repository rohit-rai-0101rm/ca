import React from 'react';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import { Link } from 'react-router-dom';


const HireConsultantIntro = () => {
    return (
        <div className="banner banner-style-1">
            <div className="container">
                <div className="row align-items-end align-items-xl-start">
                    <div className="col-lg-12">
                        <div className="banner-content">
                            <AnimationOnScroll animateIn="fadeInUp" animateOnce={true} delay={100}>
                            <center>
                                <h1 className="title">Hire Salesforce Consultants from  <span className='purple_head'>India's Top Talent Network </span></h1>
                                <h3>Meet your Salesforce functional and technical needs with our certified Salesforce consultants.</h3>
                                <p className='innovate-list-paraABC'>Finding it tough to design and implement easy to maintain and scalable Sales or Service Cloud solutions? Our pre-vetted Functional Consultants can help. Moreover, with solid technical knowledge of configuration and code, our Salesforce Technical Consultants possess a good experience in Sales Cloud, Service Cloud, Marketing Cloud, Community Cloud, Einstein, and Pardot.</p>
                               
                                <Link to={process.env.PUBLIC_URL + "/contact"} className="axil-btn btn-fill-primary btn-large">Hire a Salesforce Consultant</Link>
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

export default HireConsultantIntro;