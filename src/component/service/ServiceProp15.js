import React from 'react';
import { Link } from 'react-router-dom';
import ServiceData from "../../data/service/ServiceMain16.json";
import { slugify } from '../../utils';


const AllData = ServiceData;

const ServiceProp15 = ({colSize, serviceStyle, itemShow, marginTop}) => {

	const topMargin = (index) => {
		if (marginTop === "yes") {
			if (index === 0) {
				return "mt--200 mt_md--0";
			} else if (index === 1) {
				return "mt--100 mt_md--0";
			}else {
				return "mt--0";
			}
		}else {
			return "";
		}
	}

    return (
		<>
			
				<div className={`${colSize}` } >
				
				<h4 className="coloringtext" >Hire Salesforce Functional Consultants</h4>
				  
					<p className='innovate-list-paraABC '>Talents with extensive knowledge of the Salesforce platform & its architecture</p>
					<div className={`services-grid ${serviceStyle}`}>
					
						<div className="thumbnail">
							<img src="/images/icon/icon-1.png" alt="icon" />
						</div>
						
						<div className="content">
							
						<h5 className="title"> 
								<Link>Functional implementation</Link>
							</h5>
							<p className='innovate-list-paraABC'>Our adept consultants take care of solution design, the configuration of Salesforce, and systems' overall functional implementation and usability.</p>

						</div>
					</div>

					<div className={`services-grid ${serviceStyle}`}>
						<div className="thumbnail">
							<img src="/images/icon/icon-1.png" alt="icon" />
						</div>
						<div className="content">
						<h5 className="title"> 
								<Link>On top of cognitive technologies</Link>
							</h5>
							<p className='innovate-list-paraABC'>Our functional consultants are adept at cognitive technologies like Robotics Process Automation, Artificial Intelligence, Data Analytics, etc.</p>

						</div>
					</div>

					<div className={`services-grid ${serviceStyle}`}>
						<div className="thumbnail">
							<img src="/images/icon/icon-1.png" alt="icon" />
						</div>
						<div className="content">
						<h5 className="title"> 
								<Link>Maximizing investment</Link>
							</h5>
							<p className='innovate-list-paraABC'>You can expect our pre-vetted talents to proficiently solve the most complex business challenges and make the most of the Salesforce platform.</p>

						</div>
					</div>
					<div className={`services-grid ${serviceStyle}`}>
					
						<div className="thumbnail">
							<img src="/images/icon/icon-1.png" alt="icon" />
						</div>
						<div className="content">
						<h5 className="title"> 
								<Link>Effective communication and presentation</Link>
							</h5>
							<p className='innovate-list-paraABC'>Our functional consultants possess the ability to effectively present ideas, issues, and solutions to stakeholders of all levels.</p>

						</div>
					</div>
			 	</div>
				 <div className={`${colSize}` } >
				
					<h4 className='coloringtext'>Hire Salesforce Technical Consultants</h4>
				<p className='innovate-list-paraABC '>Talents with extensive experience in systems 
				<br/>
				integration</p>
					<div className={`services-grid ${serviceStyle}`}>
						<div className="thumbnail">
							<img src="/images/icon/icon-1.png" alt="icon" />
						</div>
						<div className="content">
						<h5 className="title"> 
								<Link>Creating design artifacts</Link>
							</h5>
							<p className='innovate-list-paraABC'>Our technical consultant will create and maintain best-practice design artifacts such as Business Process Flows and Entity Relationship Diagrams.</p>

						</div>
					</div>

					<div className={`services-grid ${serviceStyle}`}>
						<div className="thumbnail">
							<img src="/images/icon/icon-1.png" alt="icon" />
						</div>
						<div className="content">
						<h5 className="title"> 
								<Link>Building SQL queries</Link>
							</h5>
							<p className='innovate-list-paraABC'>Our consultants will seamlessly build SQL queries, use the data loader, and utilize analytics tools. Additionally, they’re familiar with software like GitHub.</p>

						</div>
					</div>

					<div className={`services-grid ${serviceStyle}`}>
						<div className="thumbnail">
							<img src="/images/icon/icon-1.png" alt="icon" />
						</div>
						<div className="content">
						<h5 className="title"> 
								<Link>System configuration</Link>
							</h5>
							<p className='innovate-list-paraABC'>The technical consultants have extensive experience with system configuration, approval processes, custom objects, validation rules, flows, and data loaders.</p>

						</div>
					</div>
					<div className={`services-grid ${serviceStyle}`}>
						<div className="thumbnail">
							<img src="/images/icon/icon-1.png" alt="icon" />
						</div>
						<div className="content">
						<h5 className="title"> 
								<Link>Defining strategy</Link>
							</h5>
							<p className='innovate-list-paraABC'>The consultants define systems strategy and business processes, design and prototype, test, and implement practical business solutions.</p>

						</div>
					</div>
			 	</div>
		</>
    )
}

export default ServiceProp15 ;