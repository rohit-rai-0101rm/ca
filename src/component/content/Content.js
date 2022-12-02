import React from 'react'
import { Link } from 'react-router-dom'

const Content = () => {
  return (
    <div className="section section-padding case-study-featured-area">
    <div className="container">
        <div className="row">
        <div className="col-xl-7 col-lg-6">
            <div className="case-study-featured-thumb text-start">
            <img src={process.env.PUBLIC_URL + "/images/content.png"} alt="travel" />
            </div>
        </div>
        <div className="col-xl-5 col-lg-6">
            <div className="case-study-featured">
            <div className="section-heading heading-left">
                <h2 className="">content that gets <br/><strong> noticed!</strong> </h2>
                <p className='contentDescription'>
                We write content that reaches your target<br/> audience on the right platforms at the right time. <br/>Your content is instantly searchable and shared.<br/> Ensuring that the content we create  is engaging, <br/>informative, and relevant for your clients, boosting<br/> customer engagement and loyalty.
                    
                    
                    </p>
            </div>
           

          
            </div>
        </div>
    </div>
</div>
</div>
  )
}

export default Content