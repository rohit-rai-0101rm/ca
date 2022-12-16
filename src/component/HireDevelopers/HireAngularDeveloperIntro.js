import React from 'react';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import { Link } from 'react-router-dom';


const HireAngularDeveloperIntro = () => {
    return (
        <div className="banner banner-style-1">
            <div className="container">
                <div className="row align-items-end align-items-xl-start">
                    <div className="col-lg-12">
                        <div className="banner-content">
                            <AnimationOnScroll animateIn="fadeInUp" animateOnce={true} delay={100}>
                            <center>
                                <h1 className="title">Hire AngularJS Developers for Cutting-Edge Web Solutions</h1>
                                <p className="innovate-list-para">Are you looking for dedicated AngularJS developers to build modern-age applications? We, at Dignifyd, provide the best AngularJS developers in India who are equipped with the latest technologies and use innovative approaches.
                                
                                <br/>
                                Scale your development output by hiring AngularJS developers from India

                                
                                </p>
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

export default HireAngularDeveloperIntro;