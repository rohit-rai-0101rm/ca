import React from 'react'
import { Link } from 'react-router-dom'
import ServiceProp15 from '../service/ServiceProp15'
import ServiceProp14 from '../service/ServiceProp14'
import ServiceProp16 from '../service/ServiceProp16'
 
 const TechnicalConsultant = () => {
   return (
    <div className='salesforce_section'>  
    <div className="section section-padding-2 bg-color-dark">
        <div className="container">
        <center>
        <h2 className='coloringtext'>Hire Salesforce Functional Consultants</h2>
        <br/>
        <h4 className='coloringtext'>Talents with extensive knowledge of the Salesforce platform & its architecture</h4>
       

        </center>
        <div className='row'>
            <ServiceProp15 colSize="col-xl-12 col-md-12" serviceStyle="" itemShow="6" />
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
<div className="section section-padding-2 bg-color-dark technical_section ">
        <div className="container ">
        <center>
        <h2 className='coloringtext'>Hire Salesforce Technical Consultants</h2>
        <br/>
        <h4 className='coloringtext'>Talents with extensive experience in systems integration</h4>
       

        </center>
        <div className='row'>
            <ServiceProp16 colSize="col-xl-12 col-md-12" serviceStyle="" itemShow="6" />
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
 
 export default TechnicalConsultant