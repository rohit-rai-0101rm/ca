import React from 'react'
import SectionTitle from '../../elements/section-title/SectionTitle'
import Accordion from 'react-bootstrap/Accordion';
import FaqOne from '../../data/faq/FaqFour.json';
const allData = FaqOne;

const FrequentlyAsked7 = () => {
  return (
    <div className="section section-padding-equal bg-color-light faq-area">
    <div className="container">
        <div className="row">
        <center> <h2>Frequently asked questions</h2> </center> 
            
            <div className="col-lg-12 col-xl-12">
                <div className="faq-accordion">
                    <Accordion defaultActiveKey="1">
                            <Accordion.Item>
                                <Accordion.Header><span>Who is a WordPress Plugin Developer?</span></Accordion.Header>
                                <Accordion.Body>
                                <p>A WordPress plugin developer is a professional that provides powerful features to a WordPress site by creating a custom-built plugin with knowledge of functionalities and coding. They also work with clients to deliver high-performance, scalable, SEO-friendly plugins that are easy to integrate.
                                </p>
                                <br/>
                                 </Accordion.Body>
                            </Accordion.Item>
                    </Accordion>
                    <br/>
                    <Accordion defaultActiveKey="2">
                            <Accordion.Item>
                                <Accordion.Header><span>Why do you need to develop WordPress plugins?</span></Accordion.Header>
                                <Accordion.Body>
                                
                                <p>Plugins are essential to add power to your website, build backlinks, maintain security, and improve performance.</p>
                                <br/>
                                
                                <br/>
                                </Accordion.Body>
                            </Accordion.Item>
                    </Accordion>
                    <br/>
                    <Accordion defaultActiveKey="3">
                            <Accordion.Item>
                                <Accordion.Header><span>How long will it take to hire a WordPress plugin developer?</span></Accordion.Header>
                                <Accordion.Body>
                                
                                <p>It will take 1-2 weeks to source WordPress plugin developer talent on Uplers, depending on skillsets and experience.
                                
                                </p>
                                
                                <br/>
                               
                                </Accordion.Body>
                            </Accordion.Item>
                    </Accordion>
                    <br/>
                    <Accordion defaultActiveKey="4">
                            <Accordion.Item>
                                <Accordion.Header><span>How much does it cost to hire a WordPress plugin developer?</span></Accordion.Header>
                                <Accordion.Body>
                                
                                <p>It will cost you approximately $3000/month to hire a WordPress developer, depending on their experience and skill set.
                                
                                </p>
                                
                                <br/>
                                
                            
                                </Accordion.Body>
                            </Accordion.Item>
                    </Accordion>
                    <br/>
                    <Accordion defaultActiveKey="5">
                            <Accordion.Item>
                                <Accordion.Header><span>Are there any advantages to hiring a WordPress plugin developer through Uplers?</span></Accordion.Header>
                                <Accordion.Body>
                                
                                <p>Yes! With Uplers, you'll have instant access to India's top tech talent in one go. Also, with the easy hiring process, you’ll get to find scalable, reliable, dedicated WordPress developers at cost-effective rates.
                                
                                </p>
                                
                                <br/>
                                </Accordion.Body>
                            </Accordion.Item>
                    </Accordion>
                    <br/>
                    <Accordion defaultActiveKey="6">
                            <Accordion.Item>
                                <Accordion.Header><span>How do I hire a WordPress plugin developer from Uplers?</span></Accordion.Header>
                                <Accordion.Body>
                                
                                <p>Here is how you hire a pre- vetted talent from Uplers:</p>
                                <br/>
                                <p>Step 1: Share your requirement for hiring talent</p>
                                <p>Step 2: Review and shortlist the matches</p>
                                <p>Step 3: You select the right candidate and take an interview</p>
                                <p>Step 4: Ensure onboarding talent</p>
                                <br/>
                                </Accordion.Body>
                            </Accordion.Item>
                    </Accordion>
                    <br/>
                    <Accordion defaultActiveKey="7">
                            <Accordion.Item>
                                <Accordion.Header><span>Does Uplers offer any risk-free trials?</span></Accordion.Header>
                                <Accordion.Body>
                                
                                <p>Yes, Uplers offer 40 hours of risk-free trial. With this time, you can observe the engagement and figure out if it will be reliable or not. If you are satisfied with the results, you can continue with the deal. If not, we will provide you with another expert that fits your need. Also, conducting interviews doesn’t mean you have to hire compulsory. You can move on with ‘No questions asked’.</p>
                               
                               
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

export default FrequentlyAsked7