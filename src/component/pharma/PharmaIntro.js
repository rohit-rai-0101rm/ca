import React from 'react';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import { Link } from 'react-router-dom';


const PharmaIntro = () => {
    return (
        <div className="banner banner-style-1">
            <div className="container">
                <div className="row align-items-end align-items-xl-start">
                    <div className="col-lg-12">
                        <div className="banner-content">
                            <AnimationOnScroll animateIn="fadeInUp" animateOnce={true} delay={100}>
                            <center>
                                <h1 className="title">Innovation Technologies in 
                                
                                <span className='themeText'>
                                Pharma & Healthcare

                                </span>

                              </h1>
                              <br/>
                              <br/>
                             <img src="/images/pharma-technologies.png" alt="travel"/>        
           
                            </center>
                            </AnimationOnScroll>
                        </div>
                    </div>
                  
                </div>
            </div>
         
        </div>
    )
}

export default PharmaIntro;