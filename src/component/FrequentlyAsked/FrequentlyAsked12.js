import React from 'react'
import SectionTitle from '../../elements/section-title/SectionTitle'
import Accordion from 'react-bootstrap/Accordion';
import FaqOne from '../../data/faq/FaqFour.json';
const allData = FaqOne;

const FrequentlyAsked12= () => {
  return (
    <div className="section section-padding-equal bg-color-light faq-area">
    <div className="container">
        <div className="row">
        <center> <h2>Frequently asked questions</h2> </center> 
            
            <div className="col-lg-12 col-xl-12">
                <div className="faq-accordion">
                    <Accordion defaultActiveKey="1">
                            <Accordion.Item>
                                <Accordion.Header><span>What is the cost of hiring a salesforce developer through Dignifyd?</span></Accordion.Header>
                                <Accordion.Body>
                                <p className='innovate-list-paraABC'>The full-time hiring of a Salesforce Developer from us will cost you approximately $2000 a month. The hiring cost can vary due to many factors, including your specific requirements and the developer's expertise and experience.
                                </p>
                                <br/>
                                 </Accordion.Body>
                            </Accordion.Item>
                    </Accordion>
                    <br/>
                    <Accordion defaultActiveKey="2">
                            <Accordion.Item>
                                <Accordion.Header><span>How long does it take to hire a salesforce developer from Dignifyd?</span></Accordion.Header>
                                <Accordion.Body>
                                
                                <p className='innovate-list-paraABC' >Within 48 hours of sharing your requirements, Uplers will shortlist the first batch of candidates from its pool of Salesforce Experts. This process is comparatively easier and quicker than standard hiring methods. Hence, by following four easy steps, you can hire the best within weeks, not months.</p>
                                <br/>
                                
                                
                                <br/>
                                </Accordion.Body>
                            </Accordion.Item>
                    </Accordion>
                    <br/>
                    <Accordion defaultActiveKey="3">
                            <Accordion.Item>
                                <Accordion.Header><span>How do I hire salesforce Developers through Dignifyd?</span></Accordion.Header>
                                <Accordion.Body>
                                
                                <p className='innovate-list-paraABC'>You can hire Salesforce consultants from India on-demand who work as an extension to your in-house team.
                                
                                </p>
                                <br/>
                                <p className='innovate-list-paraABC'><strong>Step 1: </strong> Share your requirement of hiring talent</p>
                                <p className='innovate-list-paraABC'><strong>Step 2: </strong> We shortlist the right fit from a pool of talented profiles</p>
                                <p className='innovate-list-paraABC'><strong>Step 3: </strong> You select the suitable candidate and take the interview</p>
                                <p className='innovate-list-paraABC'><strong>Step 4: </strong> Onboard talent and start your work.</p>
                                
                                <br/>
                               
                                </Accordion.Body>
                            </Accordion.Item>
                    </Accordion>
                    <br/>
                    <Accordion defaultActiveKey="4">
                            <Accordion.Item>
                                <Accordion.Header><span>How do you vet salesforce developers?</span></Accordion.Header>
                                <Accordion.Body>
                                
                                <p className='innovate-list-paraABC'>From our experience working with 7000+ clients, we have designed the vetting process to meet the expectations of hiring managers.
                                
                                </p>
                                <br/>
                                <p className='innovate-list-paraABC'><strong>Step 1: </strong> Talents applying to be a part of the pool</p>
                                <p className='innovate-list-paraABC'><strong>Step 2: </strong> Profile screening & shortlisting</p>
                                <p className='innovate-list-paraABC'><strong>Step 3: </strong> Evaluate Language proficiency</p>
                                <p className='innovate-list-paraABC'><strong>Step 4: </strong>Aptitude tests</p>
                                <p className='innovate-list-paraABC'><strong>Step 3: </strong>  Technical evaluation</p>
                                <p className='innovate-list-paraABC'><strong>Step 4: </strong> Final Interview</p>
                                
                                <br/>
                                
                            
                                </Accordion.Body>
                            </Accordion.Item>
                    </Accordion>
                    <br/>
                    <Accordion defaultActiveKey="5">
                            <Accordion.Item>
                                <Accordion.Header><span>Do you provide a trial period for hiring a developer?</span></Accordion.Header>
                                <Accordion.Body>
                                
                                <p className='innovate-list-paraABC'>Yes, our team understands what it takes to find a good fit for the job. Therefore, we provide a 14-day trial period for the candidate you shortlist.
                                
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

export default FrequentlyAsked12