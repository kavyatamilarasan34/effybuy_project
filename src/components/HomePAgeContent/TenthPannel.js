import React, { Component } from "react";
import './SaveMySeatForm.css';
import img1 from "../../assets/images/shape/popup.svg";
import great_underline from '../../assets/images/shape/line-shape-1.svg'

const settings = {
  dots: false,
  arrow: true,
  infinite: true,
  speed: 900,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: false,
  margin: 30,
};

export default class Testimonial2 extends Component {
  render() {
    return (
        <div className="fancy-feature-sixteen " id="features">
          <div className="container" style={{"overflow":"hidden"}}>
            <div className="block-style-eighteen mt-110 pt-2 md-mt-80">
              <div className="row align-items-center">
                <div className="col-lg-6">
                  <div className="individual_blog_paragraph" >
                      <p> <span style={{"color":"red", fontWeight: "bold" }}>● Live </span>  <b> Webinar </b></p> 
                      <p style={{"color":"black"}}>
                        <strong>When:</strong> May 24, 2025 &nbsp; <strong>Hour:</strong> 1:00 PM (GMT)
                      </p>
                    <br />
                    <br />
                    <div className="title-style-two" >
                      <h2 >
                        Mastering
                        Negotiation
                          <img
                            src={great_underline}
                            alt="shape1"
                            className="cs-screen"
                            style={{ width: "350px", height: "auto", marginTop: "-16px"}}
                          />
                          <br/>
                          </h2>
                         <h2> Securing Optimal Deals with EffyBuy's  Auto-Negotiation </h2>
                      
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="title-style-two" >
                    <div className="form-container">
                      <form className="form">
                      <h2 style={{fontSize: "35px", marginBottom: "30px" }}>Save my Seat</h2>
                        Name <input type="text" placeholder="Enter Full Name" className="form-input" /> 
                        Email  <input type="email" placeholder="Enter Your Email" className="form-input" /> 
                        Password  <input type="password" placeholder="Enter Password" className="form-input" /> 
                        Retype Password  <input type="password" placeholder="Enter Password" className="form-input" /> 
                        <button type="submit" className="form-button">Register Now</button>
                      </form>
                    </div>
                  </div>
                </div>
            </div>
          </div>
        </div>
      </div>
      
    );
  }
}
