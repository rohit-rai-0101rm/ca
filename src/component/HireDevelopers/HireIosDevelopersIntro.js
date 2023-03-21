import React from 'react';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import { Link } from 'react-router-dom';


const HireIosDevelopersIntro = () => {
    return (
        <div className="banner banner-style-1">
            <div className="container">
                <div className="row align-items-end align-items-xl-start">
                    <div className="col-lg-12">
                        <div className="banner-content">
                            <AnimationOnScroll animateIn="fadeInUp" animateOnce={true} delay={100}>
                            <center>
                                <h1 className="title">Finding an iOS Developer is Easy Getting a Reliable one is Tough</h1>
                                <h1 className='title'></h1>
                                <p className='innovate-list-para'>When you hire from NXG, you get a reliable team member who delivers. After working with more than 7,000 clients worldwide, we realized what it meant to have the right people in your team. Putting forth this takeaway, we scaled this expertise into a vetting process that sets both the soft and hard skills of a candidate to test.

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

export default HireIosDevelopersIntro;