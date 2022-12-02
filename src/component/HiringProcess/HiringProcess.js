import React from "react";
import SectionTitle from "../../elements/section-title/SectionTitle";
import ProcesstData from "../../data/process/ProcessData.json";
import Tilty from "react-tilty";

const getProcesstData = ProcesstData;

const HiringProcess = () => {
  return (
    <div className="section section-padding bg-color-light pb--70">
      <SectionTitle
        title="Hiring Indian talent was never this easy.
                "
        description="A platform that takes care of everything beforehand.
                Uplers source, vet, match and manage the talents for you."
        textAlignment=""
        textColor="mb--90"
      />
      <div className="container">
        <div className={`process-work`}>
          <Tilty perspective={2000}>
            <div className="thumbnail">
              <img src="/images/others/process-1.png" alt="Thumbnail" />
            </div>
          </Tilty>
          <div className="content">
            <span className="subtitle">Step One</span>
            <h3 className="title">Share the Job Description</h3>
            <p>
              Share complete roles, and responsibilities, must-have skills,
              necessary market experience, and budget.
            </p>
            <br />
            <p>
              The more information you share, the better matchmaking we would be
              able to do for you.
            </p>
          </div>
        </div>
      </div>
      <div className="container">
        <div className={`process-work`}>
          <div className="content">
            <span className="subtitle">Step Two</span>
            <h3 className="title">Review & Shortlist the Matches</h3>
            <p>
              We will match the best fit profile(s) in the next few days for
              your reviewal. You can shortlist and share the time slots for us
              to schedule interviews.
            </p>
            <br />
            <p>
              Certain roles & skills are not always readily available, in such
              cases, we will buy additional time and would super-source
              specifically for you.
            </p>
            <br />
            <p>
              For better clarity, when we receive the hiring request, there are
              3 cases that we come across in terms of matchmaking:
            </p>

            <ul className="list-style">
              <li>
                Deliver a tailor-made experience to your customers to attract
                them.
              </li>
              <li>
                We study user behavourial patterns to ensure highly interactive
                & friendly designs.
              </li>
              <li>
                Using the power of Psychology, we make sure to be aesthetically
                pleasing for first time interactions.
              </li>
            </ul>
          </div>
          <Tilty perspective={2000}>
            <div className="thumbnail">
              <img src="/images/others/process-1.png" alt="Thumbnail" />
            </div>
          </Tilty>
        </div>
      </div>
      <div className="container">
        <div className={`process-work`}>
          <Tilty perspective={2000}>
            <div className="thumbnail">
              <img src="/images/others/process-1.png" alt="Thumbnail" />
            </div>
          </Tilty>
          <div className="content">
            <span className="subtitle">Step Three </span>
            <h3 className="title">Interview & Hire</h3>
            <p>ggggggggggggggg</p>
            <br />
            <p>gggggggggggggg</p>
          </div>
        </div>
      </div>
      <div className="container">
        <div className={`process-work`}>
          <div className="content">
            <span className="subtitle">Step Four</span>
            <h3 className="title">Onboard & Manage</h3>
            <p>ggggggggggggggg</p>
            <br />
            <p>gggggggggggggg</p>
          </div>
          <Tilty perspective={2000}>
            <div className="thumbnail">
              <img src="/images/others/process-1.png" alt="Thumbnail" />
            </div>
          </Tilty>
        </div>
      </div>

      <ul className="shape-group-17 list-unstyled">
        <li className="shape shape-1">
          <img
            src={process.env.PUBLIC_URL + "/images/others/bubble-24.png"}
            alt="Bubble"
          />
        </li>
        <li className="shape shape-2">
          <img
            src={process.env.PUBLIC_URL + "/images/others/bubble-23.png"}
            alt="Bubble"
          />
        </li>
        <li className="shape shape-3">
          <img
            src={process.env.PUBLIC_URL + "/images/others/line-4.png"}
            alt="Line"
          />
        </li>
        <li className="shape shape-4">
          <img
            src={process.env.PUBLIC_URL + "/images/others/line-5.png"}
            alt="Line"
          />
        </li>
        <li className="shape shape-5">
          <img
            src={process.env.PUBLIC_URL + "/images/others/line-4.png"}
            alt="Line"
          />
        </li>
        <li className="shape shape-6">
          <img
            src={process.env.PUBLIC_URL + "/images/others/line-5.png"}
            alt="Line"
          />
        </li>
      </ul>
    </div>
  );
};

export default HiringProcess;
