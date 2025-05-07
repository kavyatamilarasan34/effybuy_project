import React, { Component } from "react";
import './SaveMySeatForm.css';
import { PopupButton, CalendlyEventListener } from "react-calendly";
import LiveChat from "../../assets/images/icon/LiveChat.svg";
import ProvenStrategies from "../../assets/images/icon/Proven Strategies-06 copy2.5-01.svg";
import RealDeal from "../../assets/images/icon/RealDeal.svg";

export default class Testimonial2 extends Component {
  render() {
    return (
      <div className="main-page-wrapper">
        <div className="fancy-short-banner-one">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-12">
                <div
                  className="title-style-one"
                  style={{ textAlign: "center" }}
                >
                  <h2>
                    EffyBuy fits any business <br />
                  SMB to enterprise. One category or ten <br />
                  teams?
                  </h2>
                  <br />
                  <h5>It flexes to your work flow</h5>
                  <div
                    onClick={(e) => {
                      this.handleSubmit(
                        e,
                        "https://calendly.com/bizgamsupport/effybuy"
                      );
                    }}
                  >
                    <PopupButton
                      url="https://calendly.com/bizgamsupport/effybuy"
                      text="Request Demo"
                      pageSettings={{
                        // backgroundColor: 'ffffff',
                        hideEventTypeDetails: false,
                        hideLandingPageDetails: false,
                        // primaryColor: '008ed9',
                        // textColor: '4d5055',
                      }}
                      styles={{
                        color: "white",
                        // backgroundColor: 'red',
                        border: "none",
                        // fontSize:"25px"
                      }}
                    />
                    <CalendlyEventListener
                      onEventScheduled={(e) => {
                        if (e.data.event === "calendly.event_scheduled") {
                          window.open(
                            "https://www.effybuy.com/EffyBuy/calendly_conformation"
                          );
                        }
                      }}
                    ></CalendlyEventListener>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bubble-one"></div>
          <div className="bubble-two"></div>
          <div className="bubble-three"></div>
          <div className="bubble-four"></div>
          <div className="bubble-five"></div>
          <div className="bubble-six"></div>
        </div>
 
        <br />
        <br />
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-12">
                <div
                  className="title-style-two"
                  style={{ textAlign: "center"}}
                >
                  <h2>
                   Why you Can't <br />
                   Miss this <br />
                  </h2>
                  <br />
                  <div className="bg-wrapper mt-100 md-mt-100">
                    <div className="container">
                      <div className="row" style={{"alignItems":"center"}}>
                        <div
                          className="col-lg-4 d-flex flex-column align-items-center mb-35"
                          data-aos="fade-up"
                          data-aos-duration="1200"
                        >
                           <div
                             className="icon d-flex align-items-center justify-content-center"
                             style={{
                               background: "#fc4b8b",
                               borderRadius: "90px",
                               width: "55px",        // Adjust width
                               height: "55px",       // Optional extra spacing
                               marginBottom: "20px",
                             }}
                              >
                                <img src={ProvenStrategies} alt="icon" style={{ width: "70%", height: "70%" }}/>
                              </div>
                              <div
                                className="title-style-one"
                                style={{ textAlign: "center" }}
                              >
                              <h7>Proven strategies from <br />
                                procurement teams at <br />
                                the top of their game</h7>
                          
                              </div>
                        </div>

                        <div
                          className="col-lg-4 d-flex flex-column align-items-center mb-35"
                          data-aos="fade-up"
                          data-aos-duration="1200"
                        >
                         <div
                           className="icon d-flex align-items-center justify-content-center"
                           style={{
                             background: "#6d4afc",
                             borderRadius: "90px",
                             width: "55px",        // Adjust width
                             height: "55px",       // Optional extra spacing
                             marginBottom: "45px",
                           }}
                          >
                            <img src={RealDeal} alt="icon" style={{ width: "50%", height: "50%" }} />
                          </div>
                          <div 
                            className="title-style-one"
                            style={{ textAlign: "center" }}
                          >
                            
                            <h7>Reals deals <br />Real datas<br /> Zero fluff</h7>
                          </div>
                        
                        </div>

                        <div
                          className="col-lg-4 d-flex flex-column align-items-center mb-35"
                          data-aos="fade-up"
                          data-aos-duration="1200"
                        >
                        
                          <div
                            className="icon d-flex align-items-center justify-content-center"
                            style={{
                              background: "#fdb851",
                              borderRadius: "90px",
                              width: "55px",        // Adjust width
                              height: "55px",       // Optional extra spacing
                              marginBottom: "25px",
                            }}
                          >
                            <img src={LiveChat} alt="icon" style={{ width: "60%", height: "60%" }} />
                          </div>
                          <div 
                           className="title-style-one"
                           style={{ textAlign: "center" }}
                          >
                            
                            <h7>Live Q&A-Bring your<br />
                            toughest supplier <br />
                            senarios for expert tips</h7>
                          </div>
                      
                        </div>
                      </div>
                  </div>
                 </div>
                </div>
              </div>
            </div>
          </div>
        {/* </div> */}
     </div>
      
    );
  }
}
