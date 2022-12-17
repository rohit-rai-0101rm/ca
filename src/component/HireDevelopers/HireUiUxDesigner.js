import React from 'react';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import { Link } from 'react-router-dom';


const HireUiUxDesigner = () => {
    return (
        <div className="banner banner-style-1">
            <div className="container">
                <div className="row align-items-end align-items-xl-start">
                    <div className="col-lg-12">
                        <div className="banner-content">
                            <AnimationOnScroll animateIn="fadeInUp" animateOnce={true} delay={100}>
                            <center>
                                <h1 className="title">Hire proficient UI/UX Designers to build intuitive design for apps, softwares, & websites.</h1>
                                <h4>Finding a perfect team of designers is time-consuming and expensive. Not anymore! We provide UI/UX Designers who believe that it’s not just about what you see, but also how it makes your users feel when they interact with your product</h4>
                                <span className="subtitle">Hire our skilled UI & UX Designers who are both culturally and technically fit.</span>
                               
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

export default HireUiUxDesigner;