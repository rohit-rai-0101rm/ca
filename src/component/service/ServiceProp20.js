import React from 'react';
import { Link } from 'react-router-dom';
import ServiceData from "../../data/service/ServiceMain21.json";
import { slugify } from '../../utils';


const AllData = ServiceData;

const ServiceProp20= ({colSize, serviceStyle, itemShow, marginTop}) => {

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
			{AllData.slice(0, itemShow).map((data, index) => (
				<div className={`${colSize} ${topMargin(index)}`} key={index} >
					<div className={`services-grid ${serviceStyle}`}>
						<div className="thumbnail">
							<img src={process.env.PUBLIC_URL + data.image} alt="icon" />
						</div>
						<div className="content">
							<h5 className="title"> 
								<Link to={process.env.PUBLIC_URL + `/service-details/${slugify(data.title)}`}>{data.title}</Link>
							</h5>
							<Link to={process.env.PUBLIC_URL + `/service-details/${slugify(data.description)}`}>
								
								<p className='innovate-list-para'>
								{data.description}

								</p>
								
								
								</Link>
						</div>
					</div>
					
			 	</div>
			))}
		
		</>
    )
}

export default ServiceProp20 ;