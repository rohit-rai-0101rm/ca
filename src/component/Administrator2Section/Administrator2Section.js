import React from 'react'
import { Link } from 'react-router-dom'
import ServiceProp14 from '../service/ServiceProp14'
 
 const Administrator2Section = () => {
   return (
    <div>  
    <div className="section section-padding-2 bg-color-dark">
        <div className="container">
        <center>
        <h2 className='coloringtext'>Hire Salesforce Administrators from NXG</h2>
        <br/>
        <h4 className='coloringtext'>Experts with in-depth and practical knowledge of the Salesforce platform</h4>
       

        </center>
        <div className='row'>
            <ServiceProp14 colSize="col-xl-6 col-md-6" serviceStyle="" itemShow="6" />
        </div>
    </div>
    <ul className="list-unstyled shape-group-10">
        <li className="shape shape-1"><img src={process.env.PUBLIC_URL + "/images/others/line-9.png"} alt="Circle" /></li>
        <li className="shape shape-2"><img src={process.env.PUBLIC_URL + "/images/others/bubble-42.png"} alt="Circle" /></li>
        <li className="shape shape-3"><img src={process.env.PUBLIC_URL + "/images/others/bubble-43.png"} alt="Circle" /></li>
    </ul>
    <center> <Link
              to={process.env.PUBLIC_URL + "/contact"}
              className="axil-btn btn-large btn-fill-white"
            >
             Hire Talent Now
            </Link></center> 
    
</div>
</div>
   )
 }
 
 export default Administrator2Section