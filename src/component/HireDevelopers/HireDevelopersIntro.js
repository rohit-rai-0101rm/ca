import React from 'react';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import { Link } from 'react-router-dom';


const HireDevelopersIntro = () => {
    return (
        <div className="banner banner-style-1">
            <div className="container">
                <div className="row align-items-end align-items-xl-start">
                    <div className="col-lg-12">
                        <div className="banner-content">
                            <AnimationOnScroll animateIn="fadeInUp" animateOnce={true} delay={100}>
                            <center>
                                <h1 className="title">Make Your App Ideas Possible <br/> Hire ReactJS Developers</h1>
                                <h1 className='title'></h1>
                                <p className='innovate-list-para'>Finding the right talent is hard, but Uplers makes it easier to recruit qualified professionals. We've assisted global clients in getting their hands on top talent without doing a ton of legwork themselves.

                                Maximize your development output by hiring pre-screened ReactJS developers.

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

export default HireDevelopersIntro;