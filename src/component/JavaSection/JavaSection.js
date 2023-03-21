import React from 'react'
import SectionTitle from '../../elements/section-title/SectionTitle'
import ServicePropJava from '../service/ServicePropJava.js'

const JavaSection = () => {
    return (
        <div>
            <div className="section section-padding-2 bg-color-dark">
                <div className="container">
                    <center>
                        <h3 className='coloringtext'>Hire full-stack Java Developers from NXG
                        </h3>
                       <h6 className='coloringtext'>Enhance your web and mobile app solutions</h6>
                    </center>
                    <div className='row'>
                        <ServicePropJava colSize="col-xl-6 col-md-6" serviceStyle="" itemShow="6" />
                    </div>
                </div>
                <ul className="list-unstyled shape-group-10">
                    <li className="shape shape-1"><img src={process.env.PUBLIC_URL + "/images/others/line-9.png"} alt="Circle" /></li>
                    <li className="shape shape-2"><img src={process.env.PUBLIC_URL + "/images/others/bubble-42.png"} alt="Circle" /></li>
                    <li className="shape shape-3"><img src={process.env.PUBLIC_URL + "/images/others/bubble-43.png"} alt="Circle" /></li>
                </ul>
            </div>
        </div>
    )
}

export default JavaSection