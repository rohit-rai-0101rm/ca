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
                <div className="why-choose-us centerthediv">
           
                <h1>
                    Why branding matters
                 
                </h1> 
                <br/>
                <br/>
                <h5>A platform that takes care of everything beforehand. Uplers sources, vets, matches and manages all the talents.</h5> 
          
               
                    <Accordion defaultActiveKey="1">
                        <Accordion.Item eventKey="1">
                            <Accordion.Header><FaCompress /> Strategy</Accordion.Header>
                            <Accordion.Body>
                            Aenean hendrerit laoreet vehicula. Nullam convallis augue at enim gravida pellentesque.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="2">
                            <Accordion.Header><FaCode /> Design</Accordion.Header>
                            <Accordion.Body>
                            Aenean hendrerit laoreet vehicula. Nullam convallis augue at enim gravida pellentesque.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="3">
                            <Accordion.Header><FaGlobe /> Development</Accordion.Header>
                            <Accordion.Body>
                            Aenean hendrerit laoreet vehicula. Nullam convallis augue at enim gravida pellentesque.
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