import React from "react";

import SectionTitle from "../../elements/section-title/SectionTitle";

import ServiceProp15 from '../service/ServiceProp15'
import ServicePropSeven from "../service/ServicePropSeven";





const TechnicalConsultant = () => {

  return (

    <div>

    <div className="section section-padding-2 bg-color-dark">

      <div className="container">

        <center>

          <h4 className="coloringtext">

            Hire our Laravel Developers for the following services

          </h4>

          <br />

        </center>

        <div className="row">

        <ServiceProp15 colSize="col-xl-12 col-md-12" serviceStyle="" itemShow="6" />



        </div>

      </div>

      <ul className="list-unstyled shape-group-10">

        <li className="shape shape-1">

          <img

            src={process.env.PUBLIC_URL + "/images/others/line-9.png"}

            alt="Circle"

          />

        </li>

        <li className="shape shape-2">

          <img

            src={process.env.PUBLIC_URL + "/images/others/bubble-42.png"}

            alt="Circle"

          />

        </li>

        <li className="shape shape-3">

          <img

            src={process.env.PUBLIC_URL + "/images/others/bubble-43.png"}

            alt="Circle"

          />

        </li>

      </ul>

    </div>

  </div>

  );

};



export default TechnicalConsultant;