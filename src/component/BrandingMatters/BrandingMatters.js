import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import SectionTitle from '../../elements/section-title/SectionTitle';
import { FaCompress, FaCode, FaGlobe } from 'react-icons/fa';


const BrandingMatters = () => {
    return (
      <div className="section-padding bg-color-light">
        <div className="container">
            <div className="row">
            <div className="col-lg-12">
                <div className="why-choose-us ">
           
                <h1>
                    Why branding matters
                 
                </h1> 
                <br/>
                <br/>
                <h5>A platform that takes care of everything beforehand. Uplers sources, vets, matches and manages all the talents.</h5> 
          
               
                    <Accordion defaultActiveKey="1">
                        <Accordion.Item eventKey="1">
                            <Accordion.Header><FaCompress /> Share the Job Description</Accordion.Header>
                            <Accordion.Body>
                            Share complete roles and responsibilities, must-have skills, necessary market experience and budget.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="2">
                            <Accordion.Header><FaCode /> Review & Shortlist the Matches</Accordion.Header>
                            <Accordion.Body>
                            We'll match the best-fitted profile(s) in the next 48 hours for your review. You shortlist and share the time slots for us to schedule interviews.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="3">
                            <Accordion.Header><FaGlobe /> Interview & Hire</Accordion.Header>
                            <Accordion.Body>
                            Assess them until you are confident and provide feedback.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="4">
                            <Accordion.Header><FaGlobe /> Onboard & Manage</Accordion.Header>
                            <Accordion.Body>
                            We'll sort all the legalities and contracts with the talent, ensure a smooth onboarding and help you manage the talent.
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </div>
            </div>
            <div className="col-xl-5 col-lg-6 offset-xl-1">
                <div className="why-choose-us mb--30">
                </div>
            </div>
            </div>
        </div>
        </div>

    )
}

export default BrandingMatters;