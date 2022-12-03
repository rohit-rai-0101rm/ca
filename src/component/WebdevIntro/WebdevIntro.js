import React from 'react'
import FormTwo from '../contact/FormTwo'

const WebdevIntro = () => {
  return (
    <div className="section section-padding-proffessional ">
    <div className="container ">
        <div className="row">
           
            <div className="col-xl-7 col-lg-6 ">
                <div className="color-light  mb_md--30 mt_md--0 mt--100 ">
                    <h2 className="title">Professional Web Development Services Company</h2>
                    <h4>Interactive, innovative, eye-catching websites to grow your business like never before.</h4>
                    <p>We are a trusted web development company with over 10 years of experience building responsive websites that reflect your brand. Our team of experienced developers specializes in developing custom themes and plugins tailored to your needs. We take pride in our ability to deliver quality results on time and ensure that your website is everything you hoped for</p>
                    
                </div>
                <div className="form-group">
            <button type="submit" className="axil-btn btn-fill-primary btn-fluid btn-primary" name="submit-btn">Explore Web Development Pricing Packages</button>
        </div>
               
            </div>

            <div className="col-xl-5 col-lg-6">
                <div className="contact-form-box shadow-box mb--30">
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