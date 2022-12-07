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

const TopChoice = () => {
  return (
    <div className="section section-padding bg-color-dark pb--80 pb_lg--40 pb_md--20">
      <div className="container">
        <div className="row">
          <h2 className="talentTitle">
            What makes Indians the top choice for technology giants around the
            world?{" "}
          </h2>
          <div className="col-lg-6">
            <div className="about-quality">
              <h3 className="sl-number">1</h3>
              <h5 className="title">Dedicated</h5>
              <p>
              Indians are more engaged and committed to their work than their foreign counterparts.
              </p>

          
            </div>
          </div>
          <div className="col-lg-6">
            <div className="about-quality">
              <h3 className="sl-number">2</h3>
              <h5 className="title">Emotional</h5>
              <p>
              Indians are a driven and passionate lot. They get emotionally attached to the company, its people, and its place and are likely to stick around with a company longer than others.
              </p>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="about-quality">
              <h3 className="sl-number">3</h3>
              <h5 className="title">Add value</h5>
              <p>
              Indians give their 100% and believe in adding value to everything they do.
              </p>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="about-quality">
              <h3 className="sl-number">4</h3>
              <h5 className="title">Hard-working</h5>
              <p>
              From getting good grades in school to passing competitive examinations, Indians are taught the value of hard work and perseverance right from childhood.
              </p>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="about-quality">
              <h3 className="sl-number">4</h3>
              <h5 className="title">Driven
</h5>
              <p>
              Indians are driven by their determination to succeed and do well in life.
              </p>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="about-quality">
              <h3 className="sl-number">4</h3>
              <h5 className="title">Helpful</h5>
              <p>
              Indians are helpful and help everyone around because it is something that is deeply ingrained in their beliefs and morals.
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

export default TopChoice;
