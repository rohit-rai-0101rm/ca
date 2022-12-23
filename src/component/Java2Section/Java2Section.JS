import React from 'react'
import SectionTitle from '../../elements/section-title/SectionTitle'
import ServicePropTwo from '../service/ServicePropTwo'

const Java2Section = () => {
  return (
    <div>  
    <div className="section section-padding-2 bg-color-dark">
        <div className="container">
        <center>
        <h3 className='coloringtext'>Hire full-stack Java Developers from Uplers</h3>
        <h5 className='coloringtext'>Enhance your web and mobile app solutions</h5>

        </center>
        <div className='row'>
            <ServicePropTwo colSize="col-xl-6 col-md-6" serviceStyle="" itemShow="4" />
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

export default Java2Section