import React, { Component } from "react";
import imggg from "../../assets/images/assets/RFQ_Reverse_Auction_Screen.webp";
import imggg1 from "../../assets/images/assets/funnel.png";
import imggg2 from "../../assets/images/assets/compare_RFQ.webp";
import imggg3 from "../../assets/images/assets/Fast_response_data.webp";
import imggg4 from "../../assets/images/assets/tracking.webp";
import imggg5 from "../../assets/images/assets/Effybuy_with_ERP_System.webp";
import imggg6 from "../../assets/images/assets/RFQ_Reverse.png";
import rfq_banner from "../../assets/images/assets/RFQ_Process_Banner.webp";
import mov_icon_1 from "../../assets/images/assets/Auction-09.png";
import mov_compare_1 from "../../assets/images/assets/Compare-09.png";
import mov_hand_1 from "../../assets/images/assets/funnel-09.png";
import mov_logi_1 from "../../assets/images/assets/logistics-09.png";
import mov_proc_1 from "../../assets/images/assets/Procurement-09.png";
import RFQ_Report_Screen from "../../assets/images/assets/RFQ_Report_Screen.png";
// RFQ_Reverse_Auction_Screen
import bgimg from "../../assets/images/shape/1.svg";
import dotshape from "../../assets/images/shape/2.svg";
import create_icon from "../../assets/images/icon/03.svg";
import compare_icon from "../../assets/images/icon/04.svg";
import report_icon from "../../assets/images/icon/02.svg";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";

import { PopupButton, CalendlyEventListener } from "react-calendly";
import DocumentMeta from "react-document-meta";

const FaqContent = [
  {
    title: "Do i need to upload my supplier contact?",
    desc: `Yes, only you can upload your preferred supplier and their contact for further communication. We will guide you on the on-boarding process.`,
    expand: "a",
  },
  {
    title: "Is my supplier required to register on effybuy?",
    desc: `No Registration Required For Suppliers. Effybuy automatically send a link via email with auto-generate password. Supplier can login and submit their quotation. `,
    expand: "b",
  },
  {
    title: "Can I track my supplier track record of quotation?",
    desc: `Yes, we provide various function to track through item wise, RFQ wise, supplier wise reports, etc.`,
    expand: "c",
  },
  {
    title: "Do you charge for my supplier to access effybuy?",
    desc: `No, It’s completely free for your suppliers to use.`,
    expand: "d",
  },
  {
    title: "Is my Data Safe?",
    desc: `Effybuy hosted on Tier IV SSAE 16 Type II Data Centre, highest security and privacy for your datas.`,
    expand: "e",
  },
];

