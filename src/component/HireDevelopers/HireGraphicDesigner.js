import React from 'react';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import { Link } from 'react-router-dom';


const HireGraphicDesigner = () => {
    return (
        <div className="banner banner-style-1">
            <div className="container">
                <div className="row align-items-end align-items-xl-start">
                    <div className="col-lg-12">
                        <div className="banner-content">
                            <AnimationOnScroll animateIn="fadeInUp" animateOnce={true} delay={100}>
                            <center>
                                <h1 className="title">Hire full-time Graphic Designers from India's Top Talent Network</h1>
                                <h3>Inquire, Interview and Hire within the next 7 days.</h3>
                                <span className="subtitle">We source, vet, match, and manage the top graphic designers who will bring your envisioned design to life while adhering to the brand guidelines. We are focused on delivering quality designs which are an outcome of innovative thinking and unique perspectives of creative heads who love coffee.</span>
                               
                                <Link to={process.env.PUBLIC_URL + "/contact"} className="axil-btn btn-fill-primary btn-large">Hire a Graphic Designer</Link>
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

export default HireGraphicDesigner;