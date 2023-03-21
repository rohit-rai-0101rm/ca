import React from 'react';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import { Link } from 'react-router-dom';


const HirePHPDeveloperIntro = () => {
    return (
        <div className="banner banner-style-1">
            <div className="container">
                <div className="row align-items-end align-items-xl-start">
                    <div className="col-lg-12">
                        <div className="banner-content">
                            <AnimationOnScroll animateIn="fadeInUp" animateOnce={true} delay={100}>
                            <center>
                                <h1 className="title">Hire Dedicated PHP Developers from India</h1>
                                <span className="subtitle"> Finding the right talent is hard. NXG makes it easy to hire the best PHP Developers from India- remotely. We’ve sourced and pre-screened our candidates so that you can focus on what matters—your business. Our team of talent pool curators helps you hire, manage, and retain top talent for your project.</span>
                               
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

export default HirePHPDeveloperIntro;