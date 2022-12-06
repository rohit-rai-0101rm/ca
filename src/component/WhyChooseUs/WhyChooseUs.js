import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import SectionTitle from '../../elements/section-title/SectionTitle';
import { FaCompress, FaCode, FaGlobe } from 'react-icons/fa';


const WhyChooseUs = () => {
    return (
      <div className="section-padding bg-color-light">
        <div className="container">
            <div className="row">
            <div className="col-lg-6">
                <div className="why-choose-us">
                <SectionTitle 
                   
                    title="There Are Plenty of Online Marketing Companies Why Choose Us?"
                    description="Wondering what sets our digital marketing services a cut above the rest? Take a look."
                    textAlignment="heading-left"
                    textColor=""
                />
                    <Accordion defaultActiveKey="1">
                        <Accordion.Item eventKey="1">
                            <Accordion.Header><FaCompress /> Ample Industry Experience</Accordion.Header>
                            <Accordion.Body>

                            Over the course of our 10+ years of service, we have had the pleasure of working with a multitude of clients and industries, the experience of which we leverage while working with new customers.                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="2">
                            <Accordion.Header><FaCode /> Global Client Base</Accordion.Header>
                            <Accordion.Body>
                            We have had the pleasure of serving 7000+ clients around the globe which has helped us get familiar with diverse work cultures.                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="3">
                            <Accordion.Header><FaGlobe /> Dedicated point-of-contact</Accordion.Header>
                            <Accordion.Body>
                            We provide a single point of contact for communication and rapid resolution of your queries.                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="4">
                            <Accordion.Header><FaGlobe /> Strict NDA</Accordion.Header>
                            <Accordion.Body>
We prioritize your privacy and security and ensure that the integrity of any sensitive information and data you share with us remains protected at all times.                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                    
                </div>
            </div>
            <div className="col-xl-5 col-lg-6 offset-xl-1">
                <div className="why-choose-us mb--30">
                <div className="why-choose-thumb">
                    <img src={process.env.PUBLIC_URL + "/images/about/about-3.png"} alt="Office" />
                </div>
                </div>
            </div>
            </div>
        </div>
        </div>

    )
}

export default WhyChooseUs;