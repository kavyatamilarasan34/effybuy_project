import React, { Component } from "react";
import './SaveMySeatForm.css';
import bgimg from "../../assets/images/shape/1.svg";
import WhoShouldJoin from "../../assets/images/shape/ILLUSTRATOR1.jpg";
import ActionableSteps from "../../assets/images/icon/ActionableSteps.svg";
import CaseStudy from "../../assets/images/icon/CaseStudy.svg";
import Demo from "../../assets/images/icon/Demo.svg";
import Play from "../../assets/images/icon/Play.svg";

export default class Testimonial2 extends Component {
  render() {
    return (
      <div className="main-page-wrapper">
        <img
          src={bgimg}
          alt="feature"
          className="cs-screen screen-one"
        />
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6">
                
                <div
                  className="title-style-one"
                  style={{ textAlign: "center" }}
                >
                  <h2>
                    What You'll Walk<br />
                  Away With 
                  </h2>
                </div>
              </div>
              <div className="col-lg-6">
                <div
                   className="title-style-one"
                   style={{ textAlign: "center" }}
                >
                  {/* <h4>
                    The 3 costly mistakes team makes in <br />
                    supplier negotiations and how to avoid them
                  </h4> */}
                </div>
              </div>
            </div>
          </div>
          <br /><br />
          <div className="container">
              <div className="row">
              <div
                className="col-lg-4 d-flex mb-35"
                data-aos="fade-up"
                data-aos-duration="1200"
              >
                <div className="block-style-twentyFour">
                  <div >
                    <div
                      className="icon d-flex align-items-center"
                      style={{ background: "#fceadf", borderRadius: "25px", width: "50px", height: "50px" }}
                    >
                      <img src={Demo} alt="icon" style={{ width: "100%", height: "80%" }} />
                    </div>
                    <br />
                    <div  className="title-style-one"
                       style={{ textAlign: "left" }}>
                      <h5><b>Live Demo</b></h5> <br />
                      <h7>Watch live auction with <br />an L1 
                      supplier in real time</h7>
                    </div>
                  </div>
                </div>
              </div>
        
              <div
                className="col-lg-4 d-flex mb-35"
                data-aos="fade-up"
                data-aos-duration="1200"
                data-aos-delay="100"
              >
                <div className="block-style-twentyFour">
                  <div >
                    <div
                      className="icon d-flex align-items-center"
                      style={{ background: "#e1f7f5", borderRadius: "25px", width: "50px", height: "50px" }}
                      
                    >
                      <img src={CaseStudy} alt="icon" style={{ width: "100%", height: "70%" }} />
                    </div>
                    <br />
                    <div className="title-style-one"
                       style={{ textAlign: "left" }}>
                    <h5><b>Case Study</b></h5><br />
                    <h7>How a leading equipment
                     manufacturing yielded 10-15% 
                     savings using Auto-Negotiation</h7>

                    </div>
                  </div>
                </div>{" "}
              </div>
        
              <div
                className="col-lg-4 d-flex mb-35"
                data-aos="fade-up"
                data-aos-duration="1200"
              >
                <div className="block-style-twentyFour">
                  <div >
                    <div
                      className="icon d-flex align-items-center"
                      style={{ background: "#f6eefc", borderRadius: "25px", width: "50px", height: "50px" }}
                
                    >
                      <img src={ActionableSteps} alt="icon" style={{ width: "100%", height: "80%" }}/>
                    </div>
                    <br />
                    <div className="title-style-one"
                       style={{ textAlign: "left" }}>
                      <h5><b>Actionable Steps</b></h5> <br />
                      <h7>Implement automated 
                      negotiations in your 
                      procurement process</h7>
                    </div>
                  </div>
                </div>{" "}
              </div>
        
            </div>
          </div>

          <div className="bg-wrapper mt-150 md-mt-100">
            <div className="container">
              <div className="row" style={{"alignItems":"center"}}>
                {/* <div className="col-md-6 text-center"> */}
                  <div
                    className="col-lg-7 d-flex flex-column align-items-center mb-35"
                    data-aos="fade-right"
                    data-aos-duration="1200"
                  >
                    <div
                      className="icon d-flex align-items-center justify-content-center"
                    >
                      <img src={WhoShouldJoin} alt="icon" />
                    </div>
                  </div>
                {/* </div> */}
          
                  {/* <div className="col-md-6"> */}
                    <div
                      className="col-lg-5 d-flex flex-column align-items-start mb-35"
                      data-aos="fade-left"
                      data-aos-duration="1200"
                    >
                      {/* <div
                        className="icon d-flex justify-content-start align-items-center"
                        style={{
                          borderRadius: "55px",
                          width: "60px",
                          height: "60px",
                          marginBottom: "3px",
                          paddingLeft: "10px", 
                        }}
                        >
                        <img src={Play} alt="icon" />
                      </div>
                      <br /> */}
                      <div className="title-style-one"
                        style={{ textAlign: "left" }}>
                        <h2>Who Should <br /> Join? </h2> 
                        <br />
                        <h7>●  Procurement & Sourcing Managers <br />
                        ●  Supply Chain & Vendors Leaders <br />
                        ●  Finance pros focused on cost control <br />
                        Anyone who's done "just one more round of negotiation"</h7>
                      </div>
                   </div>
                  {/* </div> */}
                </div>
            </div>
         </div>
        </div>
      
    );
  }
}
