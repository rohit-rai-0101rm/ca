import React from "react";
import SectionTitle from "../../elements/section-title/SectionTitle";

const Datas = [
  {
    id: 1,
    title: "Uplers Source",
    para: "We attract talents in India through the top 3 benefits that are super attractive.",
  },
  {
    id: 2,
    title: "Uplers Vet",
    para: "We screen every candidate with our rigorous Vetting process for language proficiency, technical capabilities, and behavioral skills.",
  },
  {
    id: 3,
    title: "Uplers Match",
    para: "We match the job requirement with the candidates through our skill matchmaking process, ensuring that only the best one matches. (We have 70% First Interview Select Ratio)",
  },
  {
    id: 4,
    title: "Uplers Manage",
    para: "Proin dignissim facilisis tortor a mattis. Morbi non maximus nunc, ut mattis tellus. In hac habitasse platea dictumst. Mauris viverra enim tellus, vel ultrices dolor aliquam non.",
  },
];

const HireTalent = () => {
  return (
    <div className="section section-padding bg-color-dark pb--80 pb_lg--40 pb_md--20">
      <div className="container">
       

        <div className="row">
             <h2 className="talentTitle">
          How Uplers is making it ridiculously easy to hire Indian Talents?
        </h2>
          <div className="col-lg-6">
            <div className="about-quality">
              <h3 className="sl-number">1</h3>
              <h5 className="title">Uplers Source</h5>
              <p>
                We attract talents in India through the top 3 benefits that are
                super attractive.
              </p>

              <ul className="list-style">
                <li>100% Remote Role </li>
                <li>Global Company Exposure & Culture</li>
                <li>High Earning Opportunities</li>
              </ul>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="about-quality">
              <h3 className="sl-number">2</h3>
              <h5 className="title">Uplers Vet</h5>
              <p>
                We screen every candidate with our rigorous Vetting process for
                language proficiency, technical capabilities, and behavioral
                skills.
              </p>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="about-quality">
              <h3 className="sl-number">3</h3>
              <h5 className="title">Uplers Match</h5>
              <p>
                We match the job requirement with the candidates through our
                skill matchmaking process, ensuring that only the best one
                matches. (We have 70% First Interview Select Ratio)
              </p>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="about-quality">
              <h3 className="sl-number">4</h3>
              <h5 className="title">Uplers Manage</h5>
              <p>
                We take care of all the employment contracts, payrolls, IT
                support, HR support, etc.
              </p>
            </div>
          </div>
        </div>
      </div>
      <ul className="list-unstyled shape-group-10">
        <li className="shape shape-1">
          <img
            src={process.env.PUBLIC_URL + "/images/others/circle-1.png"}
            alt="Circle"
          />
        </li>
        <li className="shape shape-2">
          <img
            src={process.env.PUBLIC_URL + "/images/others/line-3.png"}
            alt="Circle"
          />
        </li>
        <li className="shape shape-3">
          <img
            src={process.env.PUBLIC_URL + "/images/others/bubble-5.png"}
            alt="Circle"
          />
        </li>
      </ul>
    </div>
  );
};

export default HireTalent;
