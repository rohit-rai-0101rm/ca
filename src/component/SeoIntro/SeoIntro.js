import React from "react";
import FormTwo from "../contact/FormTwo";

const SeoIntro = () => {
  return (
    <div className="section section-padding-proffessional mt--100 ">
      <div className="container ">
        <div className="row">
          <div className="col-xl-7 col-lg-6 ">
            <div className="color-light  mb_md--30 mt_md--0 mt--60">
              <h2 className="title">Professional SEO Services Company</h2>
              <h4>Rank Better. Increase Traffic.<br/> Achieve Better ROIs</h4>
              <p>
                We are a leading SEO Company that believes in human-first SEO
                strategies. Our SEO experts are known for curating legit and
                professional SEO services aligned with your brand. Our
                innovation-led approach has helped hundreds of our clients
                acquire a solid foothold and visibility of their business among
                Search Engines.
              </p>
            </div>
            <div className="form-group">
              <button
                type="submit"
                className="axil-btn btn-fill-primary btn-fluid btn-primary mt--150"
                name="submit-btn"
              >
                Explore SEO Pricing Packages
              </button>
            </div>
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
