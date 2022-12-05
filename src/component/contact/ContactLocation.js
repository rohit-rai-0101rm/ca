import React from 'react';
import LocationData from '../../data/contact/LocationData.json';

const allData = LocationData;

const ContactLocation = () => {
    return (
        <>
            {allData.map((data, index) => (
                <div className="col-lg-3 col-sm-6" key={index}>
                    <div className="office-location">
                        <div className="thumbnail">
                            <img className='enquiry' src={process.env.PUBLIC_URL + data.thumb} alt="Office" />
                        </div>
                        <div className="content">
                            <center>
                            <h4 className="title">{data.title}</h4>
                            <p className='addressLine2'>{data.address}</p>
                            </center>
                           
                        </div>
                    </div>
                </div>
            ))}
        </>
    )
}

export default ContactLocation;