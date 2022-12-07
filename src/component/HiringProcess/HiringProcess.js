import React from "react";
import SectionTitle from "../../elements/section-title/SectionTitle";
import ProcesstData from "../../data/process/ProcessData.json";
import Tilty from "react-tilty";

const getProcesstData = ProcesstData;

const HiringProcess = () => {
  return (
    <div className="section section-padding bg-color-light pb--70">
      <SectionTitle
        title="Hiring Indian talent was never this easy."
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
            <br/>
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
            <br/>
            <div className="coloring2"> <strong><i>#Pre-interview Assessments -</i></strong>if you want any talents to take any additional assessment to better judge their technical capabilities, you can share your tests and the candidate would be more than willing to complete them.</div>
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
            <p>Assess them until you are confident, and provide feedback.</p>
            <br />
            <p>Because every talent is pre-vetted against their communication skills, technical capabilities, and more, we reduce the guesswork and the probability of a wrong hire drastically.</p>
            <br />
            <p>This helps even non-technical managers/interviewers to assess the talents mainly on the VIBE check.</p>
            <br/>
            <div className="coloring2"> <strong> <i>#No-Obligation Interview -</i> </strong>You are not obligated to hire unless you are 100% confident and happy with the talent.</div>
            <br/>
            <div className="coloring2"> <strong><i>#No Risk Trial -</i> </strong>We have the option where the talent can work for up to 2 weeks (based on availability), which allows many clients to gain more trust and confidence to decide on hiring, in the case where the clients are in two minds after the interview.</div>
            
            
          </div>
        </div>
      </div>
      <div className="container">
        <div className={`process-work`}>
          <div className="content">
            <span className="subtitle">Step Four</span>
            <h3 className="title">Onboard & Manage</h3>
            <p>After you confirm the talent, we sort all the legalities and contract with the talent, ensure a smooth onboarding and help you manage the talent.</p>
            <br />
            <p>A talent success coach from Uplers remains to ensure the engagement between the client and talent is top-notch.</p>
            <br/>
            <div className="coloring2"> <strong><i>#30-days Replacement -</i></strong>You will always have the option of replacement if you ever face challenges with the talent, which Uplers will fulfill without a problem.</div>
            <br/>
            <div className="coloring2"> <strong><i>#Easy Cancellation -</i>  </strong>In an unfortunate event if you don’t need the talent anymore or if there are constant performance challenges, you can opt for cancellation of engagement by giving a 30 days notice period at any given time. </div>
            
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
