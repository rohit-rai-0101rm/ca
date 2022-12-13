import React from 'react'
import SectionTitle from '../../elements/section-title/SectionTitle'
import Accordion from 'react-bootstrap/Accordion';
import FaqOne from '../../data/faq/FaqOne.json';
const allData = FaqOne;

const Frequently = () => {
  return (
    <div className="section section-padding-equal bg-color-light faq-area">
    <div className="container">
        <div className="row">
        <center> <h4 className='title'>Frequently asked questions</h4> </center> 
            
            <div className="col-lg-12 col-xl-12">
                <div className="faq-accordion">
                    <Accordion defaultActiveKey="1">
                        {allData.map((data) => (
                            <Accordion.Item eventKey={data.id} key={data.id}>
                                <Accordion.Header><span>{`${data.id}.`}</span>{data.title}</Accordion.Header>
                                <Accordion.Body><p>{data.body}</p></Accordion.Body>
                            </Accordion.Item>
                        ))}
                    </Accordion>
                </div>
            </div>
        </div>
    </div>
   
</div>
  )
}

export default Frequently