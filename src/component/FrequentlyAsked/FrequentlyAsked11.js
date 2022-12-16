import React from 'react'
import SectionTitle from '../../elements/section-title/SectionTitle'
import Accordion from 'react-bootstrap/Accordion';
import FaqOne from '../../data/faq/FaqFour.json';
const allData = FaqOne;

const FrequentlyAsked11= () => {
  return (
    <div className="section section-padding-equal bg-color-light faq-area">
    <div className="container">
        <div className="row">
        <center> <h2>Frequently asked questions</h2> </center> 
            
            <div className="col-lg-12 col-xl-12">
                <div className="faq-accordion">
                    <Accordion defaultActiveKey="1">
                            <Accordion.Item>
                                <Accordion.Header><span>Why should I hire a UI UX developer from Dignifyd?</span></Accordion.Header>
                                <Accordion.Body>
                                <p>Hire the top UX developers and UI designers from Uplers and unveil an efficient way of executing business operations. Our talent curators take over the legwork and give you freedom from the tedious hiring process and even post-hiring responsibilities.
                                </p>
                                <br/>
                                 </Accordion.Body>
                            </Accordion.Item>
                    </Accordion>
                    <br/>
                    <Accordion defaultActiveKey="2">
                            <Accordion.Item>
                                <Accordion.Header><span>How much will it cost to hire dedicated UI UX designers from  Dignifyd?</span></Accordion.Header>
                                <Accordion.Body>
                                
                                <p>Hire UI/UX Designers from India starting from $25 per hour and may vary depending on their skills and experiences.</p>
                                <br/>
                                
                                
                                <br/>
                                </Accordion.Body>
                            </Accordion.Item>
                    </Accordion>
                    <br/>
                    <Accordion defaultActiveKey="3">
                            <Accordion.Item>
                                <Accordion.Header><span>Do you provide a trial period for hiring a designer?</span></Accordion.Header>
                                <Accordion.Body>
                                
                                <p>Yes. Our team understands what it takes to find a good fit for the job. Therefore, we offer a 40 hours no-risk trial.
                                
                                </p>
                                
                                <br/>
                               
                                </Accordion.Body>
                            </Accordion.Item>
                    </Accordion>
                    <br/>
                    <Accordion defaultActiveKey="4">
                            <Accordion.Item>
                                <Accordion.Header><span>How can I track my project's development or progress?</span></Accordion.Header>
                                <Accordion.Body>
                                
                                <p>We use PMS tools like Teamwork and ProofHub internally. However, we are always ready to accommodate the tool your team is more comfortable with.
                                
                                </p>
                                
                                <br/>
                                
                            
                                </Accordion.Body>
                            </Accordion.Item>
                    </Accordion>
                    <br/>
                    <Accordion defaultActiveKey="5">
                            <Accordion.Item>
                                <Accordion.Header><span>How do I know if a UI UX designer is skilled enough?</span></Accordion.Header>
                                <Accordion.Body>
                                
                                <p>We will take care of that for you. Our screening process ensures that we only connect you with experienced professionals who will be able to deliver results quickly.  
                                
                                </p>
                                
                                <br/>
                                </Accordion.Body>
                            </Accordion.Item>
                    </Accordion>
                    <br/>
                  
                  
                   
                </div>
            </div>
        </div>
    </div>
   
</div>
  )
}

export default FrequentlyAsked11