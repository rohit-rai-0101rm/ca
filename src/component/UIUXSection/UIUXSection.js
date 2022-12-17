import React from 'react'
import ServiceProp12 from '../service/ServiceProp12'
 
 const UIUXSection = () => {
   return (
    <div>  
    <div className="section section-padding-2 bg-color-dark">
        <div className="container">
        <center>
        <h2 className='coloringtext'>Hire UI UX Designer from Dignifyd </h2>
        <p>Hire UI UX Designer from Uplers</p>
        <br/>

        </center>
        <div className='row'>
            <ServiceProp12 colSize="col-xl-6 col-md-6" serviceStyle="" itemShow="6" />
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
 
 export default UIUXSection