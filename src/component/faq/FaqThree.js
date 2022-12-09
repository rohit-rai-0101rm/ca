import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import SectionTitle from '../../elements/section-title/SectionTitle';
import FaqData from '../../data/faq/FaqThree.json';

const allData = FaqData ;


const  FaqThree = () => {
    return (
        <div className="section section-padding-equal bg-color-light faq-area">
            <div className="container">
                <div className="row">
                    <div className="col-lg-5 col-xl-4">
                    </div>
                    <div className="col-lg-7 col-xl-8">
                        <div className="faq-accordion-new">
                                {allData.map((data) => (
                                    <Accordion.Item eventKey={data.id} key={data.id}>
                                        <Accordion.Body><p className='resizing10'>
                            
                                        <img  className='imagegap'   src="/images/correct.svg"/>
                                    
                                        {data.body}</p></Accordion.Body>
                                    </Accordion.Item>
                                ))}
                        </div>
                    </div>
                </div>
            </div>
           
        </div>
    )
}

export default FaqThree ;