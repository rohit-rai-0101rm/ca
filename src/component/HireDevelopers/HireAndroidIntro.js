import React from 'react';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import { Link } from 'react-router-dom';


const HireAndroidIntro = () => {
    return (
        <div className="banner banner-style-1">
            <div className="container">
                <div className="row align-items-end align-items-xl-start">
                    <div className="col-lg-12">
                        <div className="banner-content">
                            <AnimationOnScroll animateIn="fadeInUp" animateOnce={true} delay={100}>
                            <center>
                                <h1 className="title">Hire Android App Developers from India's Top Talent Network</h1>
                               <h3> <strong>Inquire, Interview and Hire within the next 7 days.</strong> </h3>
                                <br/>
                                <span className="subtitle">Our Talent Success Coaches do all the hard work so you don’t have to. You simply conduct an interview and select the best. We match the right talent to your business needs thereby giving you the freedom from pre and post hiring responsibilities.</span>
                               
                                <Link to={process.env.PUBLIC_URL + "/contact"} className="axil-btn btn-fill-primary btn-large">Hire a Android Developer</Link>
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

export default HireAndroidIntro;