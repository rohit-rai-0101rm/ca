import React from 'react'
import SectionTitle from '../../elements/section-title/SectionTitle'
import Accordion from 'react-bootstrap/Accordion';
import FaqOne from '../../data/faq/FaqFour.json';
const allData = FaqOne;

const FrequentlyAsked2 = () => {
  return (
    <div className="section section-padding-equal bg-color-light faq-area">
    <div className="container">
        <div className="row">
        <center> <h2>Frequently asked questions</h2> </center> 
            
            <div className="col-lg-12 col-xl-12">
                <div className="faq-accordion">
                    <Accordion defaultActiveKey="1">
                            <Accordion.Item>
                                <Accordion.Header><span>Why Hire an AngularJS Developer?</span></Accordion.Header>
                                <Accordion.Body>
                                <p>AngularJS is a JavaScript framework for the front-end advancement of mobile & web application projects. When businesses want a customer driven approach, AngularJS wins over other frameworks for building mobile and web apps. It is helpful in Improving Design Architecture, Faster application development and Code Reusability.
                                </p>
                                <br/>
                                 </Accordion.Body>
                            </Accordion.Item>
                    </Accordion>
                    <br/>
                    <Accordion defaultActiveKey="2">
                            <Accordion.Item>
                                <Accordion.Header><span>What should I look for while hiring an Angular developer from India?</span></Accordion.Header>
                                <Accordion.Body>
                                
                                <p>Things to look at while hiring an Angular developer</p>
                                <br/>
                                <ul>
                                    <li>Be proficient with the AngularJS Framework.</li>
                                    <li>Be proficient with core JavaScript.</li>
                                    <li>Expert in RESTful APIs.</li>
                                    <li>Work with Node. Js and Webpack.</li>
                                </ul>
                                
                                <br/>
                                </Accordion.Body>
                            </Accordion.Item>
                    </Accordion>
                    <br/>
                    <Accordion defaultActiveKey="3">
                            <Accordion.Item>
                                <Accordion.Header><span>Why Choose AngularJS for Web Application Development?</span></Accordion.Header>
                                <Accordion.Body>
                                
                                <p>AngularJS offers dynamic features and exclusive advantages that distinguish it from other frameworks. It put forward an agile web app development process that is highly efficient in saving both time and cost required to complete the entire web app development process. Frameworks like this facilitate complete assistance in the entire process, and offer features such as dependency injection, parallel development, convenient testing, and simple architecture.
                                
                                </p>
                                
                                <br/>
                               
                                </Accordion.Body>
                            </Accordion.Item>
                    </Accordion>
                    <br/>
                    <Accordion defaultActiveKey="4">
                            <Accordion.Item>
                                <Accordion.Header><span>Difference between Angular & AngularJS?</span></Accordion.Header>
                                <Accordion.Body>
                                
                                <p>First of all, Angular is based on TypeScript while AngularJS is based on JavaScript. The architecture of Angular uses components and directive whereas AngularJS works on MVC design. Angular is much faster than AngularJS. In fact, developers claim that if built correctly Angular applications are up to five times faster than AngularJS applications.
                                
                                </p>
                                
                                <br/>
                                
                            
                                </Accordion.Body>
                            </Accordion.Item>
                    </Accordion>
                    <br/>
                    <Accordion defaultActiveKey="5">
                            <Accordion.Item>
                                <Accordion.Header><span>Is building a web app in AngularJS a secure choice?</span></Accordion.Header>
                                <Accordion.Body>
                                
                                <p>Building a web app in AngularJS is a secure choice because of its automatic output encoding, supports strict contextual escaping and has an in-built content security policy (CSP).
                                
                                </p>
                                
                                <br/>
                                </Accordion.Body>
                            </Accordion.Item>
                    </Accordion>
                    <br/>
                    <Accordion defaultActiveKey="6">
                            <Accordion.Item>
                                <Accordion.Header><span>Is AngularJS suitable for developing mobile-friendly applications?</span></Accordion.Header>
                                <Accordion.Body>
                                
                                <p>AngularJS is an excellent tool for building any mobile app. This framework can be used to create web applications that run on any device. AngularJS can be combined with NativeScript, another open-source framework that enables iOS and Android development.
                                
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

export default FrequentlyAsked2