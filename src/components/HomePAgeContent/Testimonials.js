import React, { Component } from "react";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";
import MClogo from "../../assets/images/icon/MCS_Logo.svg";
import GAlogo from "../../assets/images/icon/GoAirlines.png";

export default class Testimonials extends Component {
  state = {
    focus: false,
  };
  render() {
    const counterUpContent = [
      {
        startCount: "0",
        endCount: "4",
        meta: "Blogs",
        colorClass: "color-one",
      },
      {
        startCount: "0",
        endCount: "4",
        meta: "Videos",
        colorClass: "color-two",
      },
      {
        startCount: "0",
        endCount: "1",
        meta: "Caste study",
        colorClass: "color-three",
      },
    ];
    return (
      <div className="fancy-feature-three pt-200 md-pt-80 ">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="title-style-one">
                {/* <h6 className="font-rubik">You’re in good company</h6> */}
                <h2>Check what’s our client say about us.</h2>
              </div>
              {/* /.title-style-one */}

              <div className="counter-info-classic">
                {counterUpContent.map((val, i) => (
                  <div className={`counter-box-one ${val.colorClass}`} key={i}>
                    <h2 className="number font-rubik">
                      <span className="timer">
                        {" "}
                        <CountUp
                          start={this.state.focus ? val.startCount : null}
                          end={val.endCount}
                          duration={1}
                          redraw={true}
                        >
                          {({ countUpRef }) => (
                            <VisibilitySensor
                              onChange={(isVisible) => {
                                if (isVisible) {
                                  this.setState({
                                    focus: true,
                                  });
                                  // setFocus(true);
                                }
                              }}
                            >
                              <span ref={countUpRef} />
                            </VisibilitySensor>
                          )}
                        </CountUp>{" "}
                      </span>{" "}
                    </h2>
                    <p className="font-rubik">{val.meta}</p>
                  </div>
                ))}

                <div className="bubble-one"></div>
                <div className="bubble-two"></div>
                <div className="bubble-three"></div>
                <div className="bubble-four"></div>
                <div className="bubble-five"></div>
                <div className="bubble-six"></div>
                <div className="bubble-seven"></div>
                <img
                  src="images/shape/8.svg"
                  alt=""
                  className="cs-screen dot-shape"
                />
              </div>
              {/* /.counter-info-classic */}
            </div>

            <div className="col-lg-6">
              <div className="clients-feedback-classic md-mt-80">
                <div
                  className="feedback-wrapper"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                >
                  <img src={GAlogo} alt="" className="media-meta" />
                  <p>
                    The Conventional process of handling tenders and
                    negotiations consumed most of our valuable time. One RFQ
                    takes 2 days to share it to the vendors. With Effybuy, We
                    share RFQ’s in minutes eliminating time in comparing the
                    quotations manually. The Negotiations consume more than a
                    week to select a particular vendor but now, With Reverse
                    Auctions, We complete our Negotiations within an hour and
                    get complete comparison Analytics without any human
                    intervention.
                  </p>
                  <h6 className="name">GO AIR</h6>
                  <span className="font-rubik disg-info">Manager</span>
                </div>{" "}
                {/* /.feedback-wrapper */}
                <div
                  className="feedback-wrapper"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                >
                  <img src={MClogo} alt="" className="media-meta" />
                  <p>
                    The RFQ process , when generated manually, created a lot of
                    confusion with our Emails all over the inbox. Manual errors
                    played a major role in missing a few vendors and analysing
                    the pending lists were another tedious and laborious task to
                    do. The efficiency of our Purchases have increased with the
                    elimination of multiple follow ups and less manual
                    intervention.
                  </p>
                  <h6 className="name">MESSER CUTTING</h6>
                  <span className="font-rubik disg-info">Manager</span>
                </div>{" "}
                {/* /.feedback-wrapper */}
                {/* <div
                  className="feedback-wrapper"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                >
                  <img
                    src="images/media/img_04.png"
                    alt=""
                    className="media-meta"
                  />
                  <p>
                    it’s a great exprience to work with deski. They’r vey humble
                    and expert & the service has been excellent & super.
                  </p>
                  <h6 className="name">Zubayer Hasan</h6>
                  <span className="font-rubik disg-info">
                    Front-end coder HeloShape.
                  </span>
                </div> */}
                {/* /.feedback-wrapper */}
              </div>
              {/* /.clients-feedback-classic */}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
