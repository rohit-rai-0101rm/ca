import React from 'react'
import SectionTitle from '../../elements/section-title/SectionTitle'
import ServiceProp19 from '../service/ServiceProp19'


const AutomobileTechnology = () => {
  return (
    <div>  
    <div className="section section-padding-2 bg-color-ship-gray">
        <div className="container">
        <center>
        <h4 className='coloringtext'>Automobile & logistics</h4>

        <h5 className='coloringtext'>Digital Transformation Technologies</h5>

        </center>
        <div className='row'>
            <ServiceProp19 colSize="col-xl-6 col-md-6" serviceStyle="" itemShow="6" />
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

export default AutomobileTechnology