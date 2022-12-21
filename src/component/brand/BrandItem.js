import React from 'react';

const Data = [

    {
        image: "/images/clients/Logos-02.svg",
        url:"https://nubralife.com/"
    },
    {
        image: "/images/clients/Logos-03.svg",
        url:"http://kubberinternational.com/"

    },
    {
        image: "/images/clients/tvg.svg",
        url:"https://www.tvgconsultancy.com/"

    },
  
    {
        image: "/images/clients/Logos-06.svg",
        url:"https://mitrpaisa.com/"

    },
    {
        image: "/images/clients/ABP.svg",
        url:"https://www.abplive.com/"

    },
    {
        image: "/images/clients/Memechat.svg",
        url:"https://memechat.app/"

    },
    {
        image: "/images/clients/volks.svg",
        url:"https://www.volkswagen.co.in/en.html"

    },
    {
        image: "/images/clients/trident.svg",
        url:"https://www.volkswagen.co.in/en.html"

    },
   
]


const BrandItem = () => {
    return (
        <>
            {Data.map((data, index) => (
                <div className="col-lg-3 col-6" >
                    <div className="brand-grid clientLogo">
                      <a className="brand-grid clientLogo" target="_blank" href={data.url}>
                      <img src={process.env.PUBLIC_URL + data.image} alt="Brand" />

                      </a>
                    </div>
                </div>
            ))}
        </>
    )
}

export default BrandItem;