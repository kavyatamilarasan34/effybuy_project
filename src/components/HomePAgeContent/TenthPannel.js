import React, { Component } from "react";
import './SaveMySeatForm.css';
import img1 from "../../assets/images/shape/popup.svg";
import great_underline from '../../assets/images/shape/line-shape-1.svg'
import emailjs from "@emailjs/browser";
import { Modal } from "react-bootstrap";
import effybuy_logo_with_name from "../../assets/images/icon/New_effybuy_logo_with_name.webp";

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
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      mobile: '',
      userCompanyName: '',
      designation: '',
      typeOfIndustry: '',
      webinarSource: '',
      success: false,
      show1: true,
    };
  }

  infoChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  
  handleCloseSuccess = () => {
    this.setState({
      success: false,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    const { name, email, mobile, userCompanyName, designation, typeOfIndustry, webinarSource } = this.state;

    if (!name || !email || !mobile) {
      alert("Please fill in all required fields.");
      return;
    }

    const msg = {
      from_name: "Admin",          
      from_email: "support@bizgam.com", 
      to_email: email,   
      // cc: "",           
      subject: "Effybuy : Webinar Registration",
      webinarLink : 'https://meet.google.com/kpo-sepd-ybw',
      companyName : 'Bizgam team',
      name: name,  
      mobile: mobile,  
      designation: designation,  
      typeOfIndustry: typeOfIndustry,  
      webinarSource: webinarSource,
      userCompanyName: userCompanyName,  
    };

    emailjs.send(
      "service_eqadgb6",  
      "template_dm3g01k",  
      msg,  
      "ehnz-SidZ-mnMipo0"  
    ).then(
      () => {
        
        this.setState({
          name: '',
          email: '',
          mobile: '',
          userCompanyName: '',
          designation: '',
          typeOfIndustry: '',
          webinarSource: '',
          show1: false,
          success: true,
        });
       
      },
      (error) => {
        console.error("Failed to send email:", error);
        alert("Failed to send email. Please try again.");
      }
    );
  }

  componentDidUpdate(_, prevState) {
    if (!prevState.success && this.state.success) {
      this.redirectTimer = setTimeout(() => {
        window.open("https://chat.whatsapp.com/J2grLr3lYr75ugplsRt4zT", "_blank");
      }, 3000); 
    }
  }

  componentWillUnmount() {
    if (this.redirectTimer) {
      clearTimeout(this.redirectTimer);
    }
  }

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
                      <form className="form"onSubmit={this.handleSubmit} style={{fontSize: "15px", marginTop:"10px"}}>
                        <h2 style={{fontSize: "35px", marginBottom: "30px" }}>Save my Seat</h2>
                        
                        <div style={{ display: "flex", gap: "20px", marginBottom: "15px" }}>
                          <div style={{ flex: 1 }}>
                              Full Name <input type="text" 
                                          placeholder="Enter Full Name" 
                                          className="form-input" 
                                          name="name"
                                          value={this.state.name}
                                          onChange={this.infoChange}
                                    /> 
                           </div>
                          <div style={{ flex: 1 }}>
                            Email  <input type="email" 
                                          placeholder="Enter Your Email" 
                                          className="form-input" 
                                          name="email"
                                          value={this.state.email}
                                          onChange={this.infoChange}
                                    /> 
                            </div>
                          </div>
                        <div style={{ display: "flex", gap: "20px", marginBottom: "15px" }}>
                          <div style={{ flex: 1 }}>
                            Contact Number  <input type="tel" 
                                          placeholder="Enter Contact Number" 
                                          className="form-input" 
                                          name="mobile"
                                          value={this.state.mobile}
                                          onChange={this.infoChange}
                                    /> 
                          </div>
                          <div style={{ flex: 1 }}>
                            Designation <input type="text" 
                                        placeholder="Enter Designation" 
                                        className="form-input" 
                                        name="designation"
                                        value={this.state.designation}
                                        onChange={this.infoChange}
                                  /> 
                          </div>
                        </div>
                        <div style={{ display: "flex", gap: "20px", marginBottom: "15px" }}>
                          <div style={{ flex: 1 }}>
                            Company Name  <input type="text" 
                                                placeholder="Enter Company Name" 
                                                className="form-input" 
                                                name="userCompanyName"
                                                value={this.state.userCompanyName}
                                                onChange={this.infoChange}
                                          /> 
                          </div>
                          <div style={{ flex: 1 }}>
                            Type Of Industry <input type="text" 
                                        placeholder="Enter Type Of Industry" 
                                        className="form-input" 
                                        name="typeOfIndustry"
                                        value={this.state.typeOfIndustry}
                                        onChange={this.infoChange}
                                  /> 
                          </div>
                        </div>
                        Where did you hear about the Webinar?
                          <select
                            className="form-input"
                            name="webinarSource"
                            value={this.state.webinarSource}
                            onChange={this.infoChange}
                          >
                            <option value="">Select an option</option>
                            <option value="EffyBuyWebsite">EffyBuy Website</option>
                            <option value="LinkedInPost">LinkedIn Post</option>
                            <option value="Email">Email</option>
                            <option value="WordOfMouth">Word of Mouth</option>
                            <option value="SocialMedia">Social Media</option>
                          </select>
                        <button type="submit" className="form-button">Register Now</button>
                      </form>
                      
                      <Modal
                        show={this.state.success}
                        onHide={this.handleCloseSuccess}
                        backdrop="static"
                        keyboard={false}
                      >
                        <Modal.Header
                          closeButton
                          style={{
                            backgroundColor: "white",
                            borderBottom: "0px",
                          }}
                        >
                          <Modal.Title style={{ color: "black" }}>
                          <img
                            src={effybuy_logo_with_name}
                            style={{ width: "120px" }}
                            alt="logo"
                          />
                          </Modal.Title>
                        </Modal.Header>
                        <Modal.Body style={{ color: "black", textAlign: "center" }}>
                          <div className="ppt_individual_card">
                            <div className="ppt_individual_card_title">
                              Thank you for registering for this session.   <br/> <br/>
                               <b>Mastering Negotiation: Securing Optimal Deals <br/>with EffyBuy's Auto Negotiation</b> <br/><br/>
                              Sunday 24th May 2025, 1:00-2:00pm <br/><br/>
                              You are being redirected to our webinar community and WhatsApp group.  <br/>
                              <button 
                                    className="whatsapp-button"
                                    onClick={() =>
                                    window.open(
                                        "https://chat.whatsapp.com/J2grLr3lYr75ugplsRt4zT",
                                        "_blank"
                                    )
                                    }
                                > 
                                    Join our WhatsApp Group now
                                </button><br/>
                                If the redirection does not occur automatically,<br/>Please click here to join the WhatsApp group.
                            </div>
                          </div>
                        </Modal.Body>
                      </Modal>
               
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
