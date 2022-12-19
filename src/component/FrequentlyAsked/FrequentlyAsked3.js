import React from 'react'
import SectionTitle from '../../elements/section-title/SectionTitle'
import Accordion from 'react-bootstrap/Accordion';
import FaqOne from '../../data/faq/FaqFour.json';
const allData = FaqOne;

const FrequentlyAsked3 = () => {
  return (
    <div className="section section-padding-equal bg-color-light faq-area">
    <div className="container">
        <div className="row">
        <center> <h4>Frequently asked questions</h4> </center> 
            
            <div className="col-lg-12 col-xl-12">
                <div className="faq-accordion">
                    <Accordion defaultActiveKey="1">
                            <Accordion.Item>
                                <Accordion.Header><span>How much will it cost to hire a NodeJS developer from Dignifyd?</span></Accordion.Header>
                                <Accordion.Body>
                                <p className='innovate-list-para'>The full-time hiring of a NodeJS developer from us will cost you approximately $3000 a month which is subjective to the skillset and experience of the candidate.
                                </p>
                                <br/>
                                 </Accordion.Body>
                            </Accordion.Item>
                    </Accordion>
                    <br/>
                    <Accordion defaultActiveKey="2">
                            <Accordion.Item>
                                <Accordion.Header><span>How do I hire NodeJS Developers through Dignifyd?</span></Accordion.Header>
                                <Accordion.Body>
                                
                                <p className='innovate-list-para'>You can hire NodeJS programmers on-demand who work as an extension to your in-house web development team.</p>
                                <br/>
                                <p className='innovate-list-para'><strong>Step 1: </strong> Share your requirement of hiring talent</p>
                                <p className='innovate-list-para'><strong>Step 2: </strong> We shortlist the right fit from a pool of talented profiles</p>
                                <p className='innovate-list-para'><strong>Step 3: </strong> You select the suitable candidate and take the interview</p>
                                <p className='innovate-list-para'><strong>Step 4: </strong> Onboard talent and start your work.</p>
                                
                                <br/>
                                </Accordion.Body>
                            </Accordion.Item>
                    </Accordion>
                    <br/>
                    <Accordion defaultActiveKey="3">
                            <Accordion.Item>
                                <Accordion.Header><span>What is the average work experience of a NodeJS developer hired through Dignifyd?</span></Accordion.Header>
                                <Accordion.Body>
                                
                                <p className='innovate-list-para'>The average work experience of NodeJS developers hired through us is of senior level, which is 5+ years.
                                
                                </p>
                                
                                <br/>
                               
                                </Accordion.Body>
                            </Accordion.Item>
                    </Accordion>
                    <br/>
                    <Accordion defaultActiveKey="4">
                            <Accordion.Item>
                                <Accordion.Header><span>What applications can be developed through Node.js framework?</span></Accordion.Header>
                                <Accordion.Body>
                                
                                <p className='innovate-list-para'>Many applications can be developed using NodeJS. Below are the most popular apps like real-time chat-bots, collaboration tools, streaming apps, and Single Page Applications (SPAs).
                                
                                </p>
                                
                                <br/>
                                
                            
                                </Accordion.Body>
                            </Accordion.Item>
                    </Accordion>
                    <br/>
                    <Accordion defaultActiveKey="5">
                            <Accordion.Item>
                                <Accordion.Header><span>How long will it take to hire Node JS programmers from Dignifyd?</span></Accordion.Header>
                                <Accordion.Body>
                                
                                <p className='innovate-list-para'>Depending upon your requirement, you can hire a dedicated Node.js programmer in India from us in 2-4 weeks.
                                
                                </p>
                                
                                <br/>
                                </Accordion.Body>
                            </Accordion.Item>
                    </Accordion>
                    <br/>
                    <Accordion defaultActiveKey="6">
                            <Accordion.Item>
                                <Accordion.Header><span>Why should I hire a dedicated NodeJS developer from India?</span></Accordion.Header>
                                <Accordion.Body>
                                
                                <p className='innovate-list-para'>Hiring a dedicated NodeJS developer in your team is key if you’re looking to-
                                
                                </p>
                                
                                <br/>
                                <ul>
                                    <li>Manage the tasks personally with greater team control</li>
                                    <li>Upscale and downscale on-demand</li>
                                    <li>- Get someone reliable on-board</li>
                                </ul>
                                
                             
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

export default FrequentlyAsked3