import React from 'react'
import TrackVisibility from 'react-on-screen'
import { Link } from 'react-router-dom'
import CountUp from 'react-countup';

const ProfessionalService = () => {
  return (
    <div className="section section-padding case-study-featured-area">
                <div className="container">
                    <div className="row">
                    <div className="col-xl-5 col-lg-6">
                        <div className="case-study-featured-thumb text-start">
                        <img src={process.env.PUBLIC_URL + "/images/webService.png"} alt="travel" />
                        </div>
                    </div>
                    <div className="col-xl-7 col-lg-6">
                        <div className="case-study-featured">
                        <div className="section-heading heading-left">
                            <h4 className="title">Our Professional Web Development Services will make your new website project a success</h4>
                            <p className='innovate-list-para'>Launching a new website can be daunting, but with our professional Web Development Services, you can be confident that your website will look great and function flawlessly</p>
                            <p className='innovate-list-para'>We'll be available to help you with every step of the website development process, from planning to execution. We understand the importance of an excellent first impression; hence we provide you with skilled resources for your project. Our team is well-equipped with using the latest technologies and following industry best practices to code and develop websites. From designing a custom theme to integrating the trending features and plugins, NXG will handle it all with ease..</p>
                            <Link to="#" className="axil-btn btn-fill-primary btn-large">Inquire Now</Link>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default ProfessionalService