import React from 'react'
import SectionTitle from '../../elements/section-title/SectionTitle'
import Accordion from 'react-bootstrap/Accordion';
import FaqOne from '../../data/faq/FaqFour.json';
const allData = FaqOne;

const FrequentlyAsked14= () => {
  return (
    <div className="section section-padding-equal bg-color-light faq-area">
    <div className="container">
        <div className="row">
        <center> <h2>Frequently asked questions</h2> </center> 
            
            <div className="col-lg-12 col-xl-12">
                <div className="faq-accordion">
                    <Accordion defaultActiveKey="1">
                            <Accordion.Item>
                                <Accordion.Header><span>What is the cost of hiring a Salesforce Consultant through Dignifyd?</span></Accordion.Header>
                                <Accordion.Body>
                                <p>The full-time hiring of a Salesforce Consultant from us will cost you approximately $2000 a month. There are various factors that determine the hiring cost, including consultants' years of technical experience with Salesforce, Salesforce certifications they have, specific vertical industry experience, exposure to large projects, etc.
                                </p>
                                <br/>
                                 </Accordion.Body>
                            </Accordion.Item>
                    </Accordion>
                    <br/>
                    <Accordion defaultActiveKey="2">
                            <Accordion.Item>
                                <Accordion.Header><span>How do I hire salesforce consultants through Dignifyd?</span></Accordion.Header>
                                <Accordion.Body>
                                
                                <p>You can hire Salesforce consultants from India on-demand who work as an extension to your in-house team.</p>
                                <br/>
                                <p><strong>Step 1: </strong> Share your requirement of hiring talent</p>
                                <p><strong>Step 2: </strong> We shortlist the right fit from a pool of talented profiles</p>
                                <p><strong>Step 3: </strong> You select the suitable candidate and take the interview</p>
                                <p><strong>Step 4: </strong> Onboard talent and start your work.</p>
                                
                                
                                <br/>
                                </Accordion.Body>
                            </Accordion.Item>
                    </Accordion>
                    <br/>
                    <Accordion defaultActiveKey="3">
                            <Accordion.Item>
                                <Accordion.Header><span>What benefits does my business get from using Salesforce?</span></Accordion.Header>
                                <Accordion.Body>
                                
                                <p>Many businesses rely on Salesforce to stay organized and serve customers better. It allows access to all your business data in one place, making it easy to browse and search. With its wide range of CRM products, features, and tools designed for business owners who want more out of their company's success story - you'll have all the information at your fingertips so your company can grow smartly!
                                
                                </p>
                                <br/>
                               
                                </Accordion.Body>
                            </Accordion.Item>
                    </Accordion>
                    <br/>
                    <Accordion defaultActiveKey="4">
                            <Accordion.Item>
                                <Accordion.Header><span>What do Salesforce Consultants do?</span></Accordion.Header>
                                <Accordion.Body>
                                
                                <p>A Salesforce functional consultant acts as a liaison between technical and non-technical staff to ensure all deliverables meet the client's business needs along with the highest standards. However, a Salesforce technical consultant uses technical Salesforce configuration and coding to design and develop the right solution to exceed customer expectations, enable sustainable change, and drive results.
                                
                                </p>
                                
                                <br/>
                                
                            
                                </Accordion.Body>
                            </Accordion.Item>
                    </Accordion>
                    <br/>
                    <Accordion defaultActiveKey="5">
                            <Accordion.Item>
                                <Accordion.Header><span>How do you vet salesforce consultants?</span></Accordion.Header>
                                <Accordion.Body>
                                
                                <p>From our experience working with 7000+ clients, we have designed the vetting process to meet the expectations of hiring managers.
                                
                                </p> 
                                <br/>
                                <p><strong>Step 1: </strong>Talents applying to be a part of the pool</p>
                                <p><strong>Step 2: </strong> Profile screening & shortlisting</p>
                                <p><strong>Step 3: </strong> Evaluate Language proficiency</p>
                                <p><strong>Step 4: </strong>  Aptitude tests</p>
                                <p><strong>Step 5: </strong>Technical evaluation</p>
                                <p><strong>Step 6: </strong> Final Interview.</p>
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

export default FrequentlyAsked14