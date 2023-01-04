import React from 'react';
import { Link } from 'react-router-dom';
import { slugify } from '../../utils';



const ServiceProp3 = ({colSize, serviceStyle, serviceData}) => {

    return (
		<>
			{serviceData.map((data, index) => (
				<div className={colSize} key={index} >
					<div className={`services-grid ${serviceStyle}`}>
						<div className="thumbnail">
							<img src={process.env.PUBLIC_URL + data.image} alt="icon" />
						</div>
						<div className="content">
							<h6 className="title"> 
								<Link >{data.title}</Link>
							</h6>
							<p>{data.description}</p>
							<br/>
							<br/>

							<Link to={process.env.PUBLIC_URL + `/contact`} className="more-btn">Find out more</Link>
						</div>
					</div>
			 	</div>
			))}
		</>
    )
}

export default ServiceProp3;