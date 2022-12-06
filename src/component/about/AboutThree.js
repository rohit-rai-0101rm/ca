import React from 'react';
import { Link } from 'react-router-dom';
import SectionTitle from '../../elements/section-title/SectionTitle';
import SectionTitle4 from '../../elements/section-title/SectionTitle4';

const Datas = [
    {
        id: 1,
        title: "Bolster Your Visibility",
        para: "With the help of digital marketing, your business can develop a global reach, your offerings making their way to customers in every nook and cranny of the world."
    },
    {
        id: 2,
        title: "Strengthen Customer Relationships",
        para: "Data mined from digital marketing analytics gives you a clear understanding about the ever-evolving needs and interests of your target audience."
    },
    {
        id: 3,
        title: "Drive More Traffic",
        para: "Digital marketing allows you to manufacture cross-channel opportunities which not only drives greater traffic to your page but also enables you to deliver exceptional user experiences."
    },
    {
        id: 4,
        title: "Stay On Top Of Lead Generation",
        para: "As digital marketing enables you to bring multiple channels into play simultaneously, it provides you with a consistent lead pipeline."
    },
    {
        id: 5,
        title: "Level The Playing Ground",
        para: "Doesn’t matter if you are a small or mid-sized business, should you manage to implement digital marketing effectively, you’ll be able to go head-to-head with even multinational conglomerates"
    },
    {
        id: 6,
        title: "Improve Conversion Rates",
        para: "Besides attracting a greater number of leads to your business, digital marketing lets you leverage content marketing, website personalization, paid search campaigns and other measures to convert them into recurring customers."
    }
]




const AboutThree = () => {
    return (
        <div className="section section-padding bg-color-dark pb--80 pb_lg--40 pb_md--20">
            <div className="container">
                <SectionTitle4 
                    title="Why Your Business Should Be Using
                    Digital Agency Services"
                    description="Nulla facilisi. Nullam in magna id dolor blandit rutrum eget vulputate augue sed eu leo eget risus imperdiet."
                    textAlignment="heading-center heading-light-left mb--100"
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
                <center>
                <Link  className="axil-btn btn-fill-primary btn-large">
Get in touch              </Link>                </center>
            </div>
            <ul className="list-unstyled shape-group-10">
                <li className="shape shape-1"><img src={process.env.PUBLIC_URL + "/images/others/circle-1.png"} alt="Circle" /></li>
                <li className="shape shape-2"><img src={process.env.PUBLIC_URL + "/images/others/line-3.png"} alt="Circle" /></li>
                <li className="shape shape-3"><img src={process.env.PUBLIC_URL + "/images/others/bubble-5.png"} alt="Circle" /></li>
            </ul>
        </div>
    )
}

export default AboutThree;