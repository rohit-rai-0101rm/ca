import React from 'react';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import { Link } from 'react-router-dom';


const Automobilelogisticsintro = () => {
    return (
        <div className="banner banner-style-1">
            <div className="container">
                <div className="row align-items-end align-items-xl-start">
                    <div className="col-lg-12">
                        <div className="banner-content">
                            <AnimationOnScroll animateIn="fadeInUp" animateOnce={true} delay={100}>
                            <center>
                                <h1 className="title">Digital Transformation </h1>
                               <strong><h1><span className="themeText">Technologies </span></h1> </strong>
                                <h1 className='title'></h1>
                                <p className='innovate-list-para'>At Mobile Programming, we help automobile and logistics companies become efficient across an extended supply chain.

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

export default Automobilelogisticsintro;