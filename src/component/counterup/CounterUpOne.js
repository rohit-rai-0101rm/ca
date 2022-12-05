import React from "react";
import SectionTitle from "../../elements/section-title/SectionTitle";
import CounterUp from "../../component/counterup/CounterUp";

const CounterUpOne = () => {
   
    return (
        <div className="section section-padding  section-padding-numbers bg-color-ship-gray">
            <div className="container">
          
                <div className="row">
                    <CounterUp colSize="col-lg-3 col-6" layoutStyle="" evenTopMargin="" />
                </div>
            </div>
        </div>
     
  );
};

export default CounterUpOne;

