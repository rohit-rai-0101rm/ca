import React from 'react'
import { AnimationOnScroll } from 'react-animation-on-scroll'
import { Link } from 'react-router-dom'

const BannerDesign = () => {
  return (
    <div className="banner banner-style-1 ">
            <div className="container">
                <div className="row align-items-end align-items-xl-start">
                    <div className="col-lg-6">
                        <div className="banner-content">
                            <AnimationOnScroll animateIn="fadeInUp" animateOnce={true} delay={100}>
                                <h1 className="titleDigitalMarketing">Professional & Creative Graphic
                                Design Agency
                                </h1>
                                <h4 className="subheadingDigitalMarketing" >Quality designs delivered in no time</h4>

                                <p className="innovate-list-para">We offer a ﬁne-tuned creative aspect to the designs <br/> while adhering to your branding guidelines. Our job <br/> doesn’t end at simply creating clean, simple, and <br/> unique designs, but we go one step beyond by <br/> providing assistance and post-production support.</p>
                                <Link to={process.env.PUBLIC_URL + "/contact"} className="axil-btn btn-fill-primary btn-large">
                                    Explore Graphic Design Packages</Link>
                            </AnimationOnScroll>
                        </div>
                    </div>
                    <div className="col-lg-6">
                    <img src={process.env.PUBLIC_URL + "/images/designAgencyHeader.png"} alt="Bubble" />

                    </div>
                </div>
            </div>
          
        </div>
  )
}

export default BannerDesign