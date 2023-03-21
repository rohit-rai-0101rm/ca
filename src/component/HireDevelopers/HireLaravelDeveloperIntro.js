import React from 'react';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import { Link } from 'react-router-dom';


const HireLaravelDeveloperIntro = () => {
    return (
        <div className="banner banner-style-1">
            <div className="container">
                <div className="row align-items-end align-items-xl-start">
                    <div className="col-lg-12">
                        <div className="banner-content">
                            <AnimationOnScroll animateIn="fadeInUp" animateOnce={true} delay={100}>
                            <center>
                                <h1 className="title">Hire Dedicated Laravel Developers</h1>
                                <p className="innovate-list-para">NXG has been working with leading companies across the globe and assisting them hire the right talent from our pool of pre-vetted Laravel developers. Our extensive screening process ensures that we only connect you with experienced and trusted professionals who can deliver results quickly.</p>
                               
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

export default HireLaravelDeveloperIntro;