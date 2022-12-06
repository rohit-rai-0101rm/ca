import React from 'react';
import SectionTitle from '../../elements/section-title/SectionTitle';

const Datas = [
    {
        id: 1,
        title: "Display Banners",
        para: "We help you push your marketing efforts forward with the help of our conversion-focused display banner design services. Be it static or dynamic HTML display banners, we can help"
    },
    {
        id: 2,
        title: "Email Template",
        para: "With our email designs, you'll be able to create your brand's presence and communicate your message to the recipients quickly. We stand for visually-rich email designs."
    },
    {
        id: 3,
        title: "Logo Design",
        para: "With years of experience and expertise in pro design tools, our team can help craft a unique logo for your business and create an outstanding brand identity"
    },
    {
        id: 4,
        title: "Corporate Assets",
        para: "With the help of a brief or blueprint, we create crisp and visually appealing assets for your business. Each of our whitepaper/PPT designs is made purely engaging to serve as an effective content marketing tool."
    }
]




const BrandingService = () => {
    return (
        <div className="section section-padding bg-color-dark pb--80 pb_lg--40 pb_md--20">
            <div className="container">
                <SectionTitle 
                    title="Our Graphic Design and Branding Services Include"
                    textAlignment="heading-left heading-light-left mb--100"
                    textColor=""
                />

                <div className="row">
                    {Datas.map((data) => (
                        <div className="col-lg-6" key={data.id}>
                            <div className="about-quality">
                                <h3 className="sl-number">{data.id}</h3>
                                <h5 className="title">{data.title}</h5>
                                <p>{data.para}</p>
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

export default BrandingService;