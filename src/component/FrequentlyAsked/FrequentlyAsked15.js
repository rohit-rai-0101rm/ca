import React from 'react'
import SectionTitle from '../../elements/section-title/SectionTitle'
import Accordion from 'react-bootstrap/Accordion';
import FaqOne from '../../data/faq/FaqFour.json';
const allData = FaqOne;

const FrequentlyAsked15 = () => {
  return (
    <div className="section section-padding-equal bg-color-light faq-area">
    <div className="container">
        <div className="row">
        <center> <h4>Frequently asked questions</h4> </center> 
            
            <div className="col-lg-12 col-xl-12">
                <div className="faq-accordion">
                    <Accordion defaultActiveKey="1">
                            <Accordion.Item>
                                <Accordion.Header><span>How do Dignifyd vet Java developers?</span></Accordion.Header>
                                <Accordion.Body>
                                <p>We at Uplers follow an aggressive vetting process including sourcing, aptitude test, technical test, PI, and final call to ensure that you get a resource that can meet your company's cultural and technical needs.
                                </p>
                                <br/>
                                 </Accordion.Body>
                            </Accordion.Item>
                    </Accordion>
                    <br/>
                    <Accordion defaultActiveKey="2">
                            <Accordion.Item>
                                <Accordion.Header><span>How long does it take to hire Java Programmers from Dignifyd?</span></Accordion.Header>
                                <Accordion.Body>
                                
                                <p>Hiring a Java Programmer from Uplers can take two to four weeks. It is subjective to your requirements and time window.
                                
                                </p>
                                
                                <br/>
                                </Accordion.Body>
                            </Accordion.Item>
                    </Accordion>
                    <br/>
                    <Accordion defaultActiveKey="3">
                            <Accordion.Item>
                                <Accordion.Header><span>What is the cost of hiring a Java developer through Dignifyd?</span></Accordion.Header>
                                <Accordion.Body>
                                
                                <p>The cost of hiring a Java developer through Uplers depends on your business needs. Usually, we charge approximately $25 an hour, which is again dependent on multiple factors.
                                
                                </p>
                                
                                <br/>
                               
                                </Accordion.Body>
                            </Accordion.Item>
                    </Accordion>
                    <br/>
                    <Accordion defaultActiveKey="4">
                            <Accordion.Item>
                                <Accordion.Header><span>What are the skills required for a Java Developer?</span></Accordion.Header>
                                <Accordion.Body>
                                
                                <p>The skills you must look for while hiring a Java Developer include proficiency with JSP and Servlets, web frameworks (Struts and Spring), OOP Concepts, Markup Languages, JVM, and memory management.
                                
                                </p>
                                
                                <br/>
                                
                            
                                </Accordion.Body>
                            </Accordion.Item>
                    </Accordion>
                    <br/>
                    <Accordion defaultActiveKey="5">
                            <Accordion.Item>
                                <Accordion.Header><span>Do you provide a trial period for hiring a Java developer?</span></Accordion.Header>
                                <Accordion.Body>
                                
                                <p>Yes, we offer a 40 hours no-risk trial, wherein you can test the resource before actually deciding to hire them
                                
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

export default FrequentlyAsked15