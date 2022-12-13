import React from 'react'
import SectionTitle from '../../elements/section-title/SectionTitle'
import Accordion from 'react-bootstrap/Accordion';
import FaqOne from '../../data/faq/FaqFour.json';
const allData = FaqOne;

const FrequentlyAsked4= () => {
  return (
    <div className="section section-padding-equal bg-color-light faq-area">
    <div className="container">
        <div className="row">
        <center> <h2>Frequently asked questions</h2> </center> 
            
            <div className="col-lg-12 col-xl-12">
                <div className="faq-accordion">
                    <Accordion defaultActiveKey="1">
                            <Accordion.Item>
                                <Accordion.Header><span>How long will it take to hire a developer?</span></Accordion.Header>
                                <Accordion.Body>
                                <p>WordPress hiring can take between 2 to 4 weeks, depending upon the skills and experience.
                                </p>
                                <br/>
                                 </Accordion.Body>
                            </Accordion.Item>
                    </Accordion>
                    <br/>
                    <Accordion defaultActiveKey="2">
                            <Accordion.Item>
                                <Accordion.Header><span>How do you make sure the developer you find for me will fit my needs?</span></Accordion.Header>
                                <Accordion.Body>
                                
                                <p>We have an exhaustive gathering process with clients to understand their needs. Moreover, we conduct a vetting process for talent to get an in-depth understanding of their capabilities. This process helps us with the right matchmaking of talent and clients.</p>
                                <br/>
                                <p>While we will share relevant profiles with you, you will be interviewing the candidates and making the final selection before you hire WordPress Developer.</p>
                                
                                <br/>
                                </Accordion.Body>
                            </Accordion.Item>
                    </Accordion>
                    <br/>
                    <Accordion defaultActiveKey="3">
                            <Accordion.Item>
                                <Accordion.Header><span>What is your developer's vetting process?</span></Accordion.Header>
                                <Accordion.Body>
                                
                                <p>Every developer who applies at Uplers has to go through a 5 stage assessment, which includes - Communication Test, Aptitude test, Technical MCQ test, Live Coding test, and a final Technical Interview round.
                                
                                </p>
                                
                                <br/>
                               
                                </Accordion.Body>
                            </Accordion.Item>
                    </Accordion>
                    <br/>
                    <Accordion defaultActiveKey="4">
                            <Accordion.Item>
                                <Accordion.Header><span>How much does it cost to hire a dedicated WordPress developer on an hourly basis?</span></Accordion.Header>
                                <Accordion.Body>
                                
                                <p>The full-time hiring of a WordPress developer from us will cost you approximately $3000 a month which is subjective to the skill set and experience of the candidate.
                                
                                </p>
                                
                                <br/>
                                
                            
                                </Accordion.Body>
                            </Accordion.Item>
                    </Accordion>
                    <br/>
                    <Accordion defaultActiveKey="5">
                            <Accordion.Item>
                                <Accordion.Header><span>I want to hire a dedicated WordPress developer for both services that are design and development. How can Uplers help me with the same?</span></Accordion.Header>
                                <Accordion.Body>
                                
                                <p>We at Uplers have a curated talent pool of remote WordPress developers who are capable enough to pull off any tasks related to WordPress including Web Design, Web Development, Ongoing Maintenance, Theme Development, Plugin Development and many more.
                                
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

export default FrequentlyAsked4