export default class Rfq extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  handleSubmit = (event, url) => {
    event.preventDefault();
    var callback = function () {
      if (typeof url != "undefined") {
        // window.location = url;
      }
    };
    window.lintrk("track", { conversion_id: 7514444 });
    window.gtag("event", "conversion", {
      send_to: "AW-304854293/KcwlCLPJ4akDEJXqrpEB",
      event_callback: callback,
    });
    return false;
  };

  render() {
    const meta = {
      title:
        "Reverse Auction Software Application - RFP/RFQ Process Automation Platform",
      description:
        "Effybuy involves RFP/RFQ Software in a proficient and simple manner to put you on a way toward obtaining automation with a fully transparent and efficient process.",
      meta: {
        charset: "utf-8",
        // name: {
        //   keywords: 'react,meta,document,html,tags'
        // }
      },
    };

    return (
      <DocumentMeta {...meta}>
        <div className="main-page-wrapper">
          <div className="hero-banner-one">
            <div className="title-style-seven text-center">
              <h1>RFQ & RFP Automation</h1>
            </div>
            <div className="hero-upper-container">
              <div className="icon-box-one">
                <img src={mov_hand_1} alt="logo" />
              </div>
              <div className="icon-box-two">
                <img src={mov_icon_1} alt="logo" />
              </div>
              <div className="icon-box-four">
                <img src={mov_compare_1} alt="logo" />
              </div>
              <div className="icon-box-six">
                <img src={mov_hand_1} alt="logo" />
              </div>
              <div className="icon-box-seven">
                <img src={mov_logi_1} alt="logo" />
              </div>
              <div className="icon-box-eight">
                <img src={mov_proc_1} alt="logo" />
              </div>

              <div className="bubble-one"></div>
              <div className="bubble-two"></div>
              <div className="bubble-three"></div>
              <div className="bubble-four"></div>
              <div className="bubble-five"></div>
              <div className="bubble-six"></div>

              <div className="container">
                <div className="row">
                  <div className="col-xl-8 col-lg-10 m-auto">
                    <img src={rfq_banner} alt="RFQ Flow Banner"></img>
                    <p className="hero-sub-heading"></p>
                  </div>
                </div>

                <form
                  action="#"
                  className="subscription-form"
                  onClick={(e) => {
                    this.handleSubmit(
                      e,
                      "https://calendly.com/bizgamsupport/effybuy"
                    );
                  }}
                ></form>
              </div>
            </div>
          </div>

          <div
            id="carouselExampleControls"
            class="carousel slide"
            data-ride="carousel"
          >
            <div class="carousel-inner text-center">
              <div
                className="carousel-item active"
                style={{ paddingBottom: "40px" }}
              >
                <div
                  style={{
                    display: "inline-block",
                    position: "relative",
                    zIndex: "5",
                    width: "80%",
                  }}
                >
                  <img src={imggg6} alt="RFQ Reverse Auction" />
                  <img
                    src={imggg1}
                    alt="Data Processing Funnel"
                    style={{
                      width: "30%",
                      right: "2%",
                      bottom: "-10%",
                      zIndex: "1",
                      animation: "jumpTwo 3s infinite linear",
                      position: "absolute",
                    }}
                  />
                </div>
              </div>
              <div
                class="carousel-item text-center"
                style={{ paddingBottom: "40px" }}
              >
                <div
                  style={{
                    display: "inline-block",
                    position: "relative",
                    zIndex: "5",
                    width: "80%",
                  }}
                >
                  <img
                    class=""
                    src={RFQ_Report_Screen}
                    alt="RFQ Work Process Report"
                    style={{ margin: "0 auto" }}
                  />
                </div>
              </div>
            </div>
            <a
              class="carousel-control-prev"
              href="#carouselExampleControls"
              role="button"
              data-slide="prev"
            >
              <i
                class="fas fa-arrow-left"
                aria-hidden="true"
                style={{ color: "#999" }}
              ></i>
              <span class="sr-only">Previous</span>
            </a>

            <a
              class="carousel-control-next"
              href="#carouselExampleControls"
              role="button"
              data-slide="next"
            >
              <i
                class="fas fa-arrow-right"
                aria-hidden="true"
                style={{ color: "#999" }}
              ></i>
              <span class="sr-only">Next</span>
            </a>
          </div>
          <div className="fancy-feature-one pb-100 md-pb-80">
            <div className="block-style-one" style={{ marginTop: "100px" }}>
              <div className="title-style-one text-center mb-150 md-mb-100">
                <h2>How it works.</h2>
              </div>
              <div className="container">
                <div className="d-lg-flex align-items-center justify-content-between inner-container">
                  <div className="block-meta-data text-center">
                    <div className="line-dot-containerr">
                      <div className="icon-box">
                        <img src={create_icon} alt="icon" />
                      </div>{" "}
                      <p>Create</p>
                    </div>
                    <div className="hover-content">
                      <span>
                        On One Click, A simple login, add your requirement,
                        supplier list & send RFQs.
                      </span>
                    </div>
                  </div>{" "}
                  <div className="block-meta-data text-center">
                    <div className="line-dot-containerr">
                      <div className="icon-box">
                        <img src={compare_icon} alt="icon" />
                      </div>
                      <p>Compare</p>
                    </div>
                    <div className="hover-content">
                      <span>
                        Easy to organize, compare, analyze your quotations and
                        get best price.
                      </span>
                    </div>
                  </div>
                  <div className="block-meta-data text-center">
                    <div className="line-dot-containerr">
                      <div className="icon-box">
                        <img src={report_icon} alt="icon" />
                      </div>
                      <p>Report</p>
                    </div>
                    <div className="hover-content text-right">
                      <span>
                        Track your purchases history and supplier performances.
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="fancy-feature-two">
            <div className="container">
              <div className="row">
                <div className="col-xl-7 col-lg-7 col-md-9 m-auto">
                  <div className="title-style-one text-center mb-150 md-mb-100">
                    <h2>Know everything about RFQ’s.</h2>
                  </div>
                </div>
              </div>
            </div>

            <div className="container">
              <div className="row align-items-center block-style-two pb-150 md-pb-90">
                <div className="col-lg-6 col-md-8 m-auto">
                  <div
                    className="text-wrapper"
                    data-aos="fade-right"
                    data-aos-duration="1200"
                  >
                    <h3 className="font-gilroy-bold">Compare RFQ's</h3>
                    <p>
                      Fully transparent and efficient process that automate your
                      rfqs, compare and analyze quotations for you.
                    </p>
                    <div className="quote">
                      <blockquote>
                        Helps to improve measurable productivity and financial
                        saving.
                      </blockquote>
                    </div>
                  </div>
                </div>

                <div className="col-lg-6">
                  <div data-aos="fade-left" data-aos-duration="1200">
                    <div className="img-holder img-holder-one">
                      <div
                        className="cs-screen progress-line-one"
                        data-aos="fade-left"
                        data-aos-duration="1200"
                      ></div>
                      <div
                        className="cs-screen progress-line-two"
                        data-aos="fade-left"
                        data-aos-duration="1200"
                      ></div>
                      <img src={imggg2} alt="Compare RFQ" />
                      <img
                        src={bgimg}
                        alt="feature"
                        className="cs-screen screen-one"
                      />
                      <img
                        src={dotshape}
                        alt="feature"
                        className="cs-screen dot-shape"
                      />
                      <div className="bubble-one"></div>
                      <div className="bubble-two"></div>
                      <div className="bubble-three"></div>
                      <div className="bubble-four"></div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="row align-items-center block-style-two pb-150 md-pb-90">
                <div className="col-lg-6 col-md-8 m-auto  ">
                  <div
                    className="text-wrapper pl-5 pr-5"
                    data-aos="fade-left"
                    data-aos-duration="1200"
                  >
                    <h3 className="font-gilroy-bold">
                      Fast Response Auto Data Compilation
                    </h3>
                    <p>
                      Effybuy automatically generates Mail Notification to your
                      Vendors where they can sign in and bid for multiple
                      quotations without hassle. There's no subscription
                      required for the vendors to submit their Quotes.
                    </p>
                    <div className="quote">
                      <blockquote>
                        Save processing time with 80% by online and drive
                        efficiently.
                      </blockquote>
                    </div>
                  </div>
                </div>

                <div className="col-lg-6 order-lg-first">
                  <div data-aos="fade-right" data-aos-duration="1200">
                    <div className="img-holder img-holder-two">
                      <img src={imggg3} alt="Fast Response Auto Data" />
                      <img
                        src={bgimg}
                        alt="feature2"
                        className="cs-screen screen-two"
                      />
                      <img
                        src={dotshape}
                        alt="feature3"
                        className="cs-screen dot-shape"
                      />
                      <div className="bubble-one"></div>
                      <div className="bubble-two"></div>
                      <div className="bubble-three"></div>
                      <div className="bubble-four"></div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="row align-items-center block-style-two pb-150 md-pb-50">
                <div className="col-lg-6">
                  <div
                    className="text-wrapper"
                    data-aos="fade-right"
                    data-aos-duration="1200"
                  >
                    <h3 className="font-gilroy-bold">Tracking</h3>
                    <p>
                      Effy buy gives your real time visibility in supplier
                      response You can track the pricing trends and performance.
                    </p>
                    <div className="quote">
                      <blockquote>
                        Enable your team to take a smart decision by relaying
                        existing data.
                      </blockquote>
                    </div>
                  </div>
                </div>

                <div className="col-lg-6 col-md-7 m-auto">
                  <div data-aos="fade-left" data-aos-duration="1200">
                    <div className="img-holder img-holder-two">
                      <img src={imggg4} alt="Tracking Flow" />
                      <img
                        src={bgimg}
                        alt="feature"
                        className="cs-screen screen-two"
                      />
                      <img
                        src={dotshape}
                        alt="feature"
                        className="cs-screen dot-shape"
                      />
                      <div className="bubble-one"></div>
                      <div className="bubble-two"></div>
                      <div className="bubble-three"></div>
                      <div className="bubble-four"></div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="row align-items-center block-style-two pb-150 md-pb-90">
                <div className="col-lg-6 col-md-8 m-auto">
                  <div data-aos="fade-right" data-aos-duration="1200">
                    <div className="img-holder img-holder-one">
                      <div
                        className="cs-screen progress-line-one"
                        data-aos="fade-right"
                        data-aos-duration="1200"
                      ></div>
                      <div
                        className="cs-screen progress-line-two"
                        data-aos="fade-right"
                        data-aos-duration="1200"
                      ></div>
                      <img
                        src={imggg5}
                        alt="Integrate EffyBuy with ERP System"
                      />
                      <img
                        src={bgimg}
                        alt="feature"
                        className="cs-screen screen-one"
                      />
                      <img
                        src={dotshape}
                        alt="feature"
                        className="cs-screen dot-shape"
                      />
                      <div className="bubble-one"></div>
                      <div className="bubble-two"></div>
                      <div className="bubble-three"></div>
                      <div className="bubble-four"></div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div
                    className="text-wrapper"
                    data-aos="fade-left"
                    data-aos-duration="1200"
                  >
                    <h3 className="font-gilroy-bold">
                      Integrate EFFYBUY with your ERP system for increased
                      efficiency
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="fancy-short-banner-one">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-lg-12">
                  <div
                    className="title-style-one"
                    style={{ textAlign: "center" }}
                  >
                    <h2>
                      100+ Customer's are buying <br />
                      efficiently using EffyBuy !
                    </h2>
                    <br />
                    <h4>Try Now - One month free trial.</h4>
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
          <div className="faq-classic pt-225 md-pt-120">
            <div className="container">
              <div className="row">
                <div className="col-lg-6">
                  <div className="title-style-one">
                    <h6 className="font-rubik">Find your answers</h6>
                    <h2>Have any thought? Look here.</h2>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="md-mt-60">
                    <div className="accordion-style-four">
                      <div className="faq-wrraper">
                        <Accordion preExpanded={["b"]} allowZeroExpanded>
                          {FaqContent.map((item, i) => (
                            <AccordionItem
                              className="card"
                              key={i}
                              uuid={item.expand}
                            >
                              <AccordionItemHeading className="card-header">
                                <AccordionItemButton>
                                  <h5 className="mb-0">
                                    <button className="btn btn-link">
                                      {item.title}
                                    </button>{" "}
                                  </h5>
                                </AccordionItemButton>
                              </AccordionItemHeading>
                              <AccordionItemPanel className="card-body fadeInUp">
                                <p>{item.desc}</p>
                              </AccordionItemPanel>
                            </AccordionItem>
                          ))}
                        </Accordion>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-bg-wrapper">
            <div className="bubble-one"></div>
            <div className="bubble-two"></div>
            <div className="bubble-three"></div>
            <div className="fancy-short-banner-two">
              <div className="container">
                <div className="content-wrapper">
                  <div
                    className="
                  bg-wrapper
                  d-lg-flex
                  align-items-center
                  justify-content-between
                "
                  >
                    <h2 className="font-gilroy-bold">
                      You’re one step closer to smart work !
                    </h2>
                    <a
                      href="https://www.effybuy.com/bizgam20/apps/baf.php/B_OS_BAF_USER_REGISTER/EDIT"
                      className="signUp-action"
                    >
                      Start your free trial
                    </a>
                    <div className="bubble-one"></div>
                    <div className="bubble-two"></div>
                    <div className="bubble-three"></div>
                    <div className="bubble-four"></div>
                    <div className="bubble-five"></div>
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
