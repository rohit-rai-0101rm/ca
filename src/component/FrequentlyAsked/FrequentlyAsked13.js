import React from 'react'
import SectionTitle from '../../elements/section-title/SectionTitle'
import Accordion from 'react-bootstrap/Accordion';
import FaqOne from '../../data/faq/FaqFour.json';
const allData = FaqOne;

const FrequentlyAsked13= () => {
  return (
    <div className="section section-padding-equal bg-color-light faq-area">
    <div className="container">
        <div className="row">
        <center> <h2>Frequently asked questions</h2> </center> 
            
            <div className="col-lg-12 col-xl-12">
                <div className="faq-accordion">
                    <Accordion defaultActiveKey="1">
                            <Accordion.Item>
                                <Accordion.Header><span>What is the cost of hiring a salesforce admin through Dignifyd?</span></Accordion.Header>
                                <Accordion.Body>
                                <p>The full-time hiring of a Salesforce Administrator from us will cost you approximately $2000 a month. There are various factors that determine the hiring cost, including administrators' years of technical experience with Salesforce, Salesforce certifications they have, specific vertical industry experience, exposure to large projects, etc.
                                </p>
                                <br/>
                                 </Accordion.Body>
                            </Accordion.Item>
                    </Accordion>
                    <br/>
                    <Accordion defaultActiveKey="2">
                            <Accordion.Item>
                                <Accordion.Header><span>What are the Skills of your Salesforce administrator?</span></Accordion.Header>
                                <Accordion.Body>
                                
                                <p>Our Salesforce Administrators or admins are equipped with maintaining and customizing the platform, fixing bugs, and creating necessary reports. They also provide Salesforce training and end-user support. As they come with knowledge of Salesforce database creation and maintenance, they are responsible for creating Salesforce profiles, allocating roles, and managing access.</p>
                                <br/>
                                
                                
                                <br/>
                                </Accordion.Body>
                            </Accordion.Item>
                    </Accordion>
                    <br/>
                    <Accordion defaultActiveKey="3">
                            <Accordion.Item>
                                <Accordion.Header><span>What is the process to hire a Salesforce admin?</span></Accordion.Header>
                                <Accordion.Body>
                                
                                <p>You can hire Salesforce consultants from India on-demand who work as an extension to your in-house team.
                                
                                </p>
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
                    <Accordion defaultActiveKey="4">
                            <Accordion.Item>
                                <Accordion.Header><span>What if services of the hired Salesforce admin are not satisfactory?</span></Accordion.Header>
                                <Accordion.Body>
                                
                                <p>We have an exhaustive briefing process with clients to understand their needs. This process helps us with the right matchmaking of talent and clients. However, if you're not satisfied with the performance of the hired resource, you can avail our 30-day replacement policy.
                                
                                </p>
                                
                                <br/>
                                
                            
                                </Accordion.Body>
                            </Accordion.Item>
                    </Accordion>
                    <br/>
                    <Accordion defaultActiveKey="5">
                            <Accordion.Item>
                                <Accordion.Header><span>Will I have total control over your Salesforce admin hired through Dignifyd?</span></Accordion.Header>
                                <Accordion.Body>
                                
                                <p>The best part of hiring talent from Uplers is that you not only have complete control over the resources you hire, but you’d be free from any pre and post-hiring responsibilities.
                                
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

export default FrequentlyAsked13