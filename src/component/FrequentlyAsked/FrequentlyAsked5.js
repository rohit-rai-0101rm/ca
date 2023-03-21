import React from 'react'
import SectionTitle from '../../elements/section-title/SectionTitle'
import Accordion from 'react-bootstrap/Accordion';
import FaqOne from '../../data/faq/FaqFour.json';
const allData = FaqOne;

const FrequentlyAsked5= () => {
  return (
    <div className="section section-padding-equal bg-color-light faq-area">
    <div className="container">
        <div className="row">
        <center> <h4>Frequently asked questions</h4> </center> 
            
            <div className="col-lg-12 col-xl-12">
                <div className="faq-accordion">
                    <Accordion defaultActiveKey="1">
                            <Accordion.Item>
                                <Accordion.Header><span>Why should I hire expert Laravel developers from India?</span></Accordion.Header>
                                <Accordion.Body>
                                <p>Indian employees are known for their hard work, dedication, loyalty, and leadership capabilities. In addition, hiring dedicated Laravel developers from India would cost half as much as hiring developers locally.
                                </p>
                                <br/>
                                 </Accordion.Body>
                            </Accordion.Item>
                    </Accordion>
                    <br/>
                    <Accordion defaultActiveKey="2">
                            <Accordion.Item>
                                <Accordion.Header><span>How can I hire a Laravel expert from India?</span></Accordion.Header>
                                <Accordion.Body>
                                
                                <p>There are a large number of individual Laravel developers who’d be willing to work for you. However, you need to look for the one that brings you maximum advantages.</p>
                                <br/>
                                <p>NXG , in the effort to build a long-term business partnership between the client and talent, ensure the interests of each party.</p>
                                
                                <br/>
                                </Accordion.Body>
                            </Accordion.Item>
                    </Accordion>
                    <br/>
                    <Accordion defaultActiveKey="3">
                            <Accordion.Item>
                                <Accordion.Header><span>How much does it cost to hire Laravel developers?</span></Accordion.Header>
                                <Accordion.Body>
                                
                                <p>The full-time hiring of a Laravel developer from us will cost you approximately $3000 a month which is subjective to the skill set and experience of the candidate.
                                
                                </p>
                                
                                <br/>
                               
                                </Accordion.Body>
                            </Accordion.Item>
                    </Accordion>
                    <br/>
                    <Accordion defaultActiveKey="4">
                            <Accordion.Item>
                                <Accordion.Header><span>Is it possible to migrate an existing PHP website into a Laravel PHP application?</span></Accordion.Header>
                                <Accordion.Body>
                                
                                <p>When you are migrating legacy PHP applications you won’t have migration scripts available for the database. You can use the Laravel Migrations Generator package to generate migration scripts from the existing database.
                                
                                </p>
                                
                                <br/>
                                
                            
                                </Accordion.Body>
                            </Accordion.Item>
                    </Accordion>
                    <br/>
                    <Accordion defaultActiveKey="5">
                            <Accordion.Item>
                                <Accordion.Header><span>Which is the best framework to build an app or website in PHP?</span></Accordion.Header>
                                <Accordion.Body>
                                
                                <p>When we talk about PHP frameworks, one of the names that tend to surface the most is Laravel. As an open-source MVC-based PHP web framework, it is easy to use, intuitive, and scalable.
                                
                                </p>
                                
                                <br/>
                                </Accordion.Body>
                            </Accordion.Item>
                    </Accordion>
                    <br/>
                    <Accordion defaultActiveKey="6">
                            <Accordion.Item>
                                <Accordion.Header><span>What are the advantages of hiring developers from NXG?</span></Accordion.Header>
                                <Accordion.Body>
                                
                                <p>Hire dedicated Laravel developers from Uplers and unveil an efficient way of executing business operations. Our talent curators take over the legwork and give you freedom from the tedious hiring process and even post-hiring responsibilities.
                                
                                </p>
                                
                                <br/>
                                </Accordion.Body>
                            </Accordion.Item>
                    </Accordion>
                   
                </div>
            </div>
        </div>
    </div>
   
</div>
  )
}

export default FrequentlyAsked5