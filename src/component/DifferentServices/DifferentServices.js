import React from 'react'
import SectionTitle from '../../elements/section-title/SectionTitle'
import ManageServices from '../ManageServices/ManageServices'
import ServicePropOne from '../service/ServicePropOne'

const DifferentServices = () => {
  return (
    <div>
        <div className="section section-padding-2 bg-color-dark">
                <div className="container">
                    {/* <SectionTitle 
                        subtitle="What We Can Do For You"
                        title="Services we can help you with"
                        description="Nulla facilisi. Nullam in magna id dolor 
                        blandit rutrum eget vulputate augue sed eu imperdiet."
                        textAlignment="heading-light-left"
                        textColor=""
                    /> */}
                    <div className='row'>
                        <ManageServices colSize="col-xl-4 col-md-6" serviceStyle="" itemShow="6" />
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

export default DifferentServices