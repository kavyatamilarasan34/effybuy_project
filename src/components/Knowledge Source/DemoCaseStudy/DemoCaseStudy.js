import React, { Component } from "react";
import "./demoCaseStudy.css";
import { Modal } from "react-bootstrap";
import image from "./images/bull_machine_case_study.webp";
import emailjs from "@emailjs/browser";
import DocumentMeta from "react-document-meta";
import BullMachineImage from "./images/Bull_machine_casestudy.jpg";
import PharmaImage from "./images/pharma_casestudy.jpg";
import AirlineAviationImage from "./images/Airline_Industry_casestudy.jpg";
import FairmontImage from "./images/Fairmont_casestudy.jpg";
import HospitalityImage from "./images/Hospitality_casestudy.jpg";
import TextileImage from "./images/textile_industry_casestudy.jpg";

var elasticemail = require("elasticemail");
var client = elasticemail.createClient({
  username: "support@bizgam.com",
  apiKey:
    "2507953C1F67E00B722664F5068BEBA4D48FCD18C3F4B23705B222B093272CFBD0B98CCDBAEA017117A684D2F9B1E260",
});

export default class PPT extends Component {
  state = {
    show1: false,
    show2: false,
    success: false,
    email: "",
    name: "",
    companyName: "",
    selectedCaseStudyLink: "", 
  };

  infoChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  handleClose1 = () => {
    this.setState({
      show1: false,
    });
  };
  handleShow1 = (link) => {
    this.setState({
      show1: true,
      selectedCaseStudyLink: link, // ← Store the clicked case study link
    });
  };

  handleClose2 = () => {
    this.setState({
      show2: false,
    });
  };
  handleShow2 = () => {
    this.setState({
      show2: true,
    });
  };
  handleShowSuccess = () => {
    this.setState({
      show1: false,
      success: true,
    });
  };
  handleCloseSuccess = () => {
    this.setState({
      success: false,
    });
  };
  handleCloseSuccess = () => {
    this.setState({
      success: false,
    });
  };

  // handleSubmit(e) {
  //   e.preventDefault();
  //   emailjs.sendForm(
  //     "service_h28clne",
  //     "template_vrxq1v7",
  //     e.target,
  //     "_SkP_OebRj5Q-nHBw"
  //   );
  //   // window.open('https://docs.google.com/presentation/d/1b7HVB30WXDv5ErySK666yB23M5VqW1mY/export?format=pdf','_blank');
  //   this.setState({
  //     show1: false,
  //     success: true,
  //   });
  //   // window.Email.send({
  //   //     Host : "smtp.gmail.com",
  //   //     Username : "support@bizgam.com",
  //   //     Password : "B1zG@m4u",
  //   //     // Username : "ai@bizgam.com",
  //   //     // Password : "florescer@2021",
  //   //     // Credential : true,
  //   //     To : this.state.email,
  //   //     From : "support@bizgam.com",
  //   //     Subject : "Effybuy : Download Case Study",
  //   //     Body : "<html><strong><a href='https://docs.google.com/presentation/d/1b7HVB30WXDv5ErySK666yB23M5VqW1mY/export?format=pdf'>Click here</a></strong><em> to download the case study.</em></html>"
  //   // }).then(
  //   //   message => alert(`Mail has been sent ${message}`)
  //   // );
  // // "homepage": "https://vikramBizgam.github.io/EffyBuy/"


  //   var msg = {
  //     from: "Support@bizgam.com",
  //     from_name: "Admin",
  //     to: this.state.email,
  //     subject: "Effybuy : Download Case Study",
  //     // body_html:
  //     //   "<html><strong><a href='https://docs.google.com/presentation/d/1b7HVB30WXDv5ErySK666yB23M5VqW1mY/export?format=pdf'>Click here</a></strong><em> to download the case study.</em></html>",
  //     body_html: "<html><strong><a href='${caseStudyLink}'>Click here</a></strong><em> to download the case study.</em></html>"
  //   };

  //   client.mailer.send(msg, function (err, result) {
  //     if (err) {
  //       return console.error(err);
  //     }

