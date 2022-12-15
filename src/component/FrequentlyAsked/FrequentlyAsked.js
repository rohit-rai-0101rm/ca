import React from 'react'
import SectionTitle from '../../elements/section-title/SectionTitle'
import Accordion from 'react-bootstrap/Accordion';
import FaqOne from '../../data/faq/FaqFour.json';
const allData = FaqOne;

const FrequentlyAsked = () => {
  return (
    <div className="section section-padding-equal bg-color-light faq-area">
    <div className="container">
        <div className="row">
        <center> <h2>Frequently asked questions</h2> </center> 
            
            <div className="col-lg-12 col-xl-12">
                <div className="faq-accordion">
                    <Accordion defaultActiveKey="1">
                            <Accordion.Item>
                                <Accordion.Header><span>How do I hire React developers through Dignifyd?</span></Accordion.Header>
                                <Accordion.Body>
                                <p>You can hire React developers from India on-demand who work as an extension to your in-house web development team.
                                </p>
                                <br/>
                                <p><strong>Step 1: </strong> Share your requirement of hiring talent</p>
                                <p><strong>Step 2: </strong> We shortlist the right fit from a pool of talented profiles</p>
                                <p><strong>Step 3: </strong> You select the suitable candidate and take the interview</p>
                                <p><strong>Step 4: </strong> Onboard talent and start your work.</p>
                                 </Accordion.Body>
                            </Accordion.Item>
                    </Accordion>
                    <br/>
                    <Accordion defaultActiveKey="2">
                            <Accordion.Item>
                                <Accordion.Header><span>What does a ReactJS developer do?</span></Accordion.Header>
                                <Accordion.Body>
                                
                                <p>A ReactJS developer is accountable for designing and implementing UI components for JavaScript-based web applications and mobile applications with the use of open-source library infrastructure. ReactJS developers are front-end developers who build modern-day UI components to improve application performance.
                                
                                </p>
                                
                                <br/>
                                </Accordion.Body>
                            </Accordion.Item>
                    </Accordion>
                    <br/>
                    <Accordion defaultActiveKey="3">
                            <Accordion.Item>
                                <Accordion.Header><span>What should I look at when hiring a ReactJS developer?</span></Accordion.Header>
                                <Accordion.Body>
                                
                                <p>While hiring ReactJS Developers from India at a high level, the candidate should be able to:
                                
                                </p>
                                
                                <br/>
                                <ul>
                                    <li>Work with and write semantic HTML tags</li>
                                    <li>Work with and write CSS selectors.</li>
                                    <li>Understand the box model and how to reset the border box.</li>
                                    <li>Understand flexbox.</li>
                                </ul>
                                </Accordion.Body>
                            </Accordion.Item>
                    </Accordion>
                    <br/>
                    <Accordion defaultActiveKey="4">
                            <Accordion.Item>
                                <Accordion.Header><span>What is the cost of hiring a ReactJS developer?</span></Accordion.Header>
                                <Accordion.Body>
                                
                                <p>The full-time hiring of a ReactJS developer from us will cost you approximately $2000 a month which is subjective to the skill set and experience of the candidate.
                                
                                </p>
                                
                                <br/>
                                
                            
                                </Accordion.Body>
                            </Accordion.Item>
                    </Accordion>
                    <br/>
                    <Accordion defaultActiveKey="5">
                            <Accordion.Item>
                                <Accordion.Header><span>Is it possible to migrate my existing web application into ReactJS?</span></Accordion.Header>
                                <Accordion.Body>
                                
                                <p>Yes, it is possible to migrate existing web applications into ReactJS because this is one of the best frameworks to develop a web application with. This method is cost-efficient, reusable in a wide variety of settings, and offers a more stable application.
                                
                                </p>
                                
                                <br/>
                                </Accordion.Body>
                            </Accordion.Item>
                    </Accordion>
                    <br/>
                    <Accordion defaultActiveKey="6">
                            <Accordion.Item>
                                <Accordion.Header><span>How does ReactJS differ from React Native?</span></Accordion.Header>
                                <Accordion.Body>
                                
                                <p>In ReactJS, virtual DOM is used to render browser code while in React Native, native APIs are used to render components in mobile. The apps developed with ReactJS render HTML in UI while React Native uses JSX for rendering UI.
                                
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

export default FrequentlyAsked