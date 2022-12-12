import React from "react";
import { Link } from "react-router-dom";
import FormTwo from "../contact/FormTwo";

const SeoIntro = () => {
  return (
    <div className="section section-padding-proffessional mt--120 ">
      <div className="container ">
        <div className="row">
          <div className="col-xl-7 col-lg-6 ">
            <div className="color-light  mb_md--30 mt_md--0 mt--60">
              <h2 className="title">Professional SEO Services Company</h2>
              <h4>Rank Better. Increase Traffic.<br/> Achieve Better ROIs</h4>
              <p className="innovate-list-para">
                We are a leading SEO Company that believes in human-first <br/> SEO
                strategies. Our SEO experts are known for curating legit <br/> and
                professional SEO services aligned with your brand. Our<br/>
                innovation-led approach has helped hundreds of our clients <br/>
                acquire a solid foothold and visibility of their business among
                Search Engines.
              </p>
            </div>
            <Link  to={process.env.PUBLIC_URL + "/contact"} className="axil-btn btn-fill-primary btn-large mt--140">
                           <bold>EXPLORE DIGITAL MARKETING PACKAGES</bold>         </Link>
            
          </div>

          <div className="col-xl-5 col-lg-6">
            <div className="contact-form-box shadow-box mb--30">
              <h3 className="title">
                Want to kickstart your first SEO Campaign?
              </h3>
              <FormTwo />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SeoIntro;