  //     console.log(result);
  //   });
  // }
  handleSubmit(e,caseStudyLink) {
    e.preventDefault();

    const { email, name, companyName } = this.state;

    const msg = {
      from_name: "Support",          
      from_email: "support@bizgam.com", 
      user_email: email,              
      subject: "Case Study Download Lead – Please Reach Out", 
      caseStudyLink: caseStudyLink,
      name: name,   
      companyName: companyName, 
    };

    emailjs.send(
      "service_h28clne",  
      "template_vrxq1v7",  
      msg,  
      "_SkP_OebRj5Q-nHBw"  
    ).then(
      () => {
        
        this.setState({
          show1: false,
          success: true,
        });
        window.open(caseStudyLink, "_blank");
      },
      (error) => {
        console.error("Failed to send email:", error);
        alert("Failed to send email. Please try again.");
      }
    );
  }

  render() {
    const meta = {
      title: "Our Case Study - EffyBuy",
      description: "Checkout our RFP Management Software CaseStudy",
      meta: {
        charset: "utf-8",
        // name: {
        //   keywords: 'react,meta,document,html,tags'
        // }
      },
    };

    return (
      // <div className="knowledge_source_main_div">
      <DocumentMeta {...meta}>
        <div className="feature-blog-one" style={{ marginTop: "50px" }}>
          <div className="shapes shape-two"></div>
          <div className="shapes shape-three"></div>
          <div className="container">
            <div className="row mb-4">
              <div
                className="col-lg-12 col-md-12"
                data-aos="fade-up"
                data-aos-duration="1200"
                data-aos-delay="100"
              >
                <div className="knowledgesorce">
                  <img
                    src={BullMachineImage}
                    alt="Case Study - Bull Machine"
                    className="image-meta"
                  />
                  {/* <h3>Bull Machine</h3>
                  <p style={{ marginTop: "20px" }}>
                    Bull Machine is leading machine manufacturing enterprise
                    into tractor and construction equipment.
                    <br />
                    They were able to save cost on their purchases upto 3%.
                  </p> */}
                  <div>
                    <button
                      className="demo_case_study_individual_card_download_btn downloadbtn"
                      onClick={() =>
                        this.handleShow1('https://docs.google.com/presentation/d/1b7HVB30WXDv5ErySK666yB23M5VqW1mY/export?format=pdf')
                      }
                    >
                      Download
                    </button>

                    <Modal
                      show={this.state.show1}
                      onHide={this.handleClose1}
                      backdrop="static"
                      keyboard={false}
                    >
                      <Modal.Header
                        closeButton
                        style={{
                          backgroundColor: "#ffeaa0",
                          borderBottom: "0px",
                        }}
                      >
                        <Modal.Title style={{ color: "black" }}>
                          Download Case Study
                        </Modal.Title>
                      </Modal.Header>
                      <Modal.Body className="vvvs" style={{ color: "black" }}>
                        <div className="demo_case_study_modal_description">
                          <div className="demo_case_study_modal_description_title">
                            In this case study you will discover...
                          </div>
                          <div className="demo_case_study_modal_description_points">
                            <ul>
                              <li style={{ color: "black" }}>
                                Business challenges and their solutions.
                              </li>
                              <li style={{ color: "black" }}>
                                Approach to the solutions and their impacts.
                              </li>
                            </ul>
                          </div>
                        </div>
                        <hr />
                        <div className="demo_case_study_modal_form">
                          <form
                            data-toggle="validator"
                            onSubmit={(e) => {
                              this.handleSubmit(e,this.state.selectedCaseStudyLink);
                            }}
                          >
                            <div className="form-group">
                              <input
                                type="text"
                                data-minlength="4"
                                className="form-control"
                                id="inputName"
                                data-error="Please enter atleast 4 words"
                                placeholder="Name"
                                required
                                name="name"
                                value={this.state.name}
                                onChange={(e) => {
                                  this.infoChange(e);
                                }}
                              />
                              <div className="help-block with-errors"></div>
                            </div>
                            <div className="form-group mt-3">
                              <input
                                type="email"
                                className="form-control"
                                id="inputEmail"
                                data-error="Please enter correct email address"
                                pattern="^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
                                placeholder="Email"
                                required
                                name="email"
                                value={this.state.email}
                                onChange={(e) => {
                                  this.infoChange(e);
                                }}
                              />
                              <div className="help-block with-errors"></div>
                            </div>
                            <div className="form-group mt-3">
                              <input
                                type="text"
                                className="form-control"
                                id="inputCompanyName"
                                data-error="Please enter company name"
                                placeholder="Company Name"
                                required
                                name="companyName"
                                value={this.state.companyName}
                                onChange={(e) => {
                                  this.infoChange(e);
                                }}
                              />
                              <div className="help-block with-errors"></div>
                            </div>
                            <div
                              className="form-group mt-3"
                              style={{ display: "none" }}
                            >
                              <input
                                type="text"
                                value="Case Study is Downloaded"
                                required
                                name="subject"
                              />
                              <div className="help-block with-errors"></div>
                            </div>
                            <div
                              className="form-group mt-3"
                              style={{ display: "none" }}
                            >
                              <input
                                type="text"
                                value="eslwyupc6_ytamsjos@parser.zohocrm.in"
                                required
                                name="email_cc"
                              />
                              <div className="help-block with-errors"></div>
                            </div>
                            <br />
                            <div className="form-group">
                              <button
                                type="submit"
                                className="download_popup_button"
                              >
                                Download
                              </button>
                            </div>
                          </form>
                        </div>
                      </Modal.Body>
                    </Modal>

                    {/* Download link send to email */}
                    {/* <Modal
                      show={this.state.success}
                      onHide={this.handleCloseSuccess}
                      backdrop="static"
                      keyboard={false}
                    >
                      <Modal.Header
                        closeButton
                        style={{
                          backgroundColor: "#ffeaa0",
                          borderBottom: "0px",
                        }}
                      >
                        <Modal.Title style={{ color: "black" }}>
                          Case Study
                        </Modal.Title>
                      </Modal.Header>
                      <Modal.Body className="vvvs" style={{ color: "black" }}>
                        <div className="demo_case_study_modal_description">
                          <div className="demo_case_study_modal_description_title">
                            Hello <b>{this.state.name}</b>, We sent you a link
                            on <b>{this.state.email}</b>.<br />
                            If you do not see the email in a few minutes, check
                            your “junk mail” folder or “spam” folder.
                          </div>
                        </div>
                      </Modal.Body>
                    </Modal> */}
                    {/* Download link send to email end*/}
                  </div>
                </div>

                <div className="knowledgesorce">
                  <img
                    src={PharmaImage}
                    alt="Case Study - Bull Machine"
                    className="image-meta"
                  />
                  <div>
                    <button
                      className="demo_case_study_individual_card_download_btn downloadbtn"
                      onClick={() =>
                        this.handleShow1('https://drive.google.com/file/d/1YFKefdORLs5_JQJVJlFTqq-afvKxHEyX/view?usp=drive_link')
                      }
                    >
                      Download
                    </button>

                    <Modal
                      show={this.state.show1}
                      onHide={this.handleClose1}
                      backdrop="static"
                      keyboard={false}
                    >
                      <Modal.Header
                        closeButton
                        style={{
                          backgroundColor: "#ffeaa0",
                          borderBottom: "0px",
                        }}
                      >
                        <Modal.Title style={{ color: "black" }}>
                          Download Case Study
                        </Modal.Title>
                      </Modal.Header>
                      <Modal.Body className="vvvs" style={{ color: "black" }}>
                        <div className="demo_case_study_modal_description">
                          <div className="demo_case_study_modal_description_title">
                            In this case study you will discover...
                          </div>
                          <div className="demo_case_study_modal_description_points">
                            <ul>
                              <li style={{ color: "black" }}>
                                Business challenges and their solutions.
                              </li>
                              <li style={{ color: "black" }}>
                                Approach to the solutions and their impacts.
                              </li>
                            </ul>
                          </div>
                        </div>
                        <hr />
                        <div className="demo_case_study_modal_form">
                          <form
                            data-toggle="validator"
                            onSubmit={(e) => {
                              this.handleSubmit(e,this.state.selectedCaseStudyLink);
                            }}
                          >
                            <div className="form-group">
                              <input
                                type="text"
                                data-minlength="4"
                                className="form-control"
                                id="inputName"
                                data-error="Please enter atleast 4 words"
                                placeholder="Name"
                                required
                                name="name"
                                value={this.state.name}
                                onChange={(e) => {
                                  this.infoChange(e);
                                }}
                              />
                              <div className="help-block with-errors"></div>
                            </div>
                            <div className="form-group mt-3">
                              <input
                                type="email"
                                className="form-control"
                                id="inputEmail"
                                data-error="Please enter correct email address"
                                pattern="^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
                                placeholder="Email"
                                required
                                name="email"
                                value={this.state.email}
                                onChange={(e) => {
                                  this.infoChange(e);
                                }}
                              />
                              <div className="help-block with-errors"></div>
                            </div>
                            <div className="form-group mt-3">
                              <input
                                type="text"
                                className="form-control"
                                id="inputCompanyName"
                                data-error="Please enter company name"
                                placeholder="Company Name"
                                required
                                name="companyName"
                                value={this.state.companyName}
                                onChange={(e) => {
                                  this.infoChange(e);
                                }}
                              />
                              <div className="help-block with-errors"></div>
                            </div>
                            <div
                              className="form-group mt-3"
                              style={{ display: "none" }}
                            >
                              <input
                                type="text"
                                value="Case Study is Downloaded"
                                required
                                name="subject"
                              />
                              <div className="help-block with-errors"></div>
                            </div>
                            <div
                              className="form-group mt-3"
                              style={{ display: "none" }}
                            >
                              <input
                                type="text"
                                value="eslwyupc6_ytamsjos@parser.zohocrm.in"
                                required
                                name="email_cc"
                              />
                              <div className="help-block with-errors"></div>
                            </div>
                            <br />
                            <div className="form-group">
                              <button
                                type="submit"
                                className="download_popup_button"
                              >
                                Download
                              </button>
                            </div>
                          </form>
                        </div>
                      </Modal.Body>
                    </Modal>

                    {/* Download link send to email */}
                    {/* <Modal
                      show={this.state.success}
                      onHide={this.handleCloseSuccess}
                      backdrop="static"
                      keyboard={false}
                    >
                      <Modal.Header
                        closeButton
                        style={{
                          backgroundColor: "#ffeaa0",
                          borderBottom: "0px",
                        }}
                      >
                        <Modal.Title style={{ color: "black" }}>
                          Case Study
                        </Modal.Title>
                      </Modal.Header>
                      <Modal.Body className="vvvs" style={{ color: "black" }}>
                        <div className="demo_case_study_modal_description">
                          <div className="demo_case_study_modal_description_title">
                            Hello <b>{this.state.name}</b>, We sent you a link
                            on <b>{this.state.email}</b>.<br />
                            If you do not see the email in a few minutes, check
                            your “junk mail” folder or “spam” folder.
                          </div>
                        </div>
                      </Modal.Body>
                    </Modal> */}
                    {/* Download link send to email end*/}
                  </div>
                </div>

                <div className="knowledgesorce">
                  <img
                    src={AirlineAviationImage}
                    alt="Case Study - Bull Machine"
                    className="image-meta"
                  />
                  <div>
                    <button
                      className="demo_case_study_individual_card_download_btn downloadbtn"
                      onClick={() =>
                        this.handleShow1('https://drive.google.com/file/d/1pFkPa_Hbrw22_QGuigJYy2WkohS7seW0/view?ts=681c8759')
                      }
                    >
                      Download
                    </button>

                    <Modal
                      show={this.state.show1}
                      onHide={this.handleClose1}
                      backdrop="static"
                      keyboard={false}
                    >
                      <Modal.Header
                        closeButton
                        style={{
                          backgroundColor: "#ffeaa0",
                          borderBottom: "0px",
                        }}
                      >
                        <Modal.Title style={{ color: "black" }}>
                          Download Case Study
                        </Modal.Title>
                      </Modal.Header>
                      <Modal.Body className="vvvs" style={{ color: "black" }}>
                        <div className="demo_case_study_modal_description">
                          <div className="demo_case_study_modal_description_title">
                            In this case study you will discover...
                          </div>
                          <div className="demo_case_study_modal_description_points">
                            <ul>
                              <li style={{ color: "black" }}>
                                Business challenges and their solutions.
                              </li>
                              <li style={{ color: "black" }}>
                                Approach to the solutions and their impacts.
                              </li>
                            </ul>
                          </div>
                        </div>
                        <hr />
                        <div className="demo_case_study_modal_form">
                          <form
                            data-toggle="validator"
                            onSubmit={(e) => {
                              this.handleSubmit(e,this.state.selectedCaseStudyLink);
                            }}
                          >
                            <div className="form-group">
                              <input
                                type="text"
                                data-minlength="4"
                                className="form-control"
                                id="inputName"
                                data-error="Please enter atleast 4 words"
                                placeholder="Name"
                                required
                                name="name"
                                value={this.state.name}
                                onChange={(e) => {
                                  this.infoChange(e);
                                }}
                              />
                              <div className="help-block with-errors"></div>
                            </div>
                            <div className="form-group mt-3">
                              <input
                                type="email"
                                className="form-control"
                                id="inputEmail"
                                data-error="Please enter correct email address"
                                pattern="^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
                                placeholder="Email"
                                required
                                name="email"
                                value={this.state.email}
                                onChange={(e) => {
                                  this.infoChange(e);
                                }}
                              />
                              <div className="help-block with-errors"></div>
                            </div>
                            <div className="form-group mt-3">
                              <input
                                type="text"
                                className="form-control"
                                id="inputCompanyName"
                                data-error="Please enter company name"
                                placeholder="Company Name"
                                required
                                name="companyName"
                                value={this.state.companyName}
                                onChange={(e) => {
                                  this.infoChange(e);
                                }}
                              />
                              <div className="help-block with-errors"></div>
                            </div>
                            <div
                              className="form-group mt-3"
                              style={{ display: "none" }}
                            >
                              <input
                                type="text"
                                value="Case Study is Downloaded"
                                required
                                name="subject"
                              />
                              <div className="help-block with-errors"></div>
                            </div>
                            <div
                              className="form-group mt-3"
                              style={{ display: "none" }}
                            >
                              <input
                                type="text"
                                value="eslwyupc6_ytamsjos@parser.zohocrm.in"
                                required
                                name="email_cc"
                              />
                              <div className="help-block with-errors"></div>
                            </div>
                            <br />
                            <div className="form-group">
                              <button
                                type="submit"
                                className="download_popup_button"
                              >
                                Download
                              </button>
                            </div>
                          </form>
                        </div>
                      </Modal.Body>
                    </Modal>

                    {/* Download link send to email */}
                    {/* <Modal
                      show={this.state.success}
                      onHide={this.handleCloseSuccess}
                      backdrop="static"
                      keyboard={false}
                    >
                      <Modal.Header
                        closeButton
                        style={{
                          backgroundColor: "#ffeaa0",
                          borderBottom: "0px",
                        }}
                      >
                        <Modal.Title style={{ color: "black" }}>
                          Case Study
                        </Modal.Title>
                      </Modal.Header>
                      <Modal.Body className="vvvs" style={{ color: "black" }}>
                        <div className="demo_case_study_modal_description">
                          <div className="demo_case_study_modal_description_title">
                            Hello <b>{this.state.name}</b>, We sent you a link
                            on <b>{this.state.email}</b>.<br />
                            If you do not see the email in a few minutes, check
                            your “junk mail” folder or “spam” folder.
                          </div>
                        </div>
                      </Modal.Body>
                    </Modal> */}
                    {/* Download link send to email end*/}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="container">
            <div className="row mb-4">
              <div
                className="col-lg-12 col-md-12"
                data-aos="fade-up"
                data-aos-duration="1200"
                data-aos-delay="100"
              >
                <div className="knowledgesorce">
                  <img
                    src={FairmontImage}
                    alt="Case Study - Bull Machine"
                    className="image-meta"
                  />
                  <div>
                    <button
                      className="demo_case_study_individual_card_download_btn downloadbtn"
                      onClick={() =>
                        this.handleShow1('https://drive.google.com/file/d/1yK9jeutg_RNGDCEXZTkbHWRvmVQeQZr8/view?usp=drive_link')
                      }
                    >
                      Download
                    </button>

                    <Modal
                      show={this.state.show1}
                      onHide={this.handleClose1}
                      backdrop="static"
                      keyboard={false}
                    >
                      <Modal.Header
                        closeButton
                        style={{
                          backgroundColor: "#ffeaa0",
                          borderBottom: "0px",
                        }}
                      >
                        <Modal.Title style={{ color: "black" }}>
                          Download Case Study
                        </Modal.Title>
                      </Modal.Header>
                      <Modal.Body className="vvvs" style={{ color: "black" }}>
                        <div className="demo_case_study_modal_description">
                          <div className="demo_case_study_modal_description_title">
                            In this case study you will discover...
                          </div>
                          <div className="demo_case_study_modal_description_points">
                            <ul>
                              <li style={{ color: "black" }}>
                                Business challenges and their solutions.
                              </li>
                              <li style={{ color: "black" }}>
                                Approach to the solutions and their impacts.
                              </li>
                            </ul>
                          </div>
                        </div>
                        <hr />
                        <div className="demo_case_study_modal_form">
                          <form
                            data-toggle="validator"
                            onSubmit={(e) => {
                              this.handleSubmit(e,this.state.selectedCaseStudyLink);
                            }}
                          >
                            <div className="form-group">
                              <input
                                type="text"
                                data-minlength="4"
                                className="form-control"
                                id="inputName"
                                data-error="Please enter atleast 4 words"
                                placeholder="Name"
                                required
                                name="name"
                                value={this.state.name}
                                onChange={(e) => {
                                  this.infoChange(e);
                                }}
                              />
                              <div className="help-block with-errors"></div>
                            </div>
                            <div className="form-group mt-3">
                              <input
                                type="email"
                                className="form-control"
                                id="inputEmail"
                                data-error="Please enter correct email address"
                                pattern="^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
                                placeholder="Email"
                                required
                                name="email"
                                value={this.state.email}
                                onChange={(e) => {
                                  this.infoChange(e);
                                }}
                              />
                              <div className="help-block with-errors"></div>
                            </div>
                            <div className="form-group mt-3">
                              <input
                                type="text"
                                className="form-control"
                                id="inputCompanyName"
                                data-error="Please enter company name"
                                placeholder="Company Name"
                                required
                                name="companyName"
                                value={this.state.companyName}
                                onChange={(e) => {
                                  this.infoChange(e);
                                }}
                              />
                              <div className="help-block with-errors"></div>
                            </div>
                            <div
                              className="form-group mt-3"
                              style={{ display: "none" }}
                            >
                              <input
                                type="text"
                                value="Case Study is Downloaded"
                                required
                                name="subject"
                              />
                              <div className="help-block with-errors"></div>
                            </div>
                            <div
                              className="form-group mt-3"
                              style={{ display: "none" }}
                            >
                              <input
                                type="text"
                                value="eslwyupc6_ytamsjos@parser.zohocrm.in"
                                required
                                name="email_cc"
                              />
                              <div className="help-block with-errors"></div>
                            </div>
                            <br />
                            <div className="form-group">
                              <button
                                type="submit"
                                className="download_popup_button"
                              >
                                Download
                              </button>
                            </div>
                          </form>
                        </div>
                      </Modal.Body>
                    </Modal>

                    {/* Download link send to email */}
                    {/* <Modal
                      show={this.state.success}
                      onHide={this.handleCloseSuccess}
                      backdrop="static"
                      keyboard={false}
                    >
                      <Modal.Header
                        closeButton
                        style={{
                          backgroundColor: "#ffeaa0",
                          borderBottom: "0px",
                        }}
                      >
                        <Modal.Title style={{ color: "black" }}>
                          Case Study
                        </Modal.Title>
                      </Modal.Header>
                      <Modal.Body className="vvvs" style={{ color: "black" }}>
                        <div className="demo_case_study_modal_description">
                          <div className="demo_case_study_modal_description_title">
                            Hello <b>{this.state.name}</b>, We sent you a link
                            on <b>{this.state.email}</b>.<br />
                            If you do not see the email in a few minutes, check
                            your “junk mail” folder or “spam” folder.
                          </div>
                        </div>
                      </Modal.Body>
                    </Modal> */}
                    {/* Download link send to email end*/}
                  </div>
                </div>

                <div className="knowledgesorce">
                  <img
                    src={HospitalityImage}
                    alt="Case Study - Bull Machine"
                    className="image-meta"
                  />
                  <div>
                    <button
                      className="demo_case_study_individual_card_download_btn downloadbtn"
                      onClick={() =>
                        this.handleShow1('https://drive.google.com/file/d/1yK9jeutg_RNGDCEXZTkbHWRvmVQeQZr8/view?usp=drive_link')
                      }
                    >
                      Download
                    </button>

                    <Modal
                      show={this.state.show1}
                      onHide={this.handleClose1}
                      backdrop="static"
                      keyboard={false}
                    >
                      <Modal.Header
                        closeButton
                        style={{
                          backgroundColor: "#ffeaa0",
                          borderBottom: "0px",
                        }}
                      >
                        <Modal.Title style={{ color: "black" }}>
                          Download Case Study
                        </Modal.Title>
                      </Modal.Header>
                      <Modal.Body className="vvvs" style={{ color: "black" }}>
                        <div className="demo_case_study_modal_description">
                          <div className="demo_case_study_modal_description_title">
                            In this case study you will discover...
                          </div>
                          <div className="demo_case_study_modal_description_points">
                            <ul>
                              <li style={{ color: "black" }}>
                                Business challenges and their solutions.
                              </li>
                              <li style={{ color: "black" }}>
                                Approach to the solutions and their impacts.
                              </li>
                            </ul>
                          </div>
                        </div>
                        <hr />
                        <div className="demo_case_study_modal_form">
                          <form
                            data-toggle="validator"
                            onSubmit={(e) => {
                              this.handleSubmit(e,this.state.selectedCaseStudyLink);
                            }}
                          >
                            <div className="form-group">
                              <input
                                type="text"
                                data-minlength="4"
                                className="form-control"
                                id="inputName"
                                data-error="Please enter atleast 4 words"
                                placeholder="Name"
                                required
                                name="name"
                                value={this.state.name}
                                onChange={(e) => {
                                  this.infoChange(e);
                                }}
                              />
                              <div className="help-block with-errors"></div>
                            </div>
                            <div className="form-group mt-3">
                              <input
                                type="email"
                                className="form-control"
                                id="inputEmail"
                                data-error="Please enter correct email address"
                                pattern="^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
                                placeholder="Email"
                                required
                                name="email"
                                value={this.state.email}
                                onChange={(e) => {
                                  this.infoChange(e);
                                }}
                              />
                              <div className="help-block with-errors"></div>
                            </div>
                            <div className="form-group mt-3">
                              <input
                                type="text"
                                className="form-control"
                                id="inputCompanyName"
                                data-error="Please enter company name"
                                placeholder="Company Name"
                                required
                                name="companyName"
                                value={this.state.companyName}
                                onChange={(e) => {
                                  this.infoChange(e);
                                }}
                              />
                              <div className="help-block with-errors"></div>
                            </div>
                            <div
                              className="form-group mt-3"
                              style={{ display: "none" }}
                            >
                              <input
                                type="text"
                                value="Case Study is Downloaded"
                                required
                                name="subject"
                              />
                              <div className="help-block with-errors"></div>
                            </div>
                            <div
                              className="form-group mt-3"
                              style={{ display: "none" }}
                            >
                              <input
                                type="text"
                                value="eslwyupc6_ytamsjos@parser.zohocrm.in"
                                required
                                name="email_cc"
                              />
                              <div className="help-block with-errors"></div>
                            </div>
                            <br />
                            <div className="form-group">
                              <button
                                type="submit"
                                className="download_popup_button"
                              >
                                Download
                              </button>
                            </div>
                          </form>
                        </div>
                      </Modal.Body>
                    </Modal>

                    {/* Download link send to email */}
                    {/* <Modal
                      show={this.state.success}
                      onHide={this.handleCloseSuccess}
                      backdrop="static"
                      keyboard={false}
                    >
                      <Modal.Header
                        closeButton
                        style={{
                          backgroundColor: "#ffeaa0",
                          borderBottom: "0px",
                        }}
                      >
                        <Modal.Title style={{ color: "black" }}>
                          Case Study
                        </Modal.Title>
                      </Modal.Header>
                      <Modal.Body className="vvvs" style={{ color: "black" }}>
                        <div className="demo_case_study_modal_description">
                          <div className="demo_case_study_modal_description_title">
                            Hello <b>{this.state.name}</b>, We sent you a link
                            on <b>{this.state.email}</b>.<br />
                            If you do not see the email in a few minutes, check
                            your “junk mail” folder or “spam” folder.
                          </div>
                        </div>
                      </Modal.Body>
                    </Modal> */}
                    {/* Download link send to email end*/}
                  </div>
                </div>

                <div className="knowledgesorce">
                  <img
                    src={TextileImage}
                    alt="Case Study - Bull Machine"
                    className="image-meta"
                  />
                  <div>
                    <button
                      className="demo_case_study_individual_card_download_btn downloadbtn"
                      onClick={() =>
                        this.handleShow1('https://drive.google.com/file/d/1dYKWmMh7UVOes1M8cyPilDp-qX2yOaHM/view?usp=drive_link')
                      }
                    >
                      Download
                    </button>

                    <Modal
                      show={this.state.show1}
                      onHide={this.handleClose1}
                      backdrop="static"
                      keyboard={false}
                    >
                      <Modal.Header
                        closeButton
                        style={{
                          backgroundColor: "#ffeaa0",
                          borderBottom: "0px",
                        }}
                      >
                        <Modal.Title style={{ color: "black" }}>
                          Download Case Study
                        </Modal.Title>
                      </Modal.Header>
                      <Modal.Body className="vvvs" style={{ color: "black" }}>
                        <div className="demo_case_study_modal_description">
                          <div className="demo_case_study_modal_description_title">
                            In this case study you will discover...
                          </div>
                          <div className="demo_case_study_modal_description_points">
                            <ul>
                              <li style={{ color: "black" }}>
                                Business challenges and their solutions.
                              </li>
                              <li style={{ color: "black" }}>
                                Approach to the solutions and their impacts.
                              </li>
                            </ul>
                          </div>
                        </div>
                        <hr />
                        <div className="demo_case_study_modal_form">
                          <form
                            data-toggle="validator"
                            onSubmit={(e) => {
                              this.handleSubmit(e,this.state.selectedCaseStudyLink);
                            }}
                          >
                            <div className="form-group">
                              <input
                                type="text"
                                data-minlength="4"
                                className="form-control"
                                id="inputName"
                                data-error="Please enter atleast 4 words"
                                placeholder="Name"
                                required
                                name="name"
                                value={this.state.name}
                                onChange={(e) => {
                                  this.infoChange(e);
                                }}
                              />
                              <div className="help-block with-errors"></div>
                            </div>
                            <div className="form-group mt-3">
                              <input
                                type="email"
                                className="form-control"
                                id="inputEmail"
                                data-error="Please enter correct email address"
                                pattern="^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
                                placeholder="Email"
                                required
                                name="email"
                                value={this.state.email}
                                onChange={(e) => {
                                  this.infoChange(e);
                                }}
                              />
                              <div className="help-block with-errors"></div>
                            </div>
                            <div className="form-group mt-3">
                              <input
                                type="text"
                                className="form-control"
                                id="inputCompanyName"
                                data-error="Please enter company name"
                                placeholder="Company Name"
                                required
                                name="companyName"
                                value={this.state.companyName}
                                onChange={(e) => {
                                  this.infoChange(e);
                                }}
                              />
                              <div className="help-block with-errors"></div>
                            </div>
                            <div
                              className="form-group mt-3"
                              style={{ display: "none" }}
                            >
                              <input
                                type="text"
                                value="Case Study is Downloaded"
                                required
                                name="subject"
                              />
                              <div className="help-block with-errors"></div>
                            </div>
                            <div
                              className="form-group mt-3"
                              style={{ display: "none" }}
                            >
                              <input
                                type="text"
                                value="eslwyupc6_ytamsjos@parser.zohocrm.in"
                                required
                                name="email_cc"
                              />
                              <div className="help-block with-errors"></div>
                            </div>
                            <br />
                            <div className="form-group">
                              <button
                                type="submit"
                                className="download_popup_button"
                              >
                                Download
                              </button>
                            </div>
                          </form>
                        </div>
                      </Modal.Body>
                    </Modal>

                    {/* Download link send to email */}
                    {/* <Modal
                      show={this.state.success}
                      onHide={this.handleCloseSuccess}
                      backdrop="static"
                      keyboard={false}
                    >
                      <Modal.Header
                        closeButton
                        style={{
                          backgroundColor: "#ffeaa0",
                          borderBottom: "0px",
                        }}
                      >
                        <Modal.Title style={{ color: "black" }}>
                          Case Study
                        </Modal.Title>
                      </Modal.Header>
                      <Modal.Body className="vvvs" style={{ color: "black" }}>
                        <div className="demo_case_study_modal_description">
                          <div className="demo_case_study_modal_description_title">
                            Hello <b>{this.state.name}</b>, We sent you a link
                            on <b>{this.state.email}</b>.<br />
                            If you do not see the email in a few minutes, check
                            your “junk mail” folder or “spam” folder.
                          </div>
                        </div>
                      </Modal.Body>
                    </Modal> */}
                    {/* Download link send to email end*/}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </DocumentMeta>
    );
  }
}
