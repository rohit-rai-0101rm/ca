import React from 'react'
import SectionTitle from '../../elements/section-title/SectionTitle'
import ServicePropFive from '../service/ServicePropFive'

const NodeSection = () => {
  return (
    <div>  
    <div className="section section-padding-2 bg-color-dark">
        <div className="container">
        <center>
        <h4 className='coloringtext'>Hire full-stack NodeJS Developer from Dignifyd</h4>
        <br/>
        <h5 className='coloringtext'>Smart individuals with expert skills</h5>

        </center>
        <div className='row'>
            <ServicePropFive colSize="col-xl-6 col-md-6" serviceStyle="" itemShow="6" />
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

export default NodeSection