import React from 'react'
import { Link } from 'react-router-dom'
import FormTwo from '../contact/FormTwo'

const WebdevIntro = () => {
  return (
    <div className="section section-padding-proffessional mt--120">
    <div className="container ">
        <div className="row">
           
            <div className="col-xl-7 col-lg-6 ">
                <div className="color-light  mb_md--30 mt_md--0 mt--60 ">
                    <h3 className="titleDigitalMarketing">Professional Web Development Services Company</h3>
                    <h5 className="subheadingDigitalMarketing mt--60"> Interactive, innovative, eye-catching websites to grow your business like never before.</h5>
                    <p className="innovate-list-para mt--60">We are a trusted web development company with over 10 years <br/> of  experience building responsive websites that reflect your brand.<br/> Our team of experienced developers specializes in developing <br/>  custom themes and plugins tailored to your needs. We take pride in <br/> our ability to deliver quality results on time and ensure that your <br/> website is everything you hoped for.</p>
                    
                </div>
                <div className="form-group">
                <Link to={process.env.PUBLIC_URL + "/contact"} className="axil-btn btn-fill-primary btn-large mt--webdevPadding">
                           <bold>Explore Web Development Pricing Packages</bold>         </Link>        </div>
               
            </div>

            <div className="col-xl-5 col-lg-6">
                <div className="contact-form-box shadow-box mb--30 ">
                    <h3 className="title">Want to kickstart your web development project?</h3>
                    <p>(no contracts, no commitments)</p>
                    <FormTwo />
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default WebdevIntro