import React from "react";
import CountUp from "react-countup";
import TrackVisibility from "react-on-screen";

const Data = [
  {
    id: 1,
    light_icon: "/images/icon/icon-7.png",
    dark_icon: "/images/icon/icon-10.png",
    countNum: 30,
    text: "Cups of coffee",
  },
  {
    id: 2,
    light_icon: "/images/icon/icon-8.png",
    dark_icon: "/images/icon/icon-11.png",
    countNum: 5,
    text: "years of experience",
  },
  {
    id: 3,
    light_icon: "/images/icon/icon-9.png",
    dark_icon: "/images/icon/icon-12.png",
    countNum: 250,
    text: "Happy Clients",
  },
  {
    id: 4,
    light_icon: "/images/icon/apple.png",
    dark_icon: "/images/icon/apple-black.png",
    countNum: 350,
    text: "Lines coded",
  },
];

const CounterUp = ({ colSize, layoutStyle, evenTopMargin }) => {
  return (
    <div className="section section-padding section-padding-numbers bg-color-ship-gray">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-6">
            <div className={`counterup-progress ${layoutStyle}`}>
              {layoutStyle === "counterup-style-2" ? (
                <div className="icon">
                  <img
                    className="dark-icon"
                    src={process.env.PUBLIC_URL + Data[0].dark_icon}
                    alt="Icon"
                  />
                  <img
                    className="light-icon"
                    src={process.env.PUBLIC_URL + Data[0].light_icon}
                    alt="Icon"
                  />
                </div>
              ) : (
                <div className="icon">
                  <img
                    src={process.env.PUBLIC_URL + Data[0].light_icon}
                    alt="Icon"
                  />
                </div>
              )}

              <div className="count-number h2">
                <TrackVisibility once>
                  {({ isVisible }) => (
                    <span className="number count">
                      {isVisible ? (
                        <CountUp end={Data[0].countNum} duration={1} />
                      ) : null}
                    </span>
                  )}
                </TrackVisibility>
                <span className="symbol">K+</span>
              </div>
              <h6 className="title">{Data[0].text}</h6>
            </div>
          </div>
          <div className="col-lg-3 col-6">
            <div className={`counterup-progress ${layoutStyle}`}>
              {layoutStyle === "counterup-style-2" ? (
                <div className="icon">
                  <img
                    className="dark-icon"
                    src={process.env.PUBLIC_URL + Data[1].dark_icon}
                    alt="Icon"
                  />
                  <img
                    className="light-icon"
                    src={process.env.PUBLIC_URL + Data[1].light_icon}
                    alt="Icon"
                  />
                </div>
              ) : (
                <div className="icon">
                  <img
                    src={process.env.PUBLIC_URL + Data[1].light_icon}
                    alt="Icon"
                  />
                </div>
              )}

              <div className="count-number h2">
                <TrackVisibility once>
                  {({ isVisible }) => (
                    <span className="number count">
                      {isVisible ? (
                        <CountUp end={Data[1].countNum} duration={1} />
                      ) : null}
                    </span>
                  )}
                </TrackVisibility>
                <span className="symbol">+</span>
              </div>
              <h6 className="title">{Data[1].text}</h6>
            </div>
          </div>
          <div className="col-lg-3 col-6">
            <div className={`counterup-progress ${layoutStyle}`}>
              {layoutStyle === "counterup-style-2" ? (
                <div className="icon">
                  <img
                    className="dark-icon"
                    src={process.env.PUBLIC_URL + Data[2].dark_icon}
                    alt="Icon"
                  />
                  <img
                    className="light-icon"
                    src={process.env.PUBLIC_URL + Data[2].light_icon}
                    alt="Icon"
                  />
                </div>
              ) : (
                <div className="icon">
                  <img
                    src={process.env.PUBLIC_URL + Data[2].light_icon}
                    alt="Icon"
                  />
                </div>
              )}

              <div className="count-number h2">
                <TrackVisibility once>
                  {({ isVisible }) => (
                    <span className="number count">
                      {isVisible ? (
                        <CountUp end={Data[2].countNum} duration={1} />
                      ) : null}
                    </span>
                  )}
                </TrackVisibility>
                <span className="symbol">+</span>
              </div>
              <h6 className="title">{Data[2].text}</h6>
            </div>
          </div>
          <div className="col-lg-3 col-6">
            <div className={`counterup-progress ${layoutStyle}`}>
              {layoutStyle === "counterup-style-2" ? (
                <div className="icon">
                  <img
                    className="dark-icon"
                    src={process.env.PUBLIC_URL + Data[3].dark_icon}
                    alt="Icon"
                  />
                  <img
                    className="light-icon"
                    src={process.env.PUBLIC_URL + Data[3].light_icon}
                    alt="Icon"
                  />
                </div>
              ) : (
                <div className="icon">
                  <img
                    src={process.env.PUBLIC_URL + Data[3].light_icon}
                    alt="Icon"
                  />
                </div>
              )}

              <div className="count-number h2">
                <TrackVisibility once>
                  {({ isVisible }) => (
                    <span className="number count">
                      {isVisible ? (
                        <CountUp end={Data[3].countNum} duration={1} />
                      ) : null}
                    </span>
                  )}
                </TrackVisibility>
                <span className="symbol">K+</span>
              </div>
              <h6 className="title">{Data[3].text}</h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CounterUp;
