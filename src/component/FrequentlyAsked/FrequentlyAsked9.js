import React from 'react'
import SectionTitle from '../../elements/section-title/SectionTitle'
import Accordion from 'react-bootstrap/Accordion';
import FaqOne from '../../data/faq/FaqFour.json';
const allData = FaqOne;

const FrequentlyAsked9= () => {
  return (
    <div className="section section-padding-equal bg-color-light faq-area">
    <div className="container">
        <div className="row">
        <center> <h2>Frequently asked questions</h2> </center> 
            
            <div className="col-lg-12 col-xl-12">
                <div className="faq-accordion">
                    <Accordion defaultActiveKey="1">
                            <Accordion.Item>
                                <Accordion.Header><span>How long will it take to hire a Shopify developer from Dignifyd?</span></Accordion.Header>
                                <Accordion.Body>
                                <p>Depending upon your requirement, you can onboard Shopify developers from us in 2-4 weeks.
                                </p>
                                <br/>
                                 </Accordion.Body>
                            </Accordion.Item>
                    </Accordion>
                    <br/>
                    <Accordion defaultActiveKey="2">
                            <Accordion.Item>
                                <Accordion.Header><span>How do I hire Shopify Developers through Dignifyd?</span></Accordion.Header>
                                <Accordion.Body>
                                
                                <p>You can hire Shopify experts on-demand who work as an extension to your in-house web development team.</p>
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
                                <Accordion.Header><span>Is there a way that the hired Shopify developers can assist me with QA?</span></Accordion.Header>
                                <Accordion.Body>
                                
                                <p>Our Shopify Programmers are equipped to help you with conducting a QA. However, hiring a QA expert will make a better impact altogether. A dedicated QA will assure smooth results throughout.
                                
                                </p>
                                
                                <br/>
                               
                                </Accordion.Body>
                            </Accordion.Item>
                    </Accordion>
                    <br/>
                    <Accordion defaultActiveKey="4">
                            <Accordion.Item>
                                <Accordion.Header><span>Will the hired team give 100% of their time?</span></Accordion.Header>
                                <Accordion.Body>
                                
                                <p>We follow 100% transparent practices here. Our talent will be happy to do a time entry in your preferred tool or our system and we will send you the time tracking every week. This will give you a complete idea of where the time is utilized and if there are any hours that are not utilized. Moreover, as per our process and practices - your hired Shopify expert developer will inform you personally if they have any time left on a real-time basis.
                                
                                </p>
                                
                                <br/>
                                
                            
                                </Accordion.Body>
                            </Accordion.Item>
                    </Accordion>
                    <br/>
                    <Accordion defaultActiveKey="5">
                            <Accordion.Item>
                                <Accordion.Header><span>What is the ramp-up period in case we want to hire more Shopify Expert Developers?</span></Accordion.Header>
                                <Accordion.Body>
                                
                                <p>It will take 2-4 weeks in case you need additional people to join your team.
                                
                                </p>
                                
                                <br/>
                                </Accordion.Body>
                            </Accordion.Item>
                    </Accordion>
                    <br/>
                    <Accordion defaultActiveKey="6">
                            <Accordion.Item>
                                <Accordion.Header><span>Is there a trial period when hiring Shopify Expert Developers for my project?</span></Accordion.Header>
                                <Accordion.Body>
                                
                                <p>Yes, we offer a 2 weeks risk-free trial. This gives you the time to observe and understand if the engagement will be successful. You can go ahead and continue the partnership if you’re completely satisfied with the results. If not, we can provide you with another expert who may be a better fit.
                                
                                </p>
                                
                                <br/>
                                </Accordion.Body>
                            </Accordion.Item>
                    </Accordion>
                    <br/>
                    <Accordion defaultActiveKey="7">
                            <Accordion.Item>
                                <Accordion.Header><span>I am someone with less or no technical knowledge about Shopify Development. How can you help me with that?</span></Accordion.Header>
                                <Accordion.Body>
                                
                                <p>When you hire Shopify experts from Dignifyd, you need not worry about the development process and post-deployment services. We ensure that your queries are taken care of by our technical experts so that you can manage your website post its deployment. We always have a support team to help you.
                                
                                </p>
                                
                                <br/>
                                </Accordion.Body>
                            </Accordion.Item>
                    </Accordion>
                    <br/>
                    <Accordion defaultActiveKey="8">
                            <Accordion.Item>
                                <Accordion.Header><span>What would be the average cost to hire a dedicated Shopify developer? Who is going to manage my team?</span></Accordion.Header>
                                <Accordion.Body>
                                
                                <p>The cost varies based on the skills and talent of our Shopify website experts i.e. Junior-level, Mid-Level, and Senior-Level. Generally, it starts from $25/hour. You can download the ratecard. Our team of HR professionals and talent experts will manage it for you.
                                
                                </p>
                                
                                <br/>
                                </Accordion.Body>
                            </Accordion.Item>
                    </Accordion>
                    <br/>
                    <Accordion defaultActiveKey="9">
                            <Accordion.Item>
                                <Accordion.Header><span>What are the support services you offer post-project deployment?</span></Accordion.Header>
                                <Accordion.Body>
                                
                                <p>Yes, we do offer support and technical assistance post the project deployment services as we believe that the real business starts from here.
                                
                                </p>
                                
                                <br/>
                                </Accordion.Body>
                            </Accordion.Item>
                    </Accordion>
                    <br/>
                    <Accordion defaultActiveKey="10">
                            <Accordion.Item>
                                <Accordion.Header><span>What are the top UI/UX practices your Shopify Expert Developers follow?</span></Accordion.Header>
                                <Accordion.Body>
                                
                                <p>When we talk about our UI/UX designs - they stand out. Reason - we follow aggressive quality measures and usability checks to ensure that your online store stands out and is a crowd-puller too.
                                
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

export default FrequentlyAsked9