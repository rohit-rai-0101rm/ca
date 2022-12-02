import React from 'react';
import { Link } from 'react-router-dom';
import TeamData from "../../data/team/TeamData.json";
import { slugify } from '../../utils';

const allData = TeamData;

const TeamOne = () => {
    return (
        <div className="section section-padding-technologies bg-color-dark pb--70 pb_lg--20 pb_md--0">
        <div className="container">
            <div className="section-heading heading-light">
            <h2 className="title mb--50">Integrating Cutting-edge Web <br/>
            <strong>
            technologies
            </strong>
            
            </h2>
        
            </div>
            <div className="row">
                {allData.map((data) => (
                    <div className="col-xl-3 col-sm-6" key={data.id}>
                        <div className="team-grid">
                            <div className="thumbnail">
                                <Link to={process.env.PUBLIC_URL + `/team-details/${slugify(data.title)}`}>
                                    <img className='technologyImages' src={process.env.PUBLIC_URL + data.thumb} alt={data.title} />
                                </Link>
                            </div>
                         
                        </div>
                    </div>
                ))}
            </div>
        </div>
        <ul className="list-unstyled shape-group-10">
            <li className="shape shape-1"><img src={process.env.PUBLIC_URL + "/images/others/circle-1.png"} alt="Circle" /></li>
            <li className="shape shape-2"><img src={process.env.PUBLIC_URL + "/images/others/line-3.png"} alt="Circle" /></li>
            <li className="shape shape-3"><img src={process.env.PUBLIC_URL + "/images/others/bubble-5.png"} alt="Circle" /></li>
        </ul>
    </div>

    )
}

export default TeamOne;