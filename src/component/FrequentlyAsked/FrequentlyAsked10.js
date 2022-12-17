import React from 'react'
import SectionTitle from '../../elements/section-title/SectionTitle'
import Accordion from 'react-bootstrap/Accordion';
import FaqOne from '../../data/faq/FaqFour.json';
const allData = FaqOne;

const FrequentlyAsked10= () => {
  return (
    <div className="section section-padding-equal bg-color-light faq-area">
    <div className="container">
        <div className="row">
        <center> <h2>Frequently asked questions</h2> </center> 
            
            <div className="col-lg-12 col-xl-12">
                <div className="faq-accordion">
                    <Accordion defaultActiveKey="1">
                            <Accordion.Item>
                                <Accordion.Header><span>How much does it cost to hire a graphic designer?</span></Accordion.Header>
                                <Accordion.Body>
                                <p>The cost of hiring a graphic designer can be anywhere between $1500 to $5000 a month.
                                </p>
                                <br/>
                                 </Accordion.Body>
                            </Accordion.Item>
                    </Accordion>
                    <br/>
                    <Accordion defaultActiveKey="2">
                            <Accordion.Item>
                                <Accordion.Header><span>What are the benefits of hiring a graphic designer from Dignifyd?</span></Accordion.Header>
                                <Accordion.Body>
                                
                                <p>The benefits of hiring a graphic designer are you can save upto 50% on salaries, flexible hiring models, zero recruitment costs and no pre-hiring or post-hiring responsibilities to manage. Our talent curators take over the legwork and give you freedom from the tedious hiring process.</p>
                                <br/>
                                
                                
                                <br/>
                                </Accordion.Body>
                            </Accordion.Item>
                    </Accordion>
                    <br/>
                    <Accordion defaultActiveKey="3">
                            <Accordion.Item>
                                <Accordion.Header><span>Will the hired graphic designer work during my business hours?</span></Accordion.Header>
                                <Accordion.Body>
                                
                                <p>Working with teams during your local hours is possible. However, a 5% extra charge exists for the Australia and US region (4 hours overlap with IST timezone) and a 10% additional charge for the Australia and US region (8 hours overlap with IST timezone).
                                
                                </p>
                                
                                <br/>
                               
                                </Accordion.Body>
                            </Accordion.Item>
                    </Accordion>
                    <br/>
                    <Accordion defaultActiveKey="4">
                            <Accordion.Item>
                                <Accordion.Header><span>How do I hire a dedicated graphic designer from Dignifyd?</span></Accordion.Header>
                                <Accordion.Body>
                                
                                <p>To hire a graphic designer from Uplers, you have to share your requirements post, and we will shortlist a few top matching candidates for you. You interview them and select the ones you find most suitable.
                                
                                </p>
                                
                                <br/>
                                
                            
                                </Accordion.Body>
                            </Accordion.Item>
                    </Accordion>
                    <br/>
                    <Accordion defaultActiveKey="5">
                            <Accordion.Item>
                                <Accordion.Header><span>How long will it take to hire a graphic designer from Dignifyd?</span></Accordion.Header>
                                <Accordion.Body>
                                
                                <p>It could take anywhere between 2 to 4 weeks to hire and onboard a graphic designer from Dignifyd.
                                
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

export default FrequentlyAsked10