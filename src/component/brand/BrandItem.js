import React from 'react';

const Data = [

    {
        image: "/images/clients/Logos-02.svg"
    },
    {
        image: "/images/clients/Logos-03.svg"
    },
    {
        image: "/images/clients/Logos-04.svg"
    },
  
    {
        image: "/images/clients/Logos-06.svg"
    },
    {
        image: "/images/clients/ABP.svg"
    },
    {
        image: "/images/clients/Memechat.svg"
    },
   
]


const BrandItem = () => {
    return (
        <>
            {Data.map((data, index) => (
                <div className="col-lg-4 col-6" key={index}>
                    <div className="brand-grid clientLogo">
                        <img src={process.env.PUBLIC_URL + data.image} alt="Brand" />
                    </div>
                </div>
            ))}
        </>
    )
}

export default BrandItem;