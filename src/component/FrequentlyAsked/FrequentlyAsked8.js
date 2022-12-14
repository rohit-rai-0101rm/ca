import React from 'react'
import SectionTitle from '../../elements/section-title/SectionTitle'
import Accordion from 'react-bootstrap/Accordion';
import FaqOne from '../../data/faq/FaqFour.json';
const allData = FaqOne;

const FrequentlyAsked8 = () => {
  return (
    <div className="section section-padding-equal bg-color-light faq-area">
    <div className="container">
        <div className="row">
        <center> <h2>Frequently asked questions</h2> </center> 
            
            <div className="col-lg-12 col-xl-12">
                <div className="faq-accordion">
                    <Accordion defaultActiveKey="1">
                            <Accordion.Item>
                                <Accordion.Header><span>Why do I need to hire a WordPress Designer from Uplers?</span></Accordion.Header>
                                <Accordion.Body>
                                <p>Hiring a WordPress Designer from Uplers helps you save 50% on salaries, offers flexible hiring models, zero recruitment costs, and no pre-hiring or post-hiring responsibilities to manage.
                                </p>
                                <br/>
                                 </Accordion.Body>
                            </Accordion.Item>
                    </Accordion>
                    <br/>
                    <Accordion defaultActiveKey="2">
                            <Accordion.Item>
                                <Accordion.Header><span>Does hiring a WordPress Designer from Uplers cost a lot?</span></Accordion.Header>
                                <Accordion.Body>
                                
                                <p>No, the cost to hire a WordPress Designer from Uplers depends on candidates' expertise and experience. Typically, it will cost you around $3000/month, thus dependent on multiple factors.</p>
                                <br/>
                                
                                <br/>
                                </Accordion.Body>
                            </Accordion.Item>
                    </Accordion>
                    <br/>
                    <Accordion defaultActiveKey="3">
                            <Accordion.Item>
                                <Accordion.Header><span>What are the best ways to hire a dedicated WordPress Designer in the USA?</span></Accordion.Header>
                                <Accordion.Body>
                                
                                <p>Many hiring platforms and outsourcing agencies are willing to offer web design services in the USA. However, you need to find one that brings value to your project. To achieve this goal, Uplers ensures the satisfaction of the client & talent to build a long-term relationship.
                                
                                </p>
                                
                                <br/>
                               
                                </Accordion.Body>
                            </Accordion.Item>
                    </Accordion>
                    <br/>
                    <Accordion defaultActiveKey="4">
                            <Accordion.Item>
                                <Accordion.Header><span>How to hire WordPress Designers through Dignifyd?</span></Accordion.Header>
                                <Accordion.Body>
                                
                                <p>To hire a WordPress Designer from Uplers, you have to follow a 4-step process-</p>

                                <br/>
                                <ul>
                                    <li>Share the level of expertise you required.</li>
                                    <li>We will shortlist the top candidates.</li>
                                    <li>You interview them.</li>
                                    <li>Last, hire the desired one.</li>
                                </ul>
                                
                            
                                </Accordion.Body>
                            </Accordion.Item>
                    </Accordion>
                    <br/>
                    <Accordion defaultActiveKey="5">
                            <Accordion.Item>
                                <Accordion.Header><span>What makes Uplers' WordPress Designers different?</span></Accordion.Header>
                                <Accordion.Body>
                                
                                <p>At Uplers, we thoroughly screen our WordPress web designers to ensure we only match you with high-quality talent. Dynamically, you'll work with WordPress Designers who understand your goals, technical needs, and team dynamics. However, our pre-vetted process is what makes us different.
                                
                                </p>
                                
                                <br/>
                                </Accordion.Body>
                            </Accordion.Item>
                    </Accordion>
                    <br/>
                    <Accordion defaultActiveKey="6">
                            <Accordion.Item>
                                <Accordion.Header><span>Do Uplers provide any maintenance and support?</span></Accordion.Header>
                                <Accordion.Body>
                                
                                <p>Yes, Uplers have an easy process to fix your business needs. Also, with us, you don't have to worry about pre or post-hire responsibilities.</p>
                                <br/>
                                </Accordion.Body>
                            </Accordion.Item>
                    </Accordion>
                    <br/>
                    <Accordion defaultActiveKey="7">
                            <Accordion.Item>
                                <Accordion.Header><span>Are there any hidden costs while hiring from Uplers?</span></Accordion.Header>
                                <Accordion.Body>
                                
                                <p>No, there will be no hidden cost for hiring talent from Uplers. In fact, Uplers offers 7 days completely free trial</p>
                               
                               
                                </Accordion.Body>
                            </Accordion.Item>
                    </Accordion>
                    <br/>
                    <Accordion defaultActiveKey="8">
                            <Accordion.Item>
                                <Accordion.Header><span>What tools do you use to control communication for a project?</span></Accordion.Header>
                                <Accordion.Body>
                                
                                <p>Generally, the talent you hire will use the tools preferred by your organization. However, we provide them with the necessary training for hassle-free communication during the project.</p>
                               
                               
                                </Accordion.Body>
                            </Accordion.Item>
                    </Accordion>
                    <br/>
                    <Accordion defaultActiveKey="9">
                            <Accordion.Item>
                                <Accordion.Header><span>Is it mandatory to hire a designer after the interview?</span></Accordion.Header>
                                <Accordion.Body>
                                
                                <p>No, it is up to you to choose the candidate that best suits your needs. Based on that, we will provide you with more candidates who meet your expectations and needs. If this doesn’t work, you can terminate with “ No Questions Asked”.</p>
                               
                               
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

export default FrequentlyAsked8