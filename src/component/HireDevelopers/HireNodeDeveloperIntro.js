import React from 'react';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import { Link } from 'react-router-dom';


const HireNodeDeveloperIntro = () => {
    return (
        <div className="banner banner-style-1">
            <div className="container">
                <div className="row align-items-end align-items-xl-start">
                    <div className="col-lg-12">
                        <div className="banner-content">
                            <AnimationOnScroll animateIn="fadeInUp" animateOnce={true} delay={100}>
                            <center>
                                <h1 className="title">Get the best value from your hiring budget Hire remote NodeJS Developers</h1>
                                <span className="subtitle">We offer flexible and cost-effective hiring solutions. Our talent pool curators have sourced, screened, and curated a pool of top NodeJS developers who possess solid knowledge of the NodeJS runtime environment.</span>
                                <span className="subtitle">Develop a perfect roadmap to success with Uplers!</span>
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

export default HireNodeDeveloperIntro;