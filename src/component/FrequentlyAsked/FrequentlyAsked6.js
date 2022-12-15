import React from 'react'
import SectionTitle from '../../elements/section-title/SectionTitle'
import Accordion from 'react-bootstrap/Accordion';
import FaqOne from '../../data/faq/FaqFour.json';
const allData = FaqOne;

const FrequentlyAsked6= () => {
  return (
    <div className="section section-padding-equal bg-color-light faq-area">
    <div className="container">
        <div className="row">
        <center> <h2>Frequently asked questions</h2> </center> 
            
            <div className="col-lg-12 col-xl-12">
                <div className="faq-accordion">
                    <Accordion defaultActiveKey="1">
                            <Accordion.Item>
                                <Accordion.Header><span>What is a PHP developer?</span></Accordion.Header>
                                <Accordion.Body>
                                <p>PHP developers develop programs, applications, and web sites using the dynamic scripting language PHP. PHP is known for web development and business applications. PHP Developers, in the true sense, are a specialized subset of the <strong>‘Developer’</strong> position, depending on their job description.
                                </p>
                                <br/>
                                <p>PHP is ubiquitous in website development, and PHP Developers usually work behind the scenes or create UIs.</p>
                                <br/>
                                 </Accordion.Body>
                            </Accordion.Item>
                    </Accordion>
                    <br/>
                    <Accordion defaultActiveKey="2">
                            <Accordion.Item>
                                <Accordion.Header><span>How to Hire Top PHP Developers?</span></Accordion.Header>
                                <Accordion.Body>
                                
                                <p>There are a large number of individual Laravel developers who’d be willing to work for you. However, you need to look for the one that brings you maximum advantages.</p>
                                <br/>
                                <p>Dignifyd , in the effort to build a long-term business partnership between the client and talent, ensure the interests of each party.</p>
                                
                                <br/>
                                </Accordion.Body>
                            </Accordion.Item>
                    </Accordion>
                    <br/>
                    <Accordion defaultActiveKey="3">
                            <Accordion.Item>
                                <Accordion.Header><span>Why hire dedicated PHP developers?</span></Accordion.Header>
                                <Accordion.Body>
                                
                                <p>When looking for a PHP developer you gain an advantage if you hire a dedicated PHP developer as you’d get complete control over the development cycle when you hire a dedicated person for the job.
                                </p>
                                <br/>
                               </Accordion.Body>
                            </Accordion.Item>
                    </Accordion>
                    <br/>
                    <Accordion defaultActiveKey="4">
                            <Accordion.Item>
                                <Accordion.Header><span>How much does it cost to hire a PHP developer?</span></Accordion.Header>
                                <Accordion.Body>
                                
                                <p>The full-time hiring of a PHP developer from us will cost you approximately $2200 a month which is subjective to the skill set and experience of the candidate.
                                
                                </p>
                                
                                <br/>
                                
                            
                                </Accordion.Body>
                            </Accordion.Item>
                    </Accordion>
                    <br/>
                    <Accordion defaultActiveKey="5">
                            <Accordion.Item>
                                <Accordion.Header><span>How to select the best company in India to hire dedicated PHP programmer?</span></Accordion.Header>
                                <Accordion.Body>
                                
                                <p>There are a large number of individual PHP developers and staffing agencies who are willing to provide services. However, you need to look for the one that brings you maximum advantages.
                                </p>
                                <br/>
                                <p>With Uplers and its intent to build a long-term association between the client & the talent, we ensure satisfaction from both sides to achieve this goal.</p>
                                
                                <br/>
                                </Accordion.Body>
                            </Accordion.Item>
                    </Accordion>
                    <br/>
                    <Accordion defaultActiveKey="6">
                            <Accordion.Item>
                                <Accordion.Header><span>Will the PHP Developers work according to my timezone preference?</span></Accordion.Header>
                                <Accordion.Body>
                                
                                <p>You have the freedom and control to manage the PHP coders according to your time zone, culture, processes and work priorities.
                                
                                </p>
                                
                                <br/>
                                </Accordion.Body>
                            </Accordion.Item>
                    </Accordion>
                    <br/>
                    <Accordion defaultActiveKey="7">
                            <Accordion.Item>
                                <Accordion.Header><span>Why hire dedicated PHP programmers from an agency, not freelancers?</span></Accordion.Header>
                                <Accordion.Body>
                                
                                <p>Uplers’ pool of top PHP Developers undergo an aggressive vetting process and we pay our developers 1.5x of local pay to ensure better retention and high quality. Moreover, we also go an extra mile by taking care of the administrative tasks.
                                
                                </p>
                                
                                <br/>
                                </Accordion.Body>
                            </Accordion.Item>
                    </Accordion>
                    <br/>
                    <Accordion defaultActiveKey="8">
                            <Accordion.Item>
                                <Accordion.Header><span>Is there any maintenance and support provided by you?</span></Accordion.Header>
                                <Accordion.Body>
                                
                                <p>Yes, Uplers helps tackle your business needs head-on and gives you freedom from pre/post-hiring responsibilities.
                                
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

export default FrequentlyAsked